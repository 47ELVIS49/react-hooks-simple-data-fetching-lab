// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        // Set the dog image in state and mark loading as false
        setDogImage(data.message);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after the initial render

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
};

export default App;
