import React, { useEffect, useState } from 'react';
// import firebase from 'firebase';
// import 'firebase/firestore';
import Sidebar from './Sidebar';
import Editor from './Editor';

function MainPage() {
    const userId = window.localStorage.getItem('userId');
    // const [noteIndex, setNoteIndex] = useState(null);
    // const [currentNote, setCurrentNote] = useState(null);
    // const [notes, setNotes] = useState(null);


    // useEffect(() => {
    //     firebase.firestore().collection('notes').onSnapshot((serverUpdate) => {
    //         const notes = serverUpdate.docs.map(doc => {
    //             const data = doc.data();
    //             data.id = doc.id;
    //             return data;
    //         });
    //         console.log(notes);
    //         setNotes(notes);
    //     });
    // }, []);


    return (
        <div className="appContainer">
            <Sidebar />
            <Editor />
        </div>
    );

}


export default MainPage;
