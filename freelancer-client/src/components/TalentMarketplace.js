import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';

function TalentMarketplace() {
  const [selectedSkill, setSelectedSkill] = useState('');
  const history = useHistory();

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    history.push(`/job-listing/${skill.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`);
  };

  const skills = [
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
          Talent Marketplace
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Learn about working with talent or explore your specific hiring needs.
        </Typography>
        <List>
          {skills.map((skill) => (
            <ListItem
              key={skill}
              onClick={() => handleSkillSelect(skill)}
              sx={{
                cursor: 'pointer',
                color: selectedSkill === skill ? 'primary.main' : 'text.primary',
                transition: 'color 0.3s, transform 0.3s',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.05)',
                },
                border: '1px solid',
                borderColor: selectedSkill === skill ? 'primary.main' : 'grey.300',
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
        {selectedSkill && (
          <Typography variant="body2" sx={{ mt: 2 }} align="center">
            You have selected: {selectedSkill}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default TalentMarketplace;