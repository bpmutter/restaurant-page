const home = () => {
    let homeContainer = document.createElement("div");
    homeContainer.id = "home-page";
    let title = document.createElement("h1");
    title.innerText = "Ama Pizzeria y Cafe";
    homeContainer.appendChild(title);

    let description = document.createElement("h3");
    description.innerText = "The best menu del dia within a 5 minute walk of La Casa Redonda";
    homeContainer.appendChild(description);

    let img = document.createElement("img");
    img.src = "ama-outside.png";
    img.alt = "Exterior of Ama";
    img.id = "ama-outside";
    homeContainer.appendChild(img);


    return homeContainer;

}

export default home;
