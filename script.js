// Translations
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.badge': 'Full Stack Developer',
        'hero.name': 'Mohamad Abosalh',
        'hero.title': 'Software Engineering Student | Junior Full Stack & Android/Web Developer',
        'hero.subtitle': 'Passionate about web development, Angular applications, Linux systems, and building modern responsive digital experiences.',
        'hero.viewProjects': 'View Projects',
        'hero.contactMe': 'Contact Me',
        'about.title': 'About Me',
        'about.description': 'I am a Software Engineering Practical Engineer student at ORT Braude College. I enjoy building modern web applications and learning new technologies using Angular, Node.js, PHP, MySQL, Java, Python, Linux, and Android Studio.',
        'education.title': 'Education',
        'education.degree': 'Software Engineering Practical Engineer Student',
        'education.college': 'ORT Braude College',
        'education.subjects': 'Subjects',
        'skills.title': 'Skills',
        'skills.programming': 'Programming',
        'skills.frontend': 'Frontend',
        'skills.angular': 'Angular',
        'skills.backend': 'Backend',
        'skills.databases': 'Databases',
        'skills.android': 'Android',
        'skills.linux': 'Linux & Tools',
        'skills.embedded': 'Embedded',
        'experience.title': 'Experience',
        'projects.title': 'Projects',
        'projects.viewCode': 'View Code',
        'terminal.title': 'Linux Terminal',
        'gallery.title': 'Gallery',
        'contact.title': 'Contact Me',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'footer.copyright': '© 2026 Mohamad Abosalh. All rights reserved.',
        'footer.backToTop': 'Back to Top',
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'نبذة عني',
        'nav.education': 'التعليم',
        'nav.skills': 'المهارات',
        'nav.experience': 'الخبرات',
        'nav.projects': 'المشاريع',
        'nav.contact': 'تواصل معي',
        'hero.badge': 'مطور Full Stack',
        'hero.name': 'محمد أبو صالح',
        'hero.title': 'طالب هندسة برمجيات | مطور Full Stack و Android/Web',
        'hero.subtitle': 'شغوف بتطوير الويب، تطبيقات Angular، أنظمة Linux، وبناء تجارب رقمية حديثة.',
        'hero.viewProjects': 'عرض المشاريع',
        'hero.contactMe': 'تواصل معي',
        'about.title': 'نبذة عني',
        'about.description': 'أنا طالب هندسة برمجيات في كلية أورط براودة وأهتم بتطوير تطبيقات الويب الحديثة وتعلم التقنيات الجديدة. أعمل باستخدام Angular وNode.js وPHP وMySQL وJava وPython وLinux وAndroid Studio.',
        'education.title': 'التعليم',
        'education.degree': 'طالب هندسة برمجيات',
        'education.college': 'كلية أورط براودة',
        'education.subjects': 'المواد الدراسية',
        'skills.title': 'المهارات',
        'skills.programming': 'البرمجة',
        'skills.frontend': 'الواجهة الأمامية',
        'skills.angular': 'Angular',
        'skills.backend': 'الخادم الخلفي',
        'skills.databases': 'قواعد البيانات',
        'skills.android': 'Android',
        'skills.linux': 'Linux والأدوات',
        'skills.embedded': 'الأنظمة المدمجة',
        'experience.title': 'الخبرات',
        'projects.title': 'المشاريع',
        'projects.viewCode': 'عرض الكود',
        'terminal.title': 'محطة Linux',
        'gallery.title': 'معرض الأعمال',
        'contact.title': 'تواصل معي',
        'contact.name': 'الاسم',
        'contact.email': 'البريد الإلكتروني',
        'contact.message': 'الرسالة',
        'contact.send': 'إرسال الرسالة',
        'footer.copyright': '© 2026 محمد أبو صالح. جميع الحقوق محفوظة.',
        'footer.backToTop': 'العودة للأعلى',
    },
    he: {
        'nav.home': 'בית',
        'nav.about': 'אודות',
        'nav.education': 'השכלה',
        'nav.skills': 'כישורים',
        'nav.experience': 'ניסיון',
        'nav.projects': 'פרויקטים',
        'nav.contact': 'יצירת קשר',
        'hero.badge': 'מפתח Full Stack',
        'hero.name': 'מוחמד אבו סאלח',
        'hero.title': 'סטודנט להנדסת תוכנה | מפתח Full Stack ו-Android/Web',
        'hero.subtitle': 'מתעניין בפיתוח אתרים, אפליקציות Angular, מערכות Linux ובניית חוויות דיגיטליות מודרניות.',
        'hero.viewProjects': 'צפה בפרויקטים',
        'hero.contactMe': 'צור קשר',
        'about.title': 'אודותיי',
        'about.description': 'אני סטודנט להנדסת תוכנה במכללת אורט בראודה ומתעניין בפיתוח אפליקציות ואתרים מודרניים. אני עובד עם Angular, Node.js, PHP, MySQL, Java, Python, Linux ו-Android Studio.',
        'education.title': 'השכלה',
        'education.degree': 'סטודנט להנדסת תוכנה',
        'education.college': 'מכללת אורט בראודה',
        'education.subjects': 'נושאים',
        'skills.title': 'כישורים',
        'skills.programming': 'תכנות',
        'skills.frontend': 'Frontend',
        'skills.angular': 'Angular',
        'skills.backend': 'Backend',
        'skills.databases': 'מסדי נתונים',
        'skills.android': 'Android',
        'skills.linux': 'Linux וכלים',
        'skills.embedded': 'מערכות משובצות',
        'experience.title': 'ניסיון',
        'projects.title': 'פרויקטים',
        'projects.viewCode': 'צפה בקוד',
        'terminal.title': 'מסוף Linux',
        'gallery.title': 'גלריה',
        'contact.title': 'צור קשר',
        'contact.name': 'שם',
        'contact.email': 'דוא"ל',
        'contact.message': 'הודעה',
        'contact.send': 'שלח הודעה',
        'footer.copyright': '© 2026 מוחמד אבו סאלח. כל הזכויות שמורות.',
        'footer.backToTop': 'חזרה למעלה',
    }
};

