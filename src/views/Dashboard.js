
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SimpleImageSlider from "react-simple-image-slider";

import {
  Jumbotron, 
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Image, 
  Button
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Dashboard() {
	
	
		
  return (
    <>
	<div style={{ display: 'block', width: 800, padding: 30 }}>
      <h4>Electricity Billing System</h4>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://iea.imgix.net/b76ee6a7-ff18-4ee8-a557-5d4a5cbf421d/shutterstock_612227351.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C2105%2C4578%2C3047&w=1280&h=852&fit=crop&fm=jpg&q=70&auto=format"
            alt="Electricity"
          />
          
          
  
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-07/07/full/1562443181-1396.jpg"
            alt="Power Plant"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>

    </>
  );
}

export default Dashboard;
