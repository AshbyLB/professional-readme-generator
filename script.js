const fs = require('fs');
const questions = require('inquirer');
questions
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    }, {
      type: "input",
      name: "discription",
      message: "Describe your application.",
    },{
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
    const generated = `
# ${answers.title}
    
## Description
${answers.discription}

## Table of Contents
- [Usage](#Usage)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing 
${answers.contributing}

## Tests
${answers.test}

## License
${answers.license}

## Questions
[Link to GitHub Profile](https://github.com/${answers.gitHub})
Feel free to email me at ${answers.email} if you have any questions.


    `;
    fs.writeFile('README.md', generated, (err) => err ? console.log(err) : console.log('README.md Created!')

    );
  })
  .catch((error) => {
    if (error) {
      console.log(error);
    }
  });