// Current language state
let currentLanguage = 'en';

// Translation function
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Update all translations on the page
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    // Update document direction
    if (currentLanguage === 'ar' || currentLanguage === 'he') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

// Language switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-mobile');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            currentLanguage = lang;
            
            // Update active state
            document.querySelectorAll('.lang-btn, .lang-btn-mobile').forEach(b => {
                if (b.getAttribute('data-lang') === lang) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });
            
            updateTranslations();
            renderDynamicContent();
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Particles background
function initParticles() {
    const particlesContainer = document.getElementById('particles-background');
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = 'rgba(6, 182, 212, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 2;
        
        particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
        particlesContainer.appendChild(particle);
    }
    
    // Add animation to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.2;
            }
            50% {
                transform: translateY(-30px) translateX(10px);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// Hero stars animation
function initHeroStars() {
    const heroStars = document.querySelector('.hero-stars');
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '4px';
        star.style.height = '4px';
        star.style.background = '#06b6d4';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        heroStars.appendChild(star);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.5);
            }
        }
    `;
    document.head.appendChild(style);
}

// Render tech tags
function renderTechTags() {
    const techTagsContainer = document.getElementById('techTags');
    const techTags = ['Angular', 'Node.js', 'PHP', 'MySQL', 'Java', 'Python', 'Linux', 'Android'];
    
    techTagsContainer.innerHTML = '';
    techTags.forEach((tech, index) => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0)';
        techTagsContainer.appendChild(tag);
        
        setTimeout(() => {
            tag.style.transition = 'all 0.3s';
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, index * 100);
    });
}

// Render subjects
function renderSubjects() {
    const subjectsGrid = document.getElementById('subjectsGrid');
    const subjects = [
        'Full Stack Development',
        'Object-Oriented Programming',
        'Data Structures',
        'Operating Systems',
        'Linux',
        'Databases',
        'QA & Software Testing',
        'Embedded C & Arduino',
        'Web Development',
        'Android Basics',
    ];
    
    subjectsGrid.innerHTML = '';
    subjects.forEach((subject, index) => {
        const item = document.createElement('div');
        item.className = 'subject-item';
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        const span = document.createElement('span');
        span.textContent = subject;
        item.appendChild(span);
        subjectsGrid.appendChild(item);
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Render skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const skillCategories = [
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
            title: t('skills.programming'),
            skills: ['C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP'],
            color: 'linear-gradient(to right, #06b6d4, #3b82f6)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
            title: t('skills.frontend'),
            skills: ['HTML5', 'CSS3', 'Angular', 'Responsive Design'],
            color: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
            title: t('skills.angular'),
            skills: ['Components', 'Services', 'Routing', 'HTTP Client', 'Reactive Forms'],
            color: 'linear-gradient(to right, #8b5cf6, #ec4899)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
            title: t('skills.backend'),
            skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
            color: 'linear-gradient(to right, #ec4899, #ef4444)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
            title: t('skills.databases'),
            skills: ['MySQL', 'MongoDB'],
            color: 'linear-gradient(to right, #ef4444, #f97316)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
            title: t('skills.android'),
            skills: ['Android Basics', 'Android Studio', 'Mobile UI', 'API Integration'],
            color: 'linear-gradient(to right, #f97316, #eab308)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
            title: t('skills.linux'),
            skills: ['Linux Fundamentals', 'Ubuntu', 'Bash', 'Git & GitHub', 'VS Code', 'Figma'],
            color: 'linear-gradient(to right, #eab308, #22c55e)',
        },
        {
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
            title: t('skills.embedded'),
            skills: ['Arduino', 'Embedded C'],
            color: 'linear-gradient(to right, #22c55e, #06b6d4)',
        },
    ];
    
    skillsGrid.innerHTML = '';
    skillCategories.forEach((category, categoryIndex) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.setProperty('--gradient', category.color);
        card.innerHTML = `
            <div class="skill-icon-wrapper" style="background: ${category.color}">
                ${category.icon}
            </div>
            <h3>${category.title}</h3>
            <ul class="skill-list">
                ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        skillsGrid.appendChild(card);
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, categoryIndex * 100);
    });
}

