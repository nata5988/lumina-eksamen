"use strict";
 
const header = document.getElementById("header");
 
header.innerHTML = `
    <nav class="navbar">
 
        <div id="logo">
            <h1>LUMINA AUDIO</h1>
        </div>
 
        <ul>
            <li class="dropdown">
                <a href="#" id="products-btn">Produkter</a>
 
                <ul class="dropdown-menu" id="products-menu">
                    <li><a href="#" id="lumina-one-link">LUMINA One</a></li>
                    <li><a href="#" id="lumina-two-link">LUMINA Two</a></li>
                </ul>
            </li>
            <li><a href="#">Om os</a></li>
            <li>
                <a href="#">
                    <img src="img/search.png" alt="Search" id="search">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="img/cart.png" alt="Cart" id="cart">
                </a>
            </li>
        </ul>
 
    </nav>
 
    <hr>
`;
 
const productsBtn = document.getElementById("products-btn");
const productsMenu = document.getElementById("products-menu");
 
productsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    productsMenu.classList.toggle("show");
});
 
document.addEventListener("click", (event) => {
    if (
        !productsBtn.contains(event.target) &&
        !productsMenu.contains(event.target)
    ) {
        productsMenu.classList.remove("show");
    }
});
 
const hero = document.getElementById("hero");
 
hero.classList.add("hero");
 
hero.innerHTML = `
    <div class="hero-content">
        <h2>Lumina One</h2>
        <p>Én højtaler til alle øjeblikke</p>
 
        <div class="hero-price-buttons">
            <p class="price">Kun 1499,-</p>
 
            <div class="hero-buttons">
                <button class="buttons" id="buy-now">Køb nu</button>
                <button class="buttons" id="read-more">Læs mere</button>
            </div>
        </div>
    </div>
`;
 
const buyNowButton = document.getElementById("buy-now");
 
buyNowButton.addEventListener("click", () => {
    const section = document.getElementById("product-section");
 
    window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
    });
});
 
const readMoreHero = document.getElementById("read-more");
 
