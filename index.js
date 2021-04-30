const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your Application?",
    name: "title",
  },
];

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
      console.log("success");
    }
  };
  fs.writeFile("README2.md", JSON.stringify(answers), callback);
};
// TODO: Create a function to initialize app
const init = async () => {
  const answers = await getResponses(questions);
  writeToReadMe(answers);
  console.log(answers);
};

// Function call to initialize app
init(questions);
