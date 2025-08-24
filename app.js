// Hero background images
const hero = document.getElementById("hero");
const heroImages = [
    "img/img-16.jpg",
    "img/img-21.jpg",
    "img/90378407.webp",
    "img/online-shopping-landing-page-template_23-2148896884.jpg"
];
let heroIndex = 0;

function changeHeroImage() {
    hero.style.background = `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('${heroImages[heroIndex]}') center/cover no-repeat
    `;
    heroIndex = (heroIndex + 1) % heroImages.length;
}

// Auto change every 4 seconds
setInterval(changeHeroImage, 4000);

// Load first image
changeHeroImage();


//Products
const products = [
    { id: 1, name: "Machine", owner: "The Style Edit", price: "$15", category: "electronic", img: "img/img-1.jpeg" },
    { id: 2, name: "Dress", owner: "The Style Edit", price: "$5", category: "clothes", img: "img/img-5.jpg" },
    { id: 3, name: "Watch", owner: "The Style Edit", price: "$3", category: "accessories", img: "img/img-9.jpg" },
    { id: 4, name: "Machine", owner: "The Style Edit", price: "$12", category: "electronic", img: "img/img-2.jpeg" },
    { id: 5, name: "Dress", owner: "The Style Edit", price: "$4", category: "clothes", img: "img/img-6.jpg" },
    { id: 6, name: "Watch", owner: "The Style Edit", price: "$6", category: "accessories", img: "img/img-12.jpeg" },
    { id: 7, name: "Machine", owner: "The Style Edit", price: "$18", category: "electronic", img: "img/img-3.jpeg" },
    { id: 8, name: "dress", owner: "The Style Edit", price: "$7", category: "clothes", img: "img/img-7.png" },
    { id: 6, name: "Watch", owner: "The Style Edit", price: "$6", category: "accessories", img: "img/img-10.jpg" },
    { id: 7, name: "Machine", owner: "The Style Edit", price: "$18", category: "electronic", img: "img/img-4.webp" },
    { id: 8, name: "dress", owner: "The Style Edit", price: "$7", category: "clothes", img: "img/img-8.jpeg" },
    { id: 6, name: "Watch", owner: "The Style Edit", price: "$6", category: "accessories", img: "img/img-11.webp" },
];

let currentPage = 1;
const itemsPerPage = 4;
let filteredProducts = products;

function displayProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const list = document.getElementById("productList");
    list.innerHTML = "";

    filteredProducts.slice(start, end).forEach(p => {
        list.innerHTML +=
            ` <div class="card">
            <div class="content">
              <!-- Front -->
              <div class="front">
                <div class="front-content" style="background-image: url('${p.img}');">
                  <span class="badge">${p.category}</span>
                  <div class="description">
                    <strong>${p.name}</strong>
                    <p>Owner: ${p.owner}</p>
                    <p class=" font-bold" style="color: #f39c12;">$${p.price}</p>
                  </div>
                </div>
              </div>
              <!-- Back -->
              <div class="back">
                <div class="back-content">
                  <p class="text-lg font-bold">${p.name}</p>
                  <p class="text-sm">Awesome quality product.</p>
                  <button class="button-62 px-4 py-1 bg-indigo-500 rounded-lg hover:bg-indigo-600">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ` ;
    });
}

function nextPage() {
    if (currentPage * itemsPerPage < filteredProducts.length) {
        currentPage++;
        displayProducts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
}

function filterProducts(category) {
    currentPage = 1;
    if (category === "all") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }
    displayProducts();
}

function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
    currentPage = 1;
    displayProducts();
}

// Initial Load
displayProducts();
