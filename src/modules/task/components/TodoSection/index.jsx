import { Divider } from "antd";
import React from "react";
import CreateTodoForm from "./CreateTodoForm";
import ListTodo from "./ListTodo";

const TodoSection = ({ taskId }) => {
  return (
    <div>
      <Divider orientation="left">Danh sách công việc</Divider>
      <ListTodo taskId={taskId} />
      <CreateTodoForm taskId={taskId} />
    </div>
  );
};

export default TodoSection;
