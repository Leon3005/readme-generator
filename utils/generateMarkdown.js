// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://shields.io/badge/license-MIT-green";
  } else if (license === "APACHE_2.0") {
    return "https://shields.io/badge/license-Apache-blue";
  } else if (license === "GPL_3.0") {
    return "https://shields.io/badge/license-GPL-blue";
  } else if (license === "BSD_3") {
    return "https://shields.io/badge/license-BSD-green";
  } else {
    return "";
  }
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
    gitHub,
    license,
  } = data;
  renderLicenseBadge(license);
  console.log(license);
  return `
# ${title}
![Link to deployed GitHub App](${gitHub})
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
![License](${license})
## Credits
## Tests
`;
}

module.exports = generateMarkdown;
