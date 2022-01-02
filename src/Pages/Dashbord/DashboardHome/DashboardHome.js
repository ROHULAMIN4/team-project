import React from "react";
import Chart from "../Chart/Chart";

const DashboardHome = () => {
  const data = [
    { name: "Running Orders", Quantity: 150 },
    { name: "Shipped Orders", Quantity: 120 },
    { name: "Pending Orders", Quantity: 30 },
    { name: "Cancelled Orders", Quantity: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="mt-5">
      {/* <div className="user-info">
                <img className="img-fluid border" src={user?.photoURL} alt="" />
                <h1>Welcome <span className="text-primary">{user?.displayName}</span></h1>
                <h5>{user?.email}</h5>
            </div> */}
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white h-50">
            <div
              className="card-body"
              style={{ backgroundColor: "#3B53DB", borderRadius: "5px" }}
            >
              <div className="rotate">
                <i className="fa fa-user fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
              <h1 className="display-4">134</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white h-100">
            <div
              className="card-body"
              style={{ backgroundColor: "#BD20D3", borderRadius: "5px" }}
            >
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Posts</h6>
              <h1 className="display-4">87</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white h-100">
            <div
              className="card-body"
              style={{ backgroundColor: "#F1682C", borderRadius: "5px" }}
            >
              <div className="rotate">
                <i className="fab fa-twitter fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Tweets</h6>
              <h1 className="display-4">125</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white h-100">
            <div
              className="card-body"
              style={{ backgroundColor: "#0EB7FE", borderRadius: "5px" }}
            >
              <div className="rotate">
                <i className="fa fa-share fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Shares</h6>
              <h1 className="display-4">36</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <img className="img-fluid" src="https://image.freepik.com/free-vector/office-workers-analyzing-researching-business-data_74855-4445.jpg" alt="dashboard" /> */}
        <Chart data={data} COLORS={COLORS}></Chart>
      </div>
    </div>
  );
};

export default DashboardHome;
