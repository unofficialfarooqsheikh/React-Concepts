// Below are the es6 features
// You can pass Default parameters to function calls
// Default parameters
function divideWithoutDefaultParams(divident, devisor) {
    return divident / devisor
  }
  
  // ^in the above example if one of the param is not given then the answer will never be a number
  // in such cases we can use a default value 
  let reminder = divideWithoutDefaultParams(100);
  console.log('Output of divideWithoutDefaultParams:', reminder)
  // output will be NaN
  function divide(divident, devisor = 2) {
    return divident / devisor
  }
  reminder = divide(100);
  console.log('Output of divide With Default Params:', reminder)
  
  // Task:
  // Write a function which takes the employee details such as student name, student id and college name
  
  // if the college name is given then print the college name else print the default college as 'osmania university'
  
  // Solution:
  
  function studentDetails(name, studentId, college = 'osmania University') {
    console.log('name is', name)
    console.log('studentId is', studentId)
    console.log('College is', college)
    console.log('\n')
    // this three details are used to register a student in the database using the three variables later
  }
  // ex:1
  studentDetails('raj', 59008, 'Jntu Hyderabad')
  studentDetails('raj', 59008)
  
  // Template literals (Template strings)
  // Template Literals makes String interpolation (the process of embedding an expression into part of a string) easier
  
  // Normal string interpolation:
  function studentDetailsWithInterpolation(name, studentId, college = 'osmania University') {
    let details = 'name is ' + name + ' student Id is ' + studentId + ' College is ' + college + '\n'
    console.log(details)
  }
  studentDetailsWithInterpolation('raj', 59008, 'Jntu Hyderabad')
  
  // But this can be more simplified using Template literals
  function studentDetailsSimplified(name, studentId, college = 'osmania University') {
    let details = `my name is ${name}, Student ID is ${studentId}, College is ${college}`
    console.log(details)
  }
  studentDetailsSimplified('raj', 59008)
  
  // Tagged Templates
  // we can parse template literals with a function.
  // `my name is ${name}, Student ID is ${studentId}, College is ${college}`
  function studentDetailsSimplified(array, name, studentId, college) {
    console.log(array)
    console.log(`${array[0]}${name}${array[1]}${studentId}${array[2]}${college}`)
  }
  let name = 'Ravi'
  let studentId = 9088
  let college = 'osmania University'
  studentDetailsSimplified`my name is ${name}, Student ID is ${studentId}, College is ${college}`
  
  
  // Destructuring assignment
  
  // We Can destructure an Array
  let firstItem, secondItem
  [firstItem, secondItem] = ['Absolutely First', 'Sucessfully Second', 'third']
  console.log(firstItem, secondItem)
  // We Can destructure an object
  let employeeName, age
  ({ employeeName, age } = { employeeName: 'Rajesh Gupta', age: 35, position: 'Software Developer' });
  console.log(employeeName, age)
  // Task:
  // Pending
  
  
  // Arrow function expressions
  
  // Normal Function
  function carDetails(manufacturer, model) {
    return `${manufacturer} -- ${model}`;
  }
  console.log(carDetails('Mahindhra', 'Thar'));
  // Arrow function,
  let carDetailsSimple = ((firstName, lastName) => `${firstName} -- ${lastName}`);
  console.log(carDetailsSimple('Mahindhra', 'Thar'));
  
  // let and const
  
  // Using let statement, block scoped statement 
  let x = 10;
  if (x == 10) {
    let x = 20;
    console.log(x); //prints 20
  }
  console.log(x); //prints 10;
  
  // Using var statement, function scoped statement
  var y = 10;
  if (y == 10) {
    var y = 20;
    console.log(y); //prints 20
  }
  console.log(y); //prints 20;
  
  // Const
  // Once reassignment  const cannot be reassigned
  // const PI; //throws error as const needs to be initialized
  // const PI = 3.14159265359;
  // const PI = 4.56666; //throws  error as const variable can not be reassigned
  // var PI = 2022; //throws error as PI is reserved for constant above
  // let PI = 10; //throws error as PI is reserved for constant above
  
  // Spread and Rest syntaxes (…)
  
  // Spread (...)
  let addNumbers = (x, y, z) => x + y + z; //returns sum of x, y and z
  const numbersToAdd = [109, 21, 38];
  let sum = addNumbers(...numbersToAdd);
  console.log('Sum:', sum)
  
  // Rest
  const concat = (...strings) => {
    console.log(strings)
    let output = ''
    strings.forEach(string => output = output + ' ' + string)
    console.log(output)
  }
  
  concat('this', 'is', 'an', 'example')
  // Object.assign() and Object.is()
  // Classes