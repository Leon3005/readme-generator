// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE_2.0") {
    return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL_3.0") {
    return "[![License](https://img.shields.io/badge/License-GPL%203.0-purple.svg)](https://opensource.org/licenses/GPL-3.0)";
  } else if (license === "BSD_3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// This function uses template literals to generate the README file and contains the markdowns.
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
    credits,
    tests,
  } = data;
  return `
# ${title}
[Link to deployed GitHub App](${gitHub})
## Badge
![Badge](https://img.shields.io/static/v1?label=${badgeLabel}&message=${badgePackage}&color=${badgeColour})
## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)
## Installation
${install}
## Usage
${usage}
## Features
${features}
## Screenshots
![Screenshot](./assets/images/${screenshot})
## License
${renderLicenseBadge(license)}
## Credits
${credits}
## Tests
${tests}
`;
}

module.exports = generateMarkdown;
