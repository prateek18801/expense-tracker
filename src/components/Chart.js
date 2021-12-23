import React from "react";
import { Line, Bar } from "react-chartjs-2";

export const Chart = () => {
    return (
        <div>
            <Line
                data= {{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                }}
            />
        </div>
    );
}