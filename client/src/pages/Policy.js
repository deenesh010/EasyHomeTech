import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Welcome to Easy Home Tech, your go-to platform for buying and selling
            home appliances. We value your privacy and are committed to
            protecting your personal information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
