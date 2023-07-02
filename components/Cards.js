/* eslint-disable @next/next/no-img-element */
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Form from '../components/Form';
import SimpleAccordion from '../components/SimpleAccordion';

export default function Cards() {
  return (
    <Box sx={{ pt: 5, width: 1100, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
      <Form />
      <SimpleAccordion />
    </Box>

  );
}

const itemData = [
  {
    img: 'https://timviec365.vn/pictures/images/viec-lam-phuc-vu-tap-vu.jpg',
    title: 'Bed',
    author: 'Генеральная уборка квартиры'
  },
  {
    img: 'https://cdn1.ozone.ru/s3/multimedia-h/6512481905.jpg',
    title: 'Kitchen',
    author: 'Чистка ковров',
  },
  {
    img: 'https://static.tildacdn.com/tild3339-3764-4532-b538-343631316438/1673590546_pro-dachn.jpg',
    title: 'Doors',
    author: 'Чистка диванов',
  },
];