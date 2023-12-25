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

/**
 * to set new property in object:
 * 1. old way
 * 2. es6 way
 */

//1st way:
//language.popularity = "100%";
//console.log(language);

//2nd way: if the property is in a variable
const a = "popularity";
//we can not use language.a
//language.a = "100%"; it will create a keys "a" instead of "popularity"
// so have to use [a] or ["popularity"] to set dynamically
// language[a] = "100%";
//or;
language["popularity"] = "100%";
console.log(language);

// 3rd way for variable name and key name are same: a = a or year = year, we can simply put year only in the object;
/**
 * 1. create a variable with the same we want to set new value of object
 * 2. we can either write in the object year = year or just simply year.
 * * this is new es6 which means that first store a new object value in a varialbe with a same keys name of that object and than just write that variable name in that object
 */
const year = 2000;
const language2 = {
  name: "Python",
  year: 1990,
  creator: "Eich",
  year,
};
console.log(language2);
