import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant = "h4" style={{padding: '0.5em'}}>Random Cat Facts</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleClick} variant="contained">Generate Cat Fact</Button>                   
                </Grid>
                <Grid item xs={12}>
                    <Typography variant = "body" style={{margin: '50px'}}>{posts.data}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Posts;
