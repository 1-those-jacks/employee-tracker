const express = require('express');
// const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'JackAttack2022!',
		database: 'company_db'
	},
	console.log(`Connected to the company_db database.`)
);

// db.query();

app.use((req, res) => {
	res.status(404).end();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
