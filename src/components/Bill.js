import React from "react";

import "../assets/css/bill.css";

export default function Bill({ bills, setBills, bill, description, category, amount, date }) {
    const deleteHandler = () => {
        setBills(bills.filter((elmn) => elmn.id !== bill.id));
    }
    return (
        <div className="bill">
            <div className="amount">₹{amount}</div>
            <div className="cat-desc">
                <div className="category">{category}</div>
                <div className="description">{description}</div>
            </div>
            <div className="date">{date}</div>
            <button className="btn-deletebill" onClick={deleteHandler}>
                <span className="material-icons-outlined">delete</span>
            </button>
        </div>
    );
}