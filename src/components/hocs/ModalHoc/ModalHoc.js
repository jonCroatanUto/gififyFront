import React from "react";
import "./modalHocStyles.css";
import { useDispatch } from "react-redux";
import { hideAllModalsAction } from "../../../redux/displaysReducer/action";
function ModalHoc(WrappedComponent) {
  function WrapperComponent() {
    const dispatch = useDispatch();
    return (
      <>
        <div
          onClick={() => dispatch(hideAllModalsAction())}
          className="modal-background"
        ></div>
        <div className="modal-window">
          <WrappedComponent />
        </div>
      </>
    );
  }
  return WrapperComponent;
}
export default ModalHoc;
