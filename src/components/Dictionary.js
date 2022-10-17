import React, { useState } from 'react'

function Dictionary() {
    let [keyword, setKeyword] = useState("");


    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} word meaning`);
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
                    <input type="search" utoFocus={true} onChange={handleKeywordChange} placeholder="Enter the word..." />
                </form>
            </section>
        </div>
    )
}

export default Dictionary