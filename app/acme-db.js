// employee db
var AcmeDb = function(){
	this.employees = [];
};

//get all employees. just return our this.employees array
AcmeDb.prototype.getEmployees = function(){
	return this.employees;
};

// get a single employee by ID
AcmeDb.prototype.getEmployee = function(id){
	for (var i = 0; i < this.employees.length; i++){
		if (this.employees[i].id == id){
			return this.employees[i];
		}
	}
};

//get all employees grouped by first letter of name
AcmeDb.prototype.groupedEmployees = function(){
	// gonna return object so the ().letter works
	var obj = {};
	
	// for each employee 
	this.employees.forEach( function(el){
		// if we don't have a key for their name letter, create it and set it equal to an array containing that employee
		if ( ! (el.name.charAt(0) in obj) ) {
			obj[el.name.charAt(0)] = [el];
		} else {
		// if we do have it, push the emploee onto that array too
			obj[el.name.charAt(0)].push(el);
		}
	}); 
	//return our new employee object that has names first letter as key
	return obj;
};

// add an employee by calling our Employee constructor and pushing to employee array
AcmeDb.prototype.addEmployee = function(name, id){
	var employee = new Employee(name, id);
	this.employees.push(  employee );
	
	//sort employees using sorting function
	return this.employees.sort( function(a, b){
		if (a.name < b.name){
			return -1
		}
		if (a.name > b.name){
			return 1
		}
		return 0;	
	});
};

// remove an employee by ID
AcmeDb.prototype.deleteEmployee = function(name){
	for (var i = 0; i < this.employees.length; i++){
		if (this.employees[i] == name){
			this.employees.splice(i, 1);
		};
	}
};

