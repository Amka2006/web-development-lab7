// ===== Цомгийн өгөгдөл =====
// Зураг оруулах 3 арга (эхнийх нь байвал түүнийг ашиглана):
//   1) img: 'https://...jpg'  → интернэт холбоос (доорх img: '' хэсэгт хийнэ)
//   2) images/<key>.jpg       → lab06/images хавтсанд хийсэн файл
//   3) Аль нь ч байхгүй бол доорх scene (зурсан дүр зураг) харагдана
// Үнэ, хоног нь жишээ. Тоо, хэмжээг эх сурвалжтай нь тулгаж шалгаарай.
const places = [
  { key: 'khuvsgul', img: 'https://www.toursmongolia.com/uploads/mongolia%20lakes%20photo.jpg', name: 'Хөвсгөл нуур', region: 'Хойд', aimag: 'Хөвсгөл аймаг', days: 5, price: 1250000,
    scene: { type: 'lake', sky: ['#5aa9d6', '#d3ecf8'], sun: '#fff3c4', far: '#3b6e94', near: '#2c5a55', water: '#2a7fae', pines: 1 },
    map: 'Lake Khuvsgul, Mongolia', dist: 'Мөрөн хотоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн гүн цэнгэг устай нуур.',
    facts: ['Урт нь ~136 км, хамгийн гүн нь ~262 м', 'Монголын цэнгэг усны ихэнх хувийг агуулдаг', 'Хойд талд цаатан иргэд амьдардаг'] },
  { key: 'khongor', img: '', name: 'Хонгорын элс', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', days: 4, price: 980000,
    scene: { type: 'dunes', sky: ['#f7b862', '#fde9bd'], sun: '#fff1c2', c: ['#e3a652', '#c98638', '#a46825'] },
    map: 'Khongoryn Els, Mongolia', dist: 'Улаанбаатараас ~800 км', season: '5–9-р сар',
    text: 'Говийн хамгийн том элсэн манхан, «Дуут манхан».',
    facts: ['Хэдэн зуун метр өндөр, ~180 км үргэлжилнэ', 'Салхитай үед элс «дуугардаг»', 'Хажуугаар Хонгор гол урсдаг'] },
  { key: 'suvraga', img: '', name: 'Цагаан сүврага', region: 'Өмнөд', aimag: 'Дундговь аймаг', days: 2, price: 390000,
    scene: { type: 'cliffs', sky: ['#f6d7a8', '#fdf1d8'], sun: '#fff3d0', cliff: '#efe9dc', stripe: '#c9bfa8', ground: '#d8b878' },
    map: 'Tsagaan Suvarga, Mongolia', dist: 'Улаанбаатараас ~450 км', season: '5–10-р сар',
    text: 'Олон өнгийн ордон шиг харагддаг эртний хадан хясаа.',
    facts: ['Урт нь ~400 м орчим, олон сая жилийн настай', 'Далайн ёроол байсан үеийн тунамал давхарга', 'Нар жаргах үед өнгө нь өөрчлөгддөг'] },
  { key: 'bayanzag', img: '', name: 'Баянзаг (Бамбат хад)', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', days: 3, price: 720000,
    scene: { type: 'cliffs', sky: ['#ee9e68', '#fbd8ad'], sun: '#ffe9c4', cliff: '#c4552f', stripe: '#8d3a1f', ground: '#d79a62' },
    map: 'Bayanzag Flaming Cliffs, Mongolia', dist: 'Даланзадгадаас ~100 км', season: '5–9-р сар',
    text: 'Динозаврын өндөг олдсон алдарт газар.',
    facts: ['1920-иод онд Америкийн экспедиц дэлхийд анх нээсэн', 'Улаан хадан хясаа нарны гэрэлд галтай харагддаг', 'Саксаулын ой байдаг'] },
  { key: 'orkhon', img: '', name: 'Орхоны хүрхрээ', region: 'Төв', aimag: 'Өвөрхангай аймаг', days: 5, price: 1150000,
    scene: { type: 'falls', sky: ['#9cc9a9', '#e4f2e0'], wall: '#4a5648', green: '#4f7f52' },
    map: 'Orkhon Waterfall, Mongolia', dist: 'Улаанбаатараас ~600 км', season: '6–9-р сар',
    text: 'Монголын хамгийн сайхан хүрхрээ, UNESCO-гийн өвийн бүс.',
    facts: ['Өндөр нь ~20 м орчим', 'Орхоны хөндий нь 2004 онд UNESCO-д бүртгэгдсэн', 'Галт уулын гаралтай хавцалд оршино'] },
  { key: 'erdenezuu', img: '', name: 'Эрдэнэ Зуу хийд', region: 'Төв', aimag: 'Өвөрхангай аймаг', days: 3, price: 650000,
    scene: { type: 'temple', sky: ['#86b2dc', '#ecf4fb'], sun: '#fff6d6', hill: '#7fa06a' },
    map: 'Erdene Zuu Monastery, Mongolia', dist: 'Улаанбаатараас ~370 км', season: '5–10-р сар',
    text: 'Монголын хамгийн эртний Буддын шашны хийдүүдийн нэг.',
    facts: ['1586 онд байгуулагдсан', 'Эртний Хархорум хотын туурь дэргэд оршино', '108 суваргатай хэрмээр хүрээлэгдсэн'] },
  { key: 'terkh', img: '', name: 'Тэрхийн цагаан нуур', region: 'Төв', aimag: 'Архангай аймаг', days: 4, price: 890000,
    scene: { type: 'lake', sky: ['#7fb6d6', '#e1f2f8'], sun: '#fff7da', far: '#587a6a', near: '#3f5f4e', water: '#3a88a6', volcano: 1, pines: 1 },
    map: 'Terkhiin Tsagaan Lake, Mongolia', dist: 'Улаанбаатараас ~650 км', season: '6–9-р сар',
    text: 'Галт уулын нуралтаар үүссэн, шувууны олон зүйлтэй нуур.',
    facts: ['Тэрх голыг лаав хаасны улмаас үүссэн', 'Ойролцоогоор 16 км урт', 'Хорго галт уул ойрхон'] },
  { key: 'altai', img: '', name: 'Алтай Таван Богд', region: 'Баруун', aimag: 'Баян-Өлгий аймаг', days: 8, price: 2400000,
    scene: { type: 'snow', sky: ['#78a0d8', '#e8f0fc'], sun: '#ffffff', rock: '#56698f' },
    map: 'Altai Tavan Bogd National Park, Mongolia', dist: 'Өлгий хүртэл нисэх онгоцоор', season: '6–9-р сар',
    text: 'Монголын хамгийн өндөр оргил бүхий цасан нуруу.',
    facts: ['Хүйтэн оргил ~4,374 м', 'Поташины мөсөн гол ойрхон', 'Казах бүргэдчид уламжлалаа хадгалж байна'] },
  { key: 'uvs', img: '', name: 'Увс нуур', region: 'Баруун', aimag: 'Увс аймаг', days: 6, price: 1650000,
    scene: { type: 'lake', sky: ['#ee9a78', '#fde6c9'], sun: '#fff1d0', far: '#9a6f8e', near: '#7a5a6a', water: '#c97f88', birds: 1 },
    map: 'Uvs Lake, Mongolia', dist: 'Улаангомоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн том нуур, давстай. UNESCO-гийн өвийн сав газар.',
    facts: ['Талбай нь ~3,350 км² орчим', '2003 онд UNESCO-д бүртгэгдсэн', 'Нүүдлийн шувууд амардаг'] },
  { key: 'hustai', img: '', name: 'Хустайн нуруу', region: 'Төв', aimag: 'Төв аймаг', days: 1, price: 180000,
    scene: { type: 'steppe', sky: ['#a7d3ea', '#f0f8ea'], sun: '#fff7d0', hill: ['#7aa65a', '#5d8a47'], herd: 1 },
    map: 'Hustai National Park, Mongolia', dist: 'Улаанбаатараас ~100 км', season: '5–9-р сар',
    text: 'Тахь (Пржевальскийн морь) эргэн ирсэн байгалийн цогцолборт газар.',
    facts: ['1990-ээд онд тахийг дахин тавьсан', 'Ховор амьтан, шувууны олон зүйл', 'Нийслэлээс хамгийн ойр байгалийн цогцолбор'] },
  { key: 'burkhan', img: '', name: 'Бурхан Халдун', region: 'Зүүн', aimag: 'Хэнтий аймаг', days: 3, price: 780000,
    scene: { type: 'forest', sky: ['#9db8a9', '#e2ebe3'], t: ['#4a7a63', '#2f5a48', '#1d3b30'] },
    map: 'Burkhan Khaldun, Mongolia', dist: 'Улаанбаатараас ~250 км', season: '6–9-р сар',
    text: 'Чингис хааны төрсөн нутаг, ариун уул.',
    facts: ['2015 онд UNESCO-д бүртгэгдсэн', 'Онон, Хэрлэн, Туул голын эхтэй холбоотой', 'Монголчуудын онцгой хүндэтгэдэг ариун газар'] },
  { key: 'terelj', img: '', name: 'Тэрэлж', region: 'Төв', aimag: 'Төв аймаг', days: 2, price: 320000,
    scene: { type: 'steppe', sky: ['#86c3e6', '#eaf6f0'], sun: '#fff7d0', hill: ['#78a95f', '#5a8a45'], ger: 1, rocks: 1 },
    map: 'Gorkhi-Terelj National Park, Mongolia', dist: 'Улаанбаатараас ~70 км', season: '5–10-р сар',
    text: 'Гэрийн жуулчны бааз, Мэлхий хад бүхий дархан цаазат газар.',
    facts: ['Горхи-Тэрэлжийн байгалийн цогцолбор', 'Мэлхий хад, Аривал хийд', 'Нийслэлээс 1–2 цагийн зайтай'] }
];

