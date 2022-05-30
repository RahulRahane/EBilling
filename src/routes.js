import Dashboard from "views/Dashboard.js";

import Billing from "views/Typography.js";
import About_us from "views/About_us.js";
import UserPage from "views/User.js";
import Invoice from "views/Invoice.js";
import Login from "views/Login.js";
import Contact_us from "views/Contact_us.js";
import Registration from "views/Registration.js";
import ChangePassword from "views/ChangePassword.js";
import FPassword from "views/FPassword.js";
import Payment from "views/Payment.js";
import Tables from "views/Tables.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login Page",
    icon: "nc-icon nc-tile-56",
    component: Login,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Billing",
    icon: "nc-icon nc-caps-small",
    component: Billing,
    layout: "/admin",
  },
  
  {
    path: "/invoice",
    name: "Invoice",
    icon: "nc-icon nc-bank",
    component: Invoice,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "Payment Page",
    icon: "nc-icon nc-single-02",
    component: Payment,
    layout: "/admin",
  },


  {
    path: "/about_us",
    name: "About Us",
    icon: "nc-icon nc-alert-circle-i",
    component: About_us,
    layout: "/admin",
  },
  {
    path: "/contact_us",
    name: "Conatct Us",
    icon: "nc-icon nc-caps-small",
    component: Contact_us,
    layout: "/admin",
  },
  
  
  {
    path: "/registration",
    name: "Registration Form",
    icon: "nc-icon nc-spaceship",
    component: Registration,
    layout: "/admin",
  },
  
   
    {
    path: "/changepassword",
    name: "ChangePassword",
    icon: "nc-icon nc-bell-55",
    component:ChangePassword,
    layout: "/admin",
  },
  
  {
    path: "/fpassword",
    name: "Forgot Password",
    icon: "nc-icon nc-bell-55",
    component:FPassword,
    layout: "/admin",
  },
  
  {
    path: "/tables",
    name: "Admin View",
    icon: "nc-icon nc-bell-55",
    component:Tables,
    layout: "/admin",
  },
   
];
export default routes;
