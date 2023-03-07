import React from "react";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";

const Video = ({ isOpen, videoId, setOpen }) => {
    return (
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setOpen(false)}
        />
    );
};

Video.propTypes = {
    isOpen: PropTypes.bool,
    videoId: PropTypes.string,
    setOpen: PropTypes.func,
};

export default Video;
