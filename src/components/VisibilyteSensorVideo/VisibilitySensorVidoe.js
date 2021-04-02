import React, { useEffect, useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export const VisibilitySensorImage = (props) => {
    const videoRef = useRef(null);
    const [visible, setVisibile] = useState(false);
    const [disActive, setDisActive] = useState(true)

    useEffect(() => {
        if (visible) {
            videoRef.current.play();
        } else {
            if (videoRef.current.play) {
                videoRef.current.pause();
            }
        }
    }, [visible]);

    return (
        <VisibilitySensor
            onChange={isVisible => {
                if (isVisible && !visible) {
                    setVisibile(true);
                }
                if (!isVisible && visible) {
                    setVisibile(false);
                }
            }}
            active={disActive}
        >
            <video
                // className="card__video"
                width="470" height="250"
                controls ref={videoRef}
                muted="muted"
                onClick={() => setDisActive(false)}
            >
                <source src={props.src} type="video/mp4" />
            </video>
        </VisibilitySensor>
    );
}
