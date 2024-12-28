import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function ProposeForm() {
  const history = useHistory();
  const { id } = useParams(); // Ensure this line correctly retrieves the job ID from the URL
  const { user } = useAuth();
  const [coverLetter, setCoverLetter] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [estimatedHours, setEstimatedHours] = useState('');

  useEffect(() => {
    console.log('Job ID:', id); // Add this line to debug the job ID
    if (!id) {
      console.error('Job ID is undefined');
      history.push('/job-listings'); // Redirect to job listings if job ID is undefined
    }
  }, [id, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      history.push('/login');
      return;
    }
    try {
      const proposal = {
        userId: user.id,
        freelancerName: user.name,
        freelancerEmail: user.email,
        coverLetter,
        hourlyRate,
        estimatedHours,
        price: hourlyRate * estimatedHours,
        priceType: 'hourly',
      };
      await axios.post(`http://localhost:5000/jobs/${id}/proposals`, proposal);
      alert('Proposal submitted successfully');
      history.push('/dashboard'); // Redirect to dashboard after successful submission
    } catch (error) {
      console.error('Error submitting proposal', error);
      alert('Failed to submit proposal');
    }
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
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Hourly Rate"
            margin="normal"
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            required
            sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Estimated Hours"
            margin="normal"
            type="number"
            value={estimatedHours}
            onChange={(e) => setEstimatedHours(e.target.value)}
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