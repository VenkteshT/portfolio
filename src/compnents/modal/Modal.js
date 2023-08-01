import React from "react";
import "./modal.css";
export default function Modal({ status, setModal, reset }) {
  const { loading, sent, err } = status;
  return (
    <div className="modal-container" onClick={() => reset()}>
      <div className="modal">
        {loading && <h2>Sending...</h2>}

        {sent && <h1>Mail sent ✅</h1>}

        {err && <h2>Failed ❌</h2>}
      </div>
    </div>
  );
}
