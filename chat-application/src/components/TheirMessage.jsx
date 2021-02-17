import React from "react";

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username != message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          classNam="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachements?.length > 0 ? (
        <img
          src={message.attachements[0].file}
          alt="message-attachement"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginRight: "18px",
            color: "white",
            backgroundColor: "#3B2A50",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
