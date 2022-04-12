import { Route, Switch } from "react-router-dom";
import AlbumByCategories from "./components/AlbumByCategories";
import AlbumDetail from "./components/AlbumDetail";
import ContentWrapper from "./components/ContentWrapper";
import AlbumTable from "./components/contet-wrapper/AlbumTable";
import UserTable from "./components/contet-wrapper/UserTable";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div id="wrapper">
      <SideBar />

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/users-table">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <UserTable />
            </div>
          </div>
        </Route>
        <Route path="/albums-table">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <AlbumTable />
            </div>
          </div>
        </Route>
        <Route path="/abums-categories">
          <AlbumByCategories />
        </Route>
        <Route path="/detail/:id" component={AlbumDetail} />
      </Switch>
    </div>
  );
}

export default App;
