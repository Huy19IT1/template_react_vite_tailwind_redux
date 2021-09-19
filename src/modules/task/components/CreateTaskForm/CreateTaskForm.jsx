import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import useCreateTask from "@modules/task/hooks/useCreateTask";
import { useParams } from "react-router";
import { toast } from "react-toastify";
const { RangePicker } = DatePicker;
const CreateTaskForm = ({ close }) => {
  const [form] = Form.useForm();
  let { projectId } = useParams();
  const { mutate: create, isLoading } = useCreateTask();
  const onFinish = (values) => {
    const time_start = values?.time?.[0].format("YYYY-MM-DD");
    const time_end = values?.time?.[1].format("YYYY-MM-DD");

    create(
      { ...values, time_start, time_end, project_id: projectId },
      {
        onSuccess: (data) => {
          close();
          toast.success(data?.message);
          form.resetFields();
        },
        onError: () => {
          toast.error("Có lỗi xảy ra");
        },
      }
    );
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{
        remember: true,
      }}
      className="w-full"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên công viêc"
        name="name_task"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập tên dự án",
          },
        ]}
      >
        <Input
          placeholder=""
          //   prefix={<UserOutlined className="site-form-item-icon" />}
          //   suffix={
          //     <Tooltip title="Extra information">
          //       <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          //     </Tooltip>
          //   }
        />
      </Form.Item>

      <Form.Item
        label="Miêu tả"
        name="desc_task"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập miêu tả công viêc",
          },
        ]}
      >
        <Input
          placeholder="Mô tả công việc"
          //   prefix={<LockOutlined className="site-form-item-icon" />}
          //   suffix={
          //     <Tooltip title="Extra information">
          //       <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          //     </Tooltip>
          //   }
        />
      </Form.Item>
      <Form.Item
        label="Ngày bắt đầu & Kết thúc"
        name="time"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập miêu tả công viêc",
          },
        ]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className="!font-semibold"
            loading={isLoading}
          >
            Tạo công việc
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default CreateTaskForm;
