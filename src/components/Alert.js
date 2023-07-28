import React from "react";

export default function Alert(props) {
  const capitiliaze = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alertText && (
      <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
        <strong>{capitiliaze(props.alertText.type)}</strong>: {props.alertText.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    )
  );
}
