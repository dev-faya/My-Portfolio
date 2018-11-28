import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <Grid className="projects-grid">
                    {/* Project 1 */}
                    <Cell col={4}>
                        <Card shadow={5} 
                        style={{minWidth: '450', width: '100%', margin: 'auto'}}
                        >
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 2 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 3 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Grid className="projects-grid">
                    {/* Project 1 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://www.oxiwiz.fr/wp-content/uploads/2018/01/Angular-JS_referencement-seo-1-1024x547.png) center / cover'}}>Angular Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 2 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://www.oxiwiz.fr/wp-content/uploads/2018/01/Angular-JS_referencement-seo-1-1024x547.png) center / cover'}}>Angular Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 3 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://www.oxiwiz.fr/wp-content/uploads/2018/01/Angular-JS_referencement-seo-1-1024x547.png) center / cover'}}>Angular Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Grid className="projects-grid">
                    {/* Project 1 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png) center / cover'}}>JavaScript Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 2 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png) center / cover'}}>JavaScript Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 3 */}
                    <Cell col={4}>
                        <Card shadow={5} style={{minWidth: '450', width: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height:'176px', background:'url(https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png) center / cover'}}>JavaScript Project #1</CardTitle>
                            <CardText>
                                Cillum duis aute sunt amet voluptate ipsum exercitation duis irure officia sit deserunt excepteur sunt. Nulla culpa ea fugiat veniam deserunt do esse consectetur officia sint fugiat irure. 
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
    }

    render() {
        return (
        <div className="projects-section category-tabs container-fluid" style={{backgroundColor: 'whitesmoke', paddingTop: '10px'}} id="projects">
            <div className="container">
                <h2 style={{marginBottom: '35px'}}>Projects</h2>
                <Tabs style={{marginBottom: '35px'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{padding: '0 0 0 15px'}}>React</Tab>
                    <Tab style={{padding: '0 0 0 15px'}}>Angular</Tab>
                    <Tab style={{padding: '0 0 0 15px'}}>JavaScript</Tab>
                </Tabs>

                <div>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                </div>
            </div>
        </div>
        )
    }
}
