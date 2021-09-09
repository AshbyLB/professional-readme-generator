const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (input) => !!input,
    }, {
      type: "input",
      name: "discription",
      message: "Describe your application.",
      validate: (input) => !!input,
    },{
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
      validate: (input) => !!input,
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
      validate: (input) => !!input,
    }, {
      type: "input",
      name: "credits",
      message: "Who are the people that contributed to this project?",
      validate: (input) => !!input,
    }, {
      type: "input",
      name: "contributing",
      message: "What do users need to know about adding a contribution your project?",
      validate: (input) => !!input,
    }, {
      type: "input",
      name: "test",
      message: "What command should be used to run tests?",
      validate: (input) => !!input,
    }, {
      type: "rawlist",
      name: "license",
      message: "Select the License for your application.",
      choices: ['MIT', 'MPL 2.0', 'Zlib']
    }, {
      type: "input",
      name: "gitHub",
      message: "Please add your GitHub profile link.",
      validate: (input) => !!input,
    }, {
      type: "input",
      name: "email",
      message: "Please provide your email address.",
      validate: (input) => !!input,
    },

  ]).then(generateMarkdown);

    if (answers.license === 'MIT') {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    fs.writeFile('GENERATED_README.md', generated, (err) => err ? console.log(err) : console.log('README.md Created!')

    );
  })
  .catch((error) => {
    if (error) {
      console.log(error);
    }
  });