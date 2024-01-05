const user = {
  id: 339,
  name: "Sumit",
  age: 42,
  education: {
    degree: "Graduate",
    // school: {
    //   scl_name: "Rangpur Zilla School",
    //   //   session: 2000,
    // },
  },
  //   sex: "male"
};
// by optional chaining ? the program will not break but will show undefined
console.log(user?.education?.school?.session);
