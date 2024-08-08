import React, { useState, useEffect } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching data from the public API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array to run the effect only once on component mount

    if (loading) {
        return <p>Loading posts...</p>;
    }

    return (
        <div>
            <h1>Posts from API Call</h1>
            <ul>
                {posts.slice(0, 10).map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