// ===== Зурсан дүр зураг (SVG): зураг байхгүй үед харагдана =====
const rep = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');
const sunSvg = (c, x = 300, y = 170, r = 30) =>
  c ? `<circle cx="${x}" cy="${y}" r="${r * 2}" fill="${c}" opacity=".25"/><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>` : '';

const drawers = {
  lake: (g) => `
    ${sunSvg(g.sun)}
    <path d="M0 340 L70 262 L132 318 L212 226 L292 308 L352 258 L400 316 V380 H0Z" fill="${g.far}"/>
    ${g.volcano ? `<path d="M110 384 L200 246 L290 384Z" fill="${g.near}"/><path d="M178 278 L200 246 L222 278 L208 272 L196 282Z" fill="#e8eef0" opacity=".7"/>` : ''}
    <path d="M0 372 L90 336 L180 366 L262 340 L400 372 V392 H0Z" fill="${g.near}"/>
    <rect y="380" width="400" height="160" fill="${g.water}"/>
    <rect y="470" width="400" height="70" fill="#000" opacity=".16"/>
    ${rep(10, (i) => `<rect x="${(i * 53) % 320 + 20}" y="${394 + i * 14}" width="${64 - (i % 3) * 16}" height="3" rx="2" fill="#fff" opacity=".35"/>`)}
    ${g.pines ? rep(6, (i) => `<path d="M${10 + i * 17} 394 l8 -${42 + (i % 3) * 12} l8 ${42 + (i % 3) * 12}Z" fill="#1d3b30"/>`) : ''}
    ${g.birds ? `<path d="M60 120 q8-10 16 0 q8-10 16 0 M130 90 q6-8 12 0 q6-8 12 0 M220 130 q6-8 12 0 q6-8 12 0" stroke="#fff" fill="none" stroke-width="2.2" opacity=".85"/>` : ''}`,

  dunes: (g) => `
    ${sunSvg(g.sun, 90, 150, 28)}
    <path d="M0 330 Q120 270 230 330 T400 300 V540 H0Z" fill="${g.c[0]}"/>
    <path d="M0 400 Q110 330 220 392 T400 370 V540 H0Z" fill="${g.c[1]}"/>
    <path d="M0 470 Q120 410 240 462 T400 440 V540 H0Z" fill="${g.c[2]}"/>
    ${rep(3, (i) => `<ellipse cx="${250 + i * 24}" cy="${322 - i * 2}" rx="8" ry="5" fill="#5a3a1a"/><path d="M${246 + i * 24} 326 v10 M${254 + i * 24} 326 v10" stroke="#5a3a1a" stroke-width="2"/>`)}`,

  cliffs: (g) => `
    ${sunSvg(g.sun, 90, 150, 26)}
    <path d="M0 540 V350 L36 340 L52 262 L150 256 L170 318 L240 308 L270 214 L368 208 L386 292 L400 288 V540Z" fill="${g.cliff}"/>
    ${rep(6, (i) => `<rect y="${384 + i * 16}" width="400" height="2" fill="${g.stripe}" opacity=".4"/>`)}
    ${rep(14, (i) => `<path d="M${18 + i * 28} 384 V470" stroke="${g.stripe}" stroke-width="3" opacity=".4"/>`)}
    <path d="M0 470 Q140 440 260 470 T400 460 V540 H0Z" fill="${g.ground}"/>`,

  falls: (g) => `
    <path d="M0 150 L150 190 L130 540 H0Z" fill="${g.wall}"/>
    <path d="M400 130 L255 190 L275 540 H400Z" fill="${g.wall}"/>
    <path d="M0 150 Q80 118 150 190 L0 192Z" fill="${g.green}"/>
    <path d="M400 130 Q320 100 255 190 L400 192Z" fill="${g.green}"/>
    <path d="M156 188 L248 188 L262 440 L146 440Z" fill="#fff" opacity=".92"/>
    ${rep(5, (i) => `<path d="M${170 + i * 16} 196 V430" stroke="#bfe0ea" stroke-width="3" opacity=".7"/>`)}
    <ellipse cx="204" cy="452" rx="112" ry="28" fill="#c6e6ee"/>
    <circle cx="170" cy="440" r="26" fill="#fff" opacity=".45"/><circle cx="236" cy="436" r="30" fill="#fff" opacity=".4"/>
    <path d="M110 540 Q205 470 292 540Z" fill="#7fc4d0"/>`,

  temple: (g) => `
    ${sunSvg(g.sun, 70, 120, 24)}
    <path d="M0 400 Q100 340 200 390 T400 370 V540 H0Z" fill="${g.hill}"/>
    <rect y="446" width="400" height="94" fill="#cdb98a"/>
    <rect x="20" y="410" width="360" height="46" fill="#f3efe6"/>
    ${rep(10, (i) => `<rect x="${32 + i * 36}" y="396" width="16" height="14" fill="#fff"/><path d="M${32 + i * 36} 396 l8 -14 l8 14Z" fill="#d9a53a"/><rect x="${32 + i * 36}" y="410" width="16" height="46" fill="#e4dccb"/>`)}
    <rect x="150" y="340" width="100" height="72" fill="#b5362b"/>
    <path d="M132 342 L200 296 L268 342Z" fill="#d9a53a"/>
    <path d="M122 342 Q200 330 278 342 L268 352 H132Z" fill="#8f2a22"/>
    <rect x="190" y="372" width="20" height="40" fill="#5a1a14"/>
    <path d="M200 296 V270" stroke="#8f2a22" stroke-width="3"/><path d="M200 270 l16 6 l-16 6Z" fill="#d9a53a"/>`,

  snow: (g) => `
    ${sunSvg(g.sun, 320, 120, 22)}
    <path d="M0 360 L80 220 L150 320 L220 170 L300 310 L360 230 L400 330 V540 H0Z" fill="${g.rock}"/>
    <path d="M80 220 L58 262 L74 254 L90 272 L104 250Z" fill="#fff"/>
    <path d="M220 170 L190 232 L210 222 L224 246 L242 220 L254 238Z" fill="#fff"/>
    <path d="M360 230 L338 268 L352 260 L366 274 L380 258Z" fill="#fff"/>
    <path d="M170 420 Q210 360 250 420 L310 540 H110Z" fill="#dff0fb"/>
    <path d="M0 470 Q100 440 200 470 T400 455 V540 H0Z" fill="#6f8f6a"/>`,

  steppe: (g) => `
    ${sunSvg(g.sun, 300, 150, 28)}
    <path d="M0 360 Q100 300 220 350 T400 330 V540 H0Z" fill="${g.hill[0]}"/>
    <path d="M0 430 Q120 380 250 430 T400 410 V540 H0Z" fill="${g.hill[1]}"/>
    ${g.ger ? `<rect x="82" y="420" width="56" height="30" fill="#f7f3ea"/><path d="M76 422 L110 392 L144 422Z" fill="#fff"/><rect x="104" y="430" width="12" height="20" fill="#b5362b"/>` : ''}
    ${g.rocks ? `<ellipse cx="300" cy="424" rx="46" ry="30" fill="#8a8d86"/><ellipse cx="344" cy="434" rx="28" ry="20" fill="#9a9d95"/>` : ''}
    ${g.herd ? rep(5, (i) => `<ellipse cx="${90 + i * 46}" cy="${440 + (i % 2) * 14}" rx="13" ry="7" fill="#6b4a2f"/><path d="M${84 + i * 46} ${446 + (i % 2) * 14} v9 M${96 + i * 46} ${446 + (i % 2) * 14} v9" stroke="#6b4a2f" stroke-width="2.4"/><circle cx="${104 + i * 46}" cy="${434 + (i % 2) * 14}" r="5" fill="#6b4a2f"/>`) : ''}`,

  forest: (g) => {
    const row = (y, h, c) => `<rect y="${y}" width="400" height="${540 - y}" fill="${c}"/>` +
      rep(12, (i) => `<path d="M${i * 38 - 14} ${y} l${h / 4} -${h} l${h / 4} ${h}Z" fill="${c}"/>`);
    return `<rect y="250" width="400" height="130" fill="#fff" opacity=".18"/>
      ${row(380, 120, g.t[0])}<rect y="400" width="400" height="60" fill="#fff" opacity=".1"/>
      ${row(444, 140, g.t[1])}${row(512, 160, g.t[2])}`;
  }
};

