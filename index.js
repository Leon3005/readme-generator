//Importing inquirer, file system, and 2 external js files (packages)
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

//This function is asynchronous and will get the answers to the inquirer prompts.
const getResponses = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// This function will write the answers to the README file using the imported generateMarkdown function.
const writeToReadMe = (answers) => {
  //Callback to console log error or success.
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  };
  //writeFile is a method of fs and will write to a file. utf8 is the encoding so that the file is readable.
  fs.writeFile("README.md", generateMarkdown(answers), "utf8", callback);
};
//This is the function that will be called when running the app.
const init = async () => {
  const answers = await getResponses(questions);
  writeToReadMe(answers);
};

// Function call to initialize app
init(questions);
