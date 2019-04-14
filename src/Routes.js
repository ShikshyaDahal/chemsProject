import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

<<<<<<< HEAD
import Login from './pages/Login';
import Signup from './pages/Signup';
import Request from './pages/Request';
import Report from './pages/Report';

export default class Routes extends Component{
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" />
			      <Scene key="signup" component={Signup} title="Register"/>
						<Scene key="request" component={Request} title="Request"  />
						<Scene key="report" component={Report} title="Report" initial={true} />

=======
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Request from "./pages/Request";
import Search from "./pages/Search";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="profile" component={Profile} title="Profile" />
          <Scene key="messages" component={Messages} title="Send Messages" />
          <Scene
            key="search"
            component={Search}
            title="Search"
            initial={true}
          />
>>>>>>> c755be0f511b466bde31dba9d7bffec97e9a54a6

          <Scene key="request" component={Request} title="Request" />
        </Stack>
      </Router>
    );
  }
}