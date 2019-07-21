import React, {Component, Fragment} from 'react';
import {Parallax} from 'react-materialize';
import {translate, Trans} from "react-i18next";
import "./Banner.scss"
import bannerImg from '../../images/home/background.jpg';
import logoSw from '../../images/GSWSR-White.png';
import {EventResources} from '../../utils/event-resources.constant';

class Banner extends Component {
    render() {
        const registrationFormUrl = EventResources.registrationFormUrl;

        return (
            <Fragment>
                <Trans>
                    <div className="parallax-container top-section valign-wrapper">
                        <div className="parallax-container-data center-align">
                            <div className="container">
                                <div className="row">
                                    <img id="banner-logo" src={logoSw} alt={this.props.t('main-event.name')}/>
                                    <h3 className="section-title"> {this.props.t('main-event.slogan')} </h3>
                                    <h6 id="place-and-date"> {this.props.t('main-event.place-and-date')} </h6>
                                    <br/>
                                    <a className="btn-large waves-effect" href={registrationFormUrl} target="_blank"
                                       rel="noopener noreferrer">
                                        {this.props.t('main-event.call-to-action')}
                                    </a>
                                    <span id="arrow-down">
                                    <i className="fas fa-chevron-down fa-2x highlight-text"/>
                                </span>
                                </div>
                            </div>
                        </div>
                        <Parallax image={
                            <img src={bannerImg} alt={this.props.t('main-event.name')}/>
                        }/>
                    </div>
                </Trans>
            </Fragment>
        );
    }
}

export default translate('common')(Banner);
