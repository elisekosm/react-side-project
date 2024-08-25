import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        setLoading(true);

        fetch('https://meowfacts.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                generateImage(data.data[0]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    const generateImage = async (prompt) => {
        setError('');
        try {
            let url = 'https://modelslab.com/api/v6/realtime/text2img'; //process.env.IMAGE_GENERATOR_URL;
            let api_key = 'DLkzpNj1yYvfCx9lHJXAIyyQSggTqGU3lNE1tiLnJuSWoht1ulFwyIL2OO30'; // process.env.IMAGE_GENERATOR_API_KEY;

            const response = await axios.post(
                url, //process.env.IMAGE_GENERATOR_URL,
                {
                    key: api_key, // process.env.IMAGE_GENERATOR_API_KEY,
                    prompt: prompt,
                    negative_prompt: "",
                    width: "400",
                    height: "400",
                    safety_checker: false,
                    seed: null,
                    samples: 1,
                    base64: false,
                    webhook: null,
                    track_id: null
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status !== 200) {
                setError('Failed to generate image.');
            } else {
                setImageUrl(response.data.output[0]);
            }
        } catch (err) {
            setError('Failed to generate image.');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body" style={{ margin: '50px' }}>Loading cat facts...</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CircularProgress />
                    </Grid>
                </Grid>
            </div>
        );
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ padding: '0.5em' }}>Random Cat Facts</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleClick} variant="contained">Generate Cat Fact</Button>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Typography variant="body" style={{ margin: '50px' }}>{posts.data}</Typography>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={12}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {imageUrl && <img src={imageUrl} alt="Generated" style={{ marginTop: '20px', maxWidth: '100%' }} />}
                </Grid>
            </Grid>
        </div>
    );
}

export default Posts;
