
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          className="simple-text logo-normal"
        >
         Electricity Billing
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
	  
	
	   <Nav>

	    <li>

                <NavLink				
                  to="/admin/dashboard"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-bank" />
                  <p>Dashboard</p>
                </NavLink>
          </li>
		  <li>
                <NavLink
                  to="/admin/user-page"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-single-02"/>
				  <p>User Profile</p>
                </NavLink>
          </li>
		   
		   <li >
                <NavLink
                  to="/admin/typography"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-single-02"/>
				  <p>Billing</p>
                </NavLink>
          </li>
		   {/* <li>
                <NavLink
                  to="/admin/invoice"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-single-02"/>
				  <p>Invoice</p>
                </NavLink>
          </li> */}
          <li>
                <NavLink
                  to="/admin/payment"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-caps-small"/>
				  <p>Payment</p>
                </NavLink>
          </li>
		      <li>
                <NavLink
                  to="/admin/about_us"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-alert-circle-i" />
                  <p>About Us</p>
                </NavLink>
          </li>
		   <li>
                <NavLink
                  to="/admin/contact_us"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-caps-small"/>
				  <p>Contact Us</p>
                </NavLink>
          </li>
          <li>
                <NavLink
                  to="/admin/tables"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-single-02"/>
				  <p>User List</p>
                </NavLink>
          </li>
	
        </Nav> 
	     
      </div>
    </div>
  );
}

export default Sidebar;
