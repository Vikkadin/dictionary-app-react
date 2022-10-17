import React, { useState } from 'react'
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'
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
        <div className="Dictionary col-11 col-md-7 mx-auto">
            <section>
                <div className="hint">
                    What word do you want to look up?
                </div>
                <form class="input-box" onSubmit={search}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} class="form-control" placeholder="Enter the word..." />
                    <BsSearch className="icon" />
                </form>
                {/* <form onSubmit={search} >
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Enter the word..." />
                </form> */}
            </section>
            <section>
                <Results result={response} />
            </section>
        </div>
    )
}

export default Dictionary

