import React from "react";

function CharacterThumbnail(props) {
  const { url } = props;
  return (
    <div>
      <img src={url} alt="altText" />
    </div>
  );
}

export { CharacterThumbnail };
