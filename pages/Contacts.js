import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Contacts() {
  return (<>
    <Box sx={{ p: 4, width: '100%', maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        Мы находимся в г. Санкт-Петербург
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        ул. Парковая 16
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        v9218743998@yandex.ru
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        +79218743998
      </Typography>
    </Box>

  </>)
}