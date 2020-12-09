import React, { createContext, useReducer, useContext } from "react";

const EmployeeContext = createContext({
    picture: "",
    first: "",
    last: "",
    phone: "",
    email: "",
    dob: ""
,})

const { Provider } = EmployeeContext;


function reducer (state, action) {
    switch (action.type) {
        //any needed functions
    }
}

function EmployeeProvider({ value = [], ...props }) {
    const [state, dispatch] = userReducer(reducer, []);
    return <Provider value = {[state, dispatch]} {...props} />;
}

function useEmployeeContext(){
    return useContext(EmployeeContext);
}

export { EmployeeProvider, useEmployeeContext };

// this file was unused