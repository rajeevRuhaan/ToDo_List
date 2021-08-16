import React from "react";
import EventList from "./EventList";

const header = ({ eventList }) => {
  return (
    <header>
      <div>To Do List</div>
      <p style={{ color: "red" }}>
        {eventList.length}
        {EventList.task}
      </p>
    </header>
  );
};

export default header;
