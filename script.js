// ====== CONFIG ======
// WhatsApp number in international format, digits only
const WHATSAPP_NUMBER = "2347025111444";
const BRAND = "Lakeshole Ventures";

// ====== PRODUCTS ======
// price: null => "Ask for price" (only used if a product has no price set)
const PRODUCTS = [
  {
    id: "cell", name: "Miira-Cell+", label: "miira-cell⁺", cat: "wellness", tag: "Stem Cell Nutrition",
    price: 60000, pack: "p-red", color: "#d3112d", img: "images/cell.jpeg",
    short: "An advanced stem-cell super-nutrient drink formulated to support healthy cells and normal body function.",
    about: "Miira-Cell+ is a stem-cell based, nutrient-rich supplement from the Miira range. It is formulated to support the body at cell level — helping rejuvenate, restore and repair cells while supporting the body's normal functioning and natural cleansing.",
    ingredients: ["Stem-cell nutrients", "Fish collagen"],
    benefits: ["Supports cell renewal and repair", "Super-nutrient formula for everyday wellness", "Supports the body's natural cleansing and normal function"],
    caution: "Contains ingredients (such as fish collagen) that may cause allergies, and some ingredients may have blood-thinning effects. If you take blood-thinning medication or have a health condition, consult your doctor first. Leave a gap between this and other Miira products."
  },
  {
    id: "curve", name: "Miira-Curve", label: "miira-curve", cat: "beauty", tag: "Weight Management",
    price: 60000, pack: "p-teal", color: "#ff7a3d",
    short: "A weight-management supplement combining six ingredients, working as an appetite suppressant alongside your diet.",
    about: "Miira-Curve is a weight-management supplement that brings together six ingredients to act as an appetite suppressant, designed to be taken as part of your daily diet.",
    ingredients: ["Six-ingredient blend", "Appetite-support formula"],
    benefits: ["Helps curb appetite", "Six-ingredient formula", "Easy to include in your daily diet"],
    caution: "Not a substitute for a balanced diet and active lifestyle. Not recommended during pregnancy or breastfeeding; consult a health professional if you have a medical condition."
  },
  {
    id: "life", name: "Miira-Life", label: "miiralife", cat: "wellness", tag: "Immunity & Vitality",
    price: 60000, pack: "p-blue", color: "#1f74ff", img: "images/life.jpeg",
    short: "Black Ginger, Moringa and Bird's Nest to support immunity, cell repair and daily energy.",
    about: "Miira-Life combines three key natural ingredients — Black Ginger, Moringa and Bird's Nest — to strengthen your natural defences, support cell repair and boost daily energy and vitality.",
    ingredients: ["Black Ginger", "Moringa", "Bird's Nest"],
    benefits: ["Supports immune strength", "Helps promote cell repair", "Supports blood flow, stamina and daily energy", "Antioxidant-rich ingredients"],
    caution: "Not recommended for pregnant women due to limited clinical safety data. Consult your healthcare provider before use. Allow 30–60 minutes between Miira-Life and other Miira products."
  },
  {
    id: "phyll", name: "Miira-Phyll", label: "miira-phyll", cat: "wellness", tag: "Natural Detox",
    price: 30000, pack: "p-green", color: "#3fae35", img: "images/phyll.jpeg",
    short: "A lemon-flavoured blend of botanical extracts and nutrients that supports your body's natural detox.",
    about: "Miira-Phyll is a carefully crafted blend of botanical extracts and essential nutrients designed to support the body's natural detoxification processes, in a refreshing lemon-flavoured drink.",
    ingredients: ["Botanical extracts", "Essential nutrients", "Lemon flavour"],
    benefits: ["Supports natural detoxification", "Helps you feel refreshed and energised", "Refreshing lemon-flavoured sachet"],
    caution: "Wellness supplement, not a medicine. Consult your doctor if you are pregnant, nursing or on medication."
  },
  {
    id: "wedok", name: "Miira-Wedok", label: "miira-wedok", cat: "coffee", tag: "Coffee for Her",
    price: 30000, pack: "p-gold", color: "#e0b56e", img: "images/wedok.jpeg",
    short: "Instant Arabica coffee blended with herbs to support feminine health, mood, skin and energy.",
    about: "Miira-Wedok is an instant Arabica coffee made especially for women, blended with a selection of natural herbs. It supports feminine wellness while giving you a delicious cup to start your day.",
    ingredients: ["Arabica coffee", "Natural herbs"],
    benefits: ["Supports hormonal balance", "Supports feminine health, including dryness", "Helps lift mood and emotions", "Supports healthier, more beautiful skin", "Gives you an energy boost"],
    caution: "Wellness product, not a medicine. If pregnant, nursing or on medication, check with your doctor first."
  },
  {
    id: "lanang", name: "Miira-Lanang", label: "miira-lanang", cat: "coffee", tag: "Coffee for Him",
    price: 30000, pack: "p-brown", color: "#d9a441", img: "images/lanang.jpeg",
    short: "Instant Arabica coffee with herbal extracts to support men's vitality, stamina and energy.",
    about: "Miira-Lanang is an instant Arabica coffee made especially for men, blended with herbal extracts. It supports men's vitality and sexual wellness while delivering rich, full-bodied coffee flavour.",
    ingredients: ["Arabica coffee", "Herbal extracts"],
    benefits: ["Supports stamina, libido and daily energy", "Supports men's sexual and prostate health", "Rich, full-bodied Arabica flavour"],
    caution: "Wellness product, not a medicine. Men with a medical condition or on medication should consult a doctor before use."
  },
  {
    id: "coffee", name: "Miira Coffee", label: "miira coffee", cat: "coffee", tag: "Wellness Coffee",
    price: 45000, pack: "p-coffee", color: "#c98a56",
    short: "Arabica-flavoured healthy coffee with Black Seed, Dates, Mangosteen skin and Fingerroot extracts.",
    about: "Miira Coffee is an Arabica-flavoured healthy coffee blended with Black Seed powder, Dates powder, Mangosteen skin extract and Fingerroot extract — a daily ritual that supports your immune system and overall wellness.",
    ingredients: ["Arabica flavour", "Black Seed powder", "Dates powder", "Mangosteen skin extract", "Fingerroot extract"],
    benefits: ["Black Seed: supports immunity and helps with inflammation", "Dates powder for natural energy", "Mangosteen skin and Fingerroot extracts", "A flavourful daily wellness ritual"],
    caution: "Wellness product, not a medicine. Consult your doctor if you are pregnant, nursing or on medication."
  },
  {
    id: "tiara", name: "Miira-Tiara", label: "miira Tiara", cat: "beauty", tag: "Beauty & Anti-Aging",
    price: 76500, pack: "p-pink", color: "#e0187d", img: "images/tiara.jpeg",
    short: "A beauty supplement with Honey Bee Powder, collagen, Vitamin C and Tocotrienol to nourish skin from within.",
    about: "Miira-Tiara is a beauty-care and anti-aging supplement that blends Honey Bee Powder, collagen, Ascorbic Acid (Vitamin C) and Tocotrienol (super Vitamin E) to nourish your skin from the inside. Take one sachet daily for best results.",
    ingredients: ["Honey Bee Powder", "Collagen", "Vitamin C", "Tocotrienol (Vitamin E)"],
    benefits: ["Supports skin hydration, elasticity and firmness", "Helps brighten skin and fade the look of dark spots", "Antioxidant protection with Vitamin C and Tocotrienol", "Helps reduce the appearance of fine lines"],
    caution: "Effects are maintained with continued daily use. Wellness supplement, not a medicine. Consult your doctor if pregnant, nursing or allergic to fish or bee products."
  }
];

