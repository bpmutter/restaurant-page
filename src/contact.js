const contact = () => {
    //create container for contact info
    let contactContainer = document.createElement("div");
    contactContainer.id = "contact-page";

    //title
    let title = document.createElement("h1");
    title.innerText = "Contact";
    contactContainer.appendChild(title);

    //subheading
    let contactSubHeading = document.createElement("h3");
    contactSubHeading.innerText = "Get in touch...and we can even have nora's dad walk over and deliver the food to you!";
    contactContainer.appendChild(contactSubHeading);

    let hr = document.createElement("hr");
    contactContainer.appendChild(hr);

    let contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    let contactGrid = '<i class="far fa-clock"></i> <p>M-F: 12-9, Sat: 11-10, Sun: Closed</p>' +
        '<i class="fab fa-whatsapp"></i> <p>(+57) 311 779-7497</p>' +
        '<i class="fas fa-map-marker-alt"></i> <p>Tv. 39 #76, Medellin, Antioquia</p>';
    contactInfo.innerHTML = contactGrid;
    contactContainer.appendChild(contactInfo);

    let mapEmbed = document.createElement("div");
    mapEmbed.id = "map-embed";
    let map = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.591135698432!2d-75.5958074!3d6.2442469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ee8dc26438b0e18!2zQW3DoSBwaXp6ZXLDrWEgeSBjYWbDqQ!5e0!3m2!1sen!2sco!4v1580139847801!5m2!1sen!2sco"  frameborder="0" allowfullscreen=""></iframe>'
    mapEmbed.innerHTML = map;
    contactContainer.appendChild(mapEmbed);





    return contactContainer;

}

export default contact;
