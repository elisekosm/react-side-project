import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function About() {
    function githubButtonClick() {
        window.open("https://github.com/elisekosm");
    }

    function linkedinButtonClick() {
        window.open("https://www.linkedin.com/in/elise-kosmides/");
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ padding: '0.5em' }}>About Page</Typography>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Typography variant="body">This is an exploratory React app made by Elise. The app fetches a random cat fact from a publically available API. It then uses ModelsLab to generate a Gen AI photo of the random cat fact. Check out Elise's other projects on her GitHub below or connect with her on LinkedIn.</Typography>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={5} />
                <Grid item xs={1}>
                    <img src={process.env.PUBLIC_URL + "/github-logo.png"} onClick={githubButtonClick} alt="github-icon" height="50" style={{ 'padding-top': '2em' }} />
                </Grid>
                <Grid item xs={1}>
                    <img src={process.env.PUBLIC_URL + "/linkedin-logo.png"} onClick={linkedinButtonClick} alt="linkedin-icon" height="50" style={{ 'padding-top': '2em' }} />
                </Grid>
            </Grid>
        </div >
    );
}

export default About;
