import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CasaList } from "./casa/CasaList";
import { CasaCreate } from "./casa/CasaCreate";
import { CasaEdit } from "./casa/CasaEdit";
import { CasaShow } from "./casa/CasaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"NODEJS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Casa"
          list={CasaList}
          edit={CasaEdit}
          create={CasaCreate}
          show={CasaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