const COMBO = { id: "combo", name: "Miira Combo Pack", label: "combo", pack: "p-red", price: 180000 };

// "Find your match" goals -> suggested product ids
const GOALS = [
  { id: "energy",   icon: "⚡", label: "More energy",         picks: ["coffee", "life"],  note: "A wellness coffee ritual and a daily vitality blend — popular picks for an energy lift." },
  { id: "glow",     icon: "✨", label: "Glowing skin",        picks: ["tiara", "wedok"],  note: "Beauty from within: collagen-based skin nourishment, plus a coffee made with skin in mind." },
  { id: "immune",   icon: "🛡️", label: "Immune support",      picks: ["life", "coffee"],  note: "Ingredients known for immune and antioxidant support, in two easy daily formats." },
  { id: "detox",    icon: "🍋", label: "Natural detox",       picks: ["phyll", "cell"],   note: "A refreshing lemon detox drink, and a nutrient formula that supports natural cleansing." },
  { id: "weight",   icon: "🎯", label: "Weight management",   picks: ["curve"],           note: "An appetite-support supplement designed to go alongside a healthy diet." },
  { id: "her",      icon: "🌸", label: "Coffee for her",      picks: ["wedok"],           note: "Arabica coffee blended with herbs, made especially for women." },
  { id: "him",      icon: "💪", label: "Coffee for him",      picks: ["lanang"],          note: "Rich Arabica coffee with herbal extracts, made especially for men." },
  { id: "wellness", icon: "🧬", label: "Whole-body wellness", picks: ["cell", "life"],    note: "Cell-level nutrition plus a Black Ginger, Moringa and Bird's Nest vitality blend." }
];

