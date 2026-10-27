/**
 * AUMA · Soluções Digitais
 * Interactive Website Engine: Fixed Canvas Scroll Animation, Bilingual i18n, Form Validation
 */

(() => {
  'use strict';

  // ==========================================================================
  // Central Brand & Contact Configuration
  // ==========================================================================
  const AUMA_CONFIG = {
    officialName: 'AUMA · Soluções Digitais',
    email: 'contacto@auma.mz', // Official enquiry email address
    whatsapp: '',              // Official WhatsApp number (to be configured)
    github: 'https://github.com/radQueen258',
    onlineTutorRepo: 'https://github.com/radQueen258/onlineTutor',
    locationPT: 'Moçambique',
    locationEN: 'Mozambique',
    formEndpoint: '' // Configure with Formspree, Formkeep or custom API endpoint
  };

  // ==========================================================================
  // Bilingual Central Dictionary (pt-MZ | en)
  // ==========================================================================
  const TRANSLATIONS = {
    pt: {
      meta: {
        title: 'AUMA · Soluções Digitais | Digitalizamos o teu negócio',
        desc: 'Criamos websites, aplicações e automações à medida do teu negócio, com atenção ao design, à funcionalidade e à experiência de quem os utiliza. Moçambique.'
      },
      nav: {
        home: 'Início',
        services: 'Serviços',
        projects: 'Projectos',
        about: 'Sobre',
        contact: 'Contacto'
      },
      btn: {
        discussProject: 'Falar sobre o meu projecto',
        exploreSolutions: 'Explorar soluções',
        submitForm: 'Enviar pedido'
      },
      hero: {
        eyebrow: 'AUMA · SOLUÇÕES DIGITAIS',
        headline: 'Digitalizamos o teu negócio.<br><span class="text-purple">Simplificamos o teu dia.</span>',
        supporting: 'Criamos websites, aplicações e automações à medida do teu negócio, com atenção ao design, à funcionalidade e à experiência de quem os utiliza.'
      },
      benefits: {
        b1: {
          title: 'Em qualquer ecrã',
          desc: 'Uma experiência cuidada no telemóvel, tablet e computador.'
        },
        b2: {
          title: 'Desempenho cuidado',
          desc: 'Páginas leves e interacções fluidas para facilitar a utilização.'
        },
        b3: {
          title: 'Uma base sólida',
          desc: 'Boas práticas de desenvolvimento, validação e organização dos dados.'
        },
        b4: {
          title: 'À medida do negócio',
          desc: 'Funcionalidades pensadas para as necessidades de cada projecto.'
        }
      },
      services: {
        eyebrow: 'O QUE FAZEMOS',
        heading: 'Da tua ideia a uma solução que funciona.',
        intro: 'Combinamos design de interfaces e desenvolvimento para criar ferramentas úteis, intuitivas e preparadas para evoluir.',
        s1: {
          title: 'Websites e landing pages',
          desc: 'Apresenta a tua marca, os teus serviços e as formas de entrar em contacto.'
        },
        s2: {
          title: 'Aplicações web e sistemas de gestão',
          desc: 'Organiza informação e tarefas numa solução adaptada à tua operação.'
        },
        s3: {
          title: 'Integrações e APIs',
          desc: 'Liga ferramentas e sistemas para que a informação circule com menos trabalho manual.'
        },
        s4: {
          title: 'Automação de processos',
          desc: 'Simplifica tarefas repetitivas e reduz passos desnecessários no dia-a-dia.'
        },
        s5: {
          title: 'Manutenção e evolução',
          desc: 'Mantém a solução actualizada e acrescenta funcionalidades conforme o negócio cresce.'
        }
      },
      portfolio: {
        eyebrow: 'PORTFÓLIO',
        heading: 'Tecnologia posta em prática.',
        intro: 'Uma selecção de projectos técnicos e experiências de desenvolvimento que mostram como trabalhamos.',
        viewRepo: 'Ver no GitHub',
        p1: {
          category: 'Projecto académico · Anterior à AUMA',
          title: 'Plataforma de preparação para exames',
          desc: 'Webservice desenvolvido para apoiar estudantes moçambicanos na preparação para exames nacionais, recorrendo a modelos de linguagem.'
        },
        p2: {
          category: 'Projecto técnico de demonstração · Anterior à AUMA',
          title: 'BankOps Monitoring',
          desc: 'Ambiente de demonstração para acompanhar disponibilidade, pedidos, erros e tempos de resposta de uma API.'
        }
      },
      about: {
        eyebrow: 'SOBRE A AUMA',
        heading: 'Uma equipa próxima. Uma solução bem pensada.',
        copy: 'Na AUMA, juntamos frontend e backend para desenvolver soluções digitais de ponta a ponta. Valorizamos a comunicação clara, a atenção ao detalhe e ferramentas que fazem sentido para quem as utiliza.',
        processTitle: 'O Nosso Processo',
        step1: {
          title: 'Compreender',
          desc: 'Conversamos sobre o negócio, os desafios e o que é prioritário.'
        },
        step2: {
          title: 'Planear',
          desc: 'Definimos o âmbito, as funcionalidades e as etapas do projecto.'
        },
        step3: {
          title: 'Desenvolver',
          desc: 'Criamos, testamos e ajustamos a solução com acompanhamento.'
        },
        step4: {
          title: 'Entregar e acompanhar',
          desc: 'Preparamos o lançamento e combinamos os próximos passos de manutenção.'
        }
      },
      contact: {
        eyebrow: 'VAMOS CONVERSAR',
        heading: 'O próximo passo do teu negócio pode começar aqui.',
        supporting: 'Conta-nos o que queres criar ou simplificar. Vamos perceber contigo qual é a solução adequada.'
      },
      form: {
        name: 'Nome',
        email: 'Email',
        company: 'Empresa',
        optional: '(opcional)',
        message: 'O que gostarias de criar ou melhorar?',
        phName: 'O teu nome',
        phEmail: 'exemplo@empresa.com',
        phCompany: 'Nome da tua empresa ou marca',
        phMessage: 'Explica em poucas palavras o teu projecto, ideia ou desafio actual...',
        errName: 'Por favor, indica o teu nome.',
        errEmail: 'Por favor, indica um email válido.',
        errMessage: 'Por favor, descreve o que pretendes desenvolver.',
        sending: 'A enviar...',
        successDirect: 'Obrigado pelo teu contacto! A mensagem foi enviada com sucesso.',
        mailClientNotice: 'O teu cliente de email foi aberto com a mensagem pronta para contacto@auma.mz. Em alternativa, podes escrever directamente para esse endereço.'
      },
      reassurance: {
        r1: 'Design responsivo',
        r2: 'Desenvolvimento à medida',
        r3: 'Comunicação clara',
        r4: 'Acompanhamento após o lançamento'
      },
      footer: {
        slogan: 'Websites, aplicações e automação à medida do teu negócio.',
        location: 'Moçambique.',
        navTitle: 'Navegação',
        channelsTitle: 'Canais',
        formLink: 'Formulário de contacto',
        rights: 'Todos os direitos reservados.'
      }
    },
    en: {
      meta: {
        title: 'AUMA · Digital Solutions | We digitalise your business',
        desc: 'We build websites, applications and automations tailored to your business, with care for design, functionality and user experience. Mozambique.'
      },
      nav: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact'
      },
      btn: {
        discussProject: "Let's discuss your project",
        exploreSolutions: 'Explore our solutions',
        submitForm: 'Send enquiry'
      },
      hero: {
        eyebrow: 'AUMA · DIGITAL SOLUTIONS',
        headline: 'We digitalise your business.<br><span class="text-purple">We simplify your day.</span>',
        supporting: 'We build websites, applications and automations tailored to your business, with care for design, functionality and the people using them.'
      },
      benefits: {
        b1: {
          title: 'On any screen',
          desc: 'A thoughtful experience across mobile, tablet and desktop.'
        },
        b2: {
          title: 'Thoughtful performance',
          desc: 'Lightweight pages and fluid interactions for effortless use.'
        },
        b3: {
          title: 'A solid foundation',
          desc: 'Best development practices, rigorous validation and data organisation.'
        },
        b4: {
          title: 'Tailored to the business',
          desc: 'Features purposefully built for each project’s distinct needs.'
        }
      },
      services: {
        eyebrow: 'WHAT WE DO',
        heading: 'From your idea to a working solution.',
        intro: 'We combine interface design and development to build useful, intuitive tools ready to scale.',
        s1: {
          title: 'Websites & landing pages',
          desc: 'Present your brand, your services and direct ways to get in touch.'
        },
        s2: {
          title: 'Web apps & management systems',
          desc: 'Organise information and workflows in a system tailored to your operations.'
        },
        s3: {
          title: 'Integrations & APIs',
          desc: 'Connect tools and systems so data flows automatically with less manual work.'
        },
        s4: {
          title: 'Process automation',
          desc: 'Streamline repetitive tasks and eliminate unnecessary steps in everyday routines.'
        },
        s5: {
          title: 'Maintenance & evolution',
          desc: 'Keep your solution secure and add new capabilities as your business grows.'
        }
      },
      portfolio: {
        eyebrow: 'PORTFOLIO',
        heading: 'Technology put into practice.',
        intro: 'A selection of technical projects and development experiments showcasing how we work.',
        viewRepo: 'View on GitHub',
        p1: {
          category: 'Academic project · Prior to AUMA',
          title: 'Exam preparation platform',
          desc: 'Web service developed to support Mozambican students preparing for national exams, using language models.'
        },
        p2: {
          category: 'Technical demonstration project · Prior to AUMA',
          title: 'BankOps Monitoring',
          desc: 'Demonstration environment to monitor API availability, requests, errors and response times.'
        }
      },
      about: {
        eyebrow: 'ABOUT AUMA',
        heading: 'A close-knit team. A well-thought-out solution.',
        copy: 'At AUMA, we combine frontend and backend to develop end-to-end digital solutions. We value clear communication, attention to detail and tools that make sense to the people who use them.',
        processTitle: 'Our Process',
        step1: {
          title: 'Understand',
          desc: 'We discuss your business, core challenges and key priorities.'
        },
        step2: {
          title: 'Plan',
          desc: 'We define project scope, technical features and execution roadmap.'
        },
        step3: {
          title: 'Develop',
          desc: 'We build, test and refine the solution with continuous feedback.'
        },
        step4: {
          title: 'Deliver & support',
          desc: 'We prepare the launch and coordinate future maintenance and improvements.'
        }
      },
      contact: {
        eyebrow: "LET'S TALK",
        heading: 'Your business’s next step can start right here.',
        supporting: 'Tell us what you want to build or simplify. We’ll work with you to find the right solution.'
      },
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        optional: '(optional)',
        message: 'What would you like to create or improve?',
        phName: 'Your name',
        phEmail: 'example@company.com',
        phCompany: 'Your company or brand name',
        phMessage: 'Briefly explain your project, idea or current challenge...',
        errName: 'Please enter your name.',
        errEmail: 'Please enter a valid email address.',
        errMessage: 'Please describe what you would like to develop.',
        sending: 'Sending...',
        successDirect: 'Thank you for your message! It has been successfully delivered.',
        mailClientNotice: 'Your email client has been opened with your message ready for contacto@auma.mz. Alternatively, you can write to us directly.'
      },
      reassurance: {
        r1: 'Responsive design',
        r2: 'Tailored development',
        r3: 'Clear communication',
        r4: 'Post-launch support'
      },
      footer: {
        slogan: 'Websites, applications and automation tailored to your business.',
        location: 'Mozambique.',
        navTitle: 'Navigation',
        channelsTitle: 'Channels',
        formLink: 'Contact form',
        rights: 'All rights reserved.'
      }
    }
  };

  // Current active language (default: Portuguese from Mozambique)
  let currentLang = 'pt';

  // ==========================================================================
  // Canvas Scroll Animation Engine
  // ==========================================================================
  const TOTAL_FRAMES = 300;
  const FRAME_WIDTH = 720;
  const FRAME_HEIGHT = 1280;
  const LERP_EASE = 0.085; // Butter-smooth camera momentum

  const canvas = document.getElementById('animation-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  const frames = new Array(TOTAL_FRAMES);
  let lastDrawnImg = null;
  let targetProgress = 0;
  let currentProgress = 0;
  let needsRedraw = true;

  function getFrameSrc(index) {
    const num = String(index + 1).padStart(3, '0');
    return `ezgif-frame-${num}.jpg`;
  }

  function getScrollTop() {
    return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function getMaxScroll() {
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const max = docHeight - window.innerHeight;
    return max > 10 ? max : 1;
  }

  function getScrollProgress() {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 1) return 0;
    return Math.min(Math.max(getScrollTop() / maxScroll, 0), 1);
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    needsRedraw = true;
  }

  function getAvailableFrame(index) {
    if (frames[index]) return frames[index];

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = index - offset;
      const next = index + offset;
      if (prev >= 0 && frames[prev]) return frames[prev];
      if (next < TOTAL_FRAMES && frames[next]) return frames[next];
    }
    return null;
  }

  function renderFrame(index) {
    const img = getAvailableFrame(index);
    if (!img) return;

    if (img === lastDrawnImg && !needsRedraw) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const imgAspect = FRAME_WIDTH / FRAME_HEIGHT;
    const screenAspect = cw / ch;

    let dw, dh, dx, dy;
    const isDesktop = cw >= 992;

    if (isDesktop) {
      // Desktop: Scale to window height and position on right side
      // Keeping face, glasses and torso completely visible and uncluttered
      dh = ch;
      dw = ch * imgAspect;
      const rightAreaWidth = cw * 0.52;
      const rightAreaStart = cw * 0.48;
      dx = rightAreaStart + (rightAreaWidth - dw) / 2;
      dx = Math.min(dx, cw - dw); // Ensure right edge fits
      dy = 0;
    } else {
      // Mobile / Tablet: Centered layout aligned to mobile visual slot
      // Ensuring face, glasses and pose are fully visible without text overlap
      const slot = document.querySelector('.hero-visual-slot-mobile');
      if (slot) {
        const rect = slot.getBoundingClientRect();
        dh = Math.max(rect.height * 1.32, 380);
        dw = dh * imgAspect;
        dx = (cw - dw) / 2;
        dy = rect.top - (dh * 0.06);
      } else {
        dh = ch * 0.58;
        dw = dh * imgAspect;
        dx = (cw - dw) / 2;
        dy = ch * 0.22;
      }
    }

    // Near-black background #0E0E0E matches site theme
    ctx.fillStyle = '#0E0E0E';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);

    lastDrawnImg = img;
    needsRedraw = false;
  }

  function animationLoop() {
    targetProgress = getScrollProgress();
    const diff = targetProgress - currentProgress;

    if (Math.abs(diff) > 0.0001) {
      currentProgress += diff * LERP_EASE;
    } else {
      currentProgress = targetProgress;
    }

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
    );

    renderFrame(frameIndex);

    requestAnimationFrame(animationLoop);
  }

  function preloadFrames() {
    // Phase 1: Load initial frame immediately
    const img0 = new Image();
    img0.onload = () => {
      frames[0] = img0;
      needsRedraw = true;
    };
    img0.src = getFrameSrc(0);

    // Phase 2: Concurrently stream all remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        frames[i] = img;
        needsRedraw = true;
      };
      img.src = getFrameSrc(i);
    }
  }

  // ==========================================================================
  // Language Switcher System
  // ==========================================================================
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-MZ' : 'en';

    // Update document title and description
    document.title = TRANSLATIONS[lang].meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', TRANSLATIONS[lang].meta.desc);
    }

    // Translate all [data-i18n] elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = getNestedTranslation(TRANSLATIONS[lang], key);
      if (text !== undefined) {
        if (text.includes('<br>') || text.includes('<span')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update placeholder attributes if applicable
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const companyInput = document.getElementById('contact-company');
    const msgInput = document.getElementById('contact-message');

    if (nameInput) nameInput.placeholder = TRANSLATIONS[lang].form.phName;
    if (emailInput) emailInput.placeholder = TRANSLATIONS[lang].form.phEmail;
    if (companyInput) companyInput.placeholder = TRANSLATIONS[lang].form.phCompany;
    if (msgInput) msgInput.placeholder = TRANSLATIONS[lang].form.phMessage;

    // Update active state on all language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Save choice to localStorage
    try {
      localStorage.setItem('auma_lang', lang);
    } catch (_) {}
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  function initLanguage() {
    let saved = 'pt';
    try {
      const stored = localStorage.getItem('auma_lang');
      if (stored === 'pt' || stored === 'en') saved = stored;
    } catch (_) {}

    setLanguage(saved);

    // Event listeners on all language switch buttons (desktop & mobile)
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang) setLanguage(lang);
      });
    });
  }

  // ==========================================================================
  // Mobile Navigation Drawer
  // ==========================================================================
  function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (!toggleBtn || !mobileNav) return;

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !toggleBtn.classList.contains('open');
      toggleBtn.classList.toggle('open', isOpen);
      mobileNav.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }

    toggleBtn.addEventListener('click', () => toggleMenu());

    // Close when clicking any nav link
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close when resizing above breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 900 && mobileNav.classList.contains('open')) {
        toggleMenu(false);
      }
    }, { passive: true });
  }

  // ==========================================================================
  // Contact Form Handling (Validation, Delivery & Notice)
  // ==========================================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const companyInput = document.getElementById('contact-company');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('submit-btn');
    const noticeEl = document.getElementById('form-notice');

    const nameField = nameInput.closest('.form-field');
    const emailField = emailInput.closest('.form-field');
    const messageField = messageInput.closest('.form-field');

    // Clear error on input
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.addEventListener('input', () => {
        input.closest('.form-field').classList.remove('has-error');
        if (noticeEl) noticeEl.style.display = 'none';
      });
    });

    function isValidEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameField.classList.add('has-error');
        hasError = true;
      } else {
        nameField.classList.remove('has-error');
      }

      // Validate Email
      if (!isValidEmail(emailInput.value)) {
        emailField.classList.add('has-error');
        hasError = true;
      } else {
        emailField.classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageField.classList.add('has-error');
        hasError = true;
      } else {
        messageField.classList.remove('has-error');
      }

      if (hasError) return;

      const t = TRANSLATIONS[currentLang].form;

      // If an official backend or Formspree endpoint is configured:
      if (AUMA_CONFIG.formEndpoint) {
        submitBtn.disabled = true;
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        submitBtn.querySelector('.btn-text').textContent = t.sending;

        try {
          const res = await fetch(AUMA_CONFIG.formEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              name: nameInput.value.trim(),
              email: emailInput.value.trim(),
              company: companyInput.value.trim(),
              message: messageInput.value.trim()
            })
          });

          if (res.ok) {
            noticeEl.className = 'form-notice success';
            noticeEl.textContent = t.successDirect;
            noticeEl.style.display = 'block';
            form.reset();
          } else {
            throw new Error('Server returned non-200');
          }
        } catch (err) {
          noticeEl.className = 'form-notice error';
          noticeEl.textContent = 'Erro ao enviar. Por favor tenta por email directo: ' + AUMA_CONFIG.email;
          noticeEl.style.display = 'block';
        } finally {
          submitBtn.disabled = false;
          submitBtn.querySelector('.btn-text').textContent = originalText;
        }
      } else {
        // Without an active endpoint, dispatch via mailto to official email without fabricating receipt
        const subject = encodeURIComponent(`Contacto AUMA: ${nameInput.value.trim()}`);
        const body = encodeURIComponent(
          `Nome: ${nameInput.value.trim()}\n` +
          `Email: ${emailInput.value.trim()}\n` +
          `Empresa: ${companyInput.value.trim() || 'N/A'}\n\n` +
          `Mensagem:\n${messageInput.value.trim()}`
        );

        const mailtoUrl = `mailto:${AUMA_CONFIG.email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;

        noticeEl.className = 'form-notice info';
        noticeEl.textContent = t.mailClientNotice;
        noticeEl.style.display = 'block';
      }
    });
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    // Current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Init language system
    initLanguage();

    // Init mobile menu
    initMobileMenu();

    // Init contact form
    initContactForm();

    // Init canvas engine
    resizeCanvas();
    preloadFrames();
    requestAnimationFrame(animationLoop);
  });

  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('orientationchange', resizeCanvas, { passive: true });

})();
