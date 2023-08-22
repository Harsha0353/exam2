import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllTrains() {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
    fetchTrainData();
}, []);

    const fetchTrainData = async () => {
    try {
      // Make an API call to fetch train schedule data
    const response = await axios.get('http://20.244.56.144:80/train/trains');

      // Set the fetched data in the state
    setTrains(response.data);
    } catch (error) {
    console.error('Error fetching train data:', error);
    }
};

return (
    <div>
      {/* Display train schedule data */}
    {trains.map((train) => (
        <div key={train.trainNumber}>
            <h2>{train.trainName}</h2>
          {/* Display other train details here */}
        </div>
))}
    </div>
);
}

export default AllTrains;
