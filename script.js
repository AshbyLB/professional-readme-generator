const fs = require('fs');
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
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
    }, {
      type: "input",
      name: "credits",
      message: "Who are the people that contributed to this project?",
    }, {
      type: "input",
      name: "contributing",
      message: "What do users need to know about adding a contribution your project?",
    }, {
      type: "input",
      name: "test",
      message: "What command should be used to run tests?",
    }, {
      type: "rawlist",
      name: "license",
      message: "Select the License for your application.",
      choices: ['MIT', 'MPL 2.0', 'Zlib']
    }, {
      type: "input",
      name: "gitHub",
      message: "Please add your GitHub profile link.",
    }, {
      type: "input",
      name: "email",
      message: "Please provide your email address.",
    },

  ]).then((answers) => {
    const generated = ''


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });