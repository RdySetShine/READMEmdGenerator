// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `
${licenseBadge}
This project is licensed under the ${license} ${licenseLink}license.
  `;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  console.log(licenseSection);
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributor}
## Tests
${data.test}
## License
${licenseSection}
## GitHub Profile
[${data.username}](https://github.com/${data.username})
### Contact
${data.questions}
`;
}
module.exports = generateMarkdown;