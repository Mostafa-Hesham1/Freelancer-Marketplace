import * as React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ImageBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  '& img': {
    width: '100%',
    height: '300px', // Ensure all images have the same height
    objectFit: 'cover',
    borderRadius: '10px',
  },
}));

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Welcome to FreelanceX
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Your gateway to a world of freelance opportunities. Work from anywhere, get paid your way, and grow your freelance business with our expert advice.
        </Typography>
        <ImageBox>
          <img src="istockphoto-955148158-612x612.jpg" alt="Welcome to FreelanceX" />
        </ImageBox>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 2, color: '#1976d2' }}>
              Work from Anywhere
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              With FreelanceX, you can work from anywhere in the world. Enjoy the flexibility of freelancing and manage your work-life balance effectively.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Whether you're at home, in a coffee shop, or traveling the world, FreelanceX gives you the freedom to work from any location.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageBox>
            <img src="people-remote-working-illustrated_23-2148832541.avif" alt="Work from Anywhere" />
          </ImageBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 2, color: '#1976d2' }}>
              Get Paid Your Way
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              We offer multiple payment options including PayPal, Skrill, and more. Choose the method that works best for you and get paid quickly and securely.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our platform ensures that you receive your payments on time, every time, with the flexibility to choose your preferred payment method.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageBox>
            <img src="UPI-Payment-and-Transfer-Illustration-700.webp" alt="Get Paid Your Way" />
          </ImageBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 2, color: '#1976d2' }}>
              Freelance Advice
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Discover top tips for freelancers to succeed in their careers. Learn how to manage your time, find clients, and grow your freelance business.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our expert advice covers everything from setting up your profile to negotiating rates and delivering high-quality work.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageBox>
            <img src="Billdu_Freelance-advice-Top-12-tips-for-freelancers.png" alt="Freelance Advice" />
          </ImageBox>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '10px 20px' }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default Home;