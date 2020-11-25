import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {

  if (props.authenticated) {
    {/* TODO: /notes/allnotes/:firstnote_id */ }
    return <Redirect to="/notes"/> 
  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;