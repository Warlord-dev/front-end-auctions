import React, { useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import { InputBase, Fade, Popper } from '@material-ui/core';

function Input(props) {
  const { label, required, description } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const handleHover = (text) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setText(text);
    console.log("WOW")
  };

  const handleLeave = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex flex-col mt-10">
      <Popper open={open} anchorEl={anchorEl} placement="right" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <span>{text}</span>
          </Fade>
        )}
      </Popper>
      <span className="font-inter font-extrabold text-gray-50 text-sm mb-2">{label} {required && <span className="text-white border-1 border-white rounded-full ml-1 px-1" style={{ fontSize: "13px" }}>?</span>}</span>
      <InputBase className="border-1 border-third bg-white h-9" />
    </div>
  );
}

export default Input;
