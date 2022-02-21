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
import { Link } from "react-router-dom";


// TODO: fix the sizes menu 
// ! There is bug here

const drawerWidth = 1000;
const Products = () => {

    const [page, setPage] = useState(1);
    const [stateProducts, setStateProducts] = useState([]);

    const productsData = useSelector(selectProduct);

       useEffect(() => {
       setStateProducts(productsData);
      
       
    });

    const handleChange = (event, value) => {
        
        setPage(value);
    };

    const dispatch = useDispatch();
    
   
    useEffect(() => {
      dispatch(getProductsAsync());  
    }, []);    

    

    const sizeClicked = (text) => {
        
        setStateProducts(stateProducts.products.filter(itemm => itemm.sizes === 'L'));
        setPage(1);
      
    };

 
    const productsPage = productsData.products.slice((page-1)*3 , page*3);
     
   
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />       
            <Toolbar />
            <Box sx={{ overflow: 'auto', width: drawerWidth }}>
                <Toolbar sx={{marginTop:-5}}/>
                <Typography variant="h6" noWrap component="div">
                    Size
                </Typography>
                    <List>
                    {['All','S', 'M', 'L', 'XL'].map((text, index) => (
                        <ListItem button key={text}>
                         <ListItemText primary={text} onClick={() => sizeClicked(text)}/>
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <Toolbar sx={{marginTop:-5}}/>
                    <Typography variant="h6" noWrap component="div">
                    Price
                </Typography>
                <List>
                {['All', '< 50', '> 50'].map((text, index) => (
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
                {productsPage !== [] &&
                productsPage.map((item) => ( 
                <ImageListItem key={item.img}>
                    <img
                        src={item.img}
                        style={{width:"300px",height:"300px",objectFit:'contain'}}
                        alt= "product pic"
                    />
                    <ImageListItemBar
                        title={item.name}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            <Link to="/details" style={{ textDecoration: 'none', color: 'white' }}>
                                <Typography Typography variant="h6" noWrap component="div">Details</Typography>
                            </Link>
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