// ====== HELPERS ======
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const naira = n => "₦" + Number(n).toLocaleString("en-NG");
const waLink = text => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const byId = id => id === "combo" ? COMBO : PRODUCTS.find(p => p.id === id);
const priceHtml = p => p.price ? naira(p.price) : "<small>Price on request</small>";
const reduceMotion = matchMedia("(prefers-reduced-motion:reduce)").matches;
const HEART = '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const store = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let cart = store.get("lakeshole-cart", []);
let wish = store.get("lakeshole-wish", []);

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200);
}

// small gold dot that flies from a button to the cart icon
function fly(from) {
  if (!from || reduceMotion) return;
  const a = from.getBoundingClientRect(), b = $("#openCart").getBoundingClientRect();
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const d = document.createElement("div");
  d.className = "fly";
  d.style.left = a.left + a.width / 2 - 9 + "px";
  d.style.top = a.top + a.height / 2 - 9 + "px";
  document.body.appendChild(d);
  d.animate(
    [{ transform: "translate(0,0) scale(1)", opacity: 1 }, { transform: `translate(${dx}px,${dy}px) scale(.3)`, opacity: .35 }],
    { duration: 650, easing: "cubic-bezier(.5,-.2,.8,.5)" }
  ).onfinish = () => d.remove();
}

// ====== PRODUCT GRID (search / sort / filter / saved) ======
const state = { f: "all", q: "", sort: "default" };
const grid = $("#grid"), noneEl = $("#none");
const CAT_WORDS = { coffee: "coffee drink", wellness: "wellness health", beauty: "beauty" };
PRODUCTS.forEach(p => {
  p._s = [p.name, p.tag, CAT_WORDS[p.cat], p.short, p.about, ...p.benefits, ...p.ingredients].join(" ").toLowerCase();
});

function visibleProducts() {
  let list = PRODUCTS.filter(p =>
    (state.f === "all" || (state.f === "saved" ? wish.includes(p.id) : p.cat === state.f)) &&
    (!state.q || p._s.includes(state.q)));
  if (state.sort === "low") list = [...list].sort((a, b) => (a.price ?? 1e12) - (b.price ?? 1e12));
  if (state.sort === "high") list = [...list].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
  return list;
}

