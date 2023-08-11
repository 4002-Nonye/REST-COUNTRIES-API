import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";

const Home = ({countries}) => {
  return (
    <>
      <Header />
      <Form/>
      <Card countries={countries}/>
    </>
  );
};

export default Home;
