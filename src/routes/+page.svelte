<svelte:head>
  <title>NSGolova (Viktor Radulov)</title>
  <link rel="stylesheet" href="./stylesheets/style.css" />
  <meta
    property="og:image"
    content="https://www.golova.dev/images/apple-touch-icon-114x114.png" />
  <meta property="og:title" content="Viktor Radulov personal website." />
  <meta property="og:type" content="website" />

  <link
    rel="apple-touch-icon-precomposed"
    sizes="57x57"
    href="images/apple-touch-icon-57x57.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="images/apple-touch-icon-114x114.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="images/apple-touch-icon-72x72.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="images/apple-touch-icon-144x144.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="60x60"
    href="images/apple-touch-icon-60x60.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="120x120"
    href="images/apple-touch-icon-120x120.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="76x76"
    href="images/apple-touch-icon-76x76.png" />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="152x152"
    href="images/apple-touch-icon-152x152.png" />
  <link
    rel="icon"
    type="image/png"
    href="images/favicon-196x196.png"
    sizes="196x196" />
  <link
    rel="icon"
    type="image/png"
    href="images/favicon-96x96.png"
    sizes="96x96" />
  <link
    rel="icon"
    type="image/png"
    href="images/favicon-32x32.png"
    sizes="32x32" />
  <link
    rel="icon"
    type="image/png"
    href="images/favicon-16x16.png"
    sizes="16x16" />
  <link
    rel="icon"
    type="image/png"
    href="images/favicon-128.png"
    sizes="128x128" />
  <meta name="application-name" content="NSGolova" />
  <meta name="msapplication-TileColor" content="#7DAA8B" />
  <meta name="msapplication-TileImage" content="images/mstile-144x144.png" />
  <meta
    name="msapplication-square70x70logo"
    content="images/mstile-70x70.png" />
  <meta
    name="msapplication-square150x150logo"
    content="images/mstile-150x150.png" />
  <meta
    name="msapplication-wide310x150logo"
    content="images/mstile-310x150.png" />
  <meta
    name="msapplication-square310x310logo"
    content="images/mstile-310x310.png" />

  <meta name="twitter:title" content="golova.dev" />
  <meta name="twitter:description" content="Viktor Radulov personal website." />
  <meta name="twitter:site" content="@nsgolova" />
  <meta
    name="twitter:image"
    content="https://www.golova.dev/images/preview.png" />
  <meta name="twitter:image:alt" content="NSGolova" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<section>
  <div class="header box">
    <div class="title">
      <span class="big-title">Hi, I'm a Viktor Radulov (aka NSGolova)</span>
      <span class="subtitle">
        A software developer with experience in making macOS/iOS apps and working in
        R&D.
      </span>
    </div>
  </div>

  <div class="links-and-gallery">
    <div class="links-container box">
      <span class="title">contact me as:</span>
      <a class="link" href="https://github.com/nsgolova">
        <img class="icon" src="images/github.png" width="32" height="32" />
        <h1>developer</h1>
      </a>
      <a class="link" href="https://nsgolova.medium.com">
        <img class="icon" src="images/medium.png" width="32" height="36" />
        <h1>author</h1>
      </a>

      <a class="link" href="http://steamcommunity.com/id/nsgolova/">
        <img class="icon" src="images/steam.png" width="32" height="32" />
        <h1>gamer</h1>
      </a>

      <a class="link" href="https://t.me/nsgolova">
        <img class="icon" src="images/telegram.png" width="32" height="32" />
        <h1>friend</h1>
      </a>
    </div>
    <div class="gallery-container">
      <span class="gallery-header">But also I like to make other fun stuff!</span>
      <div class="gallery">
        <figure class="gallery__item gallery__item--1">
          <a href="https://beatleader.net">
            <img
              src="images/beatleader.png"
              class="gallery__img"
              alt="Image 1" />
            <div class="bottom-left">Beat Saber leaderboard service</div>
          </a>
        </figure>
        <figure class="gallery__item gallery__item--2">
          <a href="https://replay.beatleader.xyz/?scoreId=9280912">
            <img
              src="images/webreplays.png"
              class="gallery__img"
              alt="Image 1" />
            <div class="bottom-left">Web replay player</div>
          </a>
        </figure>
        <figure class="gallery__item gallery__item--3">
          <a href="experiments/fractalSounds">
            <img
              src="experiments/images/preview.png"
              class="gallery__img"
              alt="Image 1" />
            <div class="bottom-left">WebGL Fractal Sounds</div>
          </a>
        </figure>
        <figure class="gallery__item gallery__item--4">
          <a href="https://github.com/radulov/nsgolova/releases">
            <img src="images/clippr.png" class="gallery__img" alt="Image 2" />
            <div class="bottom-left">Clipboard manager for macOS</div>
          </a>
        </figure>
        <figure class="gallery__item gallery__item--5">
          <a href="automata/gasomaton">
            <img
              src="automata/images/preview.gif"
              class="gallery__img"
              alt="Image 4" />
            <div class="bottom-left">Gas simulation state automata</div>
          </a>
        </figure>
      </div>
    </div>
    
  </div>
</section>

<style>
  .box {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 0.4em;
    padding: 1em;
  }

  .title {
    color: white;
    display: flex;
    flex-direction: column;
  }
  .big-title {
    font-size: 3em;
    font-weight: bold;
  }
  .subtitle {
    font-size: 2em;
  }

  .gallery-header {
    color: white;
    font-size: 1.5em;
    margin-left: 2em;
  }
  .links-and-gallery {
    display: flex;
    margin-top: 1.5em;
  }
  .links-container {
    display: flex;
    flex-direction: column;
    height: 17.5em;
  }

  .link {
    color: #149c92;
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .icon {
    filter: invert(49%) sepia(26%) saturate(5619%) hue-rotate(146deg)
      brightness(93%) contrast(86%);
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 9vw);
    grid-gap: 15px;
  }

  .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery__item--3 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 5;
  }

  .gallery__item--4 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 5;
  }

  .gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 7;
  }

  .gallery__item--6 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 7;
  }

  @media screen and (max-width: 700px) {
    .links-and-gallery {
      flex-direction: column;
    }
    .gallery {
      display: flex;
      flex-direction: column;
      grid-gap: 0;
    }
    .gallery-header {
      margin-left: 0.5em;
    }
    .gallery-container {
      padding-top: 1em;
    }
  }

  
</style>
