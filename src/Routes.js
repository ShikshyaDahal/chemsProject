import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Request from "./pages/Request";
import Report from "./pages/Report";
import EstateInsert from "./pages/EstateInsert";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="request" component={Request} title="Request" />
          <Scene
            key="report"
            component={Report}
            title="Report"
            initial={true}
          />
          <Scene key="request" component={Request} title="Request" />
          <Scene
            key="estateinsert"
            component={EstateInsert}
            title="Insert Estate"
            initial={true}
          />
        </Stack>
      </Router>
    );
  }
}
