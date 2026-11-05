// ============================================================
//  ЗУРГИЙН ХАЯГИЙН ХЭСЭГ
//  Зураг бүрийн хаягийг (https://...) '' хоорондоо буулгана.
//  Жишээ:  khuvsgul: 'https://images.unsplash.com/photo-xxxx',
// ============================================================
const images = {
  khuvsgul:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC1u6yBUwes14z9WM0Dy9pziLnzbGb1rTVnqVGSnKWA&s=10',   // Хөвсгөл нуур
  khongor:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlhMT_LL4lacy5tFMQP8gfMCEj7fhw8J-tJ-w7y6xhQ&s=10',   // Хонгорын элс
  suvraga:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5x8QuT1thxRheZUc3ME8aljGDqxP95fXqNc8U_Q9rw&s=10',   // Цагаан сүврага
  bayanzag:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXprceCm_fHXsiInbk_2npUoU_LoDZ-gdkRefpKkdIXA&s=10',   // Баянзаг
  orkhon:    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkA2t7YTmCl_WB6O4zgfjASPZXHqSHxV9LG3bVSN-qg&s=10',   // Орхоны хүрхрээ
  erdenezuu: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOioQyfKWh5PhXH0uqtZiXURsFzpsVxINQg5CR7S7oow&s=10',   // Эрдэнэ Зуу хийд
  terkh:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAP-JfKidM5f0rBqdMXh8QGgygBECfyC7bJVnULtBQg&s=10',   // Тэрхийн цагаан нуур
  altai:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7E5i-OESnP3SwS0W_SJQMy3agueZUGqJabZ_NSwltQ&s=10',   // Алтай Таван Богд
  uvs:       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGfODL40GJ3maGsWToQ8di10ej0BvkpDBNz2HLcwdTw&s=10',   // Увс нуур
  hustai:    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXgTPFNeI-vc6B9ui_Fdwm1kIilNR3LIJL5ONxizEYg&s=10',   // Хустайн нуруу
  burkhan:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8_aQvVqU0KPczOYVK_QH5wauBThEExC8bP5Op_9jpA&s=10',   // Бурхан Халдун
  terelj:    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqMG3dtljSIKbcyaTTrpgiZ1NsA3-1NdvK3YK18eNMg&s=10'    // Тэрэлж
};

