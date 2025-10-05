class I18n {
  constructor() {
    this.currentLanguage = "fr";
    this.translations = {};
    this.loadTranslations();
    this.init();
  }

  loadTranslations() {
    this.translations = {
      fr: {
        nav: {
          home: "Accueil",
          about: "À propos",
          services: "Services",
          industries: "Industries",
          contact: "Contact",
        },
        hero: {
          solutions: "Solutions IT",
          for: "pour",
          your_business: "votre entreprise",
          description:
            "Nous offrons des services fiables, innovants et adaptés à vos besoins afin de garantir la performance et la sécurité de vos systèmes.",
        },
        about: {
          title: "— Qui sommes Nous",
          subtitle: "Votre Partenaire de Confiance",
          description1:
            "MJ-LINK est une société marocaine spécialisée dans l'intégration de solutions informatiques et digitales.",
          description2:
            "Notre mission est d'accompagner les entreprises dans leur transformation technologique en leur offrant des solutions fiables, innovantes et adaptées à leurs besoins.",
        },
        services: {
          title: "— Nos Services",
          infrastructure: {
            title: "Infrastructures Réseaux",
            description:
              "Conception et installation de réseaux informatiques adaptés pour votre entreprise.",
          },
          support: {
            title: "Support Informatique Sur Site",
            description:
              "Assistance rapide et efficace pour résoudre vos problèmes informatiques directement sur place.",
          },
          security: {
            title: "Contrôle d'Accès et Vidéo surveillance",
            description:
              "Des solutions fiables et modernes pour sécuriser vos locaux et vos accès.",
          },
          digital: {
            title: "Expérience Digital Workplace",
            description:
              "Des solutions modernes pour connecter, collaborer et travailler efficacement partout.",
          },
          equipment: {
            title: "Location des Équipements Informatiques",
            description:
              "Des solutions flexibles et économiques pour équiper vos équipes sans investissement lourd.",
          },
          wireless: {
            title: "Sondage Réseaux Sans Fil",
            description:
              "Des analyses précises pour optimiser la couverture, la performance et la fiabilité de vos réseaux Wi-Fi.",
          },
          vente: {
            title:
              "Vente des Équipements Informatiques et Datacenter",
            description:
              "Des solutions fiables et performantes pour renforcer l’infrastructure et la sécurité de votre entreprise.",
          },
          see_more: "Voir plus →",
        },
        industries: {
          title: "— Industries",
          subtitle:
            "Solutions adaptées à chaque secteur d'activité",
            subsecondtitle: "Stimuler l’efficacité opérationnelle",
  subthiredtitle: "Soutenir la croissance et l’innovation",
          description1:
            "Chez MJ-LINK, nous savons que chaque secteur a ses propres défis en matière de technologies de l'information et de communication.",
          description2:
            "C'est pourquoi nous proposons des solutions personnalisées, conçues pour répondre aux besoins de la santé, de l'éducation, de la logistique, de l'industrie manufacturière, du commerce de détail, de la finance et des centres de données.",
          description3:
            "Notre expertise multi-sectorielle vous garantit des services fiables et innovants, quel que soit votre domaine d'activité.",
          seconddescription1:
            "Chez MJ-LINK, nous croyons que la technologie ne doit pas seulement résoudre les défis d’aujourd’hui, mais aussi préparer les entreprises aux exigences de demain. Nos solutions sectorielles sont conçues pour rationaliser les processus, réduire les inefficacités et améliorer la productivité globale.",
          seconddescription2:
            "En intégrant les outils numériques les plus récents à notre connaissance approfondie des normes industrielles, nous permettons aux organisations de transformer leurs opérations en systèmes agiles, efficaces et résilients.",
          seconddescription3:
            "Cette approche proactive garantit que votre entreprise reste compétitive, adaptable et pleinement équipée pour adopter le changement technologique dans un marché en constante évolution.",

          thireddescription1:
            "Au-delà de l’optimisation des opérations quotidiennes, MJ-LINK met l’accent sur la création de valeur à long terme pour ses partenaires. Que votre objectif soit de moderniser votre infrastructure, de renforcer la cybersécurité, d’exploiter la puissance des données ou d’offrir de meilleures expériences clients, nos solutions sont conçues pour évoluer avec votre entreprise.",
          thireddescription2:
            "Nous fournissons des technologies évolutives, sécurisées et fiables qui grandissent avec vos ambitions. Plus qu’un simple prestataire, nous visons à être un partenaire stratégique qui soutient l’innovation à chaque étape de votre parcours numérique, vous aidant à transformer les défis en opportunités et à assurer un succès durable dans tous les secteurs que nous servons.",
        sectors: {
     healthcare: "Santé",
    education: "Éducation",
    logistics: "Logistique",
    manufacturing: "Industrie",
    retail: "Commerce de détail",
    corporateOffices: "Bureaux d’entreprise",
    dataCenters: "Centres de données"
    }
          },
        contact: {
          title: "MJ-LINK",
          subtitle: "Contactez-nous à tout moment",
          description:
            "Besoin d'aide ? L'équipe MJ-LINK est là pour vous.<br>Contactez-nous !",
          form: {
            name: "Votre nom",
            email: "Votre email",
            phone: "Téléphone",
            message: "Votre message",
            submit: "Envoyer le message",
            sending: "Envoi en cours...",
            success: "Message envoyé avec succès!",
            error:
              "Veuillez remplir tous les champs requis.",
          },
        },
        footer: {
          explore: "Explore",
          copyright:
            "Copyright © 2024 | Powered by MJ-LINK",
        },
      },
      en: {
        nav: {
          home: "Home",
          about: "About",
          services: "Services",
          industries: "Industries",
          contact: "Contact",
        },
        hero: {
          solutions: "IT Solutions",
          for: "for",
          your_business: "your business",
          description:
            "We offer reliable, innovative and tailored services to your needs to guarantee the performance and security of your systems.",
        },
        about: {
          title: "— Who We Are",
          subtitle: "Your Trusted Partner",
          description1:
            "MJLINK is a Moroccan company specialized in the integration of IT and digital solutions.",
          description2:
            "Our mission is to support companies in their technological transformation by offering them reliable, innovative and adapted solutions to their needs.",
        },
        services: {
          title: "— Our Services",
          infrastructure: {
            title: "Network Infrastructure",
            description:
              "Design and installation of computer networks adapted for your business.",
          },
          support: {
            title: "On-Site IT Support",
            description:
              "Fast and efficient assistance to solve your IT problems directly on site.",
          },
          security: {
            title: "Access Control and Video Surveillance",
            description:
              "Reliable and modern solutions to secure your premises and access.",
          },
          digital: {
            title: "Digital Workplace Experience",
            description:
              "Modern solutions to connect, collaborate, and work efficiently anywhere.",
          },
          wireless: {
            title: "Wireless Network Survey",
            description:
              "Accurate assessments to optimize the coverage, performance, and reliability of your Wi-Fi networks.",
          },
          vente: {
            title: "IT and Datacenter Equipment Sales",
            description:
              "Reliable and high-performance solutions to strengthen your company’s infrastructure and security.",
          },
          see_more: "See more →",
        },
        industries: {
          title: "— Industries",
          subtitle:
            "Solutions adapted to each sector of activity",
          subsecondtitle: "Driving Operational Efficiency",
          subthiredtitle:
            "Supporting Growth and Innovation",

          description1:
            "At MJ-LINK, we know that each sector has its own challenges in terms of information and communication technologies.",
          description2:
            "That's why we offer personalized solutions, designed to meet the needs of healthcare, education, logistics, manufacturing, retail, finance and data centers.",
          description3:
            "Our multi-sector expertise guarantees you reliable and innovative services, whatever your field of activity.",
          seconddescription1:
            "At MJ-LINK, we believe that technology should not only solve today’s challenges but also prepare businesses for the demands of tomorrow. Our sector-specific solutions are designed to streamline workflows, reduce inefficiencies, and enhance overall productivity.",
          seconddescription2:
            "By integrating the latest digital tools with our in-depth knowledge of industry standards, we empower organizations to transform their operations into agile, efficient, and resilient systems.",
          seconddescription3:
            "This proactive approach ensures that your business remains competitive, adaptable, and fully equipped to embrace technological change in an evolving marketplace.",
          thireddescription1:
            "Beyond optimizing daily operations, MJ-LINK focuses on long-term value creation for our partners. Whether your objective is to modernize infrastructure, strengthen cybersecurity, harness the power of data, or deliver richer customer experiences, our solutions are built to grow alongside your business.",
          thireddescription2:
            "We provide scalable, secure, and reliable technologies that evolve with your ambitions. More than just a provider, we aim to be a strategic partner who supports innovation at every stage of your digital journey, helping you turn challenges into opportunities and ensuring lasting success across all industries we serve.",
        sectors: {
       healthcare: "Healthcare",
    education: "Education",
    logistics: "Logistics",
    manufacturing: "Manufacturing",
    retail: "Retail",
    corporateOffices: "Corporate Offices",
    dataCenters: "Data Centers"
    }
          },
        contact: {
          title: "— Contact",
          subtitle: "Contact us anytime",
          description:
            "Need help? The M-LINK team is here for you.<br>Contact us!",
          form: {
            name: "Your name",
            email: "Your email",
            phone: "Phone",
            message: "Your message",
            submit: "Send message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Please fill in all required fields.",
          },
        },
        footer: {
          explore: "Explore",
          about: "About Us",
          copyright:
            "Copyright © 2024 | Powered by MJ-LINK",
        },
      },
      // ar: {
      //   nav: {
      //     home: "الرئيسية",
      //     about: "من نحن",
      //     services: "الخدمات",
      //     industries: "الصناعات",
      //     contact: "اتصل بنا",
      //   },
      //   hero: {
      //     solutions: "حلول تقنية المعلومات",
      //     for: "لـ",
      //     your_business: "شركتك",
      //     description: "نقدم خدمات موثوقة ومبتكرة ومصممة خصيصاً لاحتياجاتك لضمان الأداء والأمان لأنظمتك.",
      //   },
      //   about: {
      //     title: "— من نحن",
      //     subtitle: "شريكك الموثوق",
      //     description1: "إم-لينك هي شركة مغربية متخصصة في تكامل الحلول المعلوماتية والرقمية.",
      //     description2:
      //       "مهمتنا هي مرافقة الشركات في تحولها التكنولوجي من خلال تقديم حلول موثوقة ومبتكرة ومتكيفة مع احتياجاتها.",
      //   },
      //   services: {
      //     title: "— خدماتنا",
      //     infrastructure: {
      //       title: "البنية التحتية للشبكات",
      //       description: "تصميم وتركيب الشبكات المعلوماتية المتكيفة مع شركتك.",
      //     },
      //     support: {
      //       title: "الدعم التقني في الموقع",
      //       description: "مساعدة سريعة وفعالة لحل مشاكلك المعلوماتية مباشرة في الموقع.",
      //     },
      //     security: {
      //       title: "التحكم في الوصول والمراقبة بالفيديو",
      //       description: "حلول موثوقة وحديثة لتأمين مبانيك ووصولك.",
      //     },
      //     see_more: "المزيد ←",
      //   },
      //   industries: {
      //     title: "— الصناعات",
      //     subtitle: "حلول متكيفة مع كل قطاع نشاط",
      //     description1: "في إم-لينك، نعلم أن كل قطاع له تحدياته الخاصة في مجال تقنيات المعلومات والاتصالات.",
      //     description2:
      //       "لهذا نقترح حلولاً مخصصة، مصممة لتلبية احتياجات الصحة والتعليم واللوجستيات والصناعة التحويلية والتجارة والمالية ومراكز البيانات.",
      //     description3: "خبرتنا متعددة القطاعات تضمن لك خدمات موثوقة ومبتكرة، مهما كان مجال نشاطك.",
      //   },
      //   contact: {
      //     title: "— اتصل بنا",
      //     subtitle: "اتصل بنا في أي وقت",
      //     description: "تحتاج مساعدة؟ فريق إم-لينك هنا من أجلك.<br>اتصل بنا!",
      //     form: {
      //       name: "اسمك",
      //       email: "بريدك الإلكتروني",
      //       phone: "الهاتف",
      //       message: "رسالتك",
      //       submit: "إرسال الرسالة",
      //       sending: "جاري الإرسال...",
      //       success: "تم إرسال الرسالة بنجاح!",
      //       error: "يرجى ملء جميع الحقول المطلوبة.",
      //     },
      //   },
      //   footer: {
      //     explore: "استكشف",
      //     copyright: "حقوق الطبع والنشر © 2024 | مدعوم من إم-لينك",
      //   },
      // },
    };
  }

  init() {
    // Set initial language from localStorage or default to French
    const savedLanguage =
      localStorage.getItem("language") || "fr";
    this.setLanguage(savedLanguage);

    // Setup language selector
    const languageSelector = document.getElementById(
      "language-selector"
    );
    if (languageSelector) {
      languageSelector.value = savedLanguage;
      languageSelector.addEventListener("change", (e) => {
        this.setLanguage(e.target.value);
      });
    }
  }

  setLanguage(language) {
    this.currentLanguage = language;
    localStorage.setItem("language", language);

    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Update text direction for Arabic
    if (language === "ar") {
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl");
    } else {
      document.documentElement.dir = "ltr";
      document.body.classList.remove("rtl");
    }

    this.updateContent();
  }

  updateContent() {
    const elements =
      document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.getTranslation(key);
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll(
      "[data-i18n-placeholder]"
    );
    placeholderElements.forEach((element) => {
      const key = element.getAttribute(
        "data-i18n-placeholder"
      );
      const translation = this.getTranslation(key);
      if (translation) {
        element.placeholder = translation;
      }
    });

    // Update page title
    const titleKey = "hero.solutions";
    const titleTranslation = this.getTranslation(titleKey);
    if (titleTranslation) {
      document.title = `MJ-LINK - ${titleTranslation} IT`;
    }
  }

  getTranslation(key) {
    const keys = key.split(".");
    let translation =
      this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }

    return translation;
  }

  t(key) {
    return this.getTranslation(key) || key;
  }
}

// Initialize i18n system
window.i18n = new I18n();
