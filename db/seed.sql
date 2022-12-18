INSERT INTO department (id, dept_name)
VALUES (01, 'Engineering'),
			(02, 'Business Mgmt'),
			(03, 'Contracts'),
			(04, 'Admin'),
			(05, 'Program Mgmt');

INSERT INTO roles (id, title, salary, department_id)
VALUES (01, "HW Eng", 90000, 01),
			(02, "SW Eng", 85000, 01),
			(03, "Sys Eng", 100000, 01),
			(04, "Business Mgmt Associate", 60000, 02),
			(05, "Contracts Representative", 60000, 03),
			(06, "Data Manager", 50000, 04),
			(07, "Program Manager", 110000, 05);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Jon", "Smith", 01, 1),
			(002, "Rebecca", "Gomez", 01, 1),
			(003, "George", "Kleet", 02, 1),
			(004, "Mary", "Rosenbaum", 03, 1),
			(005, "Mike", "Rotch", 04, 2),
			(006, "Amanda", "Bloomfield", 05, 3),
			(007, "William", "Runger", 06, 4),
			(008, "Jeff", "Klein", 07, 5);
