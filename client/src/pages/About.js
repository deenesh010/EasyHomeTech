import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Easy Home Tech is an online shopping platform where people can buy
            electronics and appliances. This application can provide a
            user-friendly interface for interacting with appliances.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
