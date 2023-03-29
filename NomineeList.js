import React from 'react';
import Category from './Category';

function NomineeList({ categories, selectedNominees, onNomineeClick, onResultsSubmit }) {
    return (
        <div className="nominee-list">
            {categories.map(category => (
                <Category
                    key={category.id}
                    category={category}
                    selectedNomineeId={selectedNominees[category.id]}
                    onNomineeClick={onNomineeClick}
                />
            ))}
            <button onClick={onResultsSubmit}>Submit</button>
        </div>
    );
}

export default NomineeList;