import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import axios from 'axios';

function UpdateJob() {
  const { jobId } = useParams();
  const history = useHistory();
  const [job, setJob] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceType, setPriceType] = useState('hourly');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jobs/${jobId}`);
        setJob(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setPriceType(response.data.priceType);
      } catch (error) {
        console.error('Error fetching job', error);
      }
    };
    fetchJob();
  }, [jobId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedJob = {
        title,
        description,
        price,
        priceType,
      };
      await axios.put(`http://localhost:5000/jobs/${jobId}`, updatedJob);
      alert('Job updated successfully');
      history.push('/dashboard');
    } catch (error) {
      console.error('Error updating job', error);
      alert('Failed to update job');
    }
  };

  if (!job) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom align="center">
          Update Job
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
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Update
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

export default UpdateJob;
