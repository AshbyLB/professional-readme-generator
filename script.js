const questions = require('inquirer');
questions
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your applicaton?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
    }, {
      type: "input",
      name: "credits",
      message: "Who are the people that contributed to this project?",
    },{
      type: "input",
      name: "test",
      message:"Please provide how the project can be tested.",
  },{
    type: "input",
    name: "gitHub",
    message:"Please add your GitHub profile link.",
},{
  type: "input",
  name: "email",
  message:"Please provide your email address.",
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