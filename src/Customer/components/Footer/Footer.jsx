import { Button, Link, Typography, Grid } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Grid
        container
        sx={{ bgcolor: "black", color: "white", py: 3, textAlign: 'center' }}
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              About
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Blog
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Contact
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              For Your Services
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Solution
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Analytic
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Commerce
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Insight
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Documentation
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Guide
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Claim
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Privacy
            </Button>
            <Button variant="text" sx={{ color: 'white', mb: 1 }}>
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid container sx={{ bgcolor: "black", color: "white", py: 3 }} spacing={2} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="body2" component="p">
            2025 @ All Rights Reserved
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Made and Developed by&nbsp;
            <Link href="https://www.instagram.com/rikhish_khumanthem/" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Instagram sx={{ color: 'inherit', mr: 1 }} />
              <Typography component="span" sx={{ color: 'blue', fontSize: '0.875rem' }}>
                Rikhish Khumanthem
              </Typography>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
