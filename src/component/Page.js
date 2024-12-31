import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import  Header  from './Header';
import  Sidebar  from './Sidebar';
import ExamCard from './ExamCard';

const Page = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '16px' }}>
          <Container maxWidth="lg">
            <Typography variant="body1" color="textSecondary" paragraph>
              The Tamil Nadu Public Service Commission (TNPSC) conducts various examinations annually, including Group 1, Group 2, and Group 4 services. For the year 2021, 2022, 2023 several of these exams have been conducted, and the corresponding question papers are available for candidates to review and utilize for preparation.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <ExamCard year="2021" type="TNPSC" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ExamCard year="2022" type="TNPSC" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ExamCard year="2023" type="TNPSC" />
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Page;
