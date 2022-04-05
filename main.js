// HOME SCRIPT
window.addEventListener('load', loadHome);


function loadProjects(e) {
    const projectsTemplate = document.getElementById('projects-template');
    const templateContent = projectsTemplate.content.cloneNode(true);
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(templateContent);
}

function loadHome(e) {
    document.addEventListener('click', (e) => {

        if (e.target.className === "editbtn") {
            console.log("triggered")
            loadTemplateBlog(e);
            return;
        }

        switch (e.target.id) {
            case "Login":
                handleLogin(e);
                break;
            case "home-btn":
                loadHome(e);
                break;
            case "projects-btn":
                loadProjects(e);
                break;
            case "blog-btn":
                loadBlog(e);
                break;
            case "LogOut":
                handleLogOut(e);
                break;
            case "addbtn":
                loadTemplateBlog(e);
                break;
            case "postbtn":
                createNewPost(e);
                break;
            default:
        }
    })

    const homeTemplate = document.getElementById('home-template');
    const templateContent = homeTemplate.content.cloneNode(true);
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(templateContent);
}

function loadBlog(e) {
    const template = document.getElementById('experiments');
    const templateContent = template.content.cloneNode(true);
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(templateContent);
}