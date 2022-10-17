import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import '../css/Phonetic.css';

export default function Phonetic(props) {
    if (props.phonetic.audio) {
        return (
            <div className="Phonetic">
                <p><em>{props.phonetic.text}</em></p>
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
                <p><em>{props.phonetic.text}</em></p>
            </div>
        )
    }

}