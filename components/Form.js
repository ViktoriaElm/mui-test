import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Form() {
  const [name, setName] = useState(' ');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Имя"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="E-mail"
        defaultValue=" "
      />
      <Stack spacing={2} direction="column-reverse">
        <Button size="large" variant="contained">Отправить заявку</Button>
      </Stack>
    </Box>
  );
}