function renderGrid() {
  const list = visibleProducts();
  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  list.forEach((p, i) => {
    const el = document.createElement("article");
    el.className = "card";
    el.style.setProperty("--c", p.color);
    el.style.animationDelay = Math.min(i, 8) * 55 + "ms";
    el.innerHTML = `
      <button class="heart" data-wish="${p.id}" aria-pressed="${wish.includes(p.id)}" aria-label="Save ${p.name}">${HEART}</button>
      <div class="pack ${p.pack}"><i>${p.label}</i></div>
      <span class="tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <p class="short">${p.short}</p>
      <div class="row">
        <div class="price">${priceHtml(p)}</div>
        ${p.price
          ? `<button class="add" data-add="${p.id}">Add to cart</button>`
          : `<button class="add" data-ask="${p.id}">Ask for price</button>`}
      </div>
      <button class="view" data-info="${p.id}" aria-label="View product details for ${p.name}">View product details ${ARROW}</button>`;
    frag.appendChild(el);
  });
  grid.appendChild(frag);
  noneEl.hidden = list.length > 0;
  if (!list.length) {
    noneEl.textContent = state.f === "saved" && !state.q
      ? "You haven't saved any products yet. Tap the heart on a product to save it."
      : "No products match your search. Try another word, like coffee, skin or detox.";
  }
}

function updateSavedCount() {
  $("#savedCount").textContent = wish.length ? wish.length : "";
}

// ====== FIND YOUR MATCH ======
function renderGoals() {
  $("#goals").innerHTML = GOALS.map(g => `<button class="goal" data-goal="${g.id}"><span>${g.icon}</span>${g.label}</button>`).join("");
}
function showMatch(id) {
  const g = GOALS.find(x => x.id === id); if (!g) return;
  $$(".goal").forEach(b => b.classList.toggle("active", b.dataset.goal === id));
  $("#result").innerHTML = `<p class="r-note">${g.note}</p><div class="r-grid">${g.picks.map(pid => {
    const p = byId(pid);
    return `<article class="rcard" style="--c:${p.color}">
      <div class="thumb">${p.img ? `<img src="${p.img}" alt="${p.name} package" width="96" height="96" loading="lazy" decoding="async">` : `<div class="pack ${p.pack}"><i>${p.label}</i></div>`}</div>
      <div><small>${p.tag}</small><h4>${p.name}</h4><div class="rp">${priceHtml(p)}</div>
        <div class="ra"><button data-info="${p.id}">View details</button>${p.price ? `<button class="add" data-add="${p.id}">Add to cart</button>` : `<button class="add" data-ask="${p.id}">Ask for price</button>`}</div>
      </div></article>`;
  }).join("")}</div>`;
}

