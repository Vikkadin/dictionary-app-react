import React, { useState } from 'react'
import axios from 'axios'
import Results from './Results';
import '../css/Dictionary.css'

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [response, setResponse] = useState(null);

    function handleResponse(response) {
        setResponse(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <div className="hint">
                    What word do you want to look up?
                </div>
                <form onSubmit={search} >
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Enter the word..." />
                </form>
            </section>
            <section>
                <Results result={response} />
            </section>
        </div>
    )
}

export default Dictionary