const sceneSvg = (g, i) => `
  <svg class="scene" viewBox="0 0 400 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="sky${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${g.sky[0]}"/><stop offset="1" stop-color="${g.sky[1]}"/></linearGradient></defs>
    <rect width="400" height="540" fill="url(#sky${i})"/>${drawers[g.type](g)}
  </svg>`;

const grid = document.getElementById('galleryGrid');
const fmt = (n) => '₮' + n.toLocaleString('en-US');
const mapUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

// ===== Картуудыг үүсгэх (--i нь stagger-ийн дугаар) =====
places.forEach((p, i) => {
  grid.insertAdjacentHTML('beforeend', `
    <article class="card in" tabindex="0" data-region="${p.region}" style="--i:${i}" aria-label="${p.name}">
      <div class="card-inner">

        <div class="face front">
          ${sceneSvg(p.scene, i)}
          <img src="${p.img || `images/${p.key}.jpg`}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">
          <span class="badge">${p.region}</span>
          <span class="tag-price">${p.days} хоног</span>
          <div class="cap"><h3>${p.name}</h3><p>${p.aimag}</p></div>
        </div>

        <div class="face back">
          <div class="back-body">
            <h3>${p.name}</h3>
            <p class="where">${p.region} · ${p.aimag}</p>
            <p class="desc">${p.text}</p>
            <ul class="facts">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
            <ul class="pills"><li>${p.dist}</li><li>${p.season}</li></ul>
            <p class="price-line"><strong>${fmt(p.price)}</strong> / хүн · ${p.days} хоног</p>
            <div class="back-actions">
              <button class="back-btn" type="button" data-book="${p.key}">Захиалах</button>
              <button class="back-btn alt" type="button" data-q="${p.map}" data-name="${p.name}"><span class="pin" aria-hidden="true"></span>Газрын зураг</button>
            </div>
          </div>
        </div>

      </div>
    </article>`);
});

