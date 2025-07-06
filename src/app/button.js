'use client';
import "react";

export default function Button({ handleClick, str }) {
    return (
        <button onClick={handleClick}>
            {(str == "Addition") && "+"}
            {(str == "Subtraction") && "-"}
            {(str == "Multiplication") && "*"}
            {(str == "Division") && "/"}
            {(str == "Equals") && "="}
        </button>
    );
}