// ====== MODAL ======
let modalIdx = 0, modalQty = 1;
function renderModal() {
  const p = PRODUCTS[modalIdx];
  track(p.id);
  $("#modalBody").innerHTML = `
    <div class="m-art" style="--c:${p.color}33">${p.img
      ? `<img src="${p.img}" alt="${p.name} package" width="300" height="300" decoding="async">`
      : `<div class="pack ${p.pack}"><i>${p.label}</i></div>`}</div>
    <div class="m-info" style="--c:${p.color}">
      <span class="tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <p>${p.about}</p>
      <h4>Key ingredients</h4>
      <div class="chips">${p.ingredients.map(i => `<span>${i}</span>`).join("")}</div>
      <h4>Key benefits</h4>
      <ul>${p.benefits.map(b => `<li>${b}</li>`).join("")}</ul>
      <div class="caution"><b>Please note:</b> ${p.caution}</div>
      <div class="m-buy">
        <div class="price">${priceHtml(p)}</div>
        ${p.price
          ? `<div class="stepper"><button data-q="-1" aria-label="Decrease quantity">−</button><span id="mQty">${modalQty}</span><button data-q="1" aria-label="Increase quantity">+</button></div>
             <button class="btn primary" data-madd="${p.id}">Add to cart</button>
             <button class="btn ghost" data-morder="${p.id}">Order on WhatsApp</button>`
          : `<button class="btn primary" data-ask="${p.id}">Ask for price</button>`}
      </div>
    </div>`;
  $("#mCount").textContent = `${modalIdx + 1} / ${PRODUCTS.length}`;
  $(".modal-box").scrollTop = 0;
}
function openModal(id, fresh = true) {
  const i = PRODUCTS.findIndex(x => x.id === id); if (i < 0) return;
  modalIdx = i; if (fresh) modalQty = 1;
  renderModal();
  $("#modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function stepModal(d) { modalIdx = (modalIdx + d + PRODUCTS.length) % PRODUCTS.length; modalQty = 1; renderModal(); }
const closeModal = () => { $("#modal").classList.remove("open"); document.body.style.overflow = ""; };
const modalOpen = () => $("#modal").classList.contains("open");

// ====== CART ======
const saveCart = () => store.set("lakeshole-cart", cart);
function addToCart(id, qty = 1, from) {
  const item = byId(id);
  if (!item || !item.price) return;
  const found = cart.find(c => c.id === id);
  found ? found.qty += qty : cart.push({ id, qty });
  saveCart(); renderCart(); fly(from);
  toast(`${item.name}${qty > 1 ? " ×" + qty : ""} added to cart`);
  $("#openCart").animate([{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }], 300);
}

function renderCart() {
  const box = $("#cartItems");
  const count = cart.reduce((a, c) => a + c.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartCount").style.display = count ? "grid" : "none";
  if (!cart.length) {
    box.innerHTML = `<div class="empty">Your cart is empty.<br>Add something delicious ☕</div>`;
    $("#cartTotal").textContent = "₦0"; renderSuggest(); return;
  }
  let total = 0;
  box.innerHTML = cart.map(c => {
    const p = byId(c.id); total += p.price * c.qty;
    return `<div class="ci">
      <div class="pack ${p.pack}"><i>${p.label}</i></div>
      <div><h4>${p.name}</h4><small>${naira(p.price)}</small>
        <div class="qty"><button data-dec="${c.id}">−</button><span>${c.qty}</span><button data-inc="${c.id}">+</button></div></div>
      <button class="rm" data-rm="${c.id}">Remove</button></div>`;
  }).join("");
  $("#cartTotal").textContent = naira(total);
  renderSuggest();
}
function openCart() { $("#drawer").classList.add("open"); $("#overlay").classList.add("open"); }
function closeCart() { $("#drawer").classList.remove("open"); $("#overlay").classList.remove("open"); }

function checkout() {
  if (!cart.length) return toast("Your cart is empty");
  let total = 0;
  const lines = cart.map(c => { const p = byId(c.id); total += p.price * c.qty; return `• ${p.name} x${c.qty} — ${naira(p.price * c.qty)}`; });
  const msg = `Hello ${BRAND}! I'd like to order:\n\n${lines.join("\n")}\n\nTotal: ${naira(total)}\n\nPlease confirm availability, payment and delivery details.`;
  window.open(waLink(msg), "_blank");
}

// ====== EVENTS ======
document.addEventListener("click", e => {
  const t = e.target.closest("[data-add],[data-info],[data-ask],[data-inc],[data-dec],[data-rm],[data-wish],[data-q],[data-madd],[data-morder],[data-goal]");
  if (!t) return;
  const d = t.dataset;
  if (d.add) addToCart(d.add, 1, t);
  else if (d.info) openModal(d.info);
  else if (d.ask) { const p = byId(d.ask); window.open(waLink(`Hello ${BRAND}! What is the current price of ${p.name}?`), "_blank"); }
  else if (d.inc) { cart.find(c => c.id === d.inc).qty++; saveCart(); renderCart(); }
  else if (d.dec) { const c = cart.find(c => c.id === d.dec); c.qty--; if (c.qty < 1) cart = cart.filter(x => x !== c); saveCart(); renderCart(); }
  else if (d.rm) { cart = cart.filter(c => c.id !== d.rm); saveCart(); renderCart(); }
  else if (d.wish) {
    const on = !wish.includes(d.wish);
    wish = on ? [...wish, d.wish] : wish.filter(x => x !== d.wish);
    store.set("lakeshole-wish", wish); updateSavedCount();
    t.setAttribute("aria-pressed", on);
    t.classList.remove("pop"); void t.offsetWidth; t.classList.add("pop");
    toast(on ? byId(d.wish).name + " saved" : "Removed from saved");
    if (state.f === "saved") renderGrid();
  }
  else if (d.q) { modalQty = Math.min(20, Math.max(1, modalQty + Number(d.q))); $("#mQty").textContent = modalQty; }
  else if (d.madd) { addToCart(d.madd, modalQty, t); }
  else if (d.morder) {
    const p = byId(d.morder);
    window.open(waLink(`Hello ${BRAND}! I'd like to order ${p.name} x${modalQty} — ${naira(p.price * modalQty)}. Please confirm availability, payment and delivery details.`), "_blank");
  }
  else if (d.goal) showMatch(d.goal);
});

$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  $$(".chip").forEach(c => c.classList.remove("active")); b.classList.add("active");
  state.f = b.dataset.f; renderGrid();
});
let searchT;
$("#search").addEventListener("input", e => {
  clearTimeout(searchT);
  searchT = setTimeout(() => { state.q = e.target.value.trim().toLowerCase(); renderGrid(); }, 130);
});
$("#sort").addEventListener("change", e => { state.sort = e.target.value; renderGrid(); });

$("#closeModal").onclick = closeModal;
$("#mPrev").onclick = () => stepModal(-1);
$("#mNext").onclick = () => stepModal(1);
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
$("#openCart").onclick = openCart; $("#closeCart").onclick = closeCart; $("#overlay").onclick = closeCart;
$("#checkout").onclick = checkout;
$("#clearCart").onclick = () => { cart = []; saveCart(); renderCart(); };
$("#addCombo").onclick = e => addToCart("combo", 1, e.currentTarget);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeCart(); setMenu(false); }
  if (modalOpen() && e.key === "ArrowRight") stepModal(1);
  if (modalOpen() && e.key === "ArrowLeft") stepModal(-1);
});
$("#fab").href = waLink(`Hello ${BRAND}! I'd like to know more about your Miira products.`);
$("#waLink").href = waLink(`Hello ${BRAND}! I'd like to know more about your Miira products.`);
$("#year").textContent = new Date().getFullYear();
$("#toTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ====== SCROLL EFFECTS (rAF-throttled, no layout reads) ======
const progressEl = $("#progress"), navEl = $("#nav"), topEl = $("#toTop"), ringEl = $("#toTop circle");
let ticking = false, maxScroll = 1, navOn = false, topOn = false;
const measure = () => { maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight); };
function onScroll() {
  const y = window.scrollY;
  const pr = Math.min(1, y / maxScroll);
  progressEl.style.transform = `scaleX(${pr})`;
  ringEl.style.strokeDashoffset = 138.2 * (1 - pr);
  const n = y > 40, t = y > 700;
  if (n !== navOn) { navOn = n; navEl.classList.toggle("scrolled", n); }
  if (t !== topOn) { topOn = t; topEl.classList.toggle("show", t); }
  ticking = false;
}
window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
window.addEventListener("resize", measure, { passive: true });
if ("ResizeObserver" in window) new ResizeObserver(measure).observe(document.body);
measure(); onScroll();

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
$$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });

