import React from "react";
import { Button } from "@material-ui/core";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <Button
      href={props.link}
      varient="contained"
      size="small"
      style={{ background: props.bck, color: props.color }}
    >
      <img className="iconImage" src={TicketIcon} alt="ticket" />
      {props.text}
    </Button>
  );
};

export default MyButton;
