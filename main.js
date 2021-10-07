
document.body.onload = setupHeaderAndFooter();

function setupHeaderAndFooter () {

    // Appends the top navigation bar to any pages with this script
    const template_header = document.createElement('div');
    template_header.innerHTML = `
    <div class="topnav">
        <div class="topnav_buttons_img"> <img src = "images/LogoWhiteNoText.svg" alt="Logo" img draggable="false"/> </div>
        <div class="topnav_buttons"> <a href="./index.html">Home</a> </div>
        <div class="topnav_buttons"> <a href="#download">Download</a> </div>
        <div class="topnav_buttons"> <a href="./about.html">About us</a> </div>
        <div class="topnav_buttons"> <a href="#contact">Contact</a> </div>
    </div>
    `;
    document.body.prepend(template_header);

    // Appends the bottom footer bar to any pages with this script
    const template_footer = document.createElement('div');
    template_footer.innerHTML = `
    <div class="footer">
        <a href="">Terms of service<br></a>
        <a href="">Contact us<br></a>
        <a href="">Privacy Policy<br></a>
        <p>This is not a real product.</p>
    </div>`;
    document.body.append(template_footer);
}





