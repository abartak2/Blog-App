import React, {useState} from 'react';

// create love button set in state, increment by 1 onClick
const CountLikes = () => {
    const [love, setLove] = useState(0),
    [isLove, setIsLove] = useState(false),
    onLoveButtonClick = () => {
        setLove(love + (isLove?+1:1));
        setIsLove(isLove);
    };
    return (
        <>
        <button
        className={"love-button " + (isLove ? "loved" : "")}
        onClick={onLoveButtonClick}
        >
            {"❤️"} | {love}
        </button>
    </>
  );
};

export default CountLikes;

