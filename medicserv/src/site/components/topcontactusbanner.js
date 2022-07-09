import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

 

class topcontactusbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { }
    render() {
        return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card sx={{ bgcolor: '#e6f5fc' }} className="theme">
                                <CardHeader
                                    className="theme"
                                    avatar={
                                        <Avatar sx={{ bgcolor: '#2196f3' }} aria-label="recipe">
                                           <SupervisedUserCircleIcon/>
                                        </Avatar>
                                    }
                                    action={
                                        <>
                                            <h4><CallIcon /> +91-999999999</h4>
                                        </>
                                    }
                                    title="Need help with any medical services?"
                                    subheader="We are here to help you"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}
export default topcontactusbanner;