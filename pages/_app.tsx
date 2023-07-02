import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ResponsiveAppBar from '../components/ResponsiveAppBar.js';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Fragment } from 'react';
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <ResponsiveAppBar />
        <Box sx={{ bgcolor: 'whitesmoke', height: '100%' }} >
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Container>
    </Fragment>)
}
