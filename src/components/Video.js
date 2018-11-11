import React from "react";
import "video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton, VolumeMenuButton, ControlBar } from 'video-react';

const Video = () => {
    return(
        <Player
            fluid="true"
            playsInline
            poster="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false} className="my-class" >
                <VolumeMenuButton vertical />
            </ControlBar>
        </Player>

    );};

export default Video;