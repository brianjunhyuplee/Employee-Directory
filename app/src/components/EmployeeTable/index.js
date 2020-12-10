import React, { Component } from "react";
import EmployeeTableTemplate from "../EmployeeTableTemplate"
// import Api from "../../utils/Api"
import Users from "../../utils/users.json"
import SearchBar from "../SearchBar";

class EmployeeTable extends Component {
    state = {
        employees: Users,
        search: "",
        clicked: "",
        filteredEmployees: [{}],
        sortBy: "asc",
        sorted: false,
        loading: true
    }
    //use componentDidMount to require Dom Nodes
    // componentDidMount() {
    //     console.log("didMount");
    //     // Api.returnEmployees()
    //     // .then(res => this.setState({ employees: res.data.results }))
    //     // .catch(err => console.log(err));
    //     // console.log(Users.results);
    //     console.log(Users.results);
    //     this.setState({employees: Users.results})
    // }
    handleInputChange= (event) => {
        if (event.nativeEvent.data){
        event.preventDefault();
        console.log(Users);
        console.log(event.nativeEvent.data);
        let search = event.nativeEvent.data;
        
        // console.log(search);
        // const lowerCaseSearch = toLowerCase(search);
        // console.log(lowerCaseSearch);
        let employees = Users.results;
        console.log(employees[0].name.first);
        let filteredEmployees = employees.filter(employee => {
            console.log(search);
            
            console.log(employee.name.first.includes(search));
            
            return(
                employee.name.first.toLowerCase().includes(search.toLowerCase())||employee.name.last.toLowerCase().includes(search.toLowerCase()) );
        });
        console.log(filteredEmployees);
        // this does not work
        this.setState({ filteredEmployees: filteredEmployees });
        this.setState({ search: event.nativeEvent.data });
        this.setState({ sorted: true });
        console.log(this.state);
    }
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
                    {this.state.employees.results.map(employee => (
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
                handleInputChange = {this.handleInputChange}
                />
                {this.returnEmployees()}
                {this.sortBy}
            </div>
        );
    }
}
export default EmployeeTable;

