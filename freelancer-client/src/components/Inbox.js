
import React, { useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Inbox() {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); // Replace with actual authentication logic

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  const messages = [
    {
      sender: 'John Doe',
      subject: 'Project Proposal',
      content: 'I would like to discuss the project details with you.',
    },
    {
      sender: 'Jane Smith',
      subject: 'Job Offer',
      content: 'We are interested in hiring you for our project.',
    },
    // Add more fake messages as needed
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom align="center">
          Inbox
        </Typography>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1 }}>
              <ListItemText
                primary={`${message.sender} - ${message.subject}`}
                secondary={message.content}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Inbox;