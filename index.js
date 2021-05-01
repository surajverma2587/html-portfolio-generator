const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is your full name?",
    name: "fullName",
  },
  {
    type: "input",
    message: "Add a brief description about yourself",
    name: "description",
  },
  {
    type: "input",
    message: "What city do you reside in?",
    name: "city",
  },
  {
    type: "input",
    message: "What country do you reside in?",
    name: "country",
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "githubUrl",
  },
  {
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "linkedinUrl",
  },
];

const init = async () => {
  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

init();
