import React, {useEffect, useState} from "react";
import { addDoc, collection, limitToLast, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, auth, storage } from "../firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



// create function to create a new post and store data in State, set state to author, title, description, image, and created date
function CreatePost({ isAuth }) {
    const [formData, setFormData] = useState({
        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
        title: "",
        description:"",
        image: "",
        createdAt: Timestamp.now().toDate,
    });

    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();

    // create handle change functions to set the values
    const handleChange=(e) => {
        setFormData({...formData,[e.target.name]: e.target.value })
    }

    const handleImageChange=(e) => {
        setFormData({...formData, image:e.target.files[0]})
    }
    // send an error if all form inputs are not completed and return to stop code
    const handleSubmit = () => {
        if(!formData.title || !formData.post || !formData.image){
            alert("Please Complete all Fields");
            return;
        }

        // create a storage reference from Firebase storage with two paramters - storage from config and view the path using timestamp so duplicate
            // images don't replace the first one
        const storageRef = ref(storage, `/images/${Date.now()} ${formData.image.name.author}`);

        // upload the image using uplaodBytesResumable from firebase config, takes two parameters - storage reference and image file, store in variable
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
        // create event for state_changed, second paramenter is a callback, takes snapshot of current state
        uploadImage.on("state_changed",
        (snapshot) => {
            // create variable to get percent set equal to the bytes transferred on the snapshot divided by totalBytes, times 100 to get percent, round up
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // save progress percent in state
            setProgress(progressPercent);
            },
            // next parameter is a callback function that takes error
            (err) => {
                console.log(err);
            },
            // callback funcion for when upload is complete
            () => {
                setFormData({
                    author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
                    title: "",
                    post: "",
                    image: "",
                });
                // getDownloadUrl from firestore pass upload image with snapshot reference, after getting URL add author, title, post, image, created date
                getDownloadURL(uploadImage.snapshot.ref)
                // create post reference set equal to db from config and the collection posts from Firebase
                .then((url) => {
                    const postRef = collection(db, "posts");
                    // addDoc promise from Firestore and pass the post reference and an object containing all the fields
                    addDoc(postRef, {
                        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
                        title: formData.title,
                        post: formData.post,
                        imageUrl: url,
                        createdAt: Timestamp.now().toDate(),
                    })
                    // use Toast to show the error and success messages
                    .then(() => {
                        toast("Post added Successfully", {type: "success" });
                        setProgress(0);
                    })
                    .catch((err) => {
                        toast("Error adding Post", {type: "error"});
                    })
                    navigate("/")
                })
            }
        );
        
    };
    return (
        // create the form to create a new post - add input for title, post, image
        
        <div className='border p-3 mt-3'>
            <h3 className="h3CreatePost">Create Post</h3>
            <label htmlFor="">Title</label>
            <input 
            type="text" 
            name="title" 
            className="form-control" 
            value={formData.title} 
            onChange= {(e) =>handleChange(e)}
            />

            {/* posts */}
            <label htmlFor="">Post</label>
            <textarea 
            name="post" 
            className='form-control' 
            value={formData.post}
            onChange= {(e) =>handleChange(e)}
            />

            {/* image */}
            <label htmlFor="">Image</label>
            <input 
            type="file" 
            name="image" 
            accept="image/*" 
            className="form-control" 
            onChange= {(e) =>handleImageChange(e)}
            />
            {/* create progress bar to display percent completed upon submit , don't show if progress equals 0*/}
            {progress === 0 ? null : (
                <div className="progress">
                    <div className="progress-bar progress-bar-striped mt-2" 
                    style={{width: `${progress}%`}}
                    >
                    {`uplaoding image ${progress}%`}
                    
                </div> 
                </div>
            )}
            {/* onClick to add data from the database */}
                <button className="form-control btn-primary mt-2" onClick={handleSubmit}>Submit</button>
            </div>
            
    );
}
export default CreatePost;


