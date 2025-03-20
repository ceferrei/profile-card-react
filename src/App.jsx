import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  { skill: "TailwindCss", level: "advanced" },
  { skill: "HTML + CSS", level: "beginner" },
  { skill: "JavaScript", level: "advanced" },
  { skill: "React", level: "advanced" },
  { skill: "React Native", level: "beginner" },
  { skill: "NextJs", level: "intermediate" },
];

export function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="/CeciProfileCard.jpg" alt="Cecilia Marcal" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Cecilia Marçal</h1>
      <p className="description">Junior Frontend Developer</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillsData.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  let bgColor = "";
  let emoji = "";
  let textColor = "";

  if (skillObj.level === "beginner") {
    bgColor = "#FCE7F3";
    emoji = "👶🏼";
    textColor = "#9F1C51";
  } else if (skillObj.level === "advanced") {
    bgColor = "#DBEAFE";
    emoji = "💪";
    textColor = "#1E40AF";
    // textColor: "#1E40AF";
  } else if (skillObj.level === "intermediate") {
    bgColor = "#F3E8FF";
    emoji = "🧐";
    textColor = "#6B21A8";
  }

  return (
    <div className="skill">
      <p
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: "30px",
          padding: "10px 15px",
        }}
      >
        {skillObj.skill} {emoji}
      </p>
    </div>
  );
}
