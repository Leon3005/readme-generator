// Array of questions
const questions = [
  {
    type: "input",
    message: "What is the title of your Application?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter the link for your deployed GitHub app:",
    name: "gitHub",
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
    message:
      "Enter the file name and extension of the screenshot of the app (in the ./assets/images folder)",
    name: "screenshot",
  },
  {
    type: "list",
    message: "Please choose a license:",
    name: "license",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
  },
  {
    type: "input",
    message: "Enter credits for your app:",
    name: "credits",
  },
  {
    type: "input",
    message: "What tests can be run?",
    name: "tests",
  },
];

// Exporting the questions array to be used in another file.
module.exports = questions;
