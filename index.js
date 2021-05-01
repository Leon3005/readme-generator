const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your Application?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a label for your badge:",
    name: "badgeLabel",
  },
  {
    type: "input",
    message: "Enter a message for your badge:",
    name: "badgePackage",
  },
  {
    type: "list",
    message: "Choose a colour for your badge:",
    name: "badgeColour",
    choices: ["Red", "Green", "Blue"],
  },
  {
    type: "input",
    message: "Give a short description of your app:",
    name: "description",
  },
  {
    type: "input",
    message: "How will users install your app?",
    name: "install",
  },
  {
    type: "input",
    message: "How will users use your app?",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter the features of your app:",
    name: "features",
  },
  {
    type: "input",
    message: "Enter the file path of a screenshot of the app:",
    name: "screenshot",
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
      console.log("success!");
    }
  };
  fs.writeFile(
    "./output/README2.md",
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
