import CommentItem from "@components/Comment";
import { Divider, Layout, PageHeader, Tag } from "antd";
import React from "react";
// import "./index.css";
import TaskMenu from "../../components/TaskMenu";
import { useParams } from "react-router";
import ProjectHeader from "@modules/task/components/ProjectHeader";
import TodoSection from "@modules/task/components/TodoSection";
import CommentSection from "@modules/task/components/CommentSection";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);
const TaskDetail = () => {
  const { projectId, taskId } = useParams();
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <Layout className="h-full">
      <ProjectHeader projectId={projectId} />
      <Layout>
        <TaskMenu projectId={projectId} taskId={taskId} />
        <Layout.Content className="bg-white">
          <PageHeader
            className="site-page-header"
            title="Công việc"
            // subTitle="This is a subtitle"
            tags={[<Tag color="blue">Đang tiến hành</Tag>]}
          />
          <div className="px-6">
            <div className="grid grid-cols-2 gap-4">
              <TodoSection taskId={taskId} />
              <CommentSection id={taskId} />
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default TaskDetail;
