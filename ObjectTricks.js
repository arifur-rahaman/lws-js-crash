//Objects
//consist of key-value pair
const language = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendon Eich",
};

/**
 * It start by capital letter: Object; to get keys and values from object we can use this
 * to run array method we could write language.map()
 * but for Object as it is global, we for keys: Object.keys or Object.values
 * and we have to put the object name in the first bracket Object.keys(language)
 */

//to get keys in array
console.log(Object.keys(language));
//Output: [ 'name', 'year', 'creator' ]

//to get values in array
console.log(Object.values(language));
//Output: [ 'JavaScript', 1995, 'Brendon Eich' ]

// to get per key-value pair in a array
console.log(Object.entries(language));
//Output: [ 'name', 'JavaScript' ],
// [ 'year', 1995 ],
// [ 'creator', 'Brendon Eich' ]
