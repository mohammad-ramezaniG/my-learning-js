console.log(document);

console.log(document.title);

document.title ="Project-genesis";

<h1 id="title">Hello World</h1>

<p class="description">Learning DOM</p>

<button>Click Me</button>

const title = document.getElementById("title");

console.log(title);

const title1 = document.querySelector("#title");

const paragraph = document.querySelector(".description");

const button = document.querySelector("button");

<p id="message">Hello World</p>

const message = document.querySelector("#message");

console.log(message.textContent);

message.innerHTML = "<strong>Hello</strong>";

<a id="link" href="https://example.com">
  Visit Website
</a>

const link = document.querySelector("#link");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://openai.com");

link.setAttribute("target", "_blank");

link.removeAttribute("target");


<h1 id="main-title">JavaScript</h1>
<p class="description">Learning DOM</p>

const  mainTitle = document.getElementById("main-title");
const paragraph = document.querySelector("p");
console.log(mainTitle);
console.log(paragragh);

mainTitle.textContent = "Project Genesis";
paragraph.textContent = "I am learning DOM.";

<a id="my-link" href="https://example.com">Open</a>

const link = document.getElementById("my-link");

link.setAttribute("href" , "https://openai.com");
link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener noreferrer");








