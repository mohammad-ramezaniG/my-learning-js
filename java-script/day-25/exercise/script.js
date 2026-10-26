//تمرین 1
const title = document.getElementById("main-title");
const description = document.getElementById("description");

title.textContent = "Project Genesis - Day 27";
description.textContent = "I can manipulate the DOM with JavaScript.";


//تمرین 2
title.style.color = "purple";
title.fontSize = "32px";

description.classList.add("highlight")

description.classList.toggle("highlight");
description.classList.toggle("highlight");


//تمرین 3
const skillslList = document.getElementById("skills");

const firstSkill = document.creatElement("li");
firstSkill.textContent = "JavaScript";
skillsList.appendChiled(firstSkill);

const secendSkill = document.creatElement("li");
secendSkill.textContent = "Node.js";
skillsList.appendChiled(secendSkill);


//تمرین 4
const skills = [
  "JavaScript",
  "Node.js",
  "Solidity",
  "Smart Contract Security"
];

skills.forEach(function(skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});


//تمرین 5

skillsList.remove();

skillsList.replaceChildren();

const newList = document.createElement("li");

newList.textContent = "Build my first Web3 project";

skillsList.replaceChildren(newList);



