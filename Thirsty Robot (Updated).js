/*
DESCRIPTION:
The year is 2060, and Tim is a domestic robot within a UK household. He often hears the humans philosophising thus - "Beer before wine, you'll be fine; Wine before beer, oh dear." He needs your help in testing this logic for himself.

You will be given an array of numbers, each value representing the alcoholic percentage of a certain drink. Using the following set of rules, write a function that can give an accurate outcome for the sequence of drinks.

Drinks:

Any value equal to or less than 8 represents beer / Beer <= 8

Any value over 15 represents liquor / Liquor > 15

Any other value (so, more than 8, but less than or equal to 15), represents wine / 8 < Wine <= 15

Outcome:

If wine does not precede beer, and there's no instance of liquor, return "Fine".

If wine does not precede beer, but liquor IS present, return "Wonky robot".

If wine DOES precede beer, but there is no instance of liquor, return "Oh dear".

And if wine does precede beer, and liquor IS present, then return "Poor robot".

Example:

  let arr = [2.5, 4, 6, 8, 14]
  thirstyRobot(arr) should return "Fine"

  let arr = [2.5, 40, 6, 8, 14, 6]
  thirstyRobot(arr) should return "Poor robot"
Notes:

Only positive numbers will be passed into the function.
*/

function thirstyRobot (drinks) {
  let [wined, sick, drunk] = [false, false, false]
  drinks.forEach(abv => {
    if (wined && abv <= 8) sick = true
    if (abv > 8 && abv <= 15) wined = true
    if (abv > 15) drunk = true
  })
  if (!sick) return drunk ? "Wonky robot" : "Fine"
  else return drunk ? "Poor robot" : "Oh dear"
}

/*
function thirstyRobot(arr) {
  var mapped = [];
  let hasLiquor = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] <= 8) {
      mapped.push(1);
    } else if (arr[i] <= 15) {
      mapped.push(2);
    } else {
      hasLiquor = true;
    }
  }
  
  for( i = 0; i < mapped.length - 1; i++) {
    if (mapped[i] > mapped[i+1]) {
      return hasLiquor ? "Poor robot" : "Oh dear";
    }
  }
  
  return hasLiquor ? "Wonky robot" : "Fine";
}function thirstyRobot(arr){
  var isLiq = false;
  var isWinePresent = false;
  var doesWinePreceed = false;
  
  var arrayLength = arr.length;
  for (var i = 0; i < arrayLength; i++) {
      console.log("top="+arr[i])
      if(arr[i] > 15) {
        isLiq = true;
      }
      if(arr[i] <= 8 && isWinePresent) {
        doesWinePreceed = true;
        console.log("value="+arr[i]);
      }
      if(8 < arr[i] && arr[i] <= 15){
        isWinePresent = true;
        console.log("triggered="+arr[i])
      }   
  }
  
  if(!doesWinePreceed && !isLiq){
    return "Fine";
  }
  
  if(!doesWinePreceed && isLiq){
    return "Wonky robot";
  }
  
  if(doesWinePreceed && !isLiq){
    return "Oh dear";
  }
  
  if(doesWinePreceed && isLiq){
    return "Poor robot";
  }
  
}
*/