// ===== Аяллын өгөгдөл =====
// map: Google Maps-д хайх нэр. Тоо, хэмжээг эх сурвалжтай нь тулгаж шалгаарай.
const places = [
  { key: 'khuvsgul', name: 'Хөвсгөл нуурын аялал', region: 'Хойд', aimag: 'Хөвсгөл аймаг', art: 'lake',
    map: 'Lake Khuvsgul, Mongolia', dist: 'Мөрөн хотоос ~100 км', season: '6–9-р сар',
    text: 'Монголын «Хөх сувд» хэмээн алдаршсан нууранд завиар аялж, цаатан айлд зочилно.',
    facts: ['Нуурын урт ~136 км, хамгийн гүн нь ~262 м', 'Нуурын эрэгт морин аялал, завь, загасчлал', 'Хойд талд цаатан иргэдэд зочлох боломжтой'] },
  { key: 'khongor', name: 'Хонгорын элсний аялал', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', art: 'gobi',
    map: 'Khongoryn Els, Mongolia', dist: 'Улаанбаатараас ~800 км', season: '5–9-р сар',
    text: 'Говийн «Дуут манхан» дээр гарч, тэмээгээр аялж, элсэн манханд нар жаргахыг үзнэ.',
    facts: ['Хэдэн зуун метр өндөр, ~180 км үргэлжилнэ', 'Тэмээн аялал, манханд авирах', 'Салхитай үед элс «дуугардаг»'] },
  { key: 'suvraga', name: 'Цагаан сүвргийн аялал', region: 'Өмнөд', aimag: 'Дундговь аймаг', art: 'steppe',
    map: 'Tsagaan Suvarga, Mongolia', dist: 'Улаанбаатараас ~450 км', season: '5–10-р сар',
    text: 'Олон өнгийн ордон шиг харагддаг хадан хясаанд зураг авахуулж, говийн аялалаа эхлүүлнэ.',
    facts: ['Урт нь ~400 м орчим, олон сая жилийн настай', 'Зураг авахуулахад тохиромжтой', 'Нар жаргах үед өнгө нь өөрчлөгддөг'] },
  { key: 'bayanzag', name: 'Баянзагийн аялал', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', art: 'bayan',
    map: 'Bayanzag Flaming Cliffs, Mongolia', dist: 'Даланзадгадаас ~100 км', season: '5–9-р сар',
    text: 'Динозаврын өндөг олдсон алдарт «Бамбат хад»-аар аялж, саксаулын ойгоор алхана.',
    facts: ['Динозаврын олдвороороо дэлхийд алдартай', 'Улаан хадан хясаа нарны гэрэлд галтай харагддаг', 'Саксаулын ойгоор алхах боломжтой'] },
  { key: 'orkhon', name: 'Орхоны хүрхрээний аялал', region: 'Төв', aimag: 'Өвөрхангай аймаг', art: 'khangai',
    map: 'Orkhon Waterfall, Mongolia', dist: 'Улаанбаатараас ~600 км', season: '6–9-р сар',
    text: 'UNESCO-гийн өвийн бүс дэх хүрхрээнд очиж, хавцлаар явган алхаж, нүүдэлчин айлд хонож амарна.',
    facts: ['Хүрхрээний өндөр ~20 м орчим', 'Орхоны хөндий 2004 онд UNESCO-д бүртгэгдсэн', 'Хавцлаар явган аялал хийнэ'] },
  { key: 'erdenezuu', name: 'Эрдэнэ Зуугийн аялал', region: 'Төв', aimag: 'Өвөрхангай аймаг', art: 'khentii',
    map: 'Erdene Zuu Monastery, Mongolia', dist: 'Улаанбаатараас ~370 км', season: '5–10-р сар',
    text: 'Монголын хамгийн эртний хийдүүдийн нэгэнд зочилж, Хархорумын түүхэн нутгаар хөтөчтэй аялна.',
    facts: ['1586 онд байгуулагдсан', 'Эртний Хархорум хотын туурь дэргэд оршино', '108 суваргатай хэрмээр хүрээлэгдсэн'] },
  { key: 'terkh', name: 'Тэрхийн цагаан нуурын аялал', region: 'Төв', aimag: 'Архангай аймаг', art: 'terkh',
    map: 'Terkhiin Tsagaan Lake, Mongolia', dist: 'Улаанбаатараас ~650 км', season: '6–9-р сар',
    text: 'Галт уулын нуралтаар үүссэн нуурын эрэгт амарч, шувуу ажиглан, Хорго уул руу авирна.',
    facts: ['Нуурын урт ~16 км орчим', 'Шувуу ажиглах, загасчлах боломжтой', 'Хорго галт уул ойрхон'] },
  { key: 'altai', name: 'Алтай Таван Богдын аялал', region: 'Баруун', aimag: 'Баян-Өлгий аймаг', art: 'altai',
    map: 'Altai Tavan Bogd National Park, Mongolia', dist: 'Өлгий хүртэл нисэх онгоцоор', season: '6–9-р сар',
    text: 'Цасан оргилууд, мөсөн голын дундуур явган болон морин аялж, казах бүргэдчин айлд зочилно.',
    facts: ['Хүйтэн оргил ~4,374 м', 'Поташины мөсөн гол ойрхон', 'Казах бүргэдчдийн уламжлалтай танилцана'] },
  { key: 'uvs', name: 'Увс нуурын аялал', region: 'Баруун', aimag: 'Увс аймаг', art: 'lake',
    map: 'Uvs Lake, Mongolia', dist: 'Улаангомоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн том нуур, UNESCO-гийн өвийн сав газарт шувуу ажиглах аялал.',
    facts: ['Талбай нь ~3,350 км² орчим', '2003 онд UNESCO-д бүртгэгдсэн', 'Нүүдлийн шувууд амардаг'] },
  { key: 'hustai', name: 'Хустайн нурууны аялал', region: 'Төв', aimag: 'Төв аймаг', art: 'khangai',
    map: 'Hustai National Park, Mongolia', dist: 'Улаанбаатараас ~100 км', season: '5–9-р сар',
    text: 'Тахь (Пржевальскийн морь) ажиглах, нэг өдрийн богино аялал. Хотоос ойрхон.',
    facts: ['Ховор амьтан, шувууны олон зүйл', 'Нэг өдрийн аялалд тохиромжтой', 'Нийслэлээс хамгийн ойр байгалийн цогцолбор'] },
  { key: 'burkhan', name: 'Бурхан Халдуны аялал', region: 'Зүүн', aimag: 'Хэнтий аймаг', art: 'khentii',
    map: 'Burkhan Khaldun, Mongolia', dist: 'Улаанбаатараас ~250 км', season: '6–9-р сар',
    text: 'Чингис хааны төрсөн нутаг, ариун уулын орчмоор түүхэн аялал хийнэ.',
    facts: ['2015 онд UNESCO-д бүртгэгдсэн', 'Онон, Хэрлэн, Туул голын эхтэй холбоотой', 'Түүхэн сонирхолтой аялал'] },
  { key: 'terelj', name: 'Тэрэлжийн аялал', region: 'Төв', aimag: 'Төв аймаг', art: 'steppe',
    map: 'Gorkhi-Terelj National Park, Mongolia', dist: 'Улаанбаатараас ~70 км', season: '5–10-р сар',
    text: 'Гэрийн жуулчны баазад хоноглож, Мэлхий хадыг үзэж, морь унана. Богино амралтанд тохиромжтой.',
    facts: ['Горхи-Тэрэлжийн байгалийн цогцолбор', 'Мэлхий хад, Аривал хийд', 'Нийслэлээс 1–2 цагийн зайтай'] }
];

