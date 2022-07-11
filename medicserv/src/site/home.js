import React from "react";
import AppContainer from "./components/AppContainer";
import TCB from "./components/topcontactusbanner";
import Card1 from "./components/Card1.js";
import Card2 from "./components/Card2.js";


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import store from "../store"


class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems:[],
        };

        store.subscribe(()=>{
            const myState= store.getState();
            console.log("IN home > myState > ",myState);
            this.setState({
                cartItems:myState.performAddToCart.cartItems
            });
        });
    }
    componentDidMount() {
        console.log("this.props > ",this.props);
     }
    render() {

        const Service1 = (
            
            <>
                <div className="height-50"></div>
                <Typography variant="h6" gutterBottom component="div" className="subtitle-heading">
                    Lab Tests Packages
                </Typography>
                <Grid container spacing={0}>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <Card1 
                        title1="Fasting Blood Sugar"
                        title2="known as Glucose Fasting Blood"
                        title3="Free Home Sample Pickup & E-Reports on Same day"
                        price="150"
                        onClick={this.props.addToCart}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <Card1 
                        title1="Fasting Blood Sugar"
                        title2="known as Glucose Fasting Blood"
                        title3="Free Home Sample Pickup & E-Reports on Same day"
                        price="150"
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <Card1 
                        title1="Fasting Blood Sugar"
                        title2="known as Glucose Fasting Blood"
                        title3="Free Home Sample Pickup & E-Reports on Same day"
                        price="150"
                        />
                    </Grid>
                    
                </Grid>
            </>
        );

        const Service2 = (
            <>
                <div className="height-50"></div>
                <Typography variant="h6" gutterBottom component="div" className="subtitle-heading">
                   Medicines at you door
                </Typography>
                <Grid container spacing={0}>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <Card2/>
                    {/* <img src="/img/img-book-med.png"/> */}
                </Grid>
                </Grid>
            </>
        );

        const Service3 = (
            <>
                <div className="height-50"></div>
                <Typography variant="h6" gutterBottom component="div" className="subtitle-heading">
                    Lab Tests
                </Typography>
                <Grid container spacing={0}>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <Card1 
                        title1="Fasting Blood Sugar"
                        title2="known as Glucose Fasting Blood"
                        title3="Free Home Sample Pickup & E-Reports on Same day"
                        price="150"
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <Card1 
                        title1="Fasting Blood Sugar"
                        title2="known as Glucose Fasting Blood"
                        title3="Free Home Sample Pickup & E-Reports on Same day"
                        price="150"
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <Card1 
                        title1="Fasting Blood Sugar"
                        title2="known as Glucose Fasting Blood"
                        title3="Free Home Sample Pickup & E-Reports on Same day"
                        price="150"
                        />
                    </Grid>
                    
                </Grid>
            </>
        );

        return (
            <>
                <AppContainer
                   cartItems={this.state.cartItems}
                    html={<>
                        <TCB/>

                        {Service1}
                        {Service2}
                        {Service3}
                        
                    </>}
                />
                 
            </>
        )
    }
}
export default home;