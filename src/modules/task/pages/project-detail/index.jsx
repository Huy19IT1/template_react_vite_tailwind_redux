import { Layout } from "antd";
import React, { useCallback, useEffect } from "react";
// import "./index.css";

import TaskMenu from "../../components/TaskMenu";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router";
import { columns, scales, tasks, links } from "./data";
import Chart from "react-google-charts";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import ProjectHeader from "@modules/task/components/ProjectHeader";
const { Content } = Layout;
// Body-module_row__2eOgf



const ProjectDetail = () => {
  const handleUserKeyPress = useCallback(event => {
   alert("ok")
  }, []);
  useEffect(() => {
    const el=document?.querySelectorAll('.Body-module_row__2eOgf');
    if(el && el.length!==0){
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click",handleUserKeyPress);
    }
      // el.addEventListener("click",handleUserKeyPress);
      
    }
    return () => {
      
      if(el && el.length!==0){
        for (let i = 0; i < el.length; i++) {
          el[i].removeEventListener("click",handleUserKeyPress);
      }
      }
    };
  });
  
  let { id } = useParams();
  return (
    <Layout className="h-full">
      <Content className="h-full bg-white">
        <ProjectHeader />
       

        <Layout className="">
          <TaskMenu projectId={id} />
          <Content className="p-6">
            <DefaultTheme>
              <Gantt
                scales={scales}
                columns={columns}
                tasks={tasks}
                links={links}
                
              />
            </DefaultTheme>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default ProjectDetail;
