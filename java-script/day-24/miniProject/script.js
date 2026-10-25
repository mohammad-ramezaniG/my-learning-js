    const title = document.getElementById("page-title");
    const name = document.getElementById("name");
    const bio = document.getElementById("bio");
    const website = document.getElementById("website");
    const status = document.getElementById("status");    

    title.textContent = "Project Genesis | Developer Profile";
    name.textContent = "Mohammad Ramezni";
    bio.textContent = "I am learning JavaScript and DOM.";
    status.textContent = "Profile successfully configured!";
    website.setAttribute("href" , "https://github.com/mohammad-ramezaniG");
    website.setAttribute("target" , "_blank");
    website.setAttribute("rel" , "noopener noreferrer");

    
