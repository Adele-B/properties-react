// Global
import React, { useEffect, useState } from 'react';

// Components
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

// Style
import './App.scss';

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPropertyData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/properties');
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        getPropertyData();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                {isLoading && <p>Loading properties...</p>}
                {!isLoading && <PropertyListing properties={data} />}
            </main>
        </div>
    );
};

export default App;
