import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { Container } from 'mdbreact';
import Responsive from 'react-responsive';
import NavbarFeatures from './navbarFeatures';
import Sponsor from './Sponsor';
import InfoCards from './InfoCards';
import Particles from 'react-particles-js';


const Desktop = props => <Responsive {...props} minWidth={992} />;
const NotDesktop = props => <Responsive {...props} maxWidth={991} />;

class App extends Component {
  render() {
    return (
      <div>
          <NavbarFeatures />
          <div className="App">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 20,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color: {
                    value: '#ffffff'
                  },
                  shape: {
                    type: 'circle',
                    stroke: {
                      width: 0,
                      color: '#000000'
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: 'canvas',
                  events: {
                    onhover: {
                      enable: false,
                      mode: 'repulse'
                    },
                    onclick: {
                      enable: false,
                      mode: 'push'
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true
              }
              }
              style={{
                width: '100%',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center'
              }}
            />
            <header className="App-header">
              <div class="container flex-center">
                <div class="row pt-5 mt-3">
                  <div class="col-md-12">
                    <h1 class="h1-responsive white-text font-weight-bold text-uppercase mb-3">UCL Technology Society</h1>
                    <hr class="hr-light mt-4" />
                    <br />
                    <h6 class="mb-6 white-text">Promoting technological awareness and innovation both within and beyond UCL</h6>
                    <br />
                    <a href="https://studentsunionucl.org/clubs-societies/technology-society" target="_new" class="btn btn-white waves-effect btn-md" role="button"><b>Register through UCL Student's Union</b></a>
                    <a id="open-popup" class="btn btn-white waves-effect btn-md" role="button"><b>Join our Mailing List</b></a>
                  </div>
                </div>
              </div>
            </header>

            <a id="about" class="anchor" />
            <section class="my-5 mx-5">
              <h2 class="h1-responsive font-weight-bold text-center my-3">About Us</h2>
              <p class="text-justify w-responsive mx-auto mb-5">
                TechSoc is one of the largest societies, the winner of the 2016/2017 Society of the Year award,
                and the only all-compassing technology society at University College London, as well as one of the
                largest technology societies in the UK. UCL is widely recognised to be among the ten best universities
                in the world by most international rankings, with a very active research community, the second highest
            research grant income in the UK and the country’s highest overall 4 <i class="fa fa-star" /> Research Activity in Computer Science
                      and Informatics in REF2014. Overwhelmingly, the most technically adept students at UCL are members of TechSoc.
            </p>

              <InfoCards />

              <p class="text-justify w-responsive mx-auto my-5">
                Looking forward to 2018/2019, we intend to build on our achievements by expanding the scope and
                sophistication of our activities, running more high-profile events and establishing special initiatives
                for key branches of technology.
            </p>

            </section>

            <a id="sponsors" class="anchor" />
            <section class="my-5">
              <h2 class="h1-responsive font-weight-bold text-center my-3">Our Sponsors</h2>
              <p class="text-center w-responsive mx-auto mb-5">Lol</p>

              <Sponsor name="test" />
            </section>

            <a id="team" class="anchor" />
            <section class="my-5">
              <h2 class="h1-responsive font-weight-bold text-center my-3">The Team</h2>
              <p class="text-center w-responsive mx-auto mb-5">Lol</p>
            </section>

            <a id="contact" class="anchor" />
            <section class="my-5">
              <h2 class="h1-responsive font-weight-bold text-center my-3">Contact Us</h2>
              <p class="text-center w-responsive mx-auto mb-5">Lol</p>
            </section>

          </div>


          <footer class="page-footer font-small footer-bg pt-4">

            <div class="container-fluid text-center text-md-center">
              <div class="row">
                <div class="col-md-6 mt-md-0 mt-3 flex-center">

                  <h5 class="text-uppercase font-weight-bold text-center logo"></h5>

                </div>

                <div class="col-md-6 mb-md-0 mb-3">

                  <p>Lol</p>

                </div>
              </div>
            </div>

            <div class="footer-copyright text-center py-3">© 2018 Copyright:
          <a href=""> UCL TechSoc</a>
            </div>
          </footer>
      </div>
        );
      }
    }
    
    export default App;
