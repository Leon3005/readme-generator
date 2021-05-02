const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

// TODO: Include packages needed for this application

//get response from questions
const getResponses = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// TODO: Create a function to write README file
const writeToReadMe = (answers) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  };
  fs.writeFile(
    "GeneratedREADME.md",
    generateMarkdown(answers),
    "utf8",
    callback
  );
};
// TODO: Create a function to initialize app
const init = async () => {
  const answers = await getResponses(questions);
  writeToReadMe(answers);
  console.log(answers);
};

// Function call to initialize app
init(questions);
