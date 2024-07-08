import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { TimeEntryList } from "./timeEntry/TimeEntryList";
import { TimeEntryCreate } from "./timeEntry/TimeEntryCreate";
import { TimeEntryEdit } from "./timeEntry/TimeEntryEdit";
import { TimeEntryShow } from "./timeEntry/TimeEntryShow";
import { WorkList } from "./work/WorkList";
import { WorkCreate } from "./work/WorkCreate";
import { WorkEdit } from "./work/WorkEdit";
import { WorkShow } from "./work/WorkShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRMService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="TimeEntry"
          list={TimeEntryList}
          edit={TimeEntryEdit}
          create={TimeEntryCreate}
          show={TimeEntryShow}
        />
        <Resource
          name="Work"
          list={WorkList}
          edit={WorkEdit}
          create={WorkCreate}
          show={WorkShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
