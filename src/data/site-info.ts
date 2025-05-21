export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
  active?: boolean;
  footer?: boolean;
  contact?: boolean;
};
export type Page = {
  key: string;
  href: string;
  children?: Page[];
  title?: string;
  description?: string;
  nav?: boolean;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  themeColor: string;
  favicon: string;
  twitterHandle?: string;
  email: {
    defaultContact: string;
    defaultSubject: string;
  };
  business: {
    legalName: string;
    companiesReg: string;
    VATReg?: string;
    regAddress?: string;
    tradingAddress?: string;
    phone?: string;
  };
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
  pages: Page[];
  navCta?: any;
  cookies?: any;
};

const siteInfo: SiteInfo = {
  name: "Stress Point Health", // business name SEO subtitle
  title: "Tagline", // tagline
  description: "Description",
  url: "https://test.com", // public domain without closing /
  domain: "test.com",
  themeColor: "#8D46E7",
  favicon: "/assets/favicon.svg",
  // twitterHandle: "astrodotbuild",
  email: {
    defaultContact: "contact@test.com",
    defaultSubject: "Website Enquiry",
  },
  business: {
    legalName: "Legal Name", //confirm legal name
    companiesReg: "123456789",
    // VATReg: "123456",
    // regAddress: "23 Angus Court, Winsford, England, CW7 1GN",
    // tradingAddress: "42 Wallaby Way, Sydney",
    // phone: "01234 567 890",
  },
  image: {
    src: "/og/social.jpg",
    alt: "Build the web you want",
  },
  socialLinks: [
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/company/peculiardynamics",
      text: "Follow Us on LinkedIn",
      icon: "mdi:linkedin",
      active: true,
      footer: true,
      contact: true,
    },

    // {
    //   platform: "twitter",
    //   href: "https://twitter.com/astrodotbuild",
    //   me: "https://twitter.com/astrodotbuild",
    //   text: "Follow Astro on Twitter",
    //   icon: "mdi:twitter",
    // },
    // {
    //   platform: "facebook",
    //   href: "https://m.webtoo.ls/@astro",
    //   me: "https://m.webtoo.ls/@astro",
    //   text: "Follow Astro on Mastodon",
    //   footerOnly: true,
    //   icon: "mdi:facebook",
    //   active: true,
    //   footer: true,
    //   contact: true,
    // },
    // {
    //   platform: "instagram",
    //   href: "https://instagram.com/glosfarm",
    //   text: `Follow us on Instagram`,
    //   icon: "mdi:instagram",
    //   active: true,
    //   footer: true,
    // },
    // {
    //   platform: "google",
    //   href: "https://g.co/kgs/X6GJ3ry",
    //   text: "Find us on Google",
    //   icon: "mdi:google",
    //   active: true,
    //   footer: true,
    // },
  ],
  pages: [
    {
      key: "Home",
      href: "/",
      title: "Home to Women's Health Innovators",
      description:
        "Redefining the future of women's health through innovation, collaboration, and purpose.",
      nav: true,
    },
    {
      key: "About",
      href: "/about/",
      title: "Home to Women's Health Innovators",
      description:
        "Meet Femtech Sphere - Our ecosystem supports women's health startups by connecting them with industry experts, investors, and strategic partners.",
      nav: true,
    },
    {
      key: "Approach",
      href: "/approach/",
      title: "Our approach to redefining the future of Women's health",
      description:
        "Femtech Sphere provides comprehensive guidance to bring impactful technologies to market, that ultimately support closing the gender gap in healthcare.",
      nav: true,
    },
    // {
    //   key: "Startups",
    //   href: "/startups/",
    // },
    // {
    //   key: "Ecosystem",
    //   href: "/ecosystem/",
    // },

    // {
    //   key: "Services",
    //   href: "/services/",
    //   children: [
    //     {
    //       key: "Overview",
    //       href: "/services/",
    //     },
    //     {
    //       key: "Service 1",
    //       href: "/services/service1/",
    //     },
    //     {
    //       key: "Service 2",
    //       href: "/services/service2/",
    //     },
    //   ],
    // },
    // {
    //   key: "Perspectives",
    //   href: "/perspectives/",
    // },
    {
      key: "Contact",
      href: "/contact/",
      title: "Contact Us: tagline",
      description:
        "Have questions of want to sign up? Get in touch with the team today.",
      nav: true,
    },
  ],
  navCta: {
    label: "EXPLORE PLANS",
    href: "/approach/#plan1",
  },
  cookies: {
    GA4: "G-XXXXXXXXXX",
    GTM: "GTM-XXXXXXXXX",
  },
};

export default siteInfo;
