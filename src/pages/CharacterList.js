import React, { useState, useEffect } from "react";
import { CharacterThumbnail } from '../components/CharacterThumbnail'
import './characterList.css'
import axios from 'axios'
import CryptoJS from 'crypto-js'

function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const timestamp = Date.now();
        const payload = timestamp + process.env.REACT_APP_MARVEL_PRIVATE_KEY + process.env.REACT_APP_MARVEL_PUBLIC_KEY;
        const hash = CryptoJS.MD5(payload).toString();

        const fetchCharacters = async () => {
            const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&limit=99&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${hash}`);
            const { data } = res.data;
            setCharacters(data.results)
        }

        fetchCharacters();
    }, [])

    const images = characters.map((entity, index) =>
        <div key={index}>
            <CharacterThumbnail altText={entity.name} url={entity.thumbnail.path + '/portrait_uncanny.' + entity.thumbnail.extension} />
        </div>
    );

    return (
        <div className="heros">
            {images}
        </div>
    )
}

export { CharacterList }