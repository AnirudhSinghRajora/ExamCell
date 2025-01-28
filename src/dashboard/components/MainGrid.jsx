import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';

const data = [
  {
    title: 'Total Students Appeared',
    value: '6k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      105, 13, 116, 137, 126, 200, 53, 126, 147, 126, 158, 179, 168, 189, 179, 200,
      189, 211, 200, 221, 210, 337, 179, 242, 231, 253, 242, 316, 463, 484
    ]
  },
  {
    title: 'Pass Percentage',
    value: '82%',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      88, 85, 79, 83, 81, 76, 72, 84, 80, 65, 82, 79, 81, 69, 80,
      78, 79, 77, 60, 75, 73, 71, 82, 68, 70, 66, 64, 62, 58, 55
    ],
  },
  {
    title: 'Average marks',
    value: '54/70',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      60, 55, 58, 57, 56, 63, 55, 54, 53, 66, 54, 53, 57, 62, 52, 55,
      56, 48, 58, 54, 64, 53, 52, 65, 54, 49, 55, 50, 56, 53
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {/* Detai */}
      </Typography>
      <Grid container spacing={2} columns={12}>
        {/* <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid> */}
        <Grid size={{ xs: 12, lg: 12 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            {/* <CustomizedTreeView /> */}
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
