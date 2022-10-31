import React from "react";

export default function AdminSection({ activeIndex }) {
  return (
    <div className={activeIndex == 3 ? "admin" : "none"}>
      <div className="card">
        <h3>Add User</h3>
      </div>
      <div className="card">
        <h3>View User</h3>
      </div>
      <div className="card">
        <h3>Add Products</h3>
      </div>
      <div className="card">
        <h3>View All Products</h3>
      </div>
      <div className="card">
        <h3>Printer Settings</h3>
      </div>
      <div className="card">
        <h3>All Orders</h3>
      </div>
      <div className="card">
        <h3>Daily Sales</h3>
      </div>
      <div className="card">
        <h3>Monthly Sales</h3>
      </div>
      <div className="card">
        <h3>Quarterly Sales</h3>
      </div>
      <div className="card">
        <h3>Fast moving products</h3>
      </div>
      <div className="card">
        <h3>Soon to expire</h3>
      </div>
    </div>
  );
}
