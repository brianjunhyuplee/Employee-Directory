# Employee Directory
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This application displays a list of employees and their information. The app allows the user to type a name first or last and filter through to find specific employees


<!-- ![Image of Webstite](public/assets/images/web.png) -->

### Table of Contents

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Questions](#questions)


## Usage
 
To use this application, simply click on the deployed [link](https://brianjunhyuplee.github.io/Employee-Directory/)

## Process

### Creating a React App

To create a react app, open an integrated terminal and run the following code.

```bash
npx create-react-app appName
```

After creating the app, many files and directories will be instantiated.

### Major Components

There were three major components in building this app.

1. EmployeeTable
This component was a holder for the other two components.
To begin with a state was initialized in which the app would be continuosly running off.
*This can be done with the code below*
```js
state = {
    employees: Users,
        search: "",
        clicked: "",
        filteredEmployees: [{}],
        sortBy: "asc",
        sorted: false,
        loading: true
}
```

Users was is a JSON file obtained through a random user generator. This can potentially be replace with other inputs for actual office environments.

Once the program has determined the page has loaded or sorted, it will map out each employee. Within this map EmployeeTableTemplate is called.
*The code below shows how the template is filled*
```js
<EmployeeTableTemplate
    picture={employee.picture.medium}
    name={employee.name.first + " " + employee.name.last}
    phone={employee.phone}
    email={employee.email}
    dob={employee.dob.date}
/>
```

2. EmployeeTableTemplate

This component takes in the inputs shown up above. Using the inputted data,
a table will be created. By using props, each input can be accessed and appended onto the page.

3. SearchBar

Only one SearchBar will be appended to the page. This component will have an onChange function calling for a props.handleInputChange. The actual function will be written within the EmployeeTable component.

With each key input, the state will be updated to append any previous key inputs. Each input can be accessed by using event.nativeEvent.data. By using the filter method, the app will be able to take out any nonapplicable employees.
*The code below shows how this can be done*
```js
 let filteredEmployees = employees.filter(employee => {
            return(
                employee.name.first.toLowerCase().includes(search.toLowerCase())||employee.name.last.toLowerCase().includes(search.toLowerCase()) );
        });
        this.setState({ filteredEmployees: filteredEmployees });
        this.setState({ search: search });
        this.setState({ sorted: true });
```

After the state is updated and sorted is set to true, the page will now render the new filtered list of employees.

## License

This Project is licensed under the MIT License

## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JS)
* [REACT](https://developer.mozilla.org/en-US/docs/Web/React)


## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)


## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    

