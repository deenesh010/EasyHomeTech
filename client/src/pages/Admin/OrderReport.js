import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const OrderReport = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get("/api/v1/product/report");
        setReport(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching report: {error.message}</p>;

  return (
    <Layout title={"Order Report"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-4">Order Report</h1>
            <div className="row mb-3">
              <div className="col">
                <h5>Total Orders: {report.totalOrders}</h5>
                <h5>Total Products: {report.totalProducts}</h5>
                <h5>Total Overall Price: Rs. {report.totalOverallPrice}</h5>
              </div>
            </div>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Buyer Name</th>
                  <th>Status</th>
                  <th>Total Price</th>
                  <th>Order Date</th>
                  <th>Products</th>
                </tr>
              </thead>
              <tbody>
                {report.orders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.buyerName}</td>
                    <td>{order.status}</td>
                    <td>Rs. {order.totalPrice}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>
                      <ul className="list-unstyled">
                        {order.products.map((product) => (
                          <li key={product.productId}>
                            {product.productName} - Rs. {product.price}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderReport;
