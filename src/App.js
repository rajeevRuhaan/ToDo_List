import React, { useState } from "react";

import Header from "./component/header";
import Event from "./component/Event";
import EventList from "./component/EventList";
import Footer from "./component/footer";

import "./App.css";

function App() {
  const [eventList, setEventList] = useState([]);
  console.log(eventList);

  const handleFilter = () => {
    let filtered = eventList.filter((el) => {
      return !el.complete;
    });
    setEventList(filtered);
  };

  const handleToggle = (id) => {
    let mapped = eventList.map((el) => {
      return el.id === Number(id)
        ? { ...el, complete: !el.complete }
        : { ...el };
    });
    setEventList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...eventList];
    copy = [
      ...copy,
      { id: eventList.length + 1, task: userInput, complete: false },
    ];
    // console.log(copy);
    setEventList(copy);
  };

  return (
    <div className="App">
      <Header eventList={eventList} />
      <Event addTask={addTask} />
      <EventList
        eventList={eventList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <Footer />
    </div>
  );
}

export default App;
