import React, { useState, useContext } from "react";
import { BillContext } from "../contexts/BillContext";
import Bill from "./Bill";

import "../assets/css/filter.css";

export const Filter = () => {
    const [bills, setBills] = useContext(BillContext);
    const [filterCategory, setFilterCategory] = useState("");
    return (
        <div className="filter">
            <form className="form-filter">
                <label htmlFor="filterCategory">Filter: </label>
                <select name="filterCategory" value={filterCategory} onChange={(e) => { setFilterCategory(e.target.value) }}>
                    <option value="" hidden disabled>Select Category</option>
                    <option value="FoodnDining">Food and Dining</option>
                    <option value="Utility">Utility</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Education">Education</option>
                </select>
            </form>
            <div className="bills">
                {bills.map((bill) => {
                    if (bill.category === filterCategory) {
                        return (
                            <Bill
                                key={bill.id}
                                bills={bills}
                                setBills={setBills}
                                bill={bill}
                                description={bill.description}
                                category={bill.category}
                                amount={bill.amount}
                                date={bill.date}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}