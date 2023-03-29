import React, { useState, useEffect } from 'react';
import NomineeList from './NomineeList';
import ResultsModal from './ResultsModal';
import './App.css';
import mockData from './mock_data.json';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedNominees, setSelectedNominees] = useState({});
    const [showResultsModal, setShowResultsModal] = useState(false);

    useEffect(() => {
        // Fetch data from mock dataset
        setCategories(mockData.categories);
    }, []);

    const handleNomineeClick = (categoryId, nomineeId) => {
        setSelectedNominees(prevState => {
            const updatedState = { ...prevState };
            updatedState[categoryId] = nomineeId;
            return updatedState;
        });
    };

    const handleResultsSubmit = () => {
        setShowResultsModal(true);
    };

    const handleModalClose = () => {
        setShowResultsModal(false);
    };

    return (
        <div className="app">
            <h1>Interactive Voting Web App</h1>
            <NomineeList
                categories={categories}
                selectedNominees={selectedNominees}
                onNomineeClick={handleNomineeClick}
                onResultsSubmit={handleResultsSubmit}
            />
            {showResultsModal && (
                <ResultsModal
                    categories={categories}
                    selectedNominees={selectedNominees}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
}

export default App;