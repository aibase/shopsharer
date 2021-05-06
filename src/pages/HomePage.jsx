import React from "react";
import CreateList from "../components/CreateList";
import Lists from "../components/Lists";
import Layout from "../components/shared/Layout";
import { UserContext } from '../index';

function HomePage() {
  const user = React.useContext(UserContext);
  console.log({ user });

  return (
    <Layout>
      <CreateList />
      <Lists />
    </Layout>
  );
}

export default HomePage;
