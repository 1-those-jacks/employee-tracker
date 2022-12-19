const inquirer = require('inquirer');
const connection = require('./db/connection');
require('console.table');

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

function viewAllDepartments(){
	const query = "SELECT * FROM department";
	connection.query(query, (err, results) => {
		if (err) throw err;
		console.table(results);
		prompt();
	});
};

function viewAllRoles(){
	const query = "SELECT * FROM roles";
	connection.query(query, (err, results) => {
		if (err) throw err;
		console.table(results);
		prompt();
	});
};

function viewAllEmployees(){
	const query = "SELECT * FROM employee";
	connection.query(query, (err, results) => {
		if (err) throw err;
		console.table(results);
		prompt();
	});
};

function addDepartment(){
	const query = 'SELECT * FROM department';
	connection.query(query, (err, results) => {
		if (err) throw err;
		console.table(results);

		inquirer
			.prompt([
				{
					name: 'newId',
					type: 'input',
					message: 'What is the next ID?'
				},
				{
					name: 'newDept',
					type: 'input',
					message: 'What is the new department name?'
				},
			])
			.then((answer) => {
				connection.query(`INSERT INTO department(id, dept_name) VALUE(?, ?)`, 
				[answer.newId, answer.newDept],
				(err, results) => {
					prompt();
				}
				);
			});
	});
};

function addRole(){};

function addEmployee(){};

function updateEmployeeRole(){};

prompt();
