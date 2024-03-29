import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Component } from "react";

class Navbar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="navbarItems">
        <h1 className="nav-logo">Trippy</h1>
        <div
          className="menu-icons"
          onClick={() => {
            this.handleClick();
          }}
        >
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button className="btn">Sign Up</button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
