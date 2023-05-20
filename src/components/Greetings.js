import React from "react";

const Greetings = () => {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";

  if (curDate > 1 && curDate < 12) {
    greeting = "Good Morning";
  } else if (curDate >= 12 && curDate <= 17) {
    greeting = "Good Afternoon";
  } else if (curDate > 17 && curDate < 20) {
    greeting = "Good Evening";
  } else if (curDate > 20 && curDate <= 24) greeting = "Good Night";

  return <>{greeting}</>;
};

export default Greetings;
