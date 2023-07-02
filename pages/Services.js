import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Fragment } from 'react';
import Cards from '../components/Cards'

export default function Services() {
    return (<>
        <Fragment>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Box sx={{ bgcolor: 'whitesmoke', height: '100%' }} >
                    <Cards />
                </Box>
            </Container>
        </Fragment>
    </>)
}