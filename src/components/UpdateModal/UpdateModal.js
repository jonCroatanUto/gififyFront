import React, { useState } from "react";
import ModalHoc from "../hocs/ModalHoc/ModalHoc";
import InputText from "../InputText";

import { useSelector, useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import { updateGif } from "../../services/serverCalls";
import {
  hideAllModalsAction,
  realoadHomeAction,
} from "../../redux/displaysReducer/action";

function UpdateModal() {
  const dispatch = useDispatch();
  const { isUpdateModalDisplayed } = useSelector(
    (state) => state.displaysReducer
  );
  const { id, title } = isUpdateModalDisplayed;
  const [updateData, setUpdateData] = useState({
    id: id,
    title: title,
  });
  function handleChange(e) {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }
  function updateDataSend(e) {
    e.preventDefault();
    const { id, title } = updateData;
    updateGif({ id, title }).then((res) => {
      console.log(res);
      dispatch(realoadHomeAction(true));
      dispatch(hideAllModalsAction());
    });
  }
  return (
    <form onSubmit={updateDataSend}>
      <InputText
        type="text"
        id="title"
        label="Title "
        value={updateData.title}
        placeholder="Type title"
        handleChange={handleChange}
      />

      <Button type="submit">Update</Button>
    </form>
  );
}
export default ModalHoc(UpdateModal);
