import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const navMenu = () => {
    let nav = document.createElement("header");
    let navContent =
        '<nav>' +
        '<ul>' +
        '<li id="home">' +
        'Home' +
        '</li>' +
        '<li id="menu">' +
        'Menu' +
        '</li>' +
        '<li id="contact">' +
        'Contact' +
        '</li>' +
        '</ul>' +
        '</nav>';

    nav.innerHTML = navContent;

    let menuOptions = nav.getElementsByTagName("li");
    console.table(menuOptions)

    //add navMenu to content
    document.getElementById("content").appendChild(nav);

    let main = document.createElement("div");
    main.id = "main";
    document.getElementById("content").appendChild(main);
    main.appendChild(home());

    //add event listeners to menu options
    document.getElementById("home").addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(home());
    });
    document.getElementById("menu").addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(menu());
    });
    document.getElementById("contact").addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(contact());
    });






}

export default navMenu;
