import React, { useState, useEffect } from "react";

const ApiTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const URL = "http://worldtimeapi.org/api/timezone/Asia/Yekaterinburg";
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setTime(new Date(data.datetime));
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Time - {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default ApiTime;
