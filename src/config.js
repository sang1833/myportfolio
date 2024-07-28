export const email = "nguyenthanhsang22vn@gmail.com";
export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/sang1833"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/thanhsang2k2"
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/thanhsang2k2/"
  },
  {
    name: "CV",
    url: "/resume.pdf"
  }
];
export const navLinks = [
  {
    name: "About",
    url: "/#about"
  },
  // {
  //   name: "Experience",
  //   url: "/#jobs"
  // },
  {
    name: "Work",
    url: "/#projects"
  },
  {
    name: "Contact",
    url: "/#contact"
  }
];
export const colors = {
  green: "#64ffda",
  navy: "#0a192f",
  darkNavy: "#020c1b"
};
export function srConfig(delay = 200, viewFactor = 0.25) {
  return {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  };
}

export const dataFeatured = {
  featured: {
    edges: [
      {
        node: {
          frontmatter: {
            title: "TRAFFIC ADMIN WEBSITE",
            cover: {
              link: "/static/trafficlearn.png",
              title: "FINDER ADMIN WEBSITE"
            },
            tech: ["React", "Angular"],
            github: "https://github.com/sangAcrossTheSea/TrafficAdmin-DaisyUI-",
            external: "https://trafficlearn-admin.vercel.app/login",
            cta: null
          },
          html: "<p>The website uses <a>Microfrontend</a> to run <a>ReactJS</a> and <a>Angular</a> in the same website, optimize user experience, and help many teams code in one project.</p>"
        }
      },
      {
        node: {
          frontmatter: {
            title: "FURNITURE STORE WEBSITE",
            cover: {
              link: "/static/nguyenhome.png",
              title: "FURNITURE STORE WEBSITE"
            },
            tech: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/sang1833/nguyenshome_20521767_20521833",
            external: "https://nguyenshomefurniture.vercel.app/",
            cta: null
          },
          html: "<p>I developed a fully functional and responsive website using <a>Redux</a>, <a>Tailwind CSS</a>, <a>MUI</a>, and <a>Socket.io.</a></p> <p>The website features are user authentication, product listings, and interactive elements using Socket.IO for real-time communication. </p>"
        }
      }
    ]
  }
};

export const dataProjects = {
  projects: {
    edges: [
      {
        node: {
          frontmatter: {
            title: "FINDER ADMIN WEBSITE",
            cover: {
              link: "https://v4.brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif",
              title: "FINDER ADMIN WEBSITE"
            },
            tech: ["React", "Angular"],
            github: "https://github.com/sang1833/Finder_Admin",
            external: "https://example.com",
            cta: null
          },
          html: "<p>The website uses <a>Microfrontend</a> to run <a>ReactJS</a> and <a>Angular</a> in the same website, optimize user experience, and help many teams code in one project.</p>"
        }
      },
      {
        node: {
          frontmatter: {
            title: "STAFF MANAGEMENT ADMIN WEBSITE",
            cover: {
              link: "https://v4.brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif",
              title: "STAFF MANAGEMENT ADMIN WEBSITE"
            },
            tech: ["React", "DaisyUI"],
            github: "https://github.com/sang1833/se100",
            external: "https://trafficlearn-admin.vercel.app/login",
            cta: null
          },
          html: "<p>A staff management website</p>"
        }
      }
    ]
  }
};

export const pageQuery = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            date: "2023-09-01",
            title: "STAFF MANAGEMENT ADMIN WEBSITE",
            tech: ["React", "Typescript"],
            github: "https://github.com/sang1833/se100",
            external: "https://se-100.vercel.app/login",
            // ios: "https://example.com",
            // android: "https://example.com",
            company: "UIT"
          },
          html: "<p>The website uses <a>Microfrontend</a> to run <a>ReactJS</a> and <a>Angular</a> in the same website, optimize user experience, and help many teams code in one project.</p>"
        }
      }
    ]
  }
};
