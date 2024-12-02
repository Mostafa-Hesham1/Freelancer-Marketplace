import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const plans = [
  {
    title: 'Basic',
    price: '$0',
    features: ['Access to job listings', 'Basic support', 'Limited proposals'],
  },
  {
    title: 'Plus',
    price: '$49/month',
    features: ['Access to job listings', 'Priority support', 'Unlimited proposals', 'Profile boost'],
  },
  {
    title: 'Pro',
    price: '$99/month',
    features: ['Access to job listings', 'Dedicated support', 'Unlimited proposals', 'Profile boost', 'Advanced analytics'],
  },
];

function Pricing() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Pricing Plans
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            <Card sx={{ border: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" align="center" sx={{ mb: 2 }}>
                  {plan.price}
                </Typography>
                <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center', flexGrow: 1 }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                  ))}
                </Box>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Button variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '10px 20px' }}>
                  Choose Plan
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Pricing;