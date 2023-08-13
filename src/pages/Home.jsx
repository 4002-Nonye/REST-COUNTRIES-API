import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";

const Home = ({ countries, isLoading, query, setQuery, region, setRegion,setSelectedCountry }) => {
  return (
    <>
      <Header />
      <Form
        region={region}
        setRegion={setRegion}
        query={query}
        setQuery={setQuery}
      />
      <Card
        countries={countries}
        isLoading={isLoading}
        region={region}
        setSelectedCountry={setSelectedCountry}
        query={query}
      
      />
    </>
  );
};

export default Home;
