import React, { useEffect, useState } from "react";
import { getDocs, collection, onSnapshot, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from "../firebase-config";
import CountLikes from "./CountLikes";
import FollowBlog from "../components/Following";
import DeletePost from "../components/DeletePost";


// create function to display all posts - useState set to empty array
function Home( {isAuth} ) {
    const [posts, setPosts] = useState([])
    
// useEffect to get posts from Database and create a post reference for the post and set it equal to 'collection' from firestore and pass in 'db' 
    // from fire-base config, pass in 'posts' from database (title of collection in Firebase) 
    useEffect(() => {
        const postRef = collection(db, "posts");
        // create the query from Firestore and pass in the postref created - order my descending order
        const q = query(postRef, orderBy("createdAt", "desc"));
        // use onSnapshot from Firestore to get the data from the database
        onSnapshot(q,(snapshot) => {
        // create an array with data and id map to id and doc and set to state
            const posts = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(posts);
            console.log(posts);
        });


}, []);
    return (
        <div className="HomePageDisplay">
            {/* If there are no posts, display No Posts Found, otherwise display the current posts */}
            <h1 className="blogPost">Blog Post</h1>
            {posts.length === 0 ? (
                <p>No Posts Found</p>
                ) : (
                    // if posts are present need to map through them
                    posts.map(({id, author, title, post, imageUrl, createdAt}) => (
                    <div className="border mt-3 p-3" key={id}>
                        <div className="Home">
                            <div className="Home">
                                {/* import FollowBlog component */}
                                <FollowBlog/>
                                {/* import delete post component */}
                            {
                        }
                                <DeletePost id={id} imageUrl={imageUrl}/>
                                
                                {/* display title and image, set image size */}
                                <h3>{title}</h3>
                                <img src ={imageUrl} alt = 'title' style={{height: 280, width: 470}}/>
                            </div>
                            <div className="Home">
                                {/* display post, created date, and author name */}
                                <h4>{post}</h4>
                                <br></br>
                            </div>
                            <p>{createdAt.toDate().toDateString()}</p>
                            <h6>@{author.name}</h6>
                            {/* import LikePost component */}
                            < CountLikes />
                        </div>
                    </div>
                ))
           )}

        </div>
    )
}

export default Home;



