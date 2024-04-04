    let allEmployee = [];
    //Constructor:
    function Employee(id, Fname, department, level, img, salary) {
        this.id = id;
        this.Fname = Fname;
        this.department = department;
        this.level = level;
        this.img = img;
        this.salary = salary;
        allEmployee.push(this);
    }


    //Methods:

    //calcualte salary prototype
    Employee.prototype.calculateSalary = function () {
        let minSalary, maxSalary;
        switch (this.level) {
            case "Senior":
                minSalary = 1500;
                maxSalary = 2000;
                break;
            case "Mid-Senior":
                minSalary = 1000;
                maxSalary = 1500;
                break;
            case "Junior":
                minSalary = 500;
                maxSalary = 1000;
                break;
        }
        this.salary = getRandomSalary(minSalary, maxSalary);
        const netSalary = this.salary - this.salary * 0.075;
        return netSalary;
    };

    Employee.prototype.render = function (){
        const tableBody = document.getElementById("employeeTableBody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${this.id}</td><td>${this.Fname}</td><td>${this.department}</td><td>${this.level}</td><td>${this.salary}</td>`;
        tableBody.appendChild(newRow);
    }

    let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
    let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
    let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
    let employee4 = new Employee(1003, "Safi Walid", "Administration", "Senior");
    let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
    let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
    let employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

    renderAllEmployee();

    //function :

    //genrate random salary 
    function getRandomSalary(min, max) {
        const minCeil = Math.ceil(min);
        const maxFloor = Math.floor(max) //to keep in range 
        let randomSalary = Math.floor(Math.random() * (maxFloor - minCeil) + 1) + minCeil;
        return randomSalary
    }

    function renderAllEmployee(){
        for (let i = 0; i < allEmployee.length; i++) {
            allEmployee[i].calculateSalary();
            allEmployee[i].render();
        }
    }
