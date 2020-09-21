const findKeyByValue = function(obj, value) {
  for (prop in obj) {
    if(obj[prop] === value) {
      return prop;
    }
  }
  return undefined;
}


// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);