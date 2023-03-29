import React from 'react';

function Nominee({ nominee, isSelected, onClick }) {
    return (
        <div className={`nominee ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <img src={nominee.image} alt={nominee.name} />
            <div className="nominee-details">
                <h3>{nominee.name}</h3>
                <p>{nominee.description}</p>
            </div>
        </div>
    );
}

export default Nominee;