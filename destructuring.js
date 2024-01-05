const user = {
  id: 339,
  name: "Sumit",
  age: 42,
  education: {
    degree: "Graduate",
    school: {
      scl_name: "Rangpur Zilla School",
      session: 2000,
    },
  },
  //   sex: "male"
};
// normal way by dot notation to get object value from object
const userName = user.name;
const userAge = user.age;
const userEducation = user.education.degree;

console.log(
  "Name: " + userName,
  "Age: " + userAge,
  "Education: " + userEducation
);

// destructuring:
//const {key name1, key name2}= object name;
const { name, age } = user;
console.log(name, age);

// to get complex value like "degree" from object
const {
  education: { degree },
} = user;
console.log(degree);

// if from any API we dont know whether we will get data, we can handle error by an empty {} which is called default value;
const { sex = {} } = user;
console.log(sex);

// getting data from  more nested complex object;
const { education: { school: { scl_name } } = {} } = user; // here we have to use another {scl_name}
console.log(scl_name);
