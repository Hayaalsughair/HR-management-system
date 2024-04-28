function loadEmployees() {
    const data = localStorage.getItem('employees');
    return data ? JSON.parse(data) : [];
}

let mystorage = loadEmployees();
let adminArr = [];
let marketingArr = []; 
let developmentArr = [];
let financeArr = [];
let allsalaryArr = [];

function adminDepart() {
    mystorage.forEach(element => {
        if(element.department === "Administration"){
            adminArr.push(element.salary);
        }
    });
}

function marketingDepart() {
    mystorage.forEach(element => {
        if(element.department === "Marketing"){
            marketingArr.push(element.salary);
        }
    });
}

function developDepart() {
    mystorage.forEach(element => {
        if(element.department === "Development"){
            developmentArr.push(element.salary);
        }
    });
}

function financeDepart() {
    mystorage.forEach(element => {
        if(element.department === "Finance"){
            financeArr.push(element.salary);
        }
    });
}

function totalAdminFun() {
    let sum = 0;
    adminArr.forEach(salary => {
        sum += salary;
    });
    return sum;
}
adminDepart();
marketingDepart();
developDepart();
financeDepart();
/* =================================salary============================================= */
function totalAdminFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < adminArr.length; i++) {
        salary = adminArr[i];
        sum += salary;
    }
    return sum;
}
let totaladminInt = totalAdminFun();
allsalaryArr.push(totaladminInt);


function totalMarkFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < marketingArr.length; i++) {
        salary = marketingArr[i];
        sum += salary;
    }
    return sum;
}
let totalmarkInt = totalMarkFun();
allsalaryArr.push(totalmarkInt);

function totalDevFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < developmentArr.length; i++) {
        salary = developmentArr[i];
        sum += salary;
    }
    return sum;
}
let totaldevInt = totalDevFun();
allsalaryArr.push(totaldevInt);

function totalFinFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < financeArr.length; i++) {
        salary = financeArr[i];
        sum += salary;
    }
    return sum;
}
let totalfinInt = totalFinFun();
allsalaryArr.push(totalfinInt);

/* ================ Avarage ============================= */
function avadminFun() {

    let sum = totaladminInt;
    return sum / adminArr.length;

}

function avmarkFun() {

    let sum = totalmarkInt;
    return sum / marketingArr.length;

}
function avdevFun() {

    let sum = totaldevInt;
    return sum / developmentArr.length;

}
function avfinFun() {

    let sum = totalfinInt;
    return sum / financeArr.length;

}

/* =================================total============================================= */

function allsalFun() {
    let allsalInt = 0;
    for (let i = 0; i < allsalaryArr.length; i++) {
        let salary = allsalaryArr[i];
        allsalInt += salary;
    }
    return allsalInt;
}



function allavFun() {

    let sum = allsalFun();
    return sum / mystorage.length;

}








function totalTable() {
    const numofadmin = document.getElementById('numofadmin');
    const numofmark = document.getElementById('numofmark');
    const numofdev = document.getElementById('numofdev');
    const numoffin = document.getElementById('numoffin');

    numofadmin.innerHTML = adminArr.length;
    numofmark.innerHTML = marketingArr.length;
    numofdev.innerHTML = developmentArr.length;
    numoffin.innerHTML = financeArr.length;


    const totaladmin = document.getElementById('totaladmin');
    const totalmark = document.getElementById('totalmark');
    const totaldev = document.getElementById('totaldev');
    const totalfin = document.getElementById('totalfin');

    totaladmin.innerHTML = totalAdminFun();
    totalmark.innerHTML = totalMarkFun();
    totaldev.innerHTML = totalDevFun();
    totalfin.innerHTML = totalFinFun();


    const avadmin = document.getElementById('avadmin');
    const avmark = document.getElementById('avmark');
    const avdev = document.getElementById('avdev');
    const avfin = document.getElementById('avfin');
    
    avadmin.innerHTML = avadminFun();
    avmark.innerHTML = avmarkFun();
    avdev.innerHTML = avdevFun();
    avfin.innerHTML = avfinFun();
    

    const allnum = document.getElementById('allnum');
    allnum.innerHTML = mystorage.length;

    const allsal = document.getElementById('allsal');
    allsal.innerHTML = allsalaryArr.reduce((acc, curr) => acc + curr, 0) ;

    const allav = document.getElementById('allav');
    allav.innerHTML = allavFun();
}

totalTable();
