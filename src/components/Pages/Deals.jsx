import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, Collapse, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, List, ListItem, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { red } from '@mui/material/colors';

import { styled } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';



import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AttachMoney, ExpandMore, ShoppingBag } from '@mui/icons-material';






const Deals = () => {

    function createData(product_name, price, image, quantity) {
        return { product_name, price, image, quantity };
    }

    const products = [
        createData('Samsung F22', 25000, "./images/bhaktapur.jpg", 3),
        createData('Real Me', 20000, "./images/chitwan.jpg", 2),
        createData('Acer Laptop', 125000, "./images/pokhara-valley-nepal.jpg", 4),
        createData('Asus', 135000, "./images/Lumbini.jpg", 1),
        // createData('Macbook', 225000, "./images/macbook.jfif", 2),
    ];
    return (
        <>




            <Grid container>
                <Grid item xs={12} md={4} lg={3}>
                    <Typography variant='h5' p={1}>
                        Category
                    </Typography>
                    <List>
                        <ListItem>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />} />} label="Products" />
                                <FormControlLabel control={<Checkbox icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />} />} label="Mobiles" />
                                <FormControlLabel control={<Checkbox icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />} />} label="Laptops" />
                                <FormControlLabel control={<Checkbox icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />} />} label="Home" />
                                <FormControlLabel control={<Checkbox icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />} />} label="Beauty_Products" />


                            </FormGroup>


                        </ListItem>

                        <ListItem>
                            <FormControl sx={{ marginTop: 4 }}>
                                <FormLabel id="demo-radio-buttons-group-label">

                                    <Typography variant='h5' p={1}>
                                        Price
                                    </Typography>
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="All" control={<Radio icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />} label="All" />
                                    <FormControlLabel value="0" control={<Radio />} label="0 - $100" />
                                    <FormControlLabel value="1" control={<Radio />} label="$100 - $500" />
                                    <FormControlLabel value="2" control={<Radio />} label="$500 - $1000" />
                                    <FormControlLabel value="3" control={<Radio />} label="$1000 - $10000" />
                                    <FormControlLabel value="4" control={<Radio />} label="Above $10000" />
                                </RadioGroup>
                            </FormControl>

                        </ListItem>

                    </List>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant='h5'>
                        Items
                    </Typography>
                    <Grid container >
                        {

                            products.map(product => {
                                return <Grid xs={12} md={6} lg={4}>
                                    <Card sx={{ maxWidth: 345, margin: "20px" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={product.image}
                                            title={product.product_name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Box display='flex' justifyContent={'space-between'} width={'100%'}>
                                            
                                                
                                                    <Button size="small" startIcon={<AttachMoney/>}>$Buy</Button>
                                                
                                                
                                                    <Button size="small" endIcon={<ShoppingBag/>}>Add To Cart</Button>
                                                
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            })

                        }
                    </Grid>
                </Grid>
            </Grid>

        </>
    )

}

export default Deals