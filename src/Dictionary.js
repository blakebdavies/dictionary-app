import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState("false");
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
       setPhotos(response.data.photos);
    }

    function search(){
        //documentation: https://dictionaryapi.dev/
        const apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        const pexelsApiKey="563492ad6f917000010000019221e29b01444319b67a453acdee8540";
        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers= {"Authorization" : `Bearer ${pexelsApiKey}`};

        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
    setLoaded(true);
    search();
    }

    if (loaded){
    return (
     <div className="Dictionary">
         <section>
             <h1>What word would you like to look up?</h1>
       <form onSubmit={handleSubmit}>
           <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
       
       </form>
       <div className="hint">
           Suggested words: sunset, wine, yoga, forest
       </div>
       </section>
       <Results results={results}/>
       <Photos photos={photos} />
    </div>
    );
} else{
    load();
    return "Loading...";
}
}