const cards = [...grid.querySelectorAll('.card')];

// ===== Товшилт: захиалах / газрын зураг / утсанд карт эргүүлэх =====
grid.addEventListener('click', (e) => {
  const book = e.target.closest('[data-book]');
  if (book) { bookPlace(book.dataset.book); return; }
  const map = e.target.closest('[data-q]');
  if (map) { openMap(map.dataset.q, map.dataset.name); return; }
  const card = e.target.closest('.card');
  if (card) card.classList.toggle('flipped');
});

grid.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    e.preventDefault();
    e.target.classList.toggle('flipped');
  }
});

// ===== Бүс нутгаар шүүх =====
const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.setAttribute('aria-pressed', c === chip));
    const filter = chip.dataset.filter;
    let n = 0;
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.region === filter;
      card.hidden = !show;
      card.classList.remove('flipped', 'in');
      if (show) {
        card.style.setProperty('--i', n++);   // stagger-ийг дахин тооцно
        void card.offsetWidth;                // animation-г дахин эхлүүлнэ
        card.classList.add('in');
      }
    });
  });
});

// ===== Захиалгын форм =====
const form = document.getElementById('bookForm');
const select = document.getElementById('bPlace');
const msg = document.getElementById('bookMsg');
const dateInput = document.getElementById('bDate');

