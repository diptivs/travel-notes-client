import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import Admin from "./containers/admin";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";


export default ({ childProps }) =>
	<Switch>
		<AppliedRoute path="/" exact component={Home} props={childProps}/>
		<UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
		<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
		<AuthenticatedRoute path="/admin" exact component={Admin} props={childProps} />
		<AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
		<AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
		{ /* Finally, catch all unmatched routes */ }
		<Route component={NotFound} />
	</Switch>;