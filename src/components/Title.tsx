import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return <div className="title">{children}</div>;
};

export default Title;
