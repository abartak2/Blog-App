import { deleteDoc, doc } from 'firebase/firestore';
import {db, storage, auth } from '../firebase-config';
import { deleteObject, ref } from 'firebase/storage';
import React from 'react';
import { toast } from 'react-toastify';

// create delete function and pass the id and image url 
function DeletePost({id, imageUrl, post, author, isAuth}) {
    // create const funct to handle delete use deleteDoc from firestore to delete by id and pass db from config and collection name 'posts'
    // make async and add try and catch to display errors from Toast and delete image from storage in Firebase
    const handleDelete = async() => {

        if(window.confirm("Do you really want to delete this post?")) {
        }
        try {
         await  deleteDoc(doc(db, "posts", id))
         toast("Post Deleted Successfully", {type:"success"})
         const storageRef = ref(storage, imageUrl, id,)
         await deleteObject(storageRef)

        }catch (error) {
            toast("Error Deleting Post", {type: "error"})
            console.log(error);
            }
        }
    
    return (
        // create delete button using a trash icon create onclick to handle delete
        <div className>
            <button className="deleteButton" 
            
            onClick={handleDelete}>
                {""}
                &#128465;  
            {/* )} */}
            </button>
        </div>
        
    )
}

export default DeletePost;