// count-up
const co = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return; co.unobserve(en.target);
  const el = en.target, end = +el.dataset.count, pre = el.dataset.prefix || "", t0 = performance.now();
  const step = t => { const k = Math.min((t - t0) / 1400, 1); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString("en-NG"); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), { threshold: .6 });
$$("[data-count]").forEach(el => co.observe(el));

// pause looping animations while they are off-screen
const loopIO = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle("is-paused", !en.isIntersecting)), { rootMargin: "120px" });
[$("#stage"), $(".marquee"), $("#sparks"), $(".gallery")].forEach(el => loopIO.observe(el));

// nav link highlights the section you are reading
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  const h = "#" + en.target.id;
  $$("#links a, #dots a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === h));
}), { rootMargin: "-45% 0px -50% 0px" });
["about", "match", "products", "combo", "why", "faq", "contact"].forEach(id => { const s = $("#" + id); if (s) spy.observe(s); });

// rotating hero word
if (!reduceMotion) {
  const words = ["energy", "glow", "balance", "vitality", "everyday wellness"], rw = $("#rotWord");
  let wi = 0;
  setInterval(() => {
    rw.classList.add("out");
    setTimeout(() => { wi = (wi + 1) % words.length; rw.textContent = words[wi]; rw.classList.remove("out"); }, 350);
  }, 2600);
}

