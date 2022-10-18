import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import '../css/Phonetic.css';

export default function Phonetic(props) {
    if (props.phonetic.audio) {
        return (
            <div className="Phonetic">
                <div><em>{props.phonetic.text}</em></div>
                <ReactAudioPlayer
                    src={props.phonetic.audio}
                    controls
                    controlsList={false}
                    autoPlay={false}
                />
            </div>
        );
    } else {
        return (
            <div className="Phonetic">
                <div><em>{props.phonetic.text}</em></div>
            </div>
        )
    }

}