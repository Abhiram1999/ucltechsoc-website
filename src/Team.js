import React, { Component } from 'react';
import './Team.css';
import Responsive from 'react-responsive';
import Slider from 'react-slick';
import AbhiramIcon from './static/team/Abhiram.jpg';
import AnushaIcon from './static/team/Anusha.jpeg';
import ArshiaIcon from './static/team/Arshia.jpeg';
import AliIcon from './static/team/Ali.jpeg';
import DeepIcon from './static/team/Deep.jpeg';
import GurneekIcon from './static/team/Gurneek.jpeg';
import JasnoorIcon from './static/team/Jasnoor.jpeg';

class Team extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const urls = this.props.urls;
        var settings = {
            accessibility: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            infinite: true,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ],
            rows: 1,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div>
                <div class="container">
                    <div class="row justify-content-md-center mb-4">
                        <div class="col col-md-auto">
                            <div class="member-container">
                                <div class="container2">
                                    <img src={DeepIcon} alt="Deep Shah" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:president@ucltechsoc.com" target="_new" class="white-text" title="Email Deep">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/deeps-github" target="_new" class="white-text" title="Deep's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/deep-s/" target="_new" class="white-text" title="Deep's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/deep.shah.52090" target="_new" class="white-text" title="Deep's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Deep Shah </h4>
                                <h5 class="mx-auto mt-1 mb-3"> President </h5>
                            </div>
                        </div>

                        <div class="col col-md-auto">
                            <div class="member-container">
                                <div class="container2">
                                    <img src={AliIcon} alt="Ali Syed" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:treasurer@ucltechsoc.com" target="_new" class="white-text" title="Email Ali">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/malisyed" target="_new" class="white-text" title="Ali's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="http://linkedin.com/in/ma-syed/" target="_new" class="white-text" title="Ali's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/" target="_new" class="white-text" title="Ali's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Ali Syed </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Treasurer </h5>
                            </div>
                        </div>
                    </div>

                    <Slider {...settings}>
                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={JasnoorIcon} alt="Jasnoor Kaur" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:vp@ucltechsoc.com" target="_new" class="white-text" title="Email Jasnoor">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/jasnoor7" target="_new" class="white-text" title="Jasnoor's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/jasnoor-kaur-00ba12161/" target="_new" class="white-text" title="Jasnoor's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/jasnoor.kaur.14606" target="_new" class="white-text" title="Jasnoor's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Jasnoor Kaur </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Vice President </h5>
                            </div>
                        </div>

               
                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={AbhiramIcon} alt="Abhiram Sasitharan" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:events@ucltechsoc.com" target="_new" class="white-text" title="Email Abhiram">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/Abhiram1999" target="_new" class="white-text" title="Abhiram's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/abhiram-sasitharan-309b1a1b0/" target="_new" class="white-text" title="Abhiram's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/abhiram.sasitharan.1999" target="_new" class="white-text" title="Abhiram's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3">Abhiram Sasitharan </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Events Director </h5>
                            </div>
                        </div>


                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={GurneekIcon} alt="Gurneek Gill" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:sponsorship@ucltechsoc.com" target="_new" class="white-text" title="Email Gurneek">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/" target="_new" class="white-text" title="Gurneek's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/gurneek-gill-86932a18a/" target="_new" class="white-text" title="Gurneek's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/gurneek.gill" target="_new" class="white-text" title="Gurneek's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Gurneek Gill </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Sponsorship Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={AnushaIcon} alt="Anusha Patel" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:marketing@ucltechsoc.com" target="_new" class="white-text" title="Email Anusha">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/anupatel99" target="_new" class="white-text" title="Anusha's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/anusha-n-patel/" target="_new" class="white-text" title="Anusha's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/anusha.patel.7982" target="_new" class="white-text" title="Anusha's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Anusha Patel </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Marketing Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={ArshiaIcon} alt="Arshia Fazeli" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:welfare@ucltechsoc.com" target="_new" class="white-text" title="Email Arshia">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/arshiiyyaaa" target="_new" class="white-text" title="Arshia's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="http://www.linkedin.com/in/arshia-fazeli-071274172" target="_new" class="white-text" title="Arshia's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/arshiiyya" target="_new" class="white-text" title="Arshia's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Arshia Fazeli </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Welfare Officer </h5>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}
export default Team;
