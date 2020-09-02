import React from "react";
import source from '../resources/characters.json'
import { CharacterThumbnail } from '../components/CharacterThumbnail'
import './characterList.css'

function CharacterList() {

    const links = source.characters.map(entity => entity.thumbnail.path + '/portrait_uncanny' + '.' + entity.thumbnail.extension);
    const images = links.map(url => <CharacterThumbnail url={url} />);

    return (
        <>
            <h4>Click their portait to learn more about your heros</h4>
            <div className="heros">
                {images}
            </div>
        </>
    )
}

export { CharacterList }