const grid = document.getElementById('galleryGrid');

// Google Maps холбоос (хайлтын нэрээр)
const mapUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

// ===== Картуудыг үүсгэх (--i нь stagger-ийн дугаар) =====
places.forEach((p, i) => {
  const img = images[p.key];   // зургийн хаягийг дээрх хэсгээс авна
  grid.insertAdjacentHTML('beforeend', `
    <article class="card in" tabindex="0" data-region="${p.region}" style="--i:${i}" aria-label="${p.name}">
      <div class="card-inner">

        <div class="face front art art-${p.art}">
          <img src="${img}" alt="${p.name}" loading="lazy" onerror="this.remove()">
          <span class="badge">${p.region}</span>
          <div class="cap"><h3>${p.name}</h3><p>${p.aimag}</p></div>
        </div>

        <div class="face back" style="--img:url('${img}')">
          <div class="back-body">
            <h3>${p.name}</h3>
            <p class="where">${p.region} · ${p.aimag}</p>
            <p class="desc">${p.text}</p>
            <ul class="facts">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
            <ul class="pills"><li>${p.dist}</li><li>${p.season}</li></ul>
            <button class="map-link" type="button" data-q="${p.map}" data-name="${p.name}">
              <span class="pin" aria-hidden="true"></span>Google Maps дээр харах
            </button>
          </div>
        </div>

      </div>
    </article>`);
});

const cards = [...grid.querySelectorAll('.card')];

// ===== Товшилт: газрын зураг нээх / утсанд карт эргүүлэх =====
grid.addEventListener('click', (e) => {
  const mapBtn = e.target.closest('.map-link');
  if (mapBtn) { openMap(mapBtn.dataset.q, mapBtn.dataset.name); return; }
  if (e.target.closest('a')) return;
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