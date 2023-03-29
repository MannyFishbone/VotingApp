import React from 'react';
import Nominee from './Nominee';

function Category({ category, selectedNomineeId, onNomineeClick }) {
    return (
        <div className="category">
            <h2>{category.title}</h2>
            <div className="nominee-list">
                {category.nominees.map(nominee => (
                    <Nominee
                        key={nominee.id}
                        nominee={nominee}
                        isSelected={nominee.id === selectedNomineeId}
                        onClick={() => onNomineeClick(category.id, nominee.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Category;