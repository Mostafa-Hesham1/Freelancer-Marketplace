import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

function JobListing() {
  const { skill } = useParams();
  const history = useHistory();
  const [priceType, setPriceType] = useState('hourly');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with actual authentication logic

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      history.push('/login');
      return;
    }
    // Add logic to handle job listing submission
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom align="center">
          Job Listing for {skill.replace(/-/g, ' ')}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Job Title"
            margin="normal"
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <FormControl fullWidth margin="normal" sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}>
            <InputLabel id="price-type-label">Price Type</InputLabel>
            <Select
              labelId="price-type-label"
              value={priceType}
              onChange={(e) => setPriceType(e.target.value)}
              required
            >
              <MenuItem value="hourly">Hourly</MenuItem>
              <MenuItem value="project">Project</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label={priceType === 'hourly' ? 'Price per Hour' : 'Total Project Price'}
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
            required={priceType === 'hourly'}
            disabled={priceType === 'project'}
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

export default JobListing;