import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {  getProductsAsync, selectProduct } from '../features/products/productSlice';
import { useSelector, useDispatch } from 'react-redux';


const drawerWidth = 1000;
const itemData = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/auth-48dc4.appspot.com/o/pfp.jpg?alt=media&token=99694e50-9957-4d94-8693-a33c7c935cf1',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/auth-48dc4.appspot.com/o/pfp.jpg?alt=media&token=99694e50-9957-4d94-8693-a33c7c935cf1',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/auth-48dc4.appspot.com/o/pfp.jpg?alt=media&token=99694e50-9957-4d94-8693-a33c7c935cf1',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];

const Products = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const dispatch = useDispatch();
    
   
    useEffect(() => {
      dispatch(getProductsAsync());  
    }, [])
  
    const productsData = useSelector(selectProduct);  
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />       
            <Toolbar />
            <Box sx={{ overflow: 'auto', width: drawerWidth }}>
                <Toolbar sx={{marginTop:-5}}/>
                <Typography variant="h6" noWrap component="div">
                    Permanent drawer
                </Typography>
                    <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                        
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <Toolbar sx={{marginTop:-5}}/>
                    <Typography variant="h6" noWrap component="div">
                    Permanent drawer
                </Typography>
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Box>               
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <ImageList cols={3} gap={40} sx={{ width: 1000,}}>
                <ImageListItem key="Subheader" cols={3}>
                    <ListSubheader component="div" sx={{fontSize:40}}>Products</ListSubheader>
                </ImageListItem>
                {productsData.status === 'idle' &&
                productsData.products.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={item.img}
                        style={{width:"100%",height:"300px"}}
                    />
                    <ImageListItemBar
                        title={item.name}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            <Typography variant="h6" noWrap component="div">Details</Typography>
                        </IconButton>
                        }
                    />
                </ImageListItem>
                ))
                }
                </ImageList>
                <Stack spacing={1}>
                <Pagination count={10} variant="outlined" page={page} onChange={handleChange} color="primary" />

    </Stack>
            </Box>
        </Box>
    )
}

export default Products