places.forEach((p) => select.insertAdjacentHTML('beforeend', `<option value="${p.key}">${p.name} (${p.days} хоног, ${fmt(p.price)})</option>`));
dateInput.min = new Date().toISOString().slice(0, 10);

function bookPlace(key) {
  select.value = key;
  document.getElementById('zahialga').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => select.focus({ preventScroll: true }), 600);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('checked');
  if (!form.checkValidity()) { form.reportValidity(); msg.textContent = ''; return; }
  const name = document.getElementById('bName').value.trim();
  msg.textContent = `Баярлалаа, ${name}! Хүсэлтийг хүлээн авлаа. Бид тантай удахгүй холбогдоно.`;
  form.reset();
  form.classList.remove('checked');
  document.getElementById('bPeople').value = 2;
});

// ===== Газрын зургийг цонхонд нээх =====
const mapDialog = document.getElementById('mapDialog');
const mapFrame = document.getElementById('mapFrame');

function openMap(q, name) {
  document.getElementById('mapTitle').textContent = name;
  document.getElementById('mapOpen').href = mapUrl(q);
  mapFrame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(q) + '&z=9&hl=mn&output=embed';
  mapDialog.showModal();
}

function closeMap() {
  mapDialog.close();
  mapFrame.src = 'about:blank';
}

document.getElementById('mapClose').addEventListener('click', closeMap);
mapDialog.addEventListener('click', (e) => { if (e.target === mapDialog) closeMap(); });
mapDialog.addEventListener('cancel', () => { mapFrame.src = 'about:blank'; });

// ===== Харанхуй / гэрэл горим =====
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
themeBtn.setAttribute('aria-pressed', root.dataset.theme === 'dark');
themeBtn.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  root.dataset.theme = dark ? 'dark' : 'light';
  localStorage.setItem('theme', root.dataset.theme);
  themeBtn.setAttribute('aria-pressed', dark);
});

// ===== Гар утасны цэс =====
const menuBtn = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});