// Render experience
function renderExperience() {
    const experienceGrid = document.getElementById('experienceGrid');
    const experiences = {
        en: [
            'Building responsive websites',
            'Angular frontend development',
            'Backend development using Node.js and PHP',
            'Database management with MySQL and MongoDB',
            'Linux terminal usage',
            'Java and Python programming',
            'Simple Android application development',
            'Arduino and Embedded C projects',
        ],
        ar: [
            'بناء مواقع ويب متجاوبة',
            'تطوير الواجهة الأمامية باستخدام Angular',
            'تطوير الخادم الخلفي باستخدام Node.js و PHP',
            'إدارة قواعد البيانات MySQL و MongoDB',
            'استخدام محطة Linux',
            'البرمجة بلغات Java و Python',
            'تطوير تطبيقات Android بسيطة',
            'مشاريع Arduino والأنظمة المدمجة',
        ],
        he: [
            'בניית אתרים רספונסיביים',
            'פיתוח Frontend עם Angular',
            'פיתוח Backend באמצעות Node.js ו-PHP',
            'ניהול מסדי נתונים MySQL ו-MongoDB',
            'שימוש במסוף Linux',
            'תכנות ב-Java ו-Python',
            'פיתוח אפליקציות Android פשוטות',
            'פרויקטים של Arduino ו-Embedded C',
        ],
    };
    
    experienceGrid.innerHTML = '';
    experiences[currentLanguage].forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${exp}</span>
        `;
        experienceGrid.appendChild(item);
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projects = [
        {
            title: {
                en: 'E-commerce Website',
                ar: 'موقع تجارة إلكترونية',
                he: 'אתר מסחר אלקטרוני',
            },
            description: {
                en: 'Full-featured e-commerce platform with shopping cart, user authentication, and product management',
                ar: 'منصة تجارة إلكترونية متكاملة مع عربة التسوق، مصادقة المستخدمين، وإدارة المنتجات',
                he: 'פלטפורמת מסחר אלקטרוני מלאה עם עגלת קניות, אימות משתמשים וניהול מוצרים',
            },
            technologies: ['Angular', 'Node.js', 'MySQL'],
             image: "image2.png",
            gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        },
        {
            title: {
                en: 'Outdoor Products Catalog',
                ar: 'كتالوج منتجات خارجية',
                he: 'קטלוג מוצרי חוץ',
            },
            description: {
                en: 'Product catalog website with search, filtering, and detailed product views',
                ar: 'موقع كتالوج منتجات مع البحث، الفلترة، وعرض تفاصيل المنتجات',
                he: 'אתר קטלוג מוצרים עם חיפוש, סינון ותצוגות מוצר מפורטות',
            },
            technologies: ['PHP', 'MySQL', 'JavaScript'],
            image: "image.png",
            gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        },
        {
            title: {
                en: 'Workshop Registration System',
                ar: 'نظام تسجيل ورش العمل',
                he: 'מערכת רישום לסדנאות',
            },
            description: {
                en: 'Online registration and management system for workshops and events',
                ar: 'نظام التسجيل والإدارة عبر الإنترنت لورش العمل والفعاليات',
                he: 'מערכת רישום וניהול מקוונת לסדנאות ואירועים',
            },
            technologies: ['PHP', 'MySQL'],
            image: "image4.png",
            gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        },
        {
            title: {
                en: 'Angular Dashboard',
                ar: 'لوحة تحكم Angular',
                he: 'לוח בקרה Angular',
            },
            description: {
                en: 'Modern dashboard with data visualization, charts, and real-time updates',
                ar: 'لوحة تحكم حديثة مع تصور البيانات، الرسوم البيانية، والتحديثات الفورية',
                he: 'לוח בקרה מודרני עם ויזואליזציה של נתונים, תרשימים ועדכונים בזמן אמת',
            },
            technologies: ['Angular', 'TypeScript'],
            image: "image5.png",
            gradient: 'linear-gradient(135deg, #ec4899, #ef4444)',
        },
        {
            title: {
                en: 'Simple Android App',
                ar: 'تطبيق Android بسيط',
                he: 'אפליקציית Android פשוטה',
            },
            description: {
                en: 'Mobile application with modern UI and API integration',
                ar: 'تطبيق محمول مع واجهة مستخدم حديثة وتكامل API',
                he: 'אפליקציה סלולרית עם ממשק מודרני ושילוב API',
            },
            technologies: ['Android Studio', 'Java'],
            image: "image6.png",
            gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
        },
        {
            title: {
                en: 'Arduino Smart Project',
                ar: 'مشروع Arduino ذكي',
                he: 'פרויקט Arduino חכם',
            },
            description: {
                en: 'IoT project with sensors, actuators, and embedded programming',
                ar: 'مشروع إنترنت الأشياء مع أجهزة الاستشعار، المحركات، والبرمجة المدمجة',
                he: 'פרויקט IoT עם חיישנים, מפעילים ותכנות משובץ',
            },
            technologies: ['Arduino', 'C'],
            image: "image7.png",
            gradient: 'linear-gradient(135deg, #f97316, #eab308)',
        },
    ];
    
    projectsGrid.innerHTML = '';
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.innerHTML = `
<div class="project-image">
    <img src="${project.image}" alt="${project.title[currentLanguage]}">
</div>

            <h3>${project.title[currentLanguage]}</h3>
            <p>${project.description[currentLanguage]}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <button class="project-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>${t('projects.viewCode')}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </button>
        `;
        projectsGrid.appendChild(card);
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Terminal animation
function initTerminal() {
    const terminalBody = document.getElementById('terminalBody');
    const commands = [
        { input: 'ls -la', output: 'total 48\ndrwxr-xr-x  6 mohamad mohamad 4096 May 15 2026 .\ndrwxr-xr-x 20 mohamad mohamad 4096 May 15 2026 ..\ndrwxr-xr-x  8 mohamad mohamad 4096 May 15 2026 projects\ndrwxr-xr-x  3 mohamad mohamad 4096 May 15 2026 angular-apps' },
        { input: 'cd projects', output: '' },
        { input: 'chmod +x deploy.sh', output: '' },
        { input: 'git status', output: 'On branch main\nYour branch is up to date with origin/main.\n\nnothing to commit, working tree clean' },
    ];
    
    let currentCommand = 0;
    
    function renderTerminal() {
        terminalBody.innerHTML = '';
        
        commands.forEach((cmd, index) => {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            
            const prompt = document.createElement('div');
            prompt.className = 'terminal-prompt';
            prompt.innerHTML = `<span>$</span><span>${cmd.input}</span>`;
            
            if (index === currentCommand) {
                const cursor = document.createElement('span');
                cursor.className = 'terminal-cursor';
                prompt.appendChild(cursor);
            }
            
            line.appendChild(prompt);
            
            if (cmd.output && index <= currentCommand) {
                const output = document.createElement('div');
                output.className = 'terminal-output';
                output.textContent = cmd.output;
                line.appendChild(output);
            }
            
            if (index <= currentCommand) {
                line.style.opacity = '1';
            } else {
                line.style.opacity = '0.3';
            }
            
            terminalBody.appendChild(line);
        });
    }
    
    renderTerminal();
    
    setInterval(() => {
        currentCommand = (currentCommand + 1) % commands.length;
        renderTerminal();
    }, 3000);
}

// Render gallery
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryItems = [
        { title: 'Website Screenshots', image:"image8.png", color: 'linear-gradient(135deg, #06b6d4, #3b82f6)' },
        { title: 'Dashboard Previews', image:"image9.png", color: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' },
        { title: 'Android App Screens', image:"image10.png", color: 'linear-gradient(135deg, #8b5cf6, #ec4899)' },
        { title: 'Coding Workspace', image:"image11.png", color: 'linear-gradient(135deg, #ec4899, #ef4444)' },
    ];
    
    galleryGrid.innerHTML = '';
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.opacity = '0';
        galleryItem.style.transform = 'scale(0.8)';
galleryItem.innerHTML = `
    <div class="gallery-image" style="background: ${item.color}">
        ${
            item.image
            ? `<img src="${item.image}" alt="${item.title}">`
            : item.icon
        }
    </div>
    <h3>${item.title}</h3>
`;
        galleryGrid.appendChild(galleryItem);
        
        setTimeout(() => {
            galleryItem.style.transition = 'all 0.5s';
            galleryItem.style.opacity = '1';
            galleryItem.style.transform = 'scale(1)';
        }, index * 100);
    });
}

// Contact form submission
function initContactForm() {
    const form = document.getElementById('contactForm');

    emailjs.init("MJFs4cxoz5FGA4-2z");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ldqocuo",
            "template_bsgo75l",
            form
        )
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            alert("Failed to send message");
        });
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Render all dynamic content
function renderDynamicContent() {
    renderTechTags();
    renderSubjects();
    renderSkills();
    renderExperience();
    renderProjects();
    renderGallery();
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.glass-card, .skill-card, .project-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
    initParticles();
    initHeroStars();
    initTerminal();
    initContactForm();
    initBackToTop();
    renderDynamicContent();
    updateTranslations();
    
    setTimeout(() => {
        initScrollAnimations();
    }, 500);
});
