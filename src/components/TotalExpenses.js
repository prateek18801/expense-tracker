import React from "react";

export default function TotalExpenses({ bills }) {
    let totalExpenses = 0;
    for (let i = 0; i < bills.length; i++) {
        totalExpenses += bills[i].amount;
    }
    return (
        <div>
            ${totalExpenses}
        </div>
    );
}