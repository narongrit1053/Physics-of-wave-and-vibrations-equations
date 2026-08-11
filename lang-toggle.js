(function() {
    // 1. Retrieve or set initial language
    var savedLang = localStorage.getItem('preferred_language') || 'en';
    if (savedLang !== 'th' && savedLang !== 'en') {
        savedLang = 'en';
    }

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('preferred_language', lang);
        
        // Update toggle button visual state if initialized
        var btnEn = document.getElementById('lang-btn-en');
        var btnTh = document.getElementById('lang-btn-th');
        if (btnEn && btnTh) {
            if (lang === 'en') {
                btnEn.classList.add('active');
                btnTh.classList.remove('active');
            } else {
                btnTh.classList.add('active');
                btnEn.classList.remove('active');
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

    // 2. Dynamically inject Language Switcher CSS rules
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
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
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

    // 3. Inject Toggle Switch on DOM ready
    function initSwitcher() {
        var currentLang = localStorage.getItem('preferred_language') || 'en';
        
        var navBar = document.querySelector('.nav-bar');
        var homeHeader = document.querySelector('.home-header') || document.querySelector('.home-section');

        var switcherHTML = `
            <div class="lang-switcher" title="Change Language / เปลี่ยนภาษา">
                <button type="button" id="lang-btn-en" class="lang-toggle-btn ${currentLang === 'en' ? 'active' : ''}" onclick="window.toggleLanguage('en')">
                    EN
                </button>
                <button type="button" id="lang-btn-th" class="lang-toggle-btn ${currentLang === 'th' ? 'active' : ''}" onclick="window.toggleLanguage('th')">
                    TH
                </button>
            </div>
        `;

        if (navBar) {
            var container = navBar.querySelector('.nav-lang-container');
            if (container) {
                container.innerHTML = switcherHTML;
            } else {
                var div = document.createElement('div');
                div.className = 'nav-lang-container';
                div.style.marginLeft = '12px';
                div.style.display = 'flex';
                div.style.alignItems = 'center';
                div.innerHTML = switcherHTML;
                navBar.appendChild(div);
            }
        } else if (homeHeader) {
            var container = homeHeader.querySelector('.nav-lang-container');
            if (container) {
                container.innerHTML = switcherHTML;
            } else {
                var div = document.createElement('div');
                div.className = 'nav-lang-container';
                div.style.cssText = 'display:flex; justify-content:flex-end; margin-bottom:16px;';
                div.innerHTML = switcherHTML;
                homeHeader.insertBefore(div, homeHeader.firstChild);
            }
        }

        applyLanguage(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSwitcher);
    } else {
        initSwitcher();
    }

    window.toggleLanguage = function(lang) {
        applyLanguage(lang);
    };
})();
