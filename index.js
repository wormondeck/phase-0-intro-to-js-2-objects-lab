function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const updatedEmployee = { ...employee };
  
    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }

  const employee = {
    name: "Sam",
    age: 30,
    department: "IT"
  };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = Object.assign({}, employee);
  
    delete newEmployee[key];
  
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (employee.hasOwnProperty(key)) {
      delete employee[key];
    }
    return employee;
  }

