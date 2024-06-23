import React, { useState } from "react";
import MessageSideBar from "./MessageSideBar";
import MessageContent from "./MessageContent";
import "./messageChat.css";
const Messages = () => {
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div id="content">
      <div className="content-admin-main">
        <div className="aon-admin-heading">
          <h4>Messages</h4>
        </div>
        <div className="messages-container margin-top-0 margin-bottom-40">
          <div className="messages-container-inner">
            <MessageSideBar fetchAgain={fetchAgain} />
            {/* Message Content */}
            <MessageContent
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
