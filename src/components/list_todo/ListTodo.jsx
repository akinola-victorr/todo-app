import React from "react";
import "./ListTodo.scss";

export default function ListTodo() {
  return (
    <div className="list_todo">
      <div className="listTodo__row">
        <div className="listTodo__item">Buy New Laptop</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__item">Make Codehance Course</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__item">Create Portfolio Site</div>
        <div className="listTodo__delete">Del</div>
      </div>
    </div>
  );
}
