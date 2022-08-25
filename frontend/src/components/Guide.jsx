import React from "react";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const AppStreamCam = () => {
    const streamCamVideo = () => {
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (mediaStream) {
                var video = document.querySelector("video");

                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (err) {
                console.log(err.name + ": " + err.message);
            }); // always check for errors at the end.
    };

    useEffect(() => {
        streamCamVideo();
    }, []);

    return (
        <div>
            <video autoPlay={true} id="videoElement"></video>
        </div>
    );
};

// class WebCam extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { videoSrc: null };
//     }

//     componentDidMount() {
//         navigator.getUserMedia =
//             navigator.getUserMedia ||
//             navigator.webkitGetUserMedia ||
//             navigator.mozGetUserMedia ||
//             navigator.msGetUserMedia ||
//             navigator.oGetUserMedia;
//         if (navigator.getUserMedia) {
//             navigator.getUserMedia(
//                 { video: true },
//                 this.handleVideo,
//                 this.videoError
//             );
//         }
//     }
//     handleVideo(stream) {
//         // Update the state, triggering the component to re-render with the correct stream
//         this.setState({ videoSrc: window.URL.createObjectURL(stream) });
//     }
//     videoError() {}
//     render() {
//         return (
//             <div>
//                 <video src={this.state.videoSrc} autoPlay={true} />
//             </div>
//         );
//     }
// }

export default function Guide({ currentGesture }) {
    // console.log(currentGesture);
    return (
        <div className="Guide">
            <Typography variant="h5">
                Now Recording: {currentGesture}
            </Typography>
            {/* <AppStreamCam /> */}
            <img
                src={require(`../assets/${currentGesture}.gif`)}
                alt="guide"
                width={480}
            />
        </div>
    );
}
