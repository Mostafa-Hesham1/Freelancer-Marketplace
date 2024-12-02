import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Typography, Paper, List, ListItem, ListItemText, Button, Grid, Divider, Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

function JobListings() {
  const { category } = useParams();
  const history = useHistory();

  const jobs = [
    {
      title: 'Frontend Developer',
      description: 'Looking for an experienced frontend developer to build a responsive web application.',
      price: '$30/hour',
      poster: 'John Doe',
      verified: true,
    },
    {
      title: 'Graphic Designer',
      description: 'Need a creative graphic designer for logo and branding projects.',
      price: '$500/project',
      poster: 'Jane Smith',
      verified: false,
    },
    // Add more fake jobs as needed
  ];

  const handlePropose = () => {
    history.push('/propose');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom align="center">
          Job Listings for {category.replace(/-/g, ' ')}
        </Typography>
        <List>
          {jobs.map((job, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {job.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Avatar sx={{ mr: 1 }}>{job.poster.charAt(0)}</Avatar>
                      <Typography variant="body2" color="text.primary">
                        {job.poster}
                      </Typography>
                      {job.verified && (
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                          <VerifiedIcon color="primary" sx={{ mr: 0.5 }} />
                          <Typography variant="body2" color="primary">
                            Verified Payment
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography variant="body1" color="primary" gutterBottom>
                      {job.price}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handlePropose}>
                      Propose
                    </Button>
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