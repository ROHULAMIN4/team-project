import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashbord.css";
import MyOrders from "../MyOrders/MyOrders";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Pay from "../Pay/Pay";
import "../MyOrders/MyOrders";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import DashboardHome from "../DashboardHome/DashboardHome";
import AddProduct from "../Addproduct/AddProduct";
import Sidebar from "../Sidebar/Sidebar";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddReview from "../AddReview/AddReview";

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <Link style={style} to={`${url}`}>
        <h2 className="dashboard-header py-2">Dashboard</h2>
      </Link>
      <Container fluid>
        <Row>
          <Col lg={2} className="sidebar">
            <Sidebar></Sidebar>
          </Col>
          <Col lg={10} style={{ backgroundColor: "#ECEDF1" }}>
            <Switch>
              <Route exact path={`${path}`}>
                <DashboardHome></DashboardHome>
              </Route>
              <Route path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/addReview`}>
                <AddReview></AddReview>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
