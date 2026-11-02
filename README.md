# Лаб 7: Sass/SCSS refactoring

Лаб 6-ийн хуудсыг харагдацыг нь өөрчлөхгүйгээр CSS-ээс SCSS болгон дахин зохион байгуулсан.

## Ажиллуулах

```bash
npm install            # Sass суулгана
npm run build          # css/style.css (compressed)
npm run build:dev      # css/style.css (expanded, уншихад амар)
npm run watch          # SCSS өөрчлөгдөх бүрт автоматаар build хийнэ
```

`images/` болон `media/` хавтсанд Лаб 6-ийн зураг, видео, аудио файлаа хуулна.

## Бүтэц

```
lab07/
├── index.html
├── script.js
├── package.json
├── css/style.css            ← build-ийн үр дүн
└── scss/
    ├── main.scss            ← бүх partial-ийг @use-ээр цуглуулна
    ├── abstracts/           _tokens (map) · _functions (rem, contrast) · _mixins (respond, flex-center)
    ├── base/                _root (custom property) · _reset · _animations · _motion
    ├── layout/              _wrap · _header · _hero · _section · _footer
    ├── components/          _button · _card · _pack · _form · _map-modal ...
    └── utilities/           _utilities (@each-ээр үүссэн u-* класс)
```

## Даалгаврын биелэлт

| # | Шаардлага | Хаана |
|---|-----------|-------|
| 1 | npm-ээр Sass, scripts, folder бүтэц | `package.json`, `scss/` |
| 2 | Өнгө, радиус, breakpoint → map, `:root` custom property | `abstracts/_tokens.scss`, `base/_root.scss` |
| 3 | `respond`, `flex-center` mixin | `abstracts/_mixins.scss` |
| 4 | `rem()`, `contrast()` функц | `abstracts/_functions.scss` |
| 5 | Partial, BEM, `@each` utility, compressed build | `scss/**`, `utilities/_utilities.scss`, `npm run build` |

## BEM нэрийн өөрчлөлт

| Лаб 6 | Лаб 7 |
|-------|-------|
| `.site-header`, `.logo` | `.header`, `.header__logo` |
| `.navbar`, `.nav-link`, `.open` | `.nav`, `.nav__link`, `.nav--open` |
| `.theme-toggle`, `.menu-toggle` | `.icon-btn`, `.icon-btn--menu` |
| `.hero-text`, `.cloud` | `.hero__body`, `.hero__cloud--1` |
| `.card-inner`, `.face`, `.flipped` | `.card__inner`, `.card__face--front`, `.card--flipped` |
| `.book-form`, `.field` | `.form`, `.form__field` |
| `.map-dialog` | `.map-modal` |
| `.btn-ghost`, `.btn-light` | `.btn--ghost`, `.btn--light` |
