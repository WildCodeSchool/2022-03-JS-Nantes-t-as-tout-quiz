import Themes from "@pages/Themes";
import React from "react";

const list = [
  {
    theme: "Animaux",
    content: "Chats",
  },
  {
    theme: "Animaux",
    content: "Chiens",
  },
];

function ThemeList() {
  return (
    <div>
      {list.map((nameList) => (
        <Themes theme={nameList.name} content={nameList.content} />
      ))}
    </div>
  );
}

export default ThemeList;
