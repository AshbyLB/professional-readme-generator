
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case 'MPL 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case 'Zlib':
      return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;

    default: 'You did not pick a license';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;

    case 'MPL 2.0':
      return `https://opensource.org/licenses/MPL-2.0`;

    case 'Zlib':
      return `https://opensource.org/licenses/Zlib`;

    default: 'You did not pick a license';
  }
};

function renderLicenseSection(license) {
  if (license === 'MIT' || license === 'MPL 2.0' || license === 'Zlib') {
    return `## License<br/>
  [Link to the ${license} license used](${renderLicenseLink(license)})<br/> 
  ${renderLicenseBadge(license)}`
  }
  else {
    return ``;
  }
}

function generateMarkdown(answers) {
  return `# ${answers.title}
    
${renderLicenseBadge(answers.license)}
  
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
`
};
module.exports = { generateMarkdown };
