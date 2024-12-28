import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Container, TextField, Typography, List, ListItem, ListItemText, Paper, Box, Avatar, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const ProfileContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
}));

const Profile = () => {
  const { user, setUser, loading } = useAuth();
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setDescription(user.description || '');
      setSkills(user.skills || []);
    }
  }, [user]);

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleSaveProfile = async () => {
    if (!user || !user._id) {
      console.error('User ID is not available');
      return;
    }
    try {
      const updatedUser = { ...user, description, skills };
      const response = await axios.put(`http://localhost:3001/user/${user._id}`, updatedUser);
      setUser(response.data);
      alert('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile', error);
      alert('Failed to update profile');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <ProfileContainer>
      <ProfilePaper elevation={3}>
        <ProfileAvatar alt={user.name} src="/static/images/avatar/1.jpg" />
        <Typography variant="h4" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {user.email}
        </Typography>
        <Divider />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <IconButton onClick={() => setIsEditing(!isEditing)} color="primary">
            {isEditing ? <SaveIcon onClick={handleSaveProfile} /> : <EditIcon />}
          </IconButton>
        </Box>
        {isEditing ? (
          <TextField
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        ) : (
          <DescriptionBox>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </DescriptionBox>
        )}
        <Divider />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          {isEditing && (
            <IconButton onClick={handleAddSkill} color="primary">
              <AddIcon />
            </IconButton>
          )}
        </Box>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
        {isEditing && (
          <TextField
            label="Add Skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}
      </ProfilePaper>
    </ProfileContainer>
  );
};

export default Profile;
