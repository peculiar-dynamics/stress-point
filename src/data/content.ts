export type PartnerLogo = {
  name: string;
  src: string;
};
export type Feature = {
  title: string;
  content: string;
  icon?: string;
  subtitle?: string;
};
export type Card = {
  title: string;
  id?: string;
  content?: string;
  image?: string;
  icon?: string;
  link?: string;
};

export type Content = {
  partnerLogos: PartnerLogo[];
  blogs: Card[];
  apiFeatures: Feature[];
};

const content: Content = {
  partnerLogos: [
    {
      name: "test",
      src: "~/assets/dark-logo.svg",
    },
    {
      name: "test2",
      src: "~/assets/light-logo.svg",
    },
    {
      name: "test",
      src: "~/assets/dark-logo.svg",
    },
    {
      name: "test2",
      src: "~/assets/light-logo.svg",
    },
  ],
  apiFeatures: [
    {
      title: "Patented Technology",
      content: "Cutting-edge software that targets emotional brain health",
    },
    {
      title: "Data Driven Insights",
      content: "50+ data points drive AI insights and analysis",
    },
    {
      title: "Personalised Approach",
      content: "Specifically designed sound frequencies, tailored to the user",
    },
    {
      title: "Measurable progress",
      content: "Objective data with visible outcomes",
    },
  ],
  blogs: [
    {
      title: "Dummy Blog Title ",
      id: "dummy-blog-title",
      link: "https://www.example.com",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/src/assets/woman.jpg",
    },
    {
      title: "Dummy Blog Title 2",
      id: "dummy-blog-title-2",
      link: "https://www.example.com",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/src/assets/woman.jpg",
    },
    {
      title: "Dummy Blog Title 3",
      id: "dummy-blog-title-3",
      link: "https://www.example.com",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/src/assets/woman.jpg",
    },
  ],
};
export default content;
