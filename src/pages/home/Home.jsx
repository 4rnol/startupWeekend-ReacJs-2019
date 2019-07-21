import React, {Component} from 'react';
import Banner from "../../components/banner/Banner";
import CountDown from "../../components/countDown/CountDown";
import About from "../../components/about/About";
import Metrics from "../../components/metrics/Metrics";
import Participants from "../../components/participants/Participants";
import Events from "../../components/events/Events";
import Location from "../../components/location/Location";

class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <CountDown/>
                <About/>
                <Metrics/>
                <Participants/>
                <Events/>
                <Location/>
            </div>
        );
    }
}

export default Home;
