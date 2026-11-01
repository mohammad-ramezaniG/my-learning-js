console.log("===== SYSTEM INFORMATION =====");

const username = process.argv[2];
if (username) {

    console.log(`Hello ${username}
                
                
                Node Version: ${process.version}
                Operating System: ${process.platform}
                Architecture: ${process.arch}
                Working Directory: ${process.cwd()}
                `);
    
} else {
    console.log("pleas inetr a username");
}



