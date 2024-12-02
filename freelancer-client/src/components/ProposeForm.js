
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

function ProposeForm() {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with actual authentication logic

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      history.push('/login');
      return;
    }
    // Add logic to handle proposal submission
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom align="center">
          Submit Proposal
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Cover Letter"
            margin="normal"
            multiline
            rows={4}
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Hourly Rate"
            margin="normal"
            type="number"
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Estimated Hours"
            margin="normal"
            type="number"
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" color="secondary" onClick={() => history.goBack()}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default ProposeForm;