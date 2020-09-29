import React, { Component } from 'react';
import './ContactUs.css';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const NotDesktop = props => <Responsive {...props} maxWidth={991} />;

export default class ContactUs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="mx-3">
                
                <a href="mailto:president@ucltechsoc.com" class="icon-button email my-2" title= "Email Us">
                    <i class="fa fa-envelope icon-email"></i><span/>
                </a>

                <a href="https://facebook.com/ucltechsoc" class="icon-button facebook my-2" title= "UCL Technology Society on Facebook">
                    <i class="fa fa-facebook-official icon-facebook"></i><span/>
                </a>

                <a href="https://twitter.com/ucltechsoc" class="icon-button twitter my-2" title= "UCL Technology Society on Twitter">
                    <i class="fa fa-twitter icon-twitter"></i><span/>
                </a>
                
                <a href="https://www.linkedin.com/company/ucltechsoc" class="icon-button linkedin my-2" title= "UCL Technology Society on LinkedIn">
                    <i class="fa fa-linkedin icon-linkedin"></i><span/>
                </a>

                <a href="https://instagram.com/ucltechsoc" class="icon-button instagram my-2" title= "UCL Technology Society on Instagram">
                    <i class="fa fa-instagram icon-instagram"></i><span/>
                </a>

                <a href="https://www.snapchat.com/add/techsoc" class="icon-button snapchat my-2" title= "UCL Technology Society on Snapchat">
                    <i class="fa fa-snapchat-ghost icon-snapchat"></i><span/>
                </a>

                <a href="https://github.com/ucltechsoc" class="icon-button github my-2" title= "UCL Technology Society on GitHub">
                    <i class="fa fa-github icon-github"></i><span/>
                </a>

                <a href="https://techsoc.slack.com/" class="icon-button slack my-2" title= "UCL Technology Society on Slack">
                    <i class="fa fa-slack icon-slack"></i><span/>
                </a>
            </div>
        );
    }
}