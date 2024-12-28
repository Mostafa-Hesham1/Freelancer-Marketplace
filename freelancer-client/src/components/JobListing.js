import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { addJob } from '../api'; // Add this line

function JobListing() {
  const { skill } = useParams();
  const history = useHistory();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceType, setPriceType] = useState('hourly');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      history.push('/login');
      return;
    }
    try {
      const job = {
        title,
        description,
        price,
        priceType,
        posterName: user.name,
        posterEmail: user.email,
      };
      await addJob(job); // Update this line
      alert('Job added successfully');
      history.push('/job-listings/development'); // Redirect to job listings page after successful submission
    } catch (error) {
      console.error('Error adding job', error);
      alert('Failed to add job');
    }
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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