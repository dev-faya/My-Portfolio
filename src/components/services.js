import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Services extends Component {
  render() {
    return (
        <Grid className="services-section container-fluid" id="services" style={{backgroundColor: 'whitesmoke', paddingTop: '70px'}}>
            <div className="container">
                <Cell col={12}>
                    <h2 style={{marginBottom: '35px'}}>
                    What I Do
                    </h2>
                </Cell>
                {/* Start Area Services */}
                <Grid>

                    <Cell col={4}>
                        <div className="block service">
                            <i className="fa fa-code fa-3x" aria-hidden="true"/>
                            <h4>WEB DESIGN</h4>
                            <p>
                                Ex fugiat commodo ea anim anim consectetur. 
                                Commodo proident laboris officia est amet consequat dolore culpa.
                            </p>
                        </div>
                    </Cell>

                    <Cell col={4}>
                        <div className="block service">
                            <i className="fa fa-paint-brush fa-3x" aria-hidden="true" />
                            <h4>UI/UX DESIGN</h4>
                            <p>
                                Ex fugiat commodo ea anim anim consectetur. 
                                Commodo proident laboris officia est amet consequat dolore culpa.
                            </p>
                        </div>
                    </Cell>

                    <Cell col={4}>
                        <div className="block service">
                            <i className="fa fa-code fa-3x" aria-hidden="true" />
                            <h4>Developments</h4>
                            <p>
                                Ex fugiat commodo ea anim anim consectetur. 
                                Commodo proident laboris officia est amet consequat dolore culpa.
                            </p>
                        </div>
                    </Cell>

                    <Cell col={4}>
                        <div className="block service">
                            <i className="fa fa-mobile fa-3x" aria-hidden="true" />
                            <h4>Fully Responsive</h4>
                            <p>
                                Ex fugiat commodo ea anim anim consectetur. 
                                Commodo proident laboris officia est amet consequat dolore culpa.
                            </p>
                        </div>
                    </Cell>

                    <Cell col={4}>
                        <div className="block service">
                            <i className="fa fa-download fa-3x" aria-hidden="true" />
                            <h4>Easy Installation</h4>
                            <p>
                                Ex fugiat commodo ea anim anim consectetur. 
                                Commodo proident laboris officia est amet consequat dolore culpa.
                            </p>
                        </div>
                    </Cell>

                    <Cell col={4}>
                        <div className="block service">
                            <i className="fa fa-camera fa-3x" aria-hidden="true" />
                            <h4>Photography</h4>
                            <p>
                                Ex fugiat commodo ea anim anim consectetur. 
                                Commodo proident laboris officia est amet consequat dolore culpa.
                            </p>
                        </div>
                    </Cell>
                </Grid>
                {/* End Area Services */}
            </div>
        </Grid>
    )
  }
}
