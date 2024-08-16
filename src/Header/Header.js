import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Header() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <img src={"/cute-cat.png"} alt="cat-pic" style={{ padding: '0.25em' }} height="50" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h1" style={{ padding: '0.25em' }}>
            Random Cat Fact Generator
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
