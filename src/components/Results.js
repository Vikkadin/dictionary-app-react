import React from 'react'
import Phonetics from './Phonetics'
import Meanings from './Meanings'
import '../css/Results.css'

export default function Results(props) {
    if (props.result) {
        return (
            <div className="Results">
                <section>
                    <h2>{props.result.word}</h2>
                    {props.result.phonetics.map(function (phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetics phonetic={phonetic} />
                            </div>
                        );
                    })}
                </section>
                {props.result.meanings.map(function (res, index) {
                    return (
                        <section key={index}>
                            <Meanings meaning={res} />
                        </section>
                    )

                })}
            </div>
        );
    } else {
        return null;
    }
}