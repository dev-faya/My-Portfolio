import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class About extends Component {
  render() {
    return (
        <div className="about-section container" id="about">
            <Grid>
                <Cell col={12}>
                    <h2 style={{marginBottom: '35px'}}>About</h2>
                </Cell>
                <Cell col={4} className="about-me">
                    <h3>
                        <i className="fa fa-user" aria-hidden="true" />
                        About Me
                    </h3>
                    <p>
                    I am a passionate User Experience and User Interface Designer who has been working in this field for more than 3 years now.
                    You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. 
                    This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!
                    </p>
                </Cell>
                <Cell col={4}>
                        <h3>
                            <i className="fa fa-building" aria-hidden="true" />
                            Work History
                        </h3>
                        <div className="block experience">
                            <h4>Product Manager</h4>
                            <ul >
                                <li>
                                    <p>
                                        <i className="fa fa-building" aria-hidden="true" />
                                        Dropbox
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                        2017-Present
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="block experience">
                            <h4>UX Design</h4>
                            <ul>
                                <li>
                                    <p>
                                        <i className="fa fa-building" aria-hidden="true" />
                                        Dropbox
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                        2017-Present
                                    </p>
                                </li>
                            </ul>
                        </div>
                </Cell>
                <Cell col={4}>
                        <h3>
                            <i className="fa fa-building" aria-hidden="true" />
                            Work History
                        </h3>
                        <div className="block experience">
                            <h4>Product Manager</h4>
                            <ul>
                                <li>
                                    <p>
                                        <i className="fa fa-building" aria-hidden="true" />
                                        Dropbox
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                        2017-Present
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="block experience">
                            <h4>UX Design</h4>
                            <ul>
                                <li>
                                    <p>
                                        <i className="fa fa-building" aria-hidden="true" />
                                        Dropbox
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                        2017-Present
                                    </p>
                                </li>
                            </ul>
                        </div>
                </Cell>
            </Grid>
        </div>
    )
  }
}
