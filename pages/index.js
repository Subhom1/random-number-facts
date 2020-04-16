import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import Error from "./_error";
import { getRequest } from "../redux/action";
import Loading from "../components/Loading";
const Home = (props) => {
  const [fact, setFact] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const [flag, setFlag] = useState(false);
  const [number, setNumber] = useState(null);
  const [show, setShow] = useState(false);
  console.log(props, "server props");
  const randomNumber = Math.floor(Math.random() * 100);
  const setValue = (event) => {
    // let finalNumber = event.target.value? typeof(event.target.value) === "nu"? ;
    // setNumber(finalNumber);
    let num = event.target.value;
    setNumber(num);
    // let finalNumber = num ? (typeof num === "number" ? num : null) : null;
    // console.log(num, "final");
    // if (finalNumber == null) {
    //   return false;
    // } else {
    //   setNumber(finalNumber);
    // }
  };

  useEffect(() => {
    setShow(false);
    !props.data && setShow(true);
  }, [props.data, !props.data]);

  const generateValue = (event, number) => {
    console.log(number, "number");
    console.log(event.target ? true : false, "event");
    event.target && setFlag(true);
    getRequest("http://numbersapi.com", number).then((res) => {
      // console.log(res.status ? true : false);
      res == undefined
        ? setShow(true)
        : (setShow(false),
          res.status && setFlag(false),
          res.status > 200 ? setStatusCode(res.status) : setFact(res.data),
          res.status === 404 && setFact("Please Enter digit"));
    });
  };
  const LayoutAll = (
    <Layout>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 my-4 order-2 order-lg-1 d-flex">
            <div className="wrapper">
              <p>Generate random number fact</p>
              <button
                className="btn btn-primary"
                disabled={flag}
                onClick={() => generateValue(event, randomNumber)}
              >
                Random
              </button>
            </div>
            <div className="wrapper d-flex align-self-end">
              <input
                type="text"
                maxLength="2"
                minLength="1"
                style={{ lineHeight: "30px" }}
                onChange={setValue}
                pattern="^0[1-9]|[1-9]\d$"
                placeholder="Only 2 digit"
              />
              <button
                className="btn btn-success"
                disabled={flag}
                onClick={() => generateValue(event, number)}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-lg-6 my-4 order-1 order-lg-2">
            <div className="card">
              <div className="card-body">
                <>{flag ? <Loading /> : fact ? fact : props.data}</>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

  return !show ? LayoutAll : <Error />;
};
export async function getServerSideProps() {
  let number = Math.floor(Math.random() * 100);
  const res = await getRequest("http://numbersapi.com", number).then(
    (res) => res
  );
  return {
    props: { ...res },
  };
}
export default Home;
