import React, { useEffect, useState } from 'react';
// import firebase from 'firebase';
// import 'firebase/firestore';
import Sidebar from './Sidebar';
// import Editor from './Editor';
// import ProtectedRoute from './auth/ProtectedRoute';
import { Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import TagPanel from './TagPanel';

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
    let id; // TODO: Set default note ID

    return (
        <Container> {/* className="appContainer" */}
            <Sidebar />
            <main>
                <div id="drawer-container" style="position: relative">
                    <span>Some elements</span>
                </div>
                <TagPanel />
                <Route path="/notes">
                    {/* Eventually Protected */}
                    <Grid>
                        {/* <NoteInfoPanel /> */}
                        {/* <EditorPanel /> */}
                    </Grid>
                </Route>
                <Route path="/notebooks">  {/* Eventually Protected */}
                    {/* <NotebookPanel /> */}
                </Route>
            </main>
        </Container>
    );

}


export default MainPage;
