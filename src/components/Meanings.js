import React from 'react'

function Meanings(props) {
    return (
        <div className="Meanings">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div>{definition.definition}</div>
                        <p className="example">{definition.example}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Meanings