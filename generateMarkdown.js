// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.title}
    
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
  [Link to GitHub Profile](https://github.com/${answers.gitHub})<br/>
  Feel free to email me at ${answers.email} if you have any questions.

`;
}

module.exports = generateMarkdown;
