import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import AddTodo from "../components/add_todo/AddTodo";
import ListTodo from "../components/list_todo/Listtodo";
export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <ListTodo />
    </Container>
  );
}
