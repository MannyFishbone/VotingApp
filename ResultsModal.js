import React from 'react';
import './ResultsModal.css';

function ResultsModal({ categories, selectedNominees, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Results</h2>
                <ul>
                    {categories &&
                        categories.map((category) => (
                            <li key={category.id}>
                                <strong>{category.title}:</strong> {selectedNominees[category.id] ? category.nominees.find(nominee => nominee.id === selectedNominees[category.id]).name : 'No nominee selected'}
                            </li>
                        ))}
                </ul>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ResultsModal;