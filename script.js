const fs = require('fs');
const inquirer = require('inquirer');
const genMar = require('./generateMarkdown');
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => !!input,
  },
  {
    type: "input",
    name: "discription",
    message: "Describe your application.",
    validate: (input) => !!input,
  },
  {
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
  },
  {
    type: "input",
    name: "credits",
    message: "Who are the people that contributed to this project?",
    validate: (input) => !!input,
  },
  {
    type: "input",
    name: "contributing",
    message: "What do users need to know about adding a contribution your project?",
    validate: (input) => !!input,
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    validate: (input) => !!input,
  },
  {
    type: "rawlist",
    name: "license",
    message: "Select the License for your application.",
    choices: [
      'MIT',
      'MPL 2.0',
      'Zlib',
      'none'
    ]
  },
  {
    type: "input",
    name: "gitHub",
    message: "Please add your GitHub profile name.",
    validate: (input) => !!input,
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
    validate: (input) => !!input,
  },

]).then((answers) => {
  
  fs.writeFile('GENERATED_README.md', genMar.generateMarkdown(answers), (err) => err ? console.log(err) : console.log('README.md Created!')
  );
});
