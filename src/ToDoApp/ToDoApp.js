import React from "react";
import {Card, CardHeader, Avatar, CardContent, Typography, Box, Container, Paper} from '@mui/material';

function ToDOApp(){

    return(
        <Container
        display="flex"
        >
            <Box  
                display="flex" 
                gap={2} 
                flexWrap="wrap"

                >
                <Card my={20} sx={{ maxWidth: 345, marginTop:'50px' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Paper key={1} elevation={3} sx={{lineHeight:'30px', marginTop:'10px' }} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Buy Milk
                                </Typography>
                        </Paper>

                        <Paper key={2} elevation={3} sx={{lineHeight:'30px', marginTop:'10px'}} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Drink Milk
                                </Typography>
                        </Paper>
                    </CardContent>
                </Card>

                <Card my={20} sx={{ maxWidth: 345, marginTop:'50px' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Paper key={1} elevation={3} sx={{lineHeight:'30px', marginTop:'10px' }} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Buy Milk
                                </Typography>
                        </Paper>

                        <Paper key={2} elevation={3} sx={{lineHeight:'30px', marginTop:'10px'}} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Drink Milk
                                </Typography>
                        </Paper>
                    </CardContent>
                </Card>

                <Card my={20} sx={{ maxWidth: 345, marginTop:'50px' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Paper key={1} elevation={3} sx={{lineHeight:'30px', marginTop:'10px' }} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Buy Milk
                                </Typography>
                        </Paper>

                        <Paper key={2} elevation={3} sx={{lineHeight:'30px', marginTop:'10px'}} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Drink Milk
                                </Typography>
                        </Paper>
                    </CardContent>
                </Card>

                <Card my={20} sx={{ maxWidth: 345, marginTop:'50px' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Paper key={1} elevation={3} sx={{lineHeight:'30px', marginTop:'10px' }} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Buy Milk
                                </Typography>
                        </Paper>

                        <Paper key={2} elevation={3} sx={{lineHeight:'30px', marginTop:'10px'}} >
                               <Typography variant="h5" p={1} useFlexGap>
                                Drink Milk
                                </Typography>
                        </Paper>
                    </CardContent>
                </Card>
                
            </Box>
        </Container>
    );
}
export default ToDOApp;