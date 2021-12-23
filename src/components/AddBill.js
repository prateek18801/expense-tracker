import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BillContext } from "../contexts/BillContext";

export const AddBill = () => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amt, setAmt] = useState("");
    const [date, setDate] = useState("");

    const [bills, setBills] = useContext(BillContext);
    const addBill = (e) => {
        e.preventDefault();
        setBills(prevBills => [...prevBills, {
            id: uuidv4(),
            description: description,
            category: category,
            amount: parseInt(amt),
            date: date
        }]);
        setDescription("");
        setCategory("");
        setAmt("");
        setDate("");
    }

    return (
        <form className="form-addbill" onSubmit={addBill}>
            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                <option value="" hidden disabled>Category</option>
                <option value="FoodnDining">Food and Dining</option>
                <option value="Utility">Utility</option>
                <option value="Shopping">Shopping</option>
                <option value="Education">Education</option>
            </select>
            <input type="number" value={amt} onChange={(e) => { setAmt(e.target.value) }} />
            <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
            <button type="submit">Add</button>
        </form>
    );
}