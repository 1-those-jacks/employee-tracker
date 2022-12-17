const inquirer = require('inquirer');
const connection = require('./db/connection');
const cTable = require('console.table');

const promptMessages = {
    viewAllDepartments: "View All Departments",
    viewAllRoles: "View All Roles",
    viewAllEmployees: "View All Employees",
    addDepartment: "Add A Department",
    addRole: "Add A Role",
		addEmployee: "Add An Employee",
    updateEmployeeRole: "Update An Employee Role",
    exit: "Exit"
};

function prompt() {
	inquirer	
		.prompt({
			name: 'action',
			type: 'list',
      message: 'What would you like to do?',
      choices: [
				promptMessages.viewAllDepartments,
				promptMessages.viewAllRoles,
				promptMessages.viewAllEmployees,
				promptMessages.addDepartment,
				promptMessages.addRole,
				promptMessages.addEmployee,
				promptMessages.updateEmployeeRole,
				promptMessages.exit 
				]
		})
		.then(answer => {
			console.log(answer);
			switch (answer.action) {
				case promptMessages.viewAllDepartments:
						viewAllDepartments();
						break;
				case promptMessages.viewAllRoles:
						viewAllRoles();
						break;
				case promptMessages.viewAllEmployees:
						viewAllEmployees();
						break;
				case promptMessages.addDepartment:
						addDepartment();
						break;
				case promptMessages.addRole:
						addRole();
						break;
				case promptMessages.addEmployee:
						addEmployee();
						break;
				case promptMessages.updateEmployeeRole:
						updateEmployeeRole();
						break;
				case promptMessages.exit:
						connection.end();
						break;
						
			}
		});
}

function viewAllDepartments(){};

function viewAllRoles(){};

function viewAllEmployees(){};

function addDepartment(){};

function addRole(){};

function addEmployee(){};

function updateEmployeeRole(){};

prompt();
