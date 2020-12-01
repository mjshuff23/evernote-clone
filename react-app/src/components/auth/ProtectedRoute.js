import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {

    if (props.authenticated) {
        return <Redirect to="/notebooks/all/notes/none/tags/none" />
    }

    return (
        <Route {...props} />
    );
};

export default ProtectedRoute;