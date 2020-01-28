const menu = () => {
    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-page";
    let title = document.createElement("h1");
    title.innerText = "Menu";
    menuContainer.appendChild(title);

    let description = document.createElement("h3");
    description.innerText = "Sure there's a menu, but you're probably just here for the menu del dia. It's $14.000 will probably look something like this:";
    menuContainer.appendChild(description);

    let img = document.createElement("img");
    img.src = "ama-meal.png";
    img.alt = "Classic Ama food";
    img.id = "ama-meal";
    menuContainer.appendChild(img);
    return menuContainer
}

export default menu;
