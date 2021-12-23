import React, { useState, createContext } from "react";

export const BillContext = createContext();

export const BillProvider = (props) => {
    const [bills, setBills] = useState([
        {
            id: "1",
            description: "Dominoes",
            category: "FoodnDining",
            amount: 430,
            date: "01-02-2020"
        },
        {
            id: "2",
            description: "CarWash",
            category: "Utility",
            amount: 430,
            date: "01-02-2020"
        },
        {
            id: "3",
            description: "Amazon",
            category: "Shopping",
            amount: 430,
            date: "01-02-2020"
        },
        {
            id: "4",
            description: "HouseRent",
            category: "FoodnDining",
            amount: 430,
            date: "01-02-2020"
        },
        {
            id: "5",
            description: "Tuition",
            category: "Education",
            amount: 430,
            date: "01-02-2020"
        }
    ]);
    return (
        <BillContext.Provider value={[bills, setBills]}>
            {props.children}
        </BillContext.Provider>
    );
}