// card spotlight that follows the cursor (mouse only, rAF throttled)
if (matchMedia("(pointer:fine)").matches && !reduceMotion) {
  let raf = 0, px = 0, py = 0, tgt = null;
  grid.addEventListener("pointermove", e => {
    const c = e.target.closest(".card"); if (!c) return;
    tgt = c; px = e.clientX; py = e.clientY;
    if (!raf) raf = requestAnimationFrame(() => {
      raf = 0; const r = tgt.getBoundingClientRect();
      tgt.style.setProperty("--mx", px - r.left + "px"); tgt.style.setProperty("--my", py - r.top + "px");
    });
  }, { passive: true });
}

// ====== v4 extras: gallery, recently viewed, cart suggestions, sparks, glow, magnetic, menu, dots ======
let recent = store.get("lakeshole-recent", []);
function renderRecent() {
  const el = $("#recent"), items = recent.map(byId).filter(Boolean);
  el.hidden = !items.length;
  el.innerHTML = items.length
    ? "<span>Recently viewed</span>" + items.map(p => `<button data-info="${p.id}" style="--c:${p.color}"><i></i>${p.name}</button>`).join("")
    : "";
}
function track(id) {
  recent = [id, ...recent.filter(x => x !== id)].slice(0, 4);
  store.set("lakeshole-recent", recent); renderRecent();
}

function renderGallery() {
  const one = PRODUCTS.map(p => `<button class="g-item" data-info="${p.id}" style="--c:${p.color}" aria-label="View ${p.name}"><div class="g-art">${p.img
    ? `<img src="${p.img}" alt="" width="180" height="180" loading="lazy" decoding="async">`
    : `<div class="pack ${p.pack}"><i>${p.label}</i></div>`}</div><b>${p.name}</b><span>${p.price ? naira(p.price) : "Ask for price"}</span></button>`).join("");
  $("#gTrack").innerHTML = one + one.replace(/<button /g, '<button aria-hidden="true" tabindex="-1" ');
}

function renderSuggest() {
  const inCart = new Set(cart.map(c => c.id)), el = $("#suggest");
  const picks = PRODUCTS.filter(p => p.price && !inCart.has(p.id)).sort((a, b) => a.price - b.price).slice(0, 2);
  el.hidden = !picks.length;
  el.innerHTML = picks.length
    ? '<div class="s-title">You may also like</div>' + picks.map(p => `<div class="s-item" style="--c:${p.color}"><div class="s-thumb">${p.img
        ? `<img src="${p.img}" alt="" width="46" height="46" loading="lazy">`
        : `<div class="pack ${p.pack}"></div>`}</div><div><b>${p.name}</b><small>${naira(p.price)}</small></div><button data-add="${p.id}">+ Add</button></div>`).join("")
    : "";
}

