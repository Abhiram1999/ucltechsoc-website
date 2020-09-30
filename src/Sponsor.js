import React, { Component } from 'react';
import Slider from "react-slick";
import './Sponsor.css';
import CSImage from './static/sponsors/uclcs.svg';

var fetchUrl = "https://techsocbackend.azurewebsites.net/sponsors";

export class RenderSponsors extends React.Component {
    state = {
        sponsors: [],
        fetched: false,
        sponsorExists: false,
        // goldExists: false,
        // silverExists: false,
        // bronzeExists: false,
        // partnerExists: false,
    }

    getSponsorsList() {
        fetch(fetchUrl).then(function(response){
            return response.json();
        }).then(myJson => {
            this.setState({sponsors: myJson, fetched: true});
        });
    }

    componentDidMount() {
        this.getSponsorsList();
    }

    render(){
        // var goldSponsors, silverSponsors, bronzeSponsors, partners;
        var allSponsors;
        if(this.state.fetched){

             allSponsors = this.state.sponsors.map((e) => {
                if(e.sponsor.tier === "Gold" || e.sponsor.tier === "Silver" || e.sponsor.tier === "Bronze" || e.sponsor.tier === "Partners"){
                    if(!this.state.sponsorExists){
                    this.setState({sponsorExists:true});
                    }
                return(
                    <div class="container1 col-lg-4 col-md-6 col-sm-12" title={e.sponsor.name} style={{padding: 20}}>
                        <a href={e.sponsor.home_url}>
                            <img src={e.sponsor.img_url} alt={e.sponsor.name} class="image center-block d-block mx-auto"/>
                        </a>
                    </div>);
                }
            });

            // if(!this.state.sponsorExists){
            //     allSponsors = (
            //         <div style={{padding: 20}}>
            //             Interested in being a Gold Sponsor? Contact us now!
            //         </div>
            //     )
            // }

            // goldSponsors = this.state.sponsors.map((e) => {
            //     if(e.sponsor.tier === "Gold"){
            //         if(!this.state.goldExists){
            //         this.setState({goldExists:true});
            //         }
            //     return(
            //         <div class="container1 col-lg-4 col-md-6 col-sm-12" title={e.sponsor.name} style={{padding: 20}}>
            //             <img src={e.sponsor.img_url} alt={e.sponsor.name} class="image" />
            //         </div>);
            //     }
            // });

            // if(!this.state.goldExists){
            //     goldSponsors = (
            //         <div style={{padding: 20}}>
            //             Interested in being a Gold Sponsor? Contact us now!
            //         </div>
            //     )
            // }

            // silverSponsors = this.state.sponsors.map((e) => {
            //     if(e.sponsor.tier === "Silver"){
            //         if(!this.state.silverExists){
            //         this.setState({silverExists:true});
            //         }
            //     return(
            //         <div class="container1 col-lg-3 col-md-4 col-sm-6" title={e.sponsor.name} style={{padding: 20}}>
            //             <img src={e.sponsor.img_url} alt={e.sponsor.name} class="image" />
            //         </div>);
            //     }
            // });

            // if(!this.state.silverExists){
            //     silverSponsors =  (
            //         <div style={{padding: 20}}>
            //             Interested in being a Silver Sponsor? Contact us now!
            //         </div>
            //     )
            // } 

            // bronzeSponsors = this.state.sponsors.map((e) => {
            //     if(e.sponsor.tier === "Bronze"){
            //         if(!this.state.bronzeExists){
            //         this.setState({bronzeExists:true});
            //         }
            //         return(
            //         <div class="container1 col-lg-3 col-md-4 col-sm-6" title={e.sponsor.name} style={{padding: 20}}>
            //             <img src={e.sponsor.img_url} alt={e.sponsor.name} class="image" />
            //         </div>);
            //     } 
                
            // });

            // if(!this.state.bronzeExists){
            //     bronzeSponsors = (
            //         <div style={{padding: 20}}>
            //             Interested in being a Bronze Sponsor? Contact us now!
            //         </div>
            //     )
            // }

            // partners = this.state.sponsors.map((e) => {
            //     if(e.sponsor.tier === "Partners") {
            //         if(!this.state.partnerExists){
            //         this.setState({partnerExists:true});
            //         }
            //     return(
            //         <div class="container1 col-lg-2 col-md-3 col-sm-4" title={e.sponsor.name} style={{padding: 20}}>
            //             <img src={e.sponsor.img_url} alt={e.sponsor.name} class="image" />
            //         </div>);
            //     }
            // });

            // if(!this.state.partnerExists){
            //     partners = (
            //         <div style={{padding: 20}}>
            //             Interested in being a Partner? Contact us now!
            //         </div>
            //     )
            // }

        }

        return(
            <div>
                { this.state.fetched &&
                <div>
                     <div>
                    <div class="container">
                    <div class="row justify-content-center">
                    {allSponsors}
                    </div>
                    </div> 
                    </div>
                    {/* {this.state.goldExists && 
                    <div>
                    <div class="sponsor-title-light gold">Gold Sponsors</div>
                    <div class="container">
                    <div class="row justify-content-center">
                    {goldSponsors}
                    </div>
                    </div> 
                    </div>
                    }
                    {this.state.silverExists && 
                    <div>
                    <div class="sponsor-title-light silver">Silver Sponsors</div>
                    <div class="container">
                    <div class="row justify-content-center">
                    {silverSponsors}
                    </div>
                    </div>
                    </div>
                    }
                    {this.state.bronzeExists && 
                    <div>
                    <div class="sponsor-title-light bronze">Bronze Sponsors</div>
                    <div class="container">
                    <div class="row justify-content-center">
                    {bronzeSponsors}
                    </div>
                    </div>
                    </div>
                    }
                    {this.state.partnerExists && 
                    <div>
                    <div class="sponsor-title-light partners">Partners</div>
                    <div class="container">
                    <div class="row justify-content-center">
                    {partners}
                    </div>
                    </div>
                    </div>
                    } */}
                    {/* { !(this.state.goldExists && this.state.silverExists && this.state.bronzeExists && this.state.partnerExists) && */}
                    {/* <div>
                        <div class="container"><h3><br></br></h3></div>
                        <div class="container" style={{color:"rgba(51, 15, 83)", fontWeight: 800}}>
                        <h3> We're currently looking for more Sponsors!</h3>
                        </div>
                    </div> */}
                     {/* } */}
                </div>
            }
            { !this.state.fetched &&
                <div style={{padding: "auto"}}>{"Loading Sponsors... Please Wait"}<br/><i class="fa fa-circle-o-notch fa-spin fa-3x" style={{padding:"5%"}}/></div>
            }
            </div>
        );
    }
}

class Sponsor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const urls = this.props.urls;

        return (
            <div>
                    <RenderSponsors/>
            </div>
        );
    }
}

export default Sponsor;