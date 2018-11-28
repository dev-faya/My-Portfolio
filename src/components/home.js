import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Hnavbar from './navbar';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Hnavbar />
        <div className="home-section" id="home">
            <Grid className="landing-grid">
                <Cell col={12} >
                    <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar-pic"
                        className="avatar-img"
                    />
                    
                    <div className="banner-text" style={{marginBottom: "10%"}}>
                        <Cell col={12}>
                            <Cell col={12}>
                                <h1>Front-End Web Developer</h1>
                            </Cell>

                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React | JQuery</p>
                        </Cell>

                        {/* LinkedIn */}
                        <Cell col={12} className="social-links">
                            <Cell col={3}>
                                <a href="#home" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                            </Cell>

                        {/* GitHub */}
                            <Cell col={3}>
                                <a href="#home" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </Cell>

                        {/* Freecodecam */}
                            <Cell col={3}>
                                <a href="#home" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                            </Cell>

                        {/* Youtube */}
                            <Cell col={3}>
                                <a href="#home" target="_blank">
                                    <i className="fa fa-youtube-square" />
                                </a>
                            </Cell>
                        </Cell>
                    </div>
                </Cell>
            </Grid>
        </div>
      </div>
    )
  }
}