readMoreHero.addEventListener("click", () => {
    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <section class="popup-overlay" id="popup-overlay">
            <div class="popup-box">
                <button class="popup-close" id="popup-close">×</button>
 
                <h2>Lær mere om Lumina Audio</h2>
 
                <p>LUMINA One er skabt til de øjeblikke, hvor musikken samler mennesker. Med en kraftfuld lyd på op til 100 dB leverer højtaleren en imponerende lydoplevelse, der fylder både stuen, stranden og sommerfesten med klar og dynamisk lyd.</p>
 
                <p>Uanset om du holder en rolig aften med venner eller en større fest, sørger den lange batteritid på op til 18 timer for, at musikken fortsætter langt ind i natten – helt uden afbrydelser.</p>
 
                <p>Det integrerede ambient-lys tilfører en ekstra dimension til oplevelsen og skaber en stemningsfuld atmosfære, der følger musikken og omgivelserne.</p>
 
                <p>Med Social Connect kan flere personer forbinde deres enheder og blende playlister sammen, så alle kan være med til at styre musikken og sætte stemningen.</p>
 
                <p>LUMINA One er desuden IPX5 vandafvisende, hvilket betyder, at den uden problemer kan klare let regn, vandsprøjt og spontane eventyr udendørs.</p>
            </div>
        </section>
        `,
    );
 
    document.getElementById("popup-close").addEventListener("click", () => {
        document.getElementById("popup-overlay").remove();
    });
});
 
const vibePhotos = document.getElementById("vibe-photos");
 
vibePhotos.innerHTML = `
<section class="vibes">
 
    <article class="vibe-row left">
        <img src="img/vibes-party.png" alt="Festival">
        <div class="vibe-text">
            <p>
                Med op til 18 timers spilletid kan højtaleren følge hele aftenen uden afbrydelser.
                Den integrerede ambient-belysning skaber den perfekte stemning, når solen går ned og natten tager over.
            </p>
        </div>
    </article>
 
    <article class="vibe-row right">
        <div class="vibe-text">
            <p>
                LUMINA One er designet til spontane planer – stranden, parken, bagterrassen eller på vej til festen.
                Med Social Connect kan flere dele musik til samme setup, så stemningen aldrig afhænger af én persons playliste.
            </p>
        </div>
        <img src="img/vibes-light.png" alt="Venner">
    </article>
 
    <article class="vibe-row left">
        <img src="img/vibes-beach.png" alt="Strand">
        <div class="vibe-text">
            <p>
                Fra sene strandture til regnfulde sommernætter. LUMINA One er bygget til virkeligheden med IPX5 vandafvisning og med Social Connect kan hele gruppen forbinde sig til én højtaler perfekt til sene gatherings ved vandet, i haven eller på festivalcampen.
            </p>
        </div>
    </article>
 
</section>
`;
 
const vibeRows = document.querySelectorAll(".vibe-row");
 
function showVibesOnScroll() {
    vibeRows.forEach((row) => {
        const rowTop = row.getBoundingClientRect().top;
        const rowBottom = row.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
 
        if (rowTop < windowHeight - 100 && rowBottom > 100) {
            row.classList.add("show");
        } else {
            row.classList.remove("show");
        }
    });
}
 
window.addEventListener("scroll", showVibesOnScroll);
showVibesOnScroll();
 
const features = [
    "Op til 100 dB",
    "Lysstemning: Integreret ambient-lys",
    "Vægt: Kun 3 kg",
    "Op til 18 timers spilletid",
    "Mulighed for at parre op til 3 andre LUMINA One enheder",
    "Social Connect: Blend din playliste med andres",
    "IPX5 vandafvisende"
];
 
const featureList = features
    .map((feature) => {
        return `<li>${feature}</li>`;
    })
    .join("");
 
const main = document.getElementById("main-content");
 
const reviews = [
    {
        navn: "Katrine Jensen",
        stjerner: "★★★★★",
        dato: "17.01.2026",
        overskrift: "Lang batteritid",
        tekst:
            "Jeg tog den med på weekendtur og brugte den i timevis uden at tænke på opladning. USB-C er så nice, fordi man kan bruge samme oplader som til alt andet. Den føles solid og premium, men stadig let at tage med rundt.",
    },
    {
        navn: "Yasmin Mohammad",
        stjerner: "★★★★★",
        dato: "08.02.2026",
        overskrift: "Praktisk og stressfri",
        tekst:
            "Den er super nem at bære i håndtaget og føles ikke klodset, selv når man går et stykke. Vi brugte den i parken, og den kunne sagtens overdøve snak uden at blive 'for meget'. Batteriet holdt hele dagen uden stress.",
    },
    {
        navn: "Simon Dahl",
        stjerner: "★★★★★",
        dato: "12.12.2025",
        overskrift: "Multi-parring er et kæmpe plus",
        tekst:
            "Vi parrede flere LUMINA One enheder til en fødselsdag, og det lød som én stor højttaler i hele lejligheden. Mega fedt til både stue, køkken og altan, og perfekt til festlige øjeblikke.",
    }
];
 
function showReviews() {
    const reviewContainer = document.getElementById("reviews-container");
 
    if (!reviewContainer) {
        return;
    }
 
    reviewContainer.innerHTML = "";
 
    reviews.forEach((review) => {
        reviewContainer.innerHTML += `
            <section class="review-card">
                <h4 class="navn">${review.navn}</h4>
                <p class="stars">${review.stjerner}</p>
                <p class="dato">${review.dato}</p>
                <p class="uo">${review.overskrift}</p>
                <p class="anmeldelse">${review.tekst}</p>
            </section>
        `;
    });
}
 
function initColorButtons() {
    const productImage = document.querySelector("#product-image");
    const colorName = document.querySelector("#color-name");
    const colorButtons = document.querySelectorAll(".color-btn");
 
    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            colorButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
 
            button.classList.add("active");
 
            const newImage = button.dataset.image;
            const newName = button.dataset.name;
 
            productImage.src = newImage;
            productImage.alt = newName;
            colorName.textContent = newName;
        });
    });
}
 
function initQuantityButtons() {
    let quantity = 1;
 
    const quantityValue = document.getElementById("quantity-value");
    const plusBtn = document.getElementById("plus-btn");
    const minusBtn = document.getElementById("minus-btn");
 
    if (!quantityValue || !plusBtn || !minusBtn) return;
 
    plusBtn.addEventListener("click", () => {
        quantity++;
        quantityValue.textContent = quantity;
    });
 
    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });
}
 
function showLuminaOnePage() {
    main.innerHTML = `
 
    <section class="nr1" id="product-section">
 
        <section class="billede">
 
            <figure>
                <img
                    id="product-image"
                    class="rose"
                    src="img/lumina-rose.png"
                    alt="Lumina Rose">
            </figure>
 
            <figure class="farve-palette">
 
                <button class="color-btn active" data-image="img/lumina-rose.png" data-name="Dusty Rose">
                    <img src="img/rose.png" alt="Dusty Rose">
                </button>
 
                <button class="color-btn" data-image="img/lumina-sage.png" data-name="Sage Green">
                    <img src="img/sage.png" alt="Sage Green">
                </button>
 
                <button class="color-btn" data-image="img/lumina-white.png" data-name="Moonlight White">
                    <img src="img/white.png" alt="Moonlight White">
                </button>
 
                <button class="color-btn" data-image="img/lumina-lilac.png" data-name="Lilac">
                    <img src="img/lilac.png" alt="Lilac">
                </button>
 
            </figure>
 
            <p id="color-name">Dusty Rose</p>
 
        </section>
 
        <section class="egenskaber">
 
            <ul>
                ${featureList}
            </ul>
 
            <section>
                <p class="pris">1499 kr</p>
 
                <div class="knapper">
                    <div class="quantity">
                        <button id="minus-btn">−</button>
                        <span id="quantity-value">1</span>
                        <button id="plus-btn">+</button>
                    </div>
                    <a href="#" class="laeg-i-kurv">Læg i kurv</a>
                </div>
            </section>
 
        </section>
 
    </section>
 
    <section class="reviews-section">
        <h3>Se vores anmeldelser</h3>
        <section class="review" id="reviews-container"></section>
    </section>
    `;
 
    showReviews();
    initQuantityButtons();
    initColorButtons();
}
 
function showLuminaTwoPage() {
    main.innerHTML = `
        <section class="nr1 lumina-two-page" id="product-section">
 
            <a href="#" id="back-home" class="back-home">← Tilbage til forsiden</a>
 
            <section class="billede">
                <figure>
                    <img
                        id="product-image"
                        class="rose lumina-two-img"
                        src="img/lumina-two.png"
                        alt="Lumina Two">
                </figure>
 
                <figure class="farve-palette">
                    <button class="color-btn active">
                        <img src="img/beige-sand.png" alt="Beige Sand">
                    </button>
                </figure>
 
                <p id="color-name">Beige Sand</p>
            </section>
 
            <section class="egenskaber">
                <ul>
                    <li>Op til 100 dB</li>
                    <li>Integreret ambient-lys</li>
                    <li>Vægt: Kun 3 kg</li>
                    <li>Op til 18 timers spilletid</li>
                    <li>Mulighed for at parre op til 3 andre LUMINA One enheder</li>
                    <li>Social Connect: Blend din playliste med andres</li>
                    <li>IPX5 vandafvisende</li>
                </ul>
 
                <section>
                    <div class="knapper">
                        <div class="quantity">
                            <button class="minus-btn">−</button>
                            <span class="quantity-value">1</span>
                            <button class="plus-btn">+</button>
                        </div>
 
                        <a href="#" class="laeg-i-kurv">Læg i kurv</a>
                    </div>
                </section>
            </section>
 
        </section>
    `;
 
    document.getElementById("back-home").addEventListener("click", (e) => {
        e.preventDefault();
        showLuminaOnePage();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
 
document.getElementById("lumina-two-link").addEventListener("click", (e) => {
    e.preventDefault();
 
    showLuminaTwoPage();
 
    setTimeout(() => {
        document.getElementById("product-section").scrollIntoView({
            behavior: "smooth",
        });
    }, 50);
});
 
document.getElementById("lumina-one-link").addEventListener("click", (e) => {
    e.preventDefault();
 
    showLuminaOnePage();
 
    setTimeout(() => {
        document.getElementById("product-section").scrollIntoView({
            behavior: "smooth",
        });
    }, 50);
});
 
const footer = document.getElementById("footer");
 
footer.innerHTML = `
 
<div class="container">
 
    <div class="footer-columns">
 
        <ul>
            <li class="top">Kundeservice</li>
            <li><a href="#">Kontakt os</a></li>
            <li><a href="#">Forsendelse</a></li>
            <li><a href="#">Retur og ombytning</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
 
        <ul>
            <li class="top">Om Os</li>
            <li><a href="#">Om LUMINA Audio</a></li>
            <li><a href="#">Karriere</a></li>
            <li><a href="#">Anmeldelser</a></li>
            <li><a href="#">Blog og nyheder</a></li>
            <li><a href="#">Vilkår og betingelser</a></li>
        </ul>
 
        <ul>
            <li class="top">LUMINA Social</li>
            <li><a href="#">Log ind</a></li>
            <li><a href="#">LUMINA Community</a></li>
            <li><a href="#">Lumina-appen</a></li>
            <li><a href="#">Sociale medier</a></li>
            <li><a href="#">Samarbejde</a></li>
        </ul>
 
        <div class="last-column">
 
            <ul>
                <li class="top">Download Vores App</li>
                <li><a href="#">Oplev vores app</a></li>
            </ul>
 
            <div class="newsletter-container">
 
                <p class="newsletter-title">
                    Tilmeld dig vores nyhedsbrev
                </p>
 
                <div class="newsletter-line">
                    <input
                        type="email"
                        placeholder="Indtast din email">
 
                    <button>Tilmeld</button>
                </div>
 
            </div>
 
        </div>
 
    </div>
 
</div>
 
`;
 
showLuminaOnePage();
 