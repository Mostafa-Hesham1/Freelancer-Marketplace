import * as React from 'react';
import { Container, Grid, Typography, Box, TextField, Button, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: theme.spacing(4, 0),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  '& svg': {
    fontSize: '2rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: '#fff' }} />
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="/pricing" color="inherit" underline="hover">
              Pricing
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: '#fff' }} />
            <SocialIcon>
              <Link href="https://www.facebook.com" color="inherit" target="_blank" rel="noopener">
                <Facebook />
              </Link>
              <Link href="https://www.twitter.com" color="inherit" target="_blank" rel="noopener">
                <Twitter />
              </Link>
              <Link href="https://www.instagram.com" color="inherit" target="_blank" rel="noopener">
                <Instagram />
              </Link>
            </SocialIcon>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Subscribe
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: '#fff' }} />
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                sx={{ bgcolor: '#fff', borderRadius: '4px' }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Divider sx={{ mb: 2, bgcolor: '#fff' }} />
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} FreelanceX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;