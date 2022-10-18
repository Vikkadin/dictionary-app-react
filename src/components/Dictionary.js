import React, { useState } from 'react'
import axios from 'axios'
import Results from './Results';
import Photos from './Photos';
import '../css/Dictionary.css'

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [response, setResponse] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResponse(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        axios.get(apiUrl).catch(function (error) {
            alert(`Sorry, I don't know word "${keyword}". Try another one :)`);
        });

        const pexelsApiKey = "563492ad6f917000010000010f12befde61a4f03997db0b07a1b52fe";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
        let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary col-11 col-md-7 mx-auto">
            <section>
                <h2>What word do you want to look up?</h2>
                <form className="input-box" onSubmit={search}>
                    <div className="hint">
                        Suggested word: sunset, love, yoga, road ...
                    </div>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} class="form-control" placeholder="Enter the word..." />
                </form>
            </section>
            <section>
                <Results result={response} />
                <Photos photos={photos} />
            </section>
        </div>
    )
}

export default Dictionary

