import React from 'react';
import './DnaBackground.css'; // Import your CSS for DNA background styling

const DnaBackground = () => {
    const iteration = 24; // Number of div elements to generate
    const divElements = [];

    // Generate div elements with unique --i values
    for (let n = 0; n < iteration; n++) {
        divElements.push(
            <div key={n} style={{ '--i': n }}></div>
        );
    }

    return (
        <div className="dna-background">
            <div className="wrapper">
                <div className="dna">
                    {divElements}
                </div>
            </div>
        </div>
    );
}

export default DnaBackground;
