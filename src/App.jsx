import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from "./Project/Groups";
import Group from "./Project/Group";
import CreateGroup from "./Project/CreateGroup"; 

function App() {
  const [groups, setGroups] = useState([])

  const addGroup = (groupName) => {
    setGroups([...groups, groupName]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Groups groups={groups} />} />
        <Route
          exact
          path="/create"
          component={() => <CreateGroup onCreate={addGroup}/>}
        />
        <Route exact path="/:groupName" component={Group} />
      </Switch>
    </Router>
  );
}

export default App;