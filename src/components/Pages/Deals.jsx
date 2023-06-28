import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, List, ListItem, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';




const Deals = () => {
    return (
        <>

            <Grid container>
                <Grid item xs={12} md={6} lg={3}>
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
                            <FormControl sx={{marginTop: 4}}>
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
                <Grid item xs={12} md={6} lg={9}>
                    <Typography variant='h5'>
                        Items
                    </Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Deals