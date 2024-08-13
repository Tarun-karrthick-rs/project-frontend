import React, { useEffect, useState } from 'react';
import { getMatchInfo } from '../api/api';
import '../CSS/Score.css';
import Navbar from './navbar';

function Fantasy() {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMatchInfo()
            .then((data) => {
                console.log('API Response:', data);

                if (data && data.data) {
                    console.log('Data:', data.data);
                    if (Array.isArray(data.data)) {
                        setMatches(data.data);
                    } else if (data.data.matches && Array.isArray(data.data.matches)) {
                        setMatches(data.data.matches);
                    } else {
                        console.error("Unexpected data structure:", data);
                        setError("Unexpected data structure.");
                    }
                } else {
                    console.error("Unexpected data structure:", data);
                    setError("Unexpected data structure.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Error fetching data.");
            });
    }, []);

    return (
        <div>
        <Navbar />
        <div className="container" style={{paddingTop:'56px'}}>
            <br/>
            <center><h1>Match Information</h1></center>
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="card-container">
                    {matches.map((match, index) => (
                        <div key={index} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{match.name || "No name"}</h5>
                                <h6 className="card-subtitle">{match.venue || "No subtitle"}</h6>
                                <p className="card-text">{match.status || "No description available."}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
}

export default Fantasy;
