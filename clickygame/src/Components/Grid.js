import React from 'react';
import './index.css'

export const Container = ({ fluid, children }) => {
    return (
        <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
    );
};

export const Row = ({ fluid, children }) => {
    return (
        <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
    );
};

export const Column = ({children}) => {
    return (
        <div className="col-sm text-center">{children}</div>
    );
};