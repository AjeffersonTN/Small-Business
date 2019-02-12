const apiManager = {
    getEmployees: function () {
        return fetch("http://localhost:3002/employees?_expand=computer&_expand=department")
            .then(employees => employees.json())
    },
    getComputers: function () {
        return fetch("http://localhost:3002/computers")
            .then(computers => computers.json())
    },
    getDepartments: function () {
        return fetch("http://localhost:3002/departments")
            .then(departments => departments.json())
    },
}
export default apiManager