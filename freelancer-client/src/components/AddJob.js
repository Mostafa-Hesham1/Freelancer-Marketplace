import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';

const AddJob = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceType, setPriceType] = useState('hourly');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to add a job');
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
      await axios.post('http://localhost:3001/jobs', job);
      alert('Job added successfully');
      setTitle('');
      setDescription('');
      setPrice('');
      setPriceType('hourly');
    } catch (error) {
      console.error('Error adding job', error);
      alert('Failed to add job');
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Add Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Price Type"
            value={priceType}
            onChange={(e) => setPriceType(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Add Job
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddJob;
