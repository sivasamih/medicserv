import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';

export default function Card1(props) {
    return (
        <Box sx={{ minWidth: 240, marginRight: 2,marginTop:1 }}>
            <Card variant="outlined" className='card1'>
                <CardHeader
                    title={<>
                    <Typography variant="h5" component="div">
                        {props.title1}
                    </Typography>
                    </>}
                    subheader={<>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.title2}
                    </Typography>
                    </>}
                    action={
                        <>
                           <Chip className='price-chip' label={<>
                            &#8377;{props.price}
                           </>} />  
                        </>
                    }

                />
                <CardContent>
                    <Typography variant="body2">
                        {props.title3}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Know More</Button>
                </CardActions> */}
            </Card>
        </Box>
    );
}
