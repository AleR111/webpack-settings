import { ColProps } from "antd/lib/grid";

export type FinishCallback = (values: any) => void;

export interface WrapFormProps {
  name?: string;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  initialValues?: Record<string, any>;
  onFinish?: FinishCallback;
  onFinishFailed?: FinishCallback;
  autoComplete?: string | undefined;
  children: React.ReactNode;
}