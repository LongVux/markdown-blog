import React from "react";
import "./components.css"
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout