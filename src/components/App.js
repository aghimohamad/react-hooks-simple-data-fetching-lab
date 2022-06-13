// create your App component here
import React from "react";
import { useState, useEffect } from "react";
function App() {
    const [dog, setDog] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDog(data.message);
            setIsLoaded(true);
        })
    }, [])

    // if (!dog) return <p>Loading...</p>;
    
            

            if (!isLoaded) return <h3>Loading...</h3>;

            return <img src={dog} alt="A Random Dog" />;
}

export default App;