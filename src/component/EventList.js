import React from "react";
import ToDo from "./ToDo";

const EventList = ({ eventList, handleToggle, handleFilter }) => {
  return (
    <div>
      {eventList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default EventList;
