const questions = require('inquirer');
questions
  .prompt([
    {
        type: "input",
        name: "name",
        message:"What is your name?",
    },
    {
        type: "input",
        name: "age",
        message:"What is your age?",
    },
  
  ])
  .then((answers) => {
    let greeting = `Hello my name is ${answers.name}. I am ${answers.age}! Your fav soda is ${answers.soda}`
    console.log(greeting);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });