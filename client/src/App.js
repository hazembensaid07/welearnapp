import React from "react";
import { Switch, Route } from "react-router-dom";

import Signup from "./Components/auth/Signup";
import Signin from "./Components/auth/Signin";
import Activate from "./Components/auth/Activate";
import Private from "./core/Private";
import Admin from "./core/Admin";
import PrivateRoute from "./Components/auth/PrivateRoute";
import AdminRoute from "./Components/auth/AdminRoute";
import Forgot from "./Components/auth/Forgot";
import Reset from "./Components/auth/Reset";
import CourseView from "./Pages/CourseView";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

import CourseByCategory from "./Components/CoursesByCategory/CourseByCategory";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import BlogSingle from "./Components/BlogSingle/BlogSingle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutUs" component={About} />
        <Route path="/courses" component={CourseByCategory} />
        <Route path="/courseDetails" component={CourseView} />

        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogEl" component={BlogSingle} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/auth/activate/:token" component={Activate} />
        <PrivateRoute exact path="/private" component={Private} />
        <AdminRoute exact path="/admin" component={Admin} />
        <Route exact path="/auth/password/forgot" component={Forgot} />
        <Route exact path="/auth/password/reset/:token" component={Reset} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
