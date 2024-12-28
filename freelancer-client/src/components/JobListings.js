import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Typography, Paper, List, ListItem, Button, Grid, Divider, Avatar, IconButton } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import MessageIcon from '@mui/icons-material/Message';
import axios from 'axios';

function JobListings() {
  const { category } = useParams();
  const history = useHistory();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs', error);
      }
    };
    fetchJobs();
  }, []);

  const handlePropose = (jobId) => {
    history.push(`/propose/${jobId}`); // Pass the job ID to the ProposeForm route
  };

  const handleMessage = (posterId) => {
    history.push(`/messages/${posterId}`); // Navigate to the messaging page with the poster's ID
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3, backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom align="center">
          Job Listings for {category.replace(/-/g, ' ')}
        </Typography>
        <List>
          {jobs.map((job, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1, backgroundColor: '#fff' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
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
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography variant="body1" color="primary" gutterBottom>
                      ${job.price} {job.priceType === 'hourly' ? 'per hour' : 'total'}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => handlePropose(job._id)} sx={{ mr: 1 }}>
                      Propose
                    </Button>
                    <IconButton color="primary" onClick={() => handleMessage(job.posterId)}>
                      <MessageIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              {index < jobs.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default JobListings;