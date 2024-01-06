//fake api:  https://jsonplaceholder.typicode.com/todos/1

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
  return data;
}

// getData();

// async function always returns promise not the data
// if we use await we must use async

// function bigWork() {
//   //onk kaaj krchi
//   return getData();// if we call getData() from here it will return a promise not data
// }
// bigWork();
// console.log(data.title);// we can not get data like that

/**
 * To get data calling a async function from another:
 * 1. first return data from original function
 * 2. we have to call the 2nd function by await,
 *    because as the original function returns promise
 *    to resolve but not data we have to await to resolve
 * 3. for calling bigWork or 2nd function, we have to make a immidiately imvoked funciton with async 
 * 4. immidiately imvoked function syntax: 
 *    (async function () {
         const result = await secondFunction();
         console.log(result.title);
        })();
 */

function bigWork() {
  // onk kaaj krchi
  return getData();
}
// at the time of calling bigWork
(async function () {
  const result = await bigWork();
  console.log(result.title);
})();

// try catch
// (async function () {
//   try {
//     const result = await bigWork();
//     console.log(result.title); // Assuming "title" is the correct property name
//     console.log(result.id); // Assuming "title" is the correct property name
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();
