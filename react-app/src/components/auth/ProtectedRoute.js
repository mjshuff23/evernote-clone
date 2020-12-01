import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {

    if (props.authenticated) {
        console.log('REDIRECTED');
        return <Redirect to="/notebooks/all/notes/none/tags/none" />
    }

    return (
        <Route {...props} />
    );
};

export default ProtectedRoute;