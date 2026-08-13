(function() {
    // 1. Retrieve or set initial language (Default: 'th')
    var savedLang = localStorage.getItem('preferred_language') || 'th';
    if (savedLang !== 'th' && savedLang !== 'en') {
        savedLang = 'th';
    }

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('preferred_language', lang);
        
        // Update toggle button visual state if initialized
        var btnEn = document.getElementById('lang-btn-en');
        var btnTh = document.getElementById('lang-btn-th');
        if (btnEn && btnTh) {
            if (lang === 'th') {
                btnTh.classList.add('active');
                btnEn.classList.remove('active');
            } else {
                btnEn.classList.add('active');
                btnTh.classList.remove('active');
            }
        }

        // Update placeholder texts with data-placeholder-en / data-placeholder-th
        var inputs = document.querySelectorAll('[data-placeholder-en][data-placeholder-th]');
        inputs.forEach(function(input) {
            input.placeholder = lang === 'th' ? input.getAttribute('data-placeholder-th') : input.getAttribute('data-placeholder-en');
        });

        // Dispatch custom event for dynamic scripts (e.g. canvas rendering)
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    }

    // Apply language setting immediately to avoid Flash of Unstyled Text
    applyLanguage(savedLang);

    // 2. Dynamically inject theme.css and Language Switcher CSS rules if not loaded
    if (!document.querySelector('link[href*="theme.css"]')) {
        var themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.href = 'theme.css';
        document.head.appendChild(themeLink);
    }

    var style = document.createElement('style');
    style.textContent = `
        /* Thai/English Visibility Rules */
        html[data-lang="th"] .lang-en { display: none !important; }
        html[data-lang="th"] .lang-th { display: inline; }
        html[data-lang="th"] div.lang-th, 
        html[data-lang="th"] p.lang-th, 
        html[data-lang="th"] section.lang-th, 
        html[data-lang="th"] li.lang-th,
        html[data-lang="th"] h1.lang-th,
        html[data-lang="th"] h2.lang-th,
        html[data-lang="th"] h3.lang-th,
        html[data-lang="th"] span.lang-th-block { display: block !important; }
        html[data-lang="th"] flex.lang-th,
        html[data-lang="th"] div.lang-th-flex { display: flex !important; }

        html[data-lang="en"] .lang-th { display: none !important; }
        html[data-lang="en"] .lang-en { display: inline; }
        html[data-lang="en"] div.lang-en, 
        html[data-lang="en"] p.lang-en, 
        html[data-lang="en"] section.lang-en, 
        html[data-lang="en"] li.lang-en,
        html[data-lang="en"] h1.lang-en,
        html[data-lang="en"] h2.lang-en,
        html[data-lang="en"] h3.lang-en,
        html[data-lang="en"] span.lang-en-block { display: block !important; }
        html[data-lang="en"] flex.lang-en,
        html[data-lang="en"] div.lang-en-flex { display: flex !important; }

        /* Segmented Language Switcher Component */
        .lang-switcher {
            display: inline-flex;
            align-items: center;
            background: #f1f5f9;
            border: 1px solid #cbd5e1;
            border-radius: 20px;
            padding: 3px;
            gap: 2px;
            font-family: var(--font-body, sans-serif);
            user-select: none;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
        }
        .lang-toggle-btn {
            border: none;
            background: transparent;
            color: #64748b;
            padding: 5px 12px;
            border-radius: 16px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 5px;
            line-height: 1;
        }
        .lang-toggle-btn:hover {
            color: #1e293b;
        }
        .lang-toggle-btn.active {
            background: #ffffff;
            color: #2563eb;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
    `;
    document.head.appendChild(style);

    // 3. Inject & Standardize Top Sticky Glassmorphic Header
    function initHeaderAndSwitcher() {
        var currentLang = localStorage.getItem('preferred_language') || 'th';
        var pagePath = window.location.pathname.toLowerCase();

        var isHome = pagePath.indexOf('index.html') !== -1 || pagePath.endsWith('/') || pagePath.endsWith('\\');
        var isFormula = pagePath.indexOf('formula_sheet.html') !== -1;
        var isPractice = pagePath.indexOf('practice.html') !== -1;
        var isHomework = pagePath.indexOf('homework.html') !== -1 || pagePath.indexOf('hw') !== -1;
        var isLecture = pagePath.indexOf('lecture') !== -1;

        var existingHeader = document.querySelector('.site-header');
        var navBar = document.querySelector('.nav-bar');

        if (!existingHeader && navBar) {
            // Upgrade existing .nav-bar element into a sticky .site-header
            var header = document.createElement('header');
            header.className = 'site-header';
            
            var container = document.createElement('div');
            container.className = 'container';

            navBar.parentNode.insertBefore(header, navBar);
            header.appendChild(container);
            container.appendChild(navBar);

            // Populate unified navbar structure if empty or plain
            if (!navBar.querySelector('.nav-brand')) {
                navBar.innerHTML = `
                    <a href="index.html" class="nav-brand">
                        <div class="nav-brand-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 12s3-7 7-7 7 7 13 7 3-7 3-7"></path>
                            </svg>
                        </div>
                        <span>Physics 207203</span>
                        <span class="nav-badge">Wave &amp; Oscillations</span>
                    </a>

                    <div class="nav-links">
                        <a href="index.html" class="nav-btn ${isHome ? 'active' : ''}">
                            <span class="lang-th">สารบัญบทเรียน</span>
                            <span class="lang-en">Course Directory</span>
                        </a>
                        
                        <div class="nav-dropdown">
                            <a href="index.html#lectures-section" class="nav-btn ${isLecture ? 'active' : ''}">
                                <span class="lang-th">บทเรียน (Lectures 0–8) ▾</span>
                                <span class="lang-en">Lectures 0–8 ▾</span>
                            </a>
                            <div class="nav-dropdown-content">
                                <a href="lecture0.html" class="nav-dropdown-item">L0: Mathematical Prerequisites</a>
                                <a href="lecture1.html" class="nav-dropdown-item">L1: SHM &amp; Complex Numbers</a>
                                <a href="lecture2.html" class="nav-dropdown-item">L2: Superposition of Oscillations</a>
                                <a href="lecture3.html" class="nav-dropdown-item">L3: Pendulums &amp; Rotational Dynamics</a>
                                <a href="lecture4.html" class="nav-dropdown-item">L4: Elasticity &amp; Advanced Oscillators</a>
                                <a href="lecture5.html" class="nav-dropdown-item">L5: LC Circuit Oscillations</a>
                                <a href="lecture6.html" class="nav-dropdown-item">L6: Damped Free Oscillations</a>
                                <a href="lecture7.html" class="nav-dropdown-item">L7: Forced Oscillations &amp; Resonance</a>
                                <a href="lecture8.html" class="nav-dropdown-item">L8: Coupled Oscillations</a>
                            </div>
                        </div>

                        <a href="formula_sheet.html" class="nav-btn ${isFormula ? 'active' : ''}">
                            <span class="lang-th">สรุปสูตรสอบ</span>
                            <span class="lang-en">Exam Formula Sheet</span>
                        </a>
                        <a href="practice.html" class="nav-btn ${isPractice ? 'active' : ''}">
                            <span class="lang-th">คลังแบบฝึกหัด</span>
                            <span class="lang-en">Practice Bank</span>
                        </a>
                        <a href="homework.html" class="nav-btn ${isHomework ? 'active' : ''}">
                            <span class="lang-th">การบ้านและเฉลย</span>
                            <span class="lang-en">Homeworks</span>
                        </a>
                    </div>

                    <div class="nav-lang-container"></div>
                `;
            }
        }

        // Inject / Refresh Switcher HTML inside .nav-lang-container
        var targetNavBar = document.querySelector('.nav-bar');
        if (targetNavBar) {
            var container = targetNavBar.querySelector('.nav-lang-container');
            var switcherHTML = `
                <div class="lang-switcher" title="เปลี่ยนภาษา / Change Language">
                    <button type="button" id="lang-btn-th" class="lang-toggle-btn ${currentLang === 'th' ? 'active' : ''}" onclick="window.toggleLanguage('th')">
                        TH
                    </button>
                    <button type="button" id="lang-btn-en" class="lang-toggle-btn ${currentLang === 'en' ? 'active' : ''}" onclick="window.toggleLanguage('en')">
                        EN
                    </button>
                </div>
            `;

            if (container) {
                container.innerHTML = switcherHTML;
            } else {
                var div = document.createElement('div');
                div.className = 'nav-lang-container';
                div.style.marginLeft = 'auto';
                div.style.display = 'flex';
                div.style.alignItems = 'center';
                div.innerHTML = switcherHTML;
                targetNavBar.appendChild(div);
            }
        }

        applyLanguage(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeaderAndSwitcher);
    } else {
        initHeaderAndSwitcher();
    }

    window.toggleLanguage = function(lang) {
        applyLanguage(lang);
    };
})();
