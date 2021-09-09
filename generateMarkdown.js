// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
       return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        
    
    case 'MPL 2.0':
       return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
       

    case 'Zlib':
      return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
        

    default : 'You did not pick a license';
       
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
      case 'MIT':
         return `https://opensource.org/licenses/MIT`;
          
      
      case 'MPL 2.0':
         return `https://opensource.org/licenses/MPL-2.0`;
         
  
      case 'Zlib':
        return `https://opensource.org/licenses/Zlib`;
          
  
      default : 'You did not pick a license';
         
   }
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT' || license === 'MPL 2.0' || license === 'Zlib'){
  return `## License<br/>
  [Link to your ${license} license](${renderLicenseLink(license)})<br/> 
  ${renderLicenseBadge(license)}`}
  else {
   return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
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
  
  ${renderLicenseSection(answers.license)}
 
  
  ## Questions
  [Link to GitHub Profile](https://github.com/${answers.gitHub})<br/>
  Feel free to email me at ${answers.email} if you have any questions.
`;
};
module.exports = {generateMarkdown};
