import React from 'react';
import Category from './Category';

function CategoryList({ categories, selections, onNomineeClick }) {
    return (
        <div className="categories">
            {categories.map((category) => (
                <Category
                    key={category.name}
                    category={category}
                    selectedNominee={selections[category.name]}
                    onNomineeClick={onNomineeClick}
                />
            ))}
        </div>
    );
}

export default CategoryList;
