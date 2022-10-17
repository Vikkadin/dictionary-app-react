import React from 'react'
import Meanings from './Meanings'

function Results(props) {
    if (props.result) {
        return (
            <div className="Results">
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

export default Results