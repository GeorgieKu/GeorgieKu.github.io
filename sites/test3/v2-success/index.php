<?php
$domain = $_SERVER['HTTP_HOST'];
$domain = preg_replace('/^www\./', '', $domain);
$logoDomain = strtoupper(preg_replace('/\.[a-z]+$/', '', $domain));
$supportEmail = "support@$domain";
$legalEmail = "legal@$domain";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Your message has been received. Our support team will reach out to you shortly with a response." />
  <title>Message Received — Thank You</title>

  <link rel="stylesheet" href="/css-v2/style-v2.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
  <style>
    .v2-success-section {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 0;
      background: #f7f7f7;
    }

    .v2-success-wrapper {
      max-width: 650px;
      margin: 0 auto;
      text-align: center;
    }

    .v2-success-card {
      background: white;
      padding: 60px 50px;
      border-radius: 35px;
      box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
    }

    .v2-success-icon {
      width: 120px;
      height: 120px;
      margin: 0 auto 32px;
      background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: scaleIn 0.5s ease-out;
    }

    @keyframes scaleIn {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      50% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .v2-success-icon svg {
      width: 60px;
      height: 60px;
      stroke: white;
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      animation: checkmark 0.5s ease-out 0.3s both;
    }

    @keyframes checkmark {
      0% {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
      }

      100% {
        stroke-dasharray: 100;
        stroke-dashoffset: 0;
      }
    }

    .v2-success-title {
      font-size: 42px;
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 16px;
      animation: fadeInUp 0.6s ease-out 0.2s both;
    }

    .v2-success-message {
      font-size: 17px;
      color: var(--text-gray);
      line-height: 1.7;
      margin-bottom: 40px;
      animation: fadeInUp 0.6s ease-out 0.4s both;
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .v2-success-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      animation: fadeInUp 0.6s ease-out 0.6s both;
    }

    .v2-btn-home {
      padding: 18px 48px;
      background: var(--primary-yellow);
      border: none;
      border-radius: 50px;
      font-size: 17px;
      font-weight: 700;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: "Inter", sans-serif;
      text-decoration: none;
      display: inline-block;
    }

    .v2-btn-home:hover {
      background: #f0ca2e;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(249, 217, 62, 0.4);
    }

    .v2-btn-secondary {
      padding: 18px 48px;
      background: white;
      border: 2px solid var(--border-light);
      border-radius: 50px;
      font-size: 17px;
      font-weight: 700;
      color: var(--text-dark);
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: "Inter", sans-serif;
      text-decoration: none;
      display: inline-block;
    }

    .v2-btn-secondary:hover {
      background: var(--bg-gray);
      border-color: var(--text-dark);
    }

    .v2-success-info {
      margin-top: 40px;
      padding-top: 32px;
      border-top: 1px solid var(--border-light);
    }

    .v2-info-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      font-size: 15px;
      color: var(--text-gray);
      margin-bottom: 12px;
    }

    .v2-info-item:last-child {
      margin-bottom: 0;
    }

    .v2-info-item svg {
      flex-shrink: 0;
      color: var(--primary-yellow);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .v2-success-section-v2 {
        padding: 60px 0;
        min-height: calc(100vh - 150px);
      }

      .v2-success-card-v2 {
        padding: 50px 40px;
      }

      .v2-success-icon {
        width: 100px;
        height: 100px;
        margin-bottom: 28px;
      }

      .v2-success-icon svg {
        width: 50px;
        height: 50px;
      }

      .v2-success-title {
        font-size: 36px;
        margin-bottom: 14px;
      }

      .v2-success-message {
        font-size: 16px;
        margin-bottom: 32px;
      }

      .v2-success-actions {
        flex-direction: column;
        gap: 12px;
      }

      .v2-btn-home,
      .v2-btn-secondary {
        padding: 16px 40px;
        font-size: 16px;
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .v2-success-card-v2 {
        padding: 40px 30px;
      }

      .v2-success-icon {
        width: 90px;
        height: 90px;
      }

      .v2-success-icon svg {
        width: 45px;
        height: 45px;
      }

      .v2-success-title {
        font-size: 32px;
      }

      .v2-success-message {
        font-size: 15px;
      }

      .v2-btn-home,
      .v2-btn-secondary {
        padding: 15px 32px;
        font-size: 15px;
      }

      .v2-info-item {
        font-size: 14px;
      }
    }
  </style>
</head>

<body>
  <div>
    <div class="v2-body__wrapper">
    <header class="v2-header">
      <div class="v2-container">
        <div class="v2-header-wrapper">
          <a href="../index.html" class="v2-logo">
            <div class="v2-logo-text">
              <span class="v2-logo-casino">CASINO</span>
              <span class="v2-logo-best">BEST ON</span>
            </div>
          </a>
          <nav class="v2-nav">
            <ul class="v2-nav-menu" id="navMenu">
              <li><a href="../index.html" class="v2-nav-link">Hjem</a></li>
              <li>
                <a href="../v2-rating/index.html" class="v2-nav-link">Vurderingskriterier</a>
              </li>
              <li>
                <a href="../v2-responsible/index.html" class="v2-nav-link">Læs Retningslinjer</a>
              </li>
              <li><a href="../index.html#about" class="v2-nav-link">Om Os</a></li>
              <li><a href="../index.html#contact" class="v2-nav-link">Kontakt</a></li>
            </ul>
            <button class="v2-burger-menu" id="burgerMenu" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <section class="v2-success-section">
      <div class="v2-wrapper">
        <div class="v2-wrapper__inner">
          <div class="v2-success-wrapper">
            <div class="v2-success-card">
              <div class="v2-success-icon">
                <svg  viewBox="0 0 52 52">
                  <polyline points="14 27 22 35 38 19" />
                </svg>
              </div>

              <h1 class="v2-success-title">Tak!</h1>
              <p class="v2-success-message">
                Din besked er blevet sendt med succes. Vores team vil gennemgå din henvendelse og vende tilbage inden
                for 24-48 timer.
              </p>

              <div class="v2-success-actions">
                <a href="/" class="v2-btn-home">Tilbage til forsiden</a>
                <a href="/#contact" class="v2-btn-secondary">Send en ny besked</a>
              </div>

              <div class="v2-success-info">
                <div class="v2-info-item">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Gennemsnitlig svartid: 24 timer</span>
                </div>
                <div class="v2-info-item">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Tjek din e-mail for bekræftelse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="v2-footer">
      <div class="v2-container">
        <nav class="v2-footer-nav">
          <a href="../v2-responsible/index.html" class="v2-footer-link">Ansvarligt spil</a>
          <a href="../v2-privacy/index.html" class="v2-footer-link">Privatlivspolitik</a>
          <a href="index.html" class="v2-footer-link">Vilkår og betingelser</a>
          <a href="../index.html#about" class="v2-footer-link">Om Os</a>
          <a href="../index.html#contact" class="v2-footer-link">Kontakt</a>
        </nav>

        <div class="v2-footer-advertising">
          <h3 class="v2-footer-ad-title">Reklameinformation for 18+</h3>
          <p class="v2-footer-ad-text">
            Dette materiale er udeldkkende til informationsformål og er beregnet
            til personer over 18 år.
          </p>
        </div>

        <div class="v2-footer-logos">
          <a href="https://www.rofus.nu/"><img src="../assets-v2/v2-f0.svg" alt="DK Gambling Commission"
              class="v2-footer-logo" /></a>
          <a href="https://www.stopspillet.dk"><img src="../assets-v2/v2-f2.svg" alt="GamCare"
              class="v2-footer-logo" /></a>
          <a href="https://www.spillemyndigheden.dk/en/stopspillet-stopgambling-helpline-about-responsible-gambling"><img
              src="../assets-v2/v2-f3.svg" alt="Take Time to Think" class="v2-footer-logo" /></a>
        </div>

        <p class="v2-footer-copyright">© 2025 All rights reserved.</p>
      </div>
    </footer>
  </div>
  </div>
  <script>
    const burgerMenu = document.getElementById("burgerMenu");
    const navMenu = document.getElementById("navMenu");

    if (burgerMenu && navMenu) {
      burgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("v2-active");
        burgerMenu.classList.toggle("v2-active");
      });

      const navLinks = document.querySelectorAll(".v2-nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("v2-active");
          burgerMenu.classList.remove("v2-active");
        });
      });
    }
  </script>
</body>

</html>