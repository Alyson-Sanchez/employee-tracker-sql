const fs = require('node:fs');
const inquirer = require('inquirer');
const script = require ('./Assets/script.js');

//Initial Questioning
 async function initialQuestioning(){
        await inquirer.prompt([
        {
            type: 'list',
            name: 'InitialQuestions',
            message:'Choose an option.',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department'],
        }
    ])
    .then(answers => {
        console.info('Answer:', answers.InitialQuestions);
    })
    script.viewDepartments();
 }

 initialQuestioning();
/*async function viewDepartments(){
    //Choose View All Departments
    script.viewDepartments();
}*/

    //Add Department
async function addDepartments(){
     await inquirer.prompt([
         {
                name: 'newDepartment',
                message: 'Add New Department (\'Department Name\', ID)'
         }
     ])
        .then(answers =>{
             var newDepartment = answers.newDepartment;
         })
}
//Choose View Roles

//Add Role

// Choose View All Employees

//Add Employee

//Update Employee Role