import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Paper, List, ListItem, Button, Grid, Divider, Avatar, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const history = useHistory();
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [jobProposals, setJobProposals] = useState([]);
  const [userProposals, setUserProposals] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [priceType, setPriceType] = useState('hourly');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jobs?posterEmail=${user.email}`);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs', error);
      }
    };
    fetchJobs();
  }, [user.email]);

  useEffect(() => {
    const fetchUserProposals = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jobs/user/${user.id}/proposals`);
        setUserProposals(response.data);
      } catch (error) {
        console.error('Error fetching user proposals', error);
      }
    };
    fetchUserProposals();
  }, [user.id]);

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setTitle(job.title);
    setDescription(job.description);
    setPrice(job.price);
    setPriceType(job.priceType);
  };

  const handleUpdate = async (jobId) => {
    try {
      const updatedJob = {
        title,
        description,
        price,
        priceType,
      };
      await axios.put(`http://localhost:5000/jobs/${jobId}`, updatedJob);
      setJobs(jobs.map(job => (job._id === jobId ? { ...job, ...updatedJob } : job)));
      setEditingJobId(null);
      alert('Job updated successfully');
    } catch (error) {
      console.error('Error updating job', error);
      alert('Failed to update job');
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${jobId}`);
      setJobs(jobs.filter(job => job._id !== jobId));
      alert('Job deleted successfully');
    } catch (error) {
      console.error('Error deleting job', error);
      alert('Failed to delete job');
    }
  };

  const handleViewProposals = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:5000/jobs/${jobId}/proposals`);
      setJobProposals(response.data);
    } catch (error) {
      console.error('Error fetching proposals', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3, backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom align="center">
          Dashboard
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your Job Listings
        </Typography>
        <List>
          {jobs.map((job, index) => (
            <React.Fragment key={index}>
              {job.posterEmail === user.email && ( // Ensure only the user's jobs are displayed
                <ListItem sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1, backgroundColor: '#fff' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                      {editingJobId === job._id ? (
                        <Box component="form" sx={{ width: '100%' }}>
                          <TextField
                            fullWidth
                            label="Job Title"
                            margin="normal"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
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
                          />
                          <FormControl fullWidth margin="normal">
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
                          />
                          <Button variant="contained" color="primary" onClick={() => handleUpdate(job._id)} sx={{ mr: 1 }}>
                            Save
                          </Button>
                          <Button variant="outlined" color="secondary" onClick={() => setEditingJobId(null)}>
                            Cancel
                          </Button>
                        </Box>
                      ) : (
                        <>
                          <Typography variant="h6" gutterBottom>
                            {job.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {job.description}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Avatar sx={{ mr: 1 }}>{job.posterName.charAt(0)}</Avatar>
                            <Typography variant="body2" color="text.primary">
                              {job.posterName}
                            </Typography>
                            {job.verified && (
                              <VerifiedIcon color="primary" sx={{ ml: 2 }} />
                            )}
                          </Box>
                        </>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                      <Typography variant="body1" color="primary" gutterBottom>
                        ${job.price} {job.priceType === 'hourly' ? 'per hour' : 'total'}
                      </Typography>
                      {editingJobId !== job._id && (
                        <>
                          <Button variant="contained" color="primary" onClick={() => handleEdit(job)} sx={{ mr: 1 }}>
                            Edit
                          </Button>
                          <Button variant="outlined" color="secondary" onClick={() => handleDelete(job._id)}>
                            Delete
                          </Button>
                          <Button variant="text" color="primary" onClick={() => handleViewProposals(job._id)}>
                            View Proposals
                          </Button>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </ListItem>
              )}
              {index < jobs.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
        {jobProposals.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Proposals
            </Typography>
            <List>
              {jobProposals.map((proposal, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1, backgroundColor: '#fff', border: '1px solid #ddd' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={8}>
                        <Typography variant="body2" color="text.primary" gutterBottom>
                          {proposal.coverLetter}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {proposal.freelancerName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                        <Typography variant="body2" color="primary" gutterBottom>
                          Hourly Rate: ${proposal.hourlyRate}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Estimated Hours: {proposal.estimatedHours}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {index < jobProposals.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom align="center">
            My Proposals
          </Typography>
          <List>
            {userProposals.map((proposal, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1, backgroundColor: '#fff' }}>
                  <Typography variant="body1" gutterBottom>
                    {proposal.coverLetter}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Hourly Rate: ${proposal.hourlyRate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Estimated Hours: {proposal.estimatedHours}
                  </Typography>
                </ListItem>
                {index < userProposals.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;
