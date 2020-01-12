import React from 'react';

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
        <div className="col-sm">{children}</div>
    );
};