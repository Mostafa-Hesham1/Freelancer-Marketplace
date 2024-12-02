import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SupportIcon from '@mui/icons-material/Support';
import BarChartIcon from '@mui/icons-material/BarChart';

function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        What is FreelanceX?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid #1976d2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                FreelanceX is a leading platform connecting freelancers with clients from around the world. Our mission is to provide a seamless experience for both freelancers and clients, ensuring successful collaborations and high-quality work.
              </Typography>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                Whether you're looking for talent or seeking work, FreelanceX offers a wide range of opportunities across various industries. Join us today and take your freelancing career to the next level.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid #1976d2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
                Our Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We offer a variety of services to help you succeed:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WorkIcon color="primary" />
                  <Typography variant="body1">Job Listings: Browse and apply for jobs that match your skills.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VisibilityIcon color="primary" />
                  <Typography variant="body1">Profile Boost: Increase your visibility and attract more clients.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SupportIcon color="primary" />
                  <Typography variant="body1">Support: Get assistance from our dedicated support team.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BarChartIcon color="primary" />
                  <Typography variant="body1">Analytics: Track your performance and improve your skills.</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;