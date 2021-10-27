import React from "react";

export default function InputButtons({
  inputHandlerCallback,
  clickHandlerCallback,
}) {
  return (
    <div>
    <p>
      <input
        type="text"
        placeholder="Account Number"
        data-whatToAdd={"accountNumber"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      </p>
      <p>
      <input
        type="text"
        placeholder="Enter Password"
        data-whatToAdd={"password"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      </p>
      <p>
      <input
        type="button"
        value="Log In"
        onClick={() => clickHandlerCallback()}
      />
      </p>
     
    </div>
  );
}