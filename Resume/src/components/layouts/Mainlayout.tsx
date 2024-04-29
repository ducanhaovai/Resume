import React from "react";
import Aside from "../partials/Aside";
export interface ILayout {
  children: React.ReactNode;
}

export default function Mainlayout({ children }: ILayout) {
  return (
    <div className="main-container">
      <Aside />
      <div className="main-content">{children}</div>
    </div>
  );
}
