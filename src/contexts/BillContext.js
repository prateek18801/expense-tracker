import React, { useState, createContext } from "react";

export const BillContext = createContext();

export const BillProvider = (props) => {
    const [bills, setBills] = useState([
        {
            id: "1",
            description: "Dominoes",
            category: "FoodnDining",
            amount: 430,
            date: "2021-02-12"
        },
        {
            id: "2",
            description: "CarWash",
            category: "Utility",
            amount: 300,
            date: "2021-03-15"
        },
        {
            id: "3",
            description: "Amazon",
            category: "Shopping",
            amount: 500,
            date: "2021-03-18"
        },
        {
            id: "4",
            description: "HouseRent",
            category: "FoodnDining",
            amount: 800,
            date: "2021-03-22"
        },
        {
            id: "5",
            description: "Tuition",
            category: "Education",
            amount: 500,
            date: "2021-03-26"
        }
    ]);
    return (
        <BillContext.Provider value={[bills, setBills]}>
            {props.children}
        </BillContext.Provider>
    );
}