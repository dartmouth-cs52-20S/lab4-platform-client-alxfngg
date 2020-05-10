import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Posts from './posts';
import Post from './post';
import NewPost from './Newpost';

const Nav = (props) => {
  return (
    <AppBar id="topNavBar">
      <Toolbar id="topBar">
        <div id="navLeft">
          <IconButton color="inherit" aria-label="menu">
            <NavLink className="nav" exact to="/"><HomeIcon /></NavLink>
          </IconButton>
          <Typography variant="h6">
            My Blogs!
          </Typography>
        </div>
        <IconButton color="inherit" aria-label="menu">
          <NavLink className="nav" to="/posts/new"><AddIcon /></NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
