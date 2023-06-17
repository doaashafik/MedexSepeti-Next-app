import React, { MouseEventHandler } from "react";

export type OffCanvasType = {
  show: boolean;
  handleClose: (e:React.ReactElement) => void;
  handleShow: MouseEventHandler;
}