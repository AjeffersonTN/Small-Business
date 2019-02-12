import apiManager from "./ApiManager.js"
import displayOnDom from "./displayOnDOM.js";

const employeeCreator = (linkToDom) => {
    apiManager.getEmployees().then((employees) => {
        employees.forEach(employee => {
           let emNameFirst = employee.first_name
           let emNameLast = employee.last_name
           let emDepartment = employee.department.name
           let emComputerMake = employee.computer.make
           let emComputerModel = employee.computer.model

           let contactHTML = displayOnDom(emNameFirst, emNameLast,  emDepartment, emComputerMake, emComputerModel)
           linkToDom.innerHTML += contactHTML

        });
    })

}

export default employeeCreator