import React from 'react';

const Letter = () => {
    return (
        <div className="letter">
           A 
        </div>
    );
};

const WordGrid = ({ word }) => {

    return (
        <div className="grid">
            <div className="row">
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
            </div>
            <div className="row">
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
            </div>
            <div className="row">
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
            </div>
            <div className="row">
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
            </div>
        </div>
    );
};

export default WordGrid;