import React from "react";
import Footer from "./Components/Footer/Footer";
import AddTodo from "./Container/addTodo/addTodo";
import VisibleTodolist from "./Container/visibleTodolist/visibleTodolist";

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodolist />
      <Footer />
    </div>
  );
}

export default App;
