import React from "react";
import { Switch, Route } from "react-router-dom";

import Signup from "./Components/auth/Signup";
import Signin from "./Components/auth/Signin";
import Activate from "./Components/auth/Activate";
import Private from "./core/Private";
import Admin from "./core/Admin";
import PrivateRoute from "./Components/auth/PrivateRoute";
import Payment from "./Components/auth/payment/Pyament";
import AdminRoute from "./Components/auth/AdminRoute";
import Forgot from "./Components/auth/Forgot";
import Reset from "./Components/auth/Reset";
import Mycourses from "./Components/auth/Mycourses";
import CourseContent from "./Components/auth/CourseContent";
import UserList from "./Admindashboard/UserList";
import AdminDash from "./Admindashboard/adminLand";
import CourseList from "./Admindashboard/CourseList";
import CourseDetails from "./Components/CourseDetails/CourseDetails";

import BlogList from "./Admindashboard/BlogList";
import AddArticle from "./Admindashboard/AddArticle";
import AddCourse from "./Admindashboard/AddCourse";

import CourseView from "./Pages/CourseView";
import About from "./Pages/About";
import Home from "./Pages/Home";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

import CourseByCategory from "./Components/CoursesByCategory/CourseByCategory";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import BlogSingle from "./Components/BlogSingle/BlogSingle";

import home from "./Pages/Homeauth";
import Layout from "./core/Layout";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutUs" component={About} />
          <Route path="/courses" component={CourseByCategory} />
          <Route path="/courseDetails" component={CourseDetails} />
          <Route exact path="/home" component={home} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogEl" component={BlogSingle} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/auth/activate/:token" component={Activate} />
          <PrivateRoute exact path="/private" component={Private} />

          <AdminRoute exact path="/admin" component={Admin} />
          <AdminRoute exact path="/userlist" component={UserList} />
          <AdminRoute exact path="/bloglist" component={BlogList} />
          <AdminRoute exact path="/addArticle" component={AddArticle} />
          <AdminRoute exact path="/admindash" component={AdminDash} />
          <AdminRoute exact path="/courselist" component={CourseList} />
          <AdminRoute exact path="/addcourse" component={AddCourse} />

          <PrivateRoute exact path="/myCourses" component={Mycourses} />
          <PrivateRoute exact path="/courseContent" component={CourseContent} />
          <PrivateRoute exact path="/payment" component={Payment} />

          <Route exact path="/auth/password/forgot" component={Forgot} />

          <Route exact path="/auth/password/reset/:token" component={Reset} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
