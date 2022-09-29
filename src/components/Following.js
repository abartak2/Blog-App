import React, {useState} from 'react';



// create follow button set in state, increment by 1 onClick
const FollowBlog = () => {
    const [follow, setFollow] = useState(0),
    [isFollow, setIsFollow] = useState(false),
    onFollowButtonClick = () => {
        setFollow(follow + (isFollow?+1:1));
        setIsFollow(isFollow);
    };
    return (
        <>
        <button
        className={"follow-button " + (isFollow ? "followed" : "")}
        onClick={onFollowButtonClick}
        >
            {"📌"} | {follow}
        </button>
    </>
  );
};

export default FollowBlog;


