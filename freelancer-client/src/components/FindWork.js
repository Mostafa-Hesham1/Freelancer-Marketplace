import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';

function FindWork() {
  const history = useHistory();

  const handleCategorySelect = (category) => {
    history.push(`/job-listings/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`);
  };

  const categories = [
    'Development & IT',
    'Design & Creative',
    'Sales & Marketing',
    'Writing & Translation',
    'Admin & Customer Support',
    'Finance & Accounting',
    'HR & Training',
    'Legal',
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom align="center">
          Find Work
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Explore job categories and find the right work for you.
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem
              key={category}
              onClick={() => handleCategorySelect(category)}
              sx={{
                cursor: 'pointer',
                transition: 'color 0.3s, transform 0.3s',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.05)',
                },
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default FindWork;