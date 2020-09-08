import React from "react";

function CharacterThumbnail(props) {
  const { url, altText = 'altText' } = props;
  return (
    <div>
      <img src={url} alt={altText} />
    </div>
  );
}

export { CharacterThumbnail };
