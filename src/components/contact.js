import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className="container contact-section" id="contact-us">
        <Grid>
            <Cell col={12}>
                <h2 style={{fontSize: '35px', marginBottom: '40px'}}>CONTACT ME.</h2>
            </Cell>
                <Cell col={4} className="info">
                    <div className="block">
                        <i className="fa fa-envelope fa-2x" aria-hidden="true" />
                        <h4 style={{fontWeight: "600"}}>Email Address</h4>
                    </div>
                    <div>
                        <p>example@example.com</p>
                        <p>example@example.com</p>
                    </div>
                </Cell>

                <Cell col={4} className="info">
                    <div className="block">
                        <i className="fa fa-phone fa-2x" aria-hidden="true" />
                        <h4 style={{fontWeight: "600"}}>Call Us</h4>
                    </div>
                    <div>
                        <p>(+33) 123 456 789</p>
                        <p>(+33) 123 456 789</p>
                    </div>
                </Cell>

                <Cell col={4} className="info">
                    <div className="block">
                        <i className="fa fa-home fa-2x" aria-hidden="true" />
                        <h4 style={{fontWeight: "600"}}>Office</h4>
                    </div>
                    <div>
                        <p>example@example.com</p>
                        <p>example@example.com</p>
                    </div>
                </Cell>
        </Grid>
        <Grid style={{marginTop: '30px'}}>
            <Cell col={12}>
                <div className="contact-form">
                    <form id="contact-form" method="post" action="#">
                        {/*<!-- Start Contact From -->*/}
                        <div className="messages"></div>
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <i className="fa fa-user-o"></i>
                                        <input id="form_name" type="text" name="name" className="form-control" placeholder="Name*" required="required" data-error="Name is required."/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <i className="fa fa-envelope-o"></i>
                                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Email*" required="required" data-error="Valid email is required."/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <i className="fa fa-question-circle-o"></i>
                                        <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject*" required="required" data-error="Subject is required."/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <i className="fa fa-comment-o"></i>
                                        <textarea id="form_message" name="message" className="form-control" placeholder="Message*" rows="7" required="required" data-error="Please,leave us a message."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" className="btn btn-effect btn-sent" value="Send message"/>
                                </div>
                            </div>
                        </div>
                    </form> {/*<!-- End Contact From -->*/}
                </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}