// floating sparks in the hero (10 tiny elements, transform/opacity only)
const sparkEl = $("#sparks");
if (sparkEl && !reduceMotion) {
  const cols = ["#d3112d", "#1f74ff", "#e0b56e", "#e0187d", "#3fae35"];
  sparkEl.innerHTML = Array.from({ length: 10 }, (_, i) => {
    const s = 6 + (i * 5) % 9, left = 4 + (i * 9.7) % 92, d = 11 + (i * 3) % 9, dl = -(i * 1.7), sx = (i % 2 ? 1 : -1) * (30 + (i * 11) % 60);
    return `<span style="left:${left}%;--s:${s}px;--d:${d}s;--dl:${dl}s;--sx:${sx}px;--sc:${cols[i % cols.length]}"></span>`;
  }).join("");
}

const finePointer = matchMedia("(pointer:fine)").matches;
if (finePointer && !reduceMotion) {
  // soft glow that follows the cursor over the hero
  const hero = $(".hero"), glow = $("#heroGlow");
  let hr = 0, gx = 0, gy = 0;
  hero.addEventListener("pointermove", e => {
    gx = e.clientX; gy = e.clientY;
    if (!hr) hr = requestAnimationFrame(() => {
      hr = 0; const r = hero.getBoundingClientRect();
      glow.style.transform = `translate3d(${gx - r.left - 260}px,${gy - r.top - 260}px,0)`; glow.style.opacity = 1;
    });
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { glow.style.opacity = 0; });

  // magnetic call-to-action buttons
  $$(".cta .btn, #addCombo").forEach(b => {
    let raf = 0;
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * .18, y = (e.clientY - r.top - r.height / 2) * .28;
      cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { b.style.translate = `${x}px ${y}px`; });
    });
    b.addEventListener("pointerleave", () => { cancelAnimationFrame(raf); b.style.translate = "0 0"; });
  });
}

// side dots: jump to a section, highlights the one you are reading
const SECTIONS = [["about", "About"], ["match", "Find yours"], ["products", "Products"], ["combo", "Combo"], ["why", "Why us"], ["faq", "FAQ"], ["contact", "Contact"]];
$("#dots").innerHTML = SECTIONS.map(([id, l]) => `<a href="#${id}" data-l="${l}" aria-label="${l}"></a>`).join("");

// mobile menu
const burger = $("#burger"), menu = $("#links"), menuOv = $("#navOverlay");
function setMenu(open) {
  menu.classList.toggle("open", open); burger.classList.toggle("open", open); menuOv.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
}
burger.onclick = () => setMenu(!menu.classList.contains("open"));
menuOv.onclick = () => setMenu(false);
$$("#links a").forEach(a => a.addEventListener("click", () => setMenu(false)));
window.addEventListener("resize", () => { if (innerWidth > 940 && menu.classList.contains("open")) setMenu(false); }, { passive: true });
$("#navCta").href = $("#fab").href;

renderGrid(); renderGoals(); renderGallery(); renderRecent(); renderCart(); updateSavedCount();
$("#result").innerHTML = '<p class="r-hint">Tap a goal above and we\'ll suggest where to start.</p>';


/* FAQ: smooth height drop-down */
$$("details.faq-item").forEach(d => {
  const box = d.querySelector(".faq-a");
  let anim = null;
  const finish = open => { d.classList.remove("closing"); d.open = open; box.style.height = ""; anim = null; };
  d.querySelector("summary").addEventListener("click", e => {
    e.preventDefault();
    const opening = !d.open || d.classList.contains("closing");
    if (reduceMotion || !box.animate) { d.open = opening; d.classList.remove("closing"); return; }
    const from = anim ? box.getBoundingClientRect().height : (d.open ? box.offsetHeight : 0);
    if (anim) anim.cancel();
    if (opening) { d.classList.remove("closing"); d.open = true; }
    else d.classList.add("closing");
    const to = opening ? box.scrollHeight : 0;
    box.style.height = from + "px";
    anim = box.animate({ height: [from + "px", to + "px"] }, { duration: opening ? 420 : 320, easing: "cubic-bezier(.4,0,.2,1)" });
    box.style.height = to + "px";
    const a = anim;
    a.onfinish = () => { if (anim === a) finish(opening); };
    a.oncancel = () => {};
  });
});
