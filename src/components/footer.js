import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Footer extends Component {
  render() {
    return (
        <Grid className=" footer text-center row">
            <Cell col={12}>
                <h4>My Portfolio</h4>
                <ul className="social-networks spin-icon">
                    <li><a href="/" className="icon-facebook">Facebook</a></li>
                    <li><a href="/" className="icon-twitter">Twitter</a></li>
                    <li><a href="/" className="icon-linkedin">LinkedIn</a></li>
                    <li><a href="/" className="icon-pinterest">Pinterest</a></li>
                    <li><a href="/" className="icon-instagram">Instagram</a></li>
                </ul>
                <p className="text-center margin-top-30">
                © Copyright 2017 <a href="/" style={{color: "white", textDecoration: "none"}}>Portfolio Template </a> 
                </p>
            </Cell>
        </Grid>
    )
  }
}
