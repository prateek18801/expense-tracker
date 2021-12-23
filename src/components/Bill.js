import React from "react";

export default function Bill({bills, setBills, bill, description, category, amount, date }) {
    const deleteHandler = ()=>{
        setBills(bills.filter((elmn)=>elmn.id!==bill.id));
    }
    return (
        <div className="bill">
            <div className="description">{description}</div>
            <div className="category">{category}</div>
            <div className="amount">{amount}</div>
            <div className="date">{date}</div>
            <button className="btn-deleteBill" onClick={deleteHandler}>X</button>
        </div>
    );
}