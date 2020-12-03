import React from 'react'
import { Slide, Zoom } from 'react-slideshow-image'
import './SlideShow.css'
import hkImage1 from '../SlideImages/hk1.jpg'
import hkImage2 from '../SlideImages/hk2.jpg'
import hkImage3 from '../SlideImages/hk3.jpg'
import hkImage4 from '../SlideImages/hk4.jpg'
import hkImage5 from '../SlideImages/hk5.jpg'
import hkImage6 from '../SlideImages/hk6.jpg'
import hkImage7 from '../SlideImages/hk7.jpg'
import hkImage8 from '../SlideImages/hk8.jpg'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

class SlideShow extends React.Component {
    state = {
        autoPlay: true,
    }

    zoomOutProperties = {
        indicators: true,
        scale: 0.4
    }

    render() {
        return (
            <div>
                <div>
                    <Slide scale={0.4} autoPlay={this.state.autoPlay} easing="ease">
                    {/* <Zoom scale={0.4} autoPlay={this.state.autoPlay} easing="ease"> */}
                        {/* <Zoom scale={0.4}> */}
                        <div className="each-slide">
                            <div>
                                <img src={hkImage1} alt="hk-1"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage2} alt="hk-2"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage3} alt="hk-3"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage4} alt="hk-4"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage5} alt="hk-5"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage6} alt="hk-6"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage7} alt="hk-7"/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <img src={hkImage8} alt="hk-8"/>
                            </div>
                        </div>
                        {/* </Zoom> */}
                    </Slide>
                </div>        
                <div className="autoplay-buttons">
                    { this.state.autoPlay ?
                        <PauseCircleFilledIcon onClick={() => this.setState({autoPlay: false})} />
                        :
                        <PlayCircleFilledIcon onClick={() => this.setState({autoPlay: true})} />
                    }
                </div>
            </div>
        )
    }
}
export default SlideShow