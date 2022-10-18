import React from 'react'
import Synonyms from './Synonyms';
import '../css/Meanings.css'

export default function Meanings(props) {
    return (
        <div className="Meanings papers">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="definition"><span>Definition:</span> {definition.definition}</div>
                        <p className="example"><span>Example:</span> {definition.example}</p>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}
        </div>
    );
}