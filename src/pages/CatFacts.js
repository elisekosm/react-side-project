import React, { useState } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        fetch('https://meowfacts.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    
    if (loading) {
        return (
            <div>
                <p>Loading posts...</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Random Cat Facts</h1>
            <button onClick={handleClick}>Generate Cat Fact</button>
            <p>{posts.data}</p>
        </div>
    );
}

export default Posts;
