// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    badgeLabel,
    badgePackage,
    badgeColour,
    description,
    install,
    usage,
    features,
    screenshot,
  } = data;
  return `
# ${title}
## Badge
![Badge](https://img.shields.io/static/v1?label=${badgeLabel}&message=${badgePackage}&color=${badgeColour})
## Description
${description}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${install}
## Usage
${usage}
## Features
${features}
## Screenshots
![Screenshot](${screenshot})
## License
![License](https://img.shields.io/npm/l/${badgePackage})
## Credits
## Tests
`;
}

module.exports = generateMarkdown;
