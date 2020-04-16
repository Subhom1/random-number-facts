import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store";
import { showAll } from "../redux/action";
import "../scss/material_bootswatch.scss";

const MyApp = (props) => {
  console.log(props, "_app.js props");
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(initStore)(MyApp);
