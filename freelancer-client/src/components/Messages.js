import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, List, ListItem, TextField, Button, Grid, Avatar } from '@mui/material';
import axios from 'axios';

function Messages() {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:6000/messages/${userId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };
    fetchMessages();
  }, [userId]);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:6000/messages', {
        content: newMessage,
        senderId: 'currentUserId', // Replace with the actual current user ID
        receiverId: userId,
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3, backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom align="center">
          Messages
        </Typography>
        <List sx={{ maxHeight: 400, overflow: 'auto' }}>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1, backgroundColor: '#fff' }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Avatar>{message.senderId.charAt(0)}</Avatar>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" gutterBottom>
                    {message.content}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(message.timestamp).toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ ml: 2 }}>
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Messages;
