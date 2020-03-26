const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Render = require('./lib/htmlRenderer');


const employees = [];



inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the name of the manager.",
      name: "name"
    },
    {
      type: "input",
      message:"Please enter the manager's Id",
      name: "id"
    },
    {
      type: "input",
      message:"The manager's Email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the office number of the manager?",
      name: "officeNumber"
    },
    {
        type: "list",
        message: "Would you like to add an additonal employee?",
        name: "addEmployee",
        choices: ['Engineer', 'Intern', 'Neither']
      }

]).then(function(answer) {

   
    const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);


    employees.push(newManager);
    console.log(chalk.blue.inverse('HERE IS EMPLOYEES'));
    console.table(employees);

   
    addEmployeeLogic(answer);
});

const addIntern = () => {
    inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the name of the intern.",
      name: "name"
    },
    {
      type: "input",
      message:"Please enter the intern's Id",
      name: "id"
    },
    {
      type: "input",
      message:"The intern's Email?",
      name: "email"
    },
    {
      type: "input",
      message: "What school is this intern from?",
      name: "school"
    },
    {
        type: "list",
        message: "Would you like to add an additonal employee?",
        name: "addEmployee",
        choices: ['Engineer', 'Intern', 'Neither']
      }

]).then(function(answer) {


    const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
    employees.push(newIntern);

    console.log(chalk.blue.inverse('LIST OF EMPLOYEES: '));
    console.table(employees);
    console.log(chalk.green.inverse('Team HTML page successfully generated!'))

    addEmployeeLogic(answer);
    
})
}

const addEngineer = () => {
    inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the name of the engineer.",
      name: "name"
    },
    {
      type: "input",
      message:"Please enter the engineer's Id",
      name: "id"
    },
    {
      type: "input",
      message:"The engineer's Email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the engineer's Github username?",
      name: "github"
    },
    {
        type: "list",
        message: "Would you like to add an additonal employee?",
        name: "addEmployee",
        choices: ['Engineer', 'Intern', 'Neither']
      }

]).then(function(answer) {

    const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
    employees.push(newEngineer);

    console.log(chalk.blue.inverse('HERE IS EMPLOYEES'));
    console.table(employees);

    addEmployeeLogic(answer);
    
})
}

const addEmployeeLogic = (answer) => {
    if (answer.addEmployee === 'Intern') {
        addIntern();
    }
    else if (answer.addEmployee === 'Engineer') {
        addEngineer();
    } else {
        Render(employees);
    }
};