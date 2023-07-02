import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <hr />
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Typography variant="subtitle1" gutterBottom>
            v9218743998@yandex.ru
          </Typography>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Typography variant="subtitle1" gutterBottom>
            +79218743998
          </Typography>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Typography variant="subtitle1" gutterBottom>
            г. Санкт-Петербург
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}