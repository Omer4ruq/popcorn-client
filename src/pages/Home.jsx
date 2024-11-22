import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";
import PopupButton from "../components/PopupButton";

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-4xl text-white pt-11">Home</h1> */}
      <Main></Main>
      <Row title="Top Rated" fetchURL={request.topRated}></Row>
      <PopupButton></PopupButton>
      <Row title="Populer" fetchURL={request.populer}></Row>
      <Row title="Up Coming" fetchURL={request.upComing}></Row>
      <Row title="Horror" fetchURL={request.populer}></Row>
    </div>
  );
};

export default Home;
