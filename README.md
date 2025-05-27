<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FROSS - Ciberseguridad y Hacking Ético</title>
  <!-- SEO y Social Media -->
  <meta name="description" content="FROSS: Ciberseguridad, hacking ético y tecnología avanzada. Servicios, formación y noticias.">
  <meta property="og:title" content="FROSS - Ciberseguridad y Hacking Ético">
  <meta property="og:description" content="Tu portal de ciberseguridad, hacking ético y tecnología avanzada.">
  <meta property="og:image" content="https://www.tusitio.com/logo.png">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.tusitio.com/">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="FROSS - Ciberseguridad y Hacking Ético">
  <meta name="twitter:description" content="Tu portal de ciberseguridad, hacking ético y tecnología avanzada.">
  <meta name="twitter:image" content="https://www.tusitio.com/logo.png">
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Google Fonts: Fira Mono (monoespaciada) -->
  <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      background: #181a1b;
      color: #00ffd0;
      font-family: 'Fira Mono', monospace;
      position: relative;
      overflow-x: hidden;
    }
    /* Fondo tipo hacker: código y líneas */
    body::before, body::after {
      content: "";
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 0;
    }
    body::before {
      background: repeating-linear-gradient(
        to bottom, 
        rgba(0,255,208,0.05) 0px, 
        rgba(0,255,208,0.05) 1px, 
        transparent 1px, 
        transparent 30px
      );
    }
    body::after {
      background: url('https://www.transparenttextures.com/patterns/cubes.png'), 
                  linear-gradient(120deg, rgba(0,255,208,0.04) 0%, transparent 100%);
      opacity: 0.2;
      mix-blend-mode: lighten;
    }
    .hacker-code {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      z-index: 1;
      pointer-events: none;
      opacity: 0.12;
      font-size: 1.1rem;
      color: #00ffd0;
      font-family: 'Fira Mono', monospace;
      white-space: pre;
      user-select: none;
      line-height: 1.2;
      padding: 40px;
      background: none;
    }
    .navbar {
      background: #23272b;
      font-family: 'Fira Mono', monospace;
      z-index: 10;
    }
    .navbar-brand {
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 2rem;
      color: #00ffd0 !important;
      text-shadow: 0 0 8px #00ffd0;
    }
    .nav-link {
      color: #00ffd0 !important;
      font-weight: 500;
      letter-spacing: 1px;
      transition: color 0.2s;
    }
    .nav-link:hover {
      color: #fff !important;
      text-shadow: 0 0 8px #00ffd0;
    }
    .hero {
      background: linear-gradient(135deg, #23272b 60%, #181a1b 100%);
      padding: 120px 0 80px 0;
      text-align: center;
      position: relative;
      z-index: 2;
    }
    .hero h1 {
      font-size: 3.5rem;
      font-weight: bold;
      letter-spacing: 3px;
      text-shadow: 0 0 12px #00ffd0;
      margin-bottom: 20px;
    }
    .hero p {
      font-size: 1.5rem;
      color: #bafff6;
      margin-bottom: 30px;
    }
    .btn-hacker {
      background: #00ffd0;
      color: #181a1b;
      border: none;
      font-family: 'Fira Mono', monospace;
      font-weight: bold;
      letter-spacing: 1px;
      box-shadow: 0 0 10px #00ffd0;
      transition: background 0.2s, color 0.2s;
    }
    .btn-hacker:hover {
      background: #181a1b;
      color: #00ffd0;
      border: 1px solid #00ffd0;
    }
    .section-title {
      color: #00ffd0;
      margin-bottom: 30px;
      font-size: 2.2rem;
      letter-spacing: 2px;
      text-shadow: 0 0 8px #00ffd0;
      font-family: 'Fira Mono', monospace;
    }
    .card {
      background: #23272b;
      border: 1px solid #00ffd0;
      color: #bafff6;
      font-family: 'Fira Mono', monospace;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 0 #00ffd0;
    }
    .card:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 8px 32px 0 rgba(0,255,208,0.2);
      border-color: #fff;
    }
    .card h5, .card h6 {
      color: #00ffd0;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .card a {
      font-family: 'Fira Mono', monospace;
      color: #00ffd0;
      text-decoration: underline;
    }
    .card a:hover {
      color: #fff;
      text-shadow: 0 0 8px #00ffd0;
    }
    label, input, textarea {
      font-family: 'Fira Mono', monospace;
      color: #00ffd0;
    }
    .form-control {
      background: #181a1b;
      color: #00ffd0;
      border: 1px solid #00ffd0;
    }
    .form-control:focus {
      background: #23272b;
      color: #fff;
      border-color: #00ffd0;
      box-shadow: 0 0 8px #00ffd0;
    }
    footer {
      background: #181a1b;
      color: #888;
      padding: 30px 0;
      text-align: center;
      font-family: 'Fira Mono', monospace;
      letter-spacing: 1px;
      font-size: 1rem;
      z-index: 2;
      position: relative;
    }
    /* Efecto de cursor parpadeante en el título */
    .cursor {
      display: inline-block;
      width: 12px;
      background: #00ffd0;
      animation: blink 1s steps(1) infinite;
      margin-left: 2px;
      height: 2.8rem;
      vertical-align: bottom;
    }
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    /* Responsive */
    @media (max-width: 768px) {
      .hero h1 { font-size: 2.2rem; }
      .section-title { font-size: 1.5rem; }
    }
    /* Modo claro */
    body.light-mode {
      background: #f8f9fa;
      color: #181a1b;
    }
    body.light-mode .navbar,
    body.light-mode .card,
    body.light-mode .form-control,
    body.light-mode footer {
      background: #fff !important;
      color: #181a1b !important;
      border-color: #00ffd0 !important;
    }
    body.light-mode .navbar-brand,
    body.light-mode .nav-link,
    body.light-mode .section-title,
    body.light-mode .card h5,
    body.light-mode .card h6,
    body.light-mode label,
    body.light-mode input,
    body.light-mode textarea {
      color: #00ffd0 !important;
      text-shadow: none !important;
    }
    body.light-mode .btn-hacker {
      background: #181a1b;
      color: #00ffd0;
      border: 1px solid #00ffd0;
    }
    body.light-mode .btn-hacker:hover {
      background: #00ffd0;
      color: #181a1b;
    }
    body.light-mode .hero {
      background: linear-gradient(135deg, #fff 60%, #f8f9fa 100%);
    }
    body.light-mode .hacker-code {
      color: #00ffd0;
      opacity: 0.08;
    }
    body.light-mode .form-control:focus {
      background: #f8f9fa;
      color: #181a1b;
      border-color: #00ffd0;
      box-shadow: 0 0 8px #00ffd0;
    }
  </style>
</head>
<body>
  <!-- Fondo de código tipo hacker -->
  <div class="hacker-code">
    <code>
      $ nmap -A 192.168.1.1<br>
      Starting Nmap 7.91 ( https://nmap.org )<br>
      PORT     STATE SERVICE VERSION<br>
      22/tcp   open  ssh     OpenSSH 7.6p1<br>
      80/tcp   open  http    Apache httpd 2.4.29<br>
      443/tcp  open  https   Apache httpd 2.4.29<br>
      <br>
      $ sudo apt update && sudo apt upgrade<br>
      <br>
      #include &lt;stdio.h&gt;<br>
      int main() { printf("Hello, FROSS!"); return 0; }
    </code>
  </div>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark shadow">
    <div class="container">
      <a class="navbar-brand" href="#">FROSS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
          <li class="nav-item"><a class="nav-link" href="#trabaja">Trabaja con Nosotros</a></li>
          <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
          <!-- Switch modo claro/oscuro -->
          <li class="nav-item d-flex align-items-center ms-3">
            <span style="color:#00ffd0;font-size:1.1rem;margin-right:6px;">🌙</span>
            <div class="form-check form-switch m-0">
              <input class="form-check-input" type="checkbox" id="modeSwitch" checked>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>Bienvenido a FROSS<span class="cursor"></span></h1>
      <p>Tu portal de ciberseguridad, hacking ético y tecnología avanzada.</p>
      <a href="#servicios" class="btn btn-hacker btn-lg mt-3">Ver Servicios</a>
    </div>
  </section>

  <!-- Servicios -->
  <section id="servicios" class="py-5">
    <div class="container">
      <h2 class="section-title">Nuestros Servicios</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card p-4">
            <h5>Auditoría de Seguridad</h5>
            <p>Analizamos y protegemos tus sistemas frente a amenazas reales y simuladas.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4">
            <h5>Formación en Hacking Ético</h5>
            <p>Cursos y talleres para aprender hacking de forma responsable y profesional.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4">
            <h5>Consultoría IT</h5>
            <p>Asesoría en infraestructura, redes, soluciones tecnológicas y prevención de ataques.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trabaja con nosotros -->
  <section id="trabaja" class="py-5">
    <div class="container text-center">
      <h2 class="section-title">Trabaja con Nosotros</h2>
      <p class="lead">Genera tu propio dinero: únete a nuestra escudería de hackers.</p>
      <a href="#contacto" class="btn btn-hacker btn-lg mt-3">Únete Ahora</a>
    </div>
  </section>

  <!-- Blog -->
  <section id="blog" class="py-5">
    <div class="container">
      <h2 class="section-title">Últimos Artículos</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card p-3">
            <h6>Cómo proteger tu red WiFi</h6>
            <p>Consejos prácticos para asegurar tu red doméstica y evitar intrusos.</p>
            <a href="#">Leer más</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-3">
            <h6>Introducción al Pentesting</h6>
            <p>Descubre las bases del pentesting y las herramientas más usadas por los expertos.</p>
            <a href="#">Leer más</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-3">
            <h6>Noticias de Ciberseguridad</h6>
            <p>Las últimas novedades, vulnerabilidades y exploits del sector.</p>
            <a href="#">Leer más</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contacto -->
  <section id="contacto" class="py-5">
    <div class="container">
      <h2 class="section-title">Contacto</h2>
      <form action="https://formspree.io/f/xrbqwwzp" method="POST">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" name="nombre" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-hacker">Enviar</button>
      </form>
    </div>
  </section>

  <!-- Botón flotante de WhatsApp -->
  <a href="https://t.me/happykondaa" target="_blank" 
     style="position:fixed;bottom:30px;right:30px;z-index:99;box-shadow:0 0 16px #00ffd0;border-radius:50%;">
    <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/whatsapp.svg" 
         alt="WhatsApp" width="56" height="56" style="display:block;">
  </a>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Switch modo claro/oscuro -->
  <script>
    document.getElementById
