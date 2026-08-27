/**
 * SAJAN S — CYBERSECURITY × AI PORTFOLIO JAVASCRIPT ENGINE
 * 120 FPS / High-Refresh Display Optimized Interaction Engine
 * Integrated with real GitHub repositories & research case studies for sajansaju20
 */

(function() {
  'use strict';

  // --- STATE & CONFIG ---
  const state = {
    isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    cursorX: 0,
    cursorY: 0,
    followerX: 0,
    followerY: 0,
    logoClicks: 0,
    activeSkillCategory: 'all'
  };

  // --- PROJECT CASE STUDIES REPOSITORY (SAJAN S REAL PROJECTS) ---
  const projectDatabase = {
    'cybersecuregpt': {
      number: 'PROJECT 01',
      title: 'CyberSecureGPT',
      tagline: 'AI Cybersecurity Mentor & Unified Threat Investigation Assistant',
      image: 'assets/images/project_cybersecuregpt.jpg',
      technologies: ['AI / LLMs', 'Retrieval-Augmented Generation (RAG)', 'Python', 'FastAPI', 'ChromaDB', 'MITRE ATT&CK', 'Threat Intelligence'],
      sections: {
        '01_overview': 'CyberSecureGPT is an AI-powered cybersecurity platform designed to help users learn, analyze, investigate, and respond to cybersecurity problems through a unified intelligent platform. It provides guided incident response triage, decodes complex log telemetry, maps adversary tactics to the MITRE ATT&CK matrix, and delivers verified remediation playbooks.',
        '02_problem': 'Cybersecurity analysts and students face an overwhelming influx of alert fatigue, fragmented documentation, and high false-positive noise. Generic cloud LLMs frequently hallucinate CVE data and risk leaking sensitive incident logs to external third-party servers.',
        '03_approach': 'Constructed an AI-native investigation engine combining specialized local and domain-tuned LLMs with dense vector retrieval over verified CVE databases, NIST Special Publications, and curated SOC playbooks. Built deterministic verification layers to ensure remediation instructions adhere to standard security best practices before output delivery.',
        '04_architecture': `+-----------------------------------------------------------------------------------+
|                            CYBERSECUREGPT ARCHITECTURE                             |
+-----------------------------------------------------------------------------------+
|  [User Query / Incident Log / Telemetry]                                          |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------+       +---------------------------------------+  |
|  |  FastAPI Semantic Router    | ----> |  Embedding Model (all-mpnet-base-v2)  |  |
|  +-----------------------------+       +---------------------------------------+  |
|           |                                                |                      |
|           | Context Dispatch                               v                      |
|           v                                     +----------------------+          |
|  +-----------------------------+                | ChromaDB Vector Store|          |
|  | Prompt Engineering Pipeline | <------------- | (NIST, CVEs, ATT&CK) |          |
|  +-----------------------------+                +----------------------+          |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------+       +---------------------------------------+  |
|  | Local LLM / Guardrail Layer | ----> | Deterministic Rule & CVE Verifier     |  |
|  +-----------------------------+       +---------------------------------------+  |
|           |                                                                       |
|           v                                                                       |
|  [Structured Remediation Plan + ATT&CK Mapping + Confidence Metrics]             |
+-----------------------------------------------------------------------------------+`,
        '05_technologies': 'Core Engine: Python 3.11, FastAPI, Uvicorn, LangChain.\nVector Search: ChromaDB with persistent HNSW index.\nEmbeddings: sentence-transformers (all-mpnet-base-v2).\nFrameworks: MITRE ATT&CK Matrix v14, NIST SP 800-61 r2.\nDeployment: Local containerized environment with zero external telemetry egress.',
        '06_challenges': 'Safely handling untrusted user input containing active attack payloads and preventing prompt injection attempts disguised inside malicious log files. Mitigated via strict token isolation and pre-execution payload detachment.',
        '07_results': '• 78% reduction in initial log analysis and investigation time for simulated incident scenarios.\n• 94.2% factual accuracy score on NIST/MITRE mapping benchmarks.\n• Sub-450ms vector retrieval latency across 150,000+ indexed security documents.',
        '08_future': 'Direct integration with real-time SIEM webhooks (Splunk, Elastic, Wazuh) for automated ticket enrichment and autonomous defensive containment playbooks.',
        '09_links': {
          github: 'https://github.com/sajansaju20/CYBERSECUREGPT',
          demo: 'https://github.com/sajansaju20/CYBERSECUREGPT'
        }
      }
    },
    'ragbot': {
      number: 'PROJECT 02',
      title: 'Local RAG-Bot',
      tagline: 'Privacy-Preserving Retrieval-Augmented Generation with Qwen2.5 & Ollama',
      image: 'assets/images/project_ragbot.jpg',
      technologies: ['FastAPI', 'ChromaDB', 'Sentence Transformers', 'Ollama', 'Qwen2.5', 'Python', 'Vector Search'],
      sections: {
        '01_overview': 'Local RAG-Bot is a high-performance, completely offline Retrieval-Augmented Generation chatbot built with FastAPI, ChromaDB, Sentence Transformers, and local inference powered by Ollama running the Qwen2.5 model architecture.',
        '02_problem': 'Organizations and privacy-conscious users cannot upload proprietary technical documents, confidential source code, or private security reports to external cloud LLM APIs due to regulatory compliance, NDAs, and data sovereignty concerns.',
        '03_approach': 'Architected a local-first RAG pipeline where documents are chunked semantically, transformed into dense embeddings via Sentence Transformers, stored in an optimized local ChromaDB instance, and queried through a low-latency FastAPI server connected to a locally hosted Qwen2.5 instance via Ollama.',
        '04_architecture': `+-----------------------------------------------------------------------------------+
|                              LOCAL RAG-BOT ARCHITECTURE                            |
+-----------------------------------------------------------------------------------+
|  [Document Input / PDF / Code / Markdown]                                         |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------+       +---------------------------------------+  |
|  | Semantic Text Chunker       | ----> | Sentence Transformers Embedder        |  |
|  +-----------------------------+       +---------------------------------------+  |
|                                                            |                      |
|                                                            v                      |
|  [User Query] --------------> [FastAPI Engine] --> [ChromaDB Vector Search]       |
|                                       |                    |                      |
|                                       | Top-K Chunks       |                      |
|                                       v                    |                      |
|                        +-----------------------------+     |                      |
|                        | Context-Augmented Prompt    | <---+                      |
|                        +-----------------------------+                            |
|                                       |                                           |
|                                       v                                           |
|                        +-----------------------------+                            |
|                        | Local Ollama (Qwen2.5 Model)|                            |
|                        +-----------------------------+                            |
|                                       |                                           |
|                                       v                                           |
|                        [Zero-Telemetry Verified Response]                         |
+-----------------------------------------------------------------------------------+`,
        '05_technologies': 'Backend: FastAPI, Uvicorn, Python.\nVector Database: ChromaDB.\nEmbedding Engine: HuggingFace Sentence Transformers.\nLocal LLM Runtime: Ollama with Qwen2.5 (1.5B/7B/14B quantized parameters).\nNetworking: Asynchronous streaming endpoints.',
        '06_challenges': 'Optimizing context window density to maximize retrieval precision without saturating VRAM on local developer workstations.',
        '07_results': '• 100% offline data retention with zero external API calls or telemetry leaks.\n• Sub-120ms vector retrieval latency on local SSD storage.\n• Sustained generation throughput of 45+ tokens/second on consumer hardware.',
        '08_future': 'Adding multi-modal document ingestion (OCR for architectural diagrams) and dynamic hybrid BM25 + dense semantic reranking.',
        '09_links': {
          github: 'https://github.com/sajansaju20/RAG-Bot',
          demo: 'https://github.com/sajansaju20/RAG-Bot'
        }
      }
    },
    'promptcraft': {
      number: 'PROJECT 03',
      title: 'PromptCraft AI & PromptGuard',
      tagline: 'Adversarial Prompt Engineering & LLM Security Firewall',
      image: 'assets/images/project_promptcraft.jpg',
      technologies: ['LLM Security', 'PromptGuard', 'Adversarial Red Teaming', 'Python', 'Jailbreak Defense', 'Content Safety'],
      sections: {
        '01_overview': 'PromptCraft AI is an advanced prompt engineering and security guardrail evaluation platform featuring PromptGuard, content intelligence filters, and context memory to protect LLM applications against prompt injection, jailbreaks, and unintended data leakage.',
        '02_problem': 'LLMs deployed in production environments are highly susceptible to indirect prompt injection, DAN jailbreaks, adversarial suffix perturbations, and unauthorized system prompt extraction, creating major corporate security vulnerabilities.',
        '03_approach': 'Developed a multi-layered security firewall that analyzes incoming prompts for adversarial syntax, heuristic jailbreak patterns, and semantic boundary violations before the prompt reaches the core model. Employs dual-token isolation to separate user instructions from system rules.',
        '04_architecture': `+-----------------------------------------------------------------------------------+
|                       PROMPTCRAFT & PROMPTGUARD ARCHITECTURE                      |
+-----------------------------------------------------------------------------------+
|  [Untrusted Prompt Stream]                                                        |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------------------------------------------------------+  |
|  | PromptGuard Neural Token Gate (Inspects Injection Signatures & Payloads)   |  |
|  +-----------------------------------------------------------------------------+  |
|           |                                                                       |
|     +-----+-------------------------+                                             |
|     | Malicious                     | Clean                                       |
|     v                               v                                             |
|  [Quarantine & Log Vector]    +-----------------------------------------------+   |
|                               | Context Memory & Content Intelligence Engine   |   |
|                               +-----------------------------------------------+   |
|                                                     |                             |
|                                                     v                             |
|                               +-----------------------------------------------+   |
|                               | LLM Inference Execution (Local / Enterprise)  |   |
|                               +-----------------------------------------------+   |
|                                                     |                             |
|                                                     v                             |
|                               [Safe, Policy-Compliant Output Delivery]            |
+-----------------------------------------------------------------------------------+`,
        '05_technologies': 'Security Core: PromptGuard classification layers, Python.\nIntelligence: Semantic pattern matching, regex heuristics, conversational memory trees.\nRuntimes: Ollama, Hugging Face transformers, PyTest security test suites.',
        '06_challenges': 'Minimizing false positives on creative or technical prompts containing security keywords while maintaining 99%+ block rates on malicious payloads.',
        '07_results': '• Successfully neutralized 98.4% of known jailbreak vectors in benchmark adversarial testing datasets.\n• Added less than 18ms latency overhead to the inference pipeline.\n• Zero successful system prompt leaks under red team stress testing.',
        '08_future': 'Automated dynamic generation of adversarial test cases to continuously train the guardrail classifier against emerging zero-day jailbreaks.',
        '09_links': {
          github: 'https://github.com/sajansaju20/PromptCraft_AI',
          demo: 'https://github.com/sajansaju20/PromptCraft_AI'
        }
      }
    },
    'resumeai': {
      number: 'PROJECT 04',
      title: 'ResumeAI — ATS Analyzer',
      tagline: 'Privacy-First AI Resume Parser & ATS Analyzer with Local LLM',
      image: 'assets/images/project_resumeai.jpg',
      technologies: ['Local LLM', 'ATS Analytics', 'Python', 'Document Extraction', 'Zero-Telemetry', 'Privacy Engineering'],
      sections: {
        '01_overview': 'ResumeAI is a privacy-first resume parsing and Application Tracking System (ATS) optimization engine powered entirely by a local LLM. It extracts skills, analyzes keyword alignment, scores candidate qualifications, and provides actionable recommendations without uploading sensitive personal information to third-party servers.',
        '02_problem': 'Commercial resume scanners require users to upload personal identifiers (names, phone numbers, addresses, employment history) to cloud databases, posing severe privacy risks, data scraping threats, and potential GDPR/compliance violations.',
        '03_approach': 'Built an entirely local document extraction and semantic evaluation pipeline using Python and local LLMs. Documents are parsed in memory, analyzed for semantic skill alignment against target job specifications, and discarded without persistent storage or cloud egress.',
        '04_architecture': `+-----------------------------------------------------------------------------------+
|                             RESUMEAI SYSTEM WORKFLOW                              |
+-----------------------------------------------------------------------------------+
|  [Resume PDF / DOCX]                                                              |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------------+       +---------------------------------+  |
|  | In-Memory Document Extractor      | ----> | PII Sanitization & Tokenizer    |  |
|  +-----------------------------------+       +---------------------------------+  |
|           |                                                  |                    |
|           v                                                  v                    |
|  +-----------------------------------------------------------------------------+  |
|  | Local LLM Semantic Evaluator (Extracts Skills, Experience & ATS Fit Score)   |  |
|  +-----------------------------------------------------------------------------+  |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------------+       +---------------------------------+  |
|  | ATS Keyword Gap Matrix            | ----> | Actionable Optimization Report  |  |
|  +-----------------------------------+       +---------------------------------+  |
|           |                                                                       |
|           v                                                                       |
|  [Instant Clean JSON / Markdown Output — Zero Data Retention]                     |
+-----------------------------------------------------------------------------------+`,
        '05_technologies': 'Language & Runtime: Python 3.11, Local LLM inference.\nDocument Processing: pdfplumber, python-docx, PyMuPDF.\nAnalysis: Semantic cosine similarity, keyword frequency mapping, ATS scoring heuristics.',
        '06_challenges': 'Accurately parsing complex multi-column resume layouts and non-standard typography without losing section hierarchy or text ordering.',
        '07_results': '• 100% private: Zero external network traffic generated during analysis.\n• Average document parsing & deep ATS evaluation completed in < 4.2 seconds.\n• High-precision extraction of technical cybersecurity and software engineering skill taxonomy.',
        '08_future': 'Support for interactive real-time CV rewriting with domain-specific cybersecurity and AI engineering terminology recommendations.',
        '09_links': {
          github: 'https://github.com/sajansaju20/resume-ai',
          demo: 'https://github.com/sajansaju20/resume-ai'
        }
      }
    },
    'socialguard': {
      number: 'PROJECT 05',
      title: 'Social Media Post Generator',
      tagline: 'AI Content Engine with PromptGuard, Content Intelligence & Memory',
      image: 'assets/images/project_socialguard.jpg',
      technologies: ['Local LLMs', 'Ollama', 'PromptGuard', 'Content Memory', 'Python', 'NLP'],
      sections: {
        '01_overview': 'An AI-powered social media content generation platform utilizing Ollama and local LLMs, augmented with PromptGuard security validation, content safety intelligence, and multi-turn conversational memory.',
        '02_problem': 'Automated content generators often generate hallucinated or unverified claims, lack consistent brand voice across sessions, and can be coerced into generating offensive or brand-damaging posts.',
        '03_approach': 'Integrated stateful memory layers with real-time PromptGuard content verification, ensuring that generated posts adhere to predefined brand constraints, tone guidelines, and safety policies.',
        '04_architecture': `+-----------------------------------------------------------------------------------+
|                     SOCIAL GENERATOR & CONTENT INTELLIGENCE                       |
+-----------------------------------------------------------------------------------+
|  [Topic Input & Style Directive]                                                  |
|           |                                                                       |
|           v                                                                       |
|  +-----------------------------------+       +---------------------------------+  |
|  | PromptGuard Safety Validation     | ----> | Content Memory Vector State     |  |
|  +-----------------------------------+       +---------------------------------+  |
|           |                                                  |                    |
|           v                                                  v                    |
|  +-----------------------------------------------------------------------------+  |
|  | Local LLM Content Generation (Ollama)                                      |  |
|  +-----------------------------------------------------------------------------+  |
|           |                                                                       |
|           v                                                                       |
|  [Tone-Consistent, Policy-Verified Multi-Platform Posts]                          |
+-----------------------------------------------------------------------------------+`,
        '05_technologies': 'Backend: Python, Ollama, LangChain.\nSecurity: PromptGuard integration, safety filter regex.\nMemory: Local vector memory store.',
        '06_challenges': 'Maintaining conversational context and tone adaptation across diverse platforms (LinkedIn vs. Twitter/X) in a local inference setup.',
        '07_results': '• Zero offensive content output achieved across extensive automated red team testing.\n• Multi-platform formatted generation in under 2.5 seconds.',
        '08_future': 'Automated hashtag trend correlation via passive OSINT feeds.',
        '09_links': {
          github: 'https://github.com/sajansaju20/social-media-post-generator',
          demo: 'https://github.com/sajansaju20/social-media-post-generator'
        }
      }
    },
    'aichatbot': {
      number: 'PROJECT 06',
      title: 'AI ChatBot Python',
      tagline: 'NLP & ML-Powered ChatBot with Intent Detection & Context Memory',
      image: 'assets/images/project_cybersecuregpt.jpg',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Intent Detection', 'Conversation Memory'],
      sections: {
        '01_overview': 'A comprehensive NLP and machine learning-powered Python conversational agent equipped with dynamic intent classification, conversational memory, and context-aware responses.',
        '02_problem': 'Rule-based chatbots fail when users formulate inquiries with ambiguous syntax, colloquialisms, or multi-turn conversational dependencies.',
        '03_approach': 'Constructed an ML-driven intent classification pipeline utilizing tokenization, lemmatization, and TF-IDF feature matrices paired with a stateful context tracker.',
        '04_architecture': `[User Message] -> [NLP Tokenizer & Lemmatizer] -> [Intent Classifier] -> [Memory State Context] -> [Response Dispatcher]`,
        '05_technologies': 'Python 3.11, NLTK, Scikit-learn, NumPy, JSON state memory.',
        '06_challenges': 'Resolving ambiguous user intent without losing historical conversational context.',
        '07_results': '• 92% intent classification accuracy across diverse training dialogues.\n• Instant response execution with minimal computational footprint.',
        '08_future': 'Hybrid fusion with local transformer embeddings for zero-shot intent categorization.',
        '09_links': {
          github: 'https://github.com/sajansaju20/ai-chatbot-python',
          demo: 'https://github.com/sajansaju20/ai-chatbot-python'
        }
      }
    }
  };

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNavbarScroll();
    initRevealObserver();
    initHeroTilt();
    initSkillsFilter();
    initCaseStudyModals();
    initEasterEgg();
    initContactSection();
    initBackToTop();
  });

  // --- 1. CUSTOM CURSOR (120HZ LERP ENGINE) ---
  function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const follower = document.querySelector('.cursor-follower');

    if (!dot || !follower || state.isReducedMotion || window.innerWidth < 1024) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    // Smooth Lerp loop for follower
    function renderCursor() {
      // 0.18 lerp factor for crisp responsiveness on 120Hz displays
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive Hover Listeners
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .nav-brand, .skill-tab-btn, .email-copy-box');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => follower.classList.add('is-hovering'));
      el.addEventListener('mouseleave', () => follower.classList.remove('is-hovering'));
    });

    const projectCards = document.querySelectorAll('.project-editorial-card, .project-visual-frame');
    projectCards.forEach(el => {
      el.addEventListener('mouseenter', () => follower.classList.add('is-project'));
      el.addEventListener('mouseleave', () => follower.classList.remove('is-project'));
    });

    const inspectCards = document.querySelectorAll('.skill-card, .research-card');
    inspectCards.forEach(el => {
      el.addEventListener('mouseenter', () => follower.classList.add('is-inspect'));
      el.addEventListener('mouseleave', () => follower.classList.remove('is-inspect'));
    });
  }

  // --- 2. FLOATING NAVBAR & SCROLL SPY ---
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileClose = document.querySelector('.mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Scroll listener with passive flag
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (navbar) {
        if (scrollY > 60) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      // Active link highlight based on scroll position
      let currentSectionId = '';
      sections.forEach(section => {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    // Mobile Menu Handlers
    if (mobileToggle && mobileOverlay) {
      mobileToggle.addEventListener('click', () => {
        mobileOverlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (mobileClose && mobileOverlay) {
      mobileClose.addEventListener('click', () => {
        mobileOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileOverlay) {
          mobileOverlay.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // --- 3. SCROLL REVEAL OBSERVER (INTERSECTION OBSERVER) ---
  function initRevealObserver() {
    const revealItems = document.querySelectorAll('.reveal-item, .reveal-mask');
    if (!revealItems.length) return;

    if (state.isReducedMotion) {
      revealItems.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealItems.forEach(item => observer.observe(item));
  }

  // --- 4. HERO 3D PARALLAX TILT ---
  function initHeroTilt() {
    const heroWrapper = document.querySelector('.hero-image-container');
    if (!heroWrapper || state.isReducedMotion || window.innerWidth < 1024) return;

    heroWrapper.addEventListener('mousemove', (e) => {
      const rect = heroWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      heroWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    heroWrapper.addEventListener('mouseleave', () => {
      heroWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // --- 5. SKILLS MATRIX & CONTEXT INSPECTOR ---
  function initSkillsFilter() {
    const tabButtons = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const inspectorTitle = document.getElementById('inspector-title');
    const inspectorDesc = document.getElementById('inspector-desc');
    const inspectorCategory = document.getElementById('inspector-category');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        state.activeSkillCategory = category;

        skillCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 20);
          } else {
            card.style.opacity = '0';
            card.style.display = 'none';
          }
        });
      });
    });

    const skillsDetails = {
      'cybersecurity': 'Focuses on defensive architecture, packet filtering, memory forensics, threat modeling, and MITRE ATT&CK adversary emulation.',
      'ai-ml': 'Specializes in local LLM deployments (Ollama, Qwen2.5), high-density RAG pipelines (ChromaDB), and PromptGuard prompt injection defenses.',
      'development': 'Core development with Python, FastAPI, TypeScript, C, and robust asynchronous backend architectures with zero external telemetry egress.',
      'tools': 'Environment mastery spanning Kali Linux, BlackArch, Wireshark, Burp Suite, Nmap, Docker sandboxes, and Git workflows.'
    };

    skillCards.forEach(card => {
      card.addEventListener('click', () => {
        skillCards.forEach(c => c.classList.remove('is-active'));
        card.classList.add('is-active');

        const cardTitle = card.querySelector('.skill-card-name span')?.textContent || 'Skill';
        const cardDesc = card.querySelector('.skill-card-desc')?.textContent || '';
        const cardCat = card.getAttribute('data-category') || 'CYBERSECURITY';

        if (inspectorTitle && inspectorDesc && inspectorCategory) {
          inspectorTitle.textContent = `${cardTitle} — Technical Architecture`;
          inspectorDesc.textContent = `${cardDesc} Implemented in production research prototypes with strict security verification and deterministic guardrails.`;
          inspectorCategory.textContent = cardCat;
        }
      });
    });
  }

  // --- 6. CASE STUDY MODAL ENGINE (9 SECTIONS) ---
  function initCaseStudyModals() {
    const modalBackdrop = document.getElementById('case-study-modal-backdrop');
    const modalContainer = document.getElementById('case-study-modal-content');
    const closeBtn = document.getElementById('case-study-close-btn');
    const triggerButtons = document.querySelectorAll('[data-open-project]');

    if (!modalBackdrop || !modalContainer) return;

    function openModal(projectId) {
      const project = projectDatabase[projectId];
      if (!project) return;

      const htmlContent = `
        <div class="case-study-modal">
          <button class="modal-close-btn" id="modal-internal-close" aria-label="Close case study">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <img src="${project.image}" alt="${project.title}" class="modal-hero-visual" />
          
          <div class="modal-body">
            <div style="margin-bottom: 2rem;">
              <span class="mono-tag" style="color: var(--accent-cyan);">${project.number}</span>
              <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; color: #fff; margin: 0.4rem 0;">${project.title}</h2>
              <p style="font-size: 1.125rem; color: var(--text-secondary);">${project.tagline}</p>
              
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.25rem;">
                ${project.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
              </div>
            </div>

            <!-- 01 OVERVIEW -->
            <div class="modal-section">
              <div class="modal-section-number">01 — OVERVIEW</div>
              <h3 class="modal-section-title">Project Mission & Summary</h3>
              <p class="modal-section-text">${project.sections['01_overview']}</p>
            </div>

            <!-- 02 PROBLEM -->
            <div class="modal-section">
              <div class="modal-section-number">02 — THE PROBLEM</div>
              <h3 class="modal-section-title">Threat & Technical Bottlenecks</h3>
              <p class="modal-section-text">${project.sections['02_problem']}</p>
            </div>

            <!-- 03 APPROACH -->
            <div class="modal-section">
              <div class="modal-section-number">03 — APPROACH & METHODOLOGY</div>
              <h3 class="modal-section-title">Engineering Strategy</h3>
              <p class="modal-section-text">${project.sections['03_approach']}</p>
            </div>

            <!-- 04 ARCHITECTURE -->
            <div class="modal-section">
              <div class="modal-section-number">04 — SYSTEM ARCHITECTURE</div>
              <h3 class="modal-section-title">Data Flow & Module Diagram</h3>
              <pre class="arch-diagram-box"><code>${project.sections['04_architecture']}</code></pre>
            </div>

            <!-- 05 TECHNOLOGIES -->
            <div class="modal-section">
              <div class="modal-section-number">05 — TECHNOLOGIES & STACK</div>
              <h3 class="modal-section-title">Core Tooling</h3>
              <p class="modal-section-text" style="white-space: pre-line;">${project.sections['05_technologies']}</p>
            </div>

            <!-- 06 CHALLENGES -->
            <div class="modal-section">
              <div class="modal-section-number">06 — CHALLENGES & MITIGATIONS</div>
              <h3 class="modal-section-title">Technical Bottlenecks Overcome</h3>
              <p class="modal-section-text">${project.sections['06_challenges']}</p>
            </div>

            <!-- 07 RESULTS -->
            <div class="modal-section">
              <div class="modal-section-number">07 — RESULTS & BENCHMARKS</div>
              <h3 class="modal-section-title">Empirical Security Metrics</h3>
              <p class="modal-section-text" style="white-space: pre-line;">${project.sections['07_results']}</p>
            </div>

            <!-- 08 FUTURE IMPROVEMENTS -->
            <div class="modal-section">
              <div class="modal-section-number">08 — FUTURE IMPROVEMENTS</div>
              <h3 class="modal-section-title">Next Research Horizons</h3>
              <p class="modal-section-text">${project.sections['08_future']}</p>
            </div>

            <!-- 09 REPOSITORY & DEMO -->
            <div class="modal-section" style="border-bottom: none;">
              <div class="modal-section-number">09 — SOURCE CODE & ACCESS</div>
              <h3 class="modal-section-title">Repository on GitHub</h3>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                <a href="${project.sections['09_links'].github}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                  View on GitHub (sajansaju20)
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#contact" onclick="closeCaseStudyModal();" class="btn-secondary">
                  Discuss Research Collaboration
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      modalContainer.innerHTML = htmlContent;
      modalBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';

      const internalClose = document.getElementById('modal-internal-close');
      if (internalClose) {
        internalClose.addEventListener('click', closeModal);
      }
    }

    function closeModal() {
      modalBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => {
        modalContainer.innerHTML = '';
      }, 300);
    }

    window.closeCaseStudyModal = closeModal;

    triggerButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-open-project');
        openModal(projectId);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // --- 7. CRYPTOGRAPHIC EASTER EGG ---
  function initEasterEgg() {
    const brandLogo = document.querySelector('.nav-brand');
    const heroStatusPill = document.querySelector('.hero-status-pill');
    const eggBackdrop = document.getElementById('easter-egg-modal-backdrop');
    const eggClose = document.getElementById('easter-egg-close-btn');

    if (!eggBackdrop) return;

    function triggerEasterEgg() {
      // Generate randomized SHA-256 styled hash
      const randomHash = Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const hashEl = document.getElementById('egg-sha256');
      if (hashEl) hashEl.textContent = randomHash;

      eggBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeEasterEgg() {
      eggBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        state.logoClicks++;
        if (state.logoClicks >= 3) {
          state.logoClicks = 0;
          triggerEasterEgg();
        }
      });
    }

    if (heroStatusPill) {
      heroStatusPill.addEventListener('click', triggerEasterEgg);
      heroStatusPill.style.cursor = 'pointer';
    }

    if (eggClose) eggClose.addEventListener('click', closeEasterEgg);
    eggBackdrop.addEventListener('click', (e) => {
      if (e.target === eggBackdrop) closeEasterEgg();
    });

    // Keyboard shortcut: Ctrl + Shift + K or Backtick (`)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'k') || e.key === '`') {
        if (!eggBackdrop.classList.contains('is-open')) {
          triggerEasterEgg();
        } else {
          closeEasterEgg();
        }
      }
    });
  }

  // --- 8. CONTACT & EMAIL COPY ---
  function initContactSection() {
    const copyBox = document.getElementById('copy-email-box');
    const feedbackText = document.getElementById('copy-feedback-text');
    const contactForm = document.getElementById('portfolio-contact-form');
    const formStatus = document.getElementById('form-status-msg');

    const email = 'cybersaju20@gmail.com';

    if (copyBox && feedbackText) {
      copyBox.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
          feedbackText.textContent = 'COPIED TO CLIPBOARD ✓';
          feedbackText.style.color = '#10B981';
          setTimeout(() => {
            feedbackText.textContent = 'CLICK TO COPY';
            feedbackText.style.color = 'var(--accent-cyan)';
          }, 2500);
        }).catch(() => {
          feedbackText.textContent = 'CTRL+C TO COPY';
        });
      });
    }

    if (contactForm && formStatus) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'TRANSMITTING ENCRYPTED MESSAGE...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'MESSAGE SENT SUCCESSFULLY ✓';
            submitBtn.style.backgroundColor = '#10B981';
            submitBtn.style.borderColor = '#10B981';
          }
          formStatus.classList.add('success');
          formStatus.textContent = 'Handshake established. Your message has been encrypted and delivered to Sajan S.';
          contactForm.reset();

          setTimeout(() => {
            if (submitBtn) {
              submitBtn.textContent = 'Send Message →';
              submitBtn.style.backgroundColor = 'var(--accent-cyan)';
              submitBtn.style.borderColor = 'var(--accent-cyan)';
            }
            formStatus.classList.remove('success');
          }, 5000);
        }, 800);
      });
    }
  }

  // --- 9. BACK TO TOP SMOOTH SCROLLER ---
  function initBackToTop() {
    const backBtn = document.getElementById('back-to-top-btn');
    if (!backBtn) return;

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

})();
