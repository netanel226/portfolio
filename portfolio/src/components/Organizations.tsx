import React from 'react';
import { Paper, Typography, Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Organization {
  name: string;
  logo: string;
  link?: string;
}

interface OrganizationsProps {
  organizations: Organization[];
}

const Organizations: React.FC<OrganizationsProps> = ({ organizations }) => {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        bgcolor: 'background.paper',
        py: 8,
        borderRadius: 4,
        mb: 8
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            ארגונים שעבדתי איתם
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {organizations.map((org, index) => (
              <Grid item xs={6} sm={4} md={3} key={org.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ cursor: org.link ? 'pointer' : 'default' }}
                >
                  <Box
                    component="a"
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'block',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <Box
                      component="img"
                      src={org.logo}
                      alt={org.name}
                      sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: 80,
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.3s ease-in-out',
                        '&:hover': {
                          filter: 'grayscale(0%)'
                        }
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Paper>
  );
};

export default Organizations; 