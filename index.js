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

function addRole(){	const query = 'SELECT * FROM roles';
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
					name: 'newRole',
					type: 'input',
					message: 'What is the new role title?'
				},
				{
					name: 'salary',
					type: 'input',
					message: 'What is the salary for this role?'
				},
				{
					name: 'deptId',
					type: 'input',
					message: 'What is the ID of the department'
				}
			])
			.then((answer) => {
				connection.query(`INSERT INTO roles(id, title, salary, department_id) VALUE(?, ?, ?, ?)`, 
				[answer.newId, answer.newRole, answer.salary, answer.deptId],
				(err, results) => {
					prompt();
				}
				);
			});
	});};

function addEmployee() {const query = 'SELECT * FROM employee';
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
					name: 'newFName',
					type: 'input',
					message: 'What is their first name?'
				},
				{
					name: 'newLName',
					type: 'input',
					message: 'What is their last name?'
				},
				{
					name: 'roleId',
					type: 'input',
					message: 'What is the ID of the role?'
				},
				{
					name: 'managerId',
					type: 'input',
					message: 'What is the ID of their manager?'
				}
			])
			.then((answer) => {
				connection.query(`INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUE(?, ?, ?, ?, ?)`, 
				[answer.newId, answer.newFName, answer.newLName, answer.roleId, answer.managerId],
				(err, results) => {
					prompt();
				}
				);
			});
	});};

function updateEmployeeRole(){};

prompt();
