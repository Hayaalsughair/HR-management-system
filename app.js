let allEmployees = [];
let sectionEl = document.getElementById("cardContainer");
let formEl = document.getElementById("formId");
 
//Constructor:
function Employee(fullName, department, level, img ) {
   this.fullName = fullName;
   this.department = department;
   this.level = level;
   this.img = img;
   this.id = generateEmployeeID();
   this.salary = calculateSalary(this.level);
}
 
//functions =>
 
//  generate a unique four-digit employee ID/generate a random number between 1000 and 9999
function generateEmployeeID() {
   let employeeID = Math.floor(Math.random() * 9000) + 1000;
   return employeeID;
}
 
 
function calculateSalary(level) {
   let max, min;
   if (level === "Senior") {
     max = 2000;
     min = 1500;
   } else if (level === "Mid-Senior") {
     max = 1500;
     min = 1000;
   } else if (level === "Junior") {
     max = 1000;
     min = 500;
   }
   let salary = Math.floor(Math.random() * (max - min) + min);
   let netSalary = salary - salary * 0.075
   return Math.round(netSalary);
 };
 
//HandleSubmit Function
function handleSubmit(event) {
   // Prevent page reload
   event.preventDefault();
 
   // Get values from text inputs
   let fullName = event.target.fullName.value;
   //get department value
   let department = event.target.selectDepartment.value;
   // get level value
   let level = event.target.selectLevel.value;
   // get image value
   let img = event.target.imageInput.value;
   //User enter new employee
   let newEmployee = new Employee(fullName, department, level, img);
   allEmployees.push(newEmployee); // Add the new employee to the array
   newEmployee.render();
   saveData(allEmployees); // Save the updated data to localStorage
   // Clear form fields
   event.target.reset();
}
 
//Methods:
//employee card
Employee.prototype.render = function () {
   // Create card container
   let cardContainer = document.createElement('div');
   cardContainer.classList.add('employeeCard');
 
   // Create image element
   let imageEl = document.createElement('img');
   imageEl.classList.add('employeeImage');
   imageEl.src = this.img;
   cardContainer.appendChild(imageEl);
 
   // Create name element
   let nameEl = document.createElement('p');
   nameEl.classList.add('employeeName');
   nameEl.textContent = `Name: ${this.fullName}`;
   cardContainer.appendChild(nameEl);
 
   // Create department element
   let departmentEl = document.createElement('p');
   departmentEl.classList.add('employeeDepartment');
   departmentEl.textContent = `Department: ${this.department}`;
   cardContainer.appendChild(departmentEl);
 
   // Create level element
   let levelEl = document.createElement('p');
   levelEl.classList.add('employeeLevel');
   levelEl.textContent = `Level: ${this.level}`;
   cardContainer.appendChild(levelEl);
 
   // Create ID element
   let idEl = document.createElement('p');
   idEl.classList.add('employeeID');
   idEl.textContent = `ID: ${this.id}`;
   cardContainer.appendChild(idEl);
 // Create Salary element
   let salaryEl = document.createElement('p');
   salaryEl.classList.add('employeeSalary');
   salaryEl.textContent = `Salary: ${this.salary}`;
   cardContainer.appendChild(salaryEl);
 
   // Append card container to section
   sectionEl.appendChild(cardContainer);
};
 
function saveData(data) {
   let stringifyData = JSON.stringify(data);
   localStorage.setItem('employees', stringifyData);
}
 
function loadData() {
   let data = localStorage.getItem('employees');
   if (data) {
      allEmployees = JSON.parse(data);
      allEmployees.forEach(employee => {
         let newEmployee = new Employee(employee.fullName, employee.department, employee.level, employee.img);
         newEmployee.render();
      });
   }
}
 
// Load data when the page loads
loadData();
// Add event listener to the form
formEl.addEventListener("submit", handleSubmit);
 