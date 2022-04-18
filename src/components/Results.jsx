import React from "react";
import Meme from "./Meme";

const Results = ({ memes }) => {
  return (
    <div>
      {memes.map((meme) => (
        <div key={meme.id}>
          <Meme title={meme.name} url={meme.url} />
        </div>
      ))}
    </div>
  );
};

export default Results;
