import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

function CatFacts() {
    const [posts, setCatFact] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        setLoading(true);

        fetch(process.env.REACT_APP_CAT_FACT_URL)
            .then(response => response.json())
            .then(data => {
                setCatFact(data);
                generateImage(data.data[0]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    const generateImage = async (prompt) => {
        setError('');
        try {
            const response = await axios.post(
                process.env.REACT_APP_IMAGE_GENERATOR_URL,
                {
                    key: process.env.REACT_APP_IMAGE_GENERATOR_API_KEY,
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

            if (response.status !== 200 && response.status !== 204) {
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
                        <Typography variant="h4" style={{ padding: '0.5em' }}>Random Cat Facts</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body" style={{ padding: '0.5em' }}>Loading cat facts...</Typography>
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

                <Grid item xs={3} />
                <Grid item xs={6}>
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={3} />


                <Grid item xs={12}>
                    {imageUrl && <img src={imageUrl} alt="Generated" style={{ marginTop: '20px', maxWidth: '100%' }} />}
                </Grid>
            </Grid>
        </div>
    );
}

export default CatFacts;
