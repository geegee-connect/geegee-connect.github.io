
document.body.onload = setupHeaderAndFooter();

function setupHeaderAndFooter () {

    // Appends the top navigation bar to any pages with this script
    const template_header = document.createElement('div');
    template_header.innerHTML = `
    <div class="navbar">
        <div class="container">
            <a class="logo" href="#">Uni<span>Network</span></a>

            <img class="mobile-menu" id="mobile-cta" src="images/menu.svg" alt="Open Navigation Bar">

            <nav>
                <img src="images/exit.svg" id="mobile-exit" class="mobile-menu-exit" alt="Close Navigation Bar">

                <ul class="primary-nav">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./features.html">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>

                <ul class="secondary-nav">
                    <li><a href="./about.html">Team</a></li>
                    <li class="download-now-cta"><a href="#">Download now</a></li>
                </ul>
            </nav>
        </div>
    </div>
    `;
    document.body.prepend(template_header);

    // 1. Check in what page we are.
    // 2. Add class="current" to the correct <li>

    var elem = document.getElementsByTagName("li");
    for (var i = 0; i < elem.length; i++) {

        // Make add class current to "li" if its url match the current page
        var listElemUrl = elem[i].getElementsByTagName("a")[0].href;
        if(listElemUrl == window.location.href)
            elem[i].classList.add("current");
    }

    // Appends the bottom footer bar to any pages with this script
    const template_footer = document.createElement('div');
    template_footer.innerHTML = `
    <footer>
		<div class="footerc">
			<h6>Privacy Policy | Terms of Use</h6>
			<h6>Copyright &#169 2021 UniNetwork. All rights reserved.</h6>
		</div>
	</footer>
    `;
    document.body.append(template_footer);
}





