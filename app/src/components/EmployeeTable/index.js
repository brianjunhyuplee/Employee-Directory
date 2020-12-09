import React, { Component } from "react";
import EmployeeTableTemplate from "../EmployeeTableTemplate"
// import Api from "../../utils/Api"
import Users from "../../utils/users.json"
import SearchBar from "../SearchBar";

class EmployeeTable extends Component {
    state = {
        employees: [{}],
        search: "",
        clicked: "",
        filteredEmployees: [{}],
        sortBy: "asc",
        sorted: false,
        loading: true
    }
    //use componentDidMount to require Dom Nodes
    componentDidMount() {
        console.log("didMount");
        // Api.returnEmployees()
        // .then(res => this.setState({ employees: res.data.results }))
        // .catch(err => console.log(err));
        // console.log(Users.results);
        this.setState({employees: Users.results})
    }
    handleInputChange(event) {
        console.log(this.state.employees)
        event.preventDefault();
        let { search } = this.state.search;
        console.log(search);
        const lowerCaseSearch = search.toLowerCase();
        console.log(lowerCaseSearch);
        let { employees } = this.state.employees;
        console.log(employees);
        let filteredEmployees = employees.filter(employee => {
            return(
                employee.name.first.toLowerCase.includes(lowerCaseSearch)||employee.name.laste.toLowerCase.includes(lowerCaseSearch)            );
        });
        console.log(filteredEmployees);
        this.setState({ filteredEmployees: filteredEmployees });
        this.setState({ search: event.target.value });
        this.setState({ sorted: filteredEmployees });
    }
    
    handleClick(event) {
        event.preventDefault();
        let { clicked } = this.state.clicked;
        console.log(clicked);
        let { employees } = this.state.employees;
        console.log(employees);
        if(clicked === "name"){
            console.log("sort by name")
        }
        else if(clicked === "phone"){
            console.log("sort by phone")
        }
        else if(clicked === "name"){
            console.log("sort by email")
        }
        else if(clicked === "name"){
            console.log("sort by dob")
        }

    }

    returnEmployees = () => {
        console.log("running function")
        if (this.state.sorted) {
            console.log("0");
            return (
                <div>
                    {this.state.filteredEmployees.map(employee => (
                        <EmployeeTableTemplate
                            picture={employee.picture.medium}
                            name={employee.name.first + " " + employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                        />
                    ))}
                </div>
            );
        }
        else if (this.state.sorted === false){
            console.log("1");
            return (
                <div>
                    {this.state.employees.map(employee => (
                        <EmployeeTableTemplate
                            picture={employee.picture.medium}
                            name={employee.name.first + " " + employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                        />
                    ))}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <SearchBar 
                handleInputChange = {this.handleInputChange}/>
                {this.returnEmployees()}
            </div>
        );
    }
}
export default EmployeeTable;

