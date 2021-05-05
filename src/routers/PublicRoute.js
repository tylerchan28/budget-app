import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest // rest of things that are not destructured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <Component {...props}/> // view page if not logged in
        )
    )}/> 
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);


// doesn't get isAuthenticated or component passed into it