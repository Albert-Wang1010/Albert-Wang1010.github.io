/* Change this file to get your personal Portfolio */
/* Global colors: src/_globalColor.scss */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/Artificial Intelligence Chip.json";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1500
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Albert Wang",
  title: "Hi, I'm Albert",
  subTitle: emoji(
    "I'm currently a senior studying electrical engineering at Columbia University. I design full-custom VLSI (schematic and layout), develop analog circuits, and build RTL with verification. I previously conducted research in photonics and particle detector systems."
  ),
  // Use a local resume (recommended): put PDF at src/containers/greeting/resume/resume.pdf
  resumeLink: "", // leave empty to use the built-in Resume section button
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Albert-Wang1010",
  linkedin: "https://www.linkedin.com/in/albert-wang1",
  gmail: "aw3741@columbia.edu",
  // turn off unused
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Focus Areas",
  subTitle: "Design • Verification • Research",
  skills: [
    emoji(
      "⚡ Full-custom VLSI: schematic capture, layout, DRC/LVS, post-extraction simulation"
    ),
    emoji(
      "⚡ Physical design awareness: parasitics, layout-dependent effects, post-layout validation"
    ),
    emoji(
      "⚡ Analog design: OTA sizing, stability/phase margin, tradeoffs (gain/UGB/noise/power)"
    ),
    emoji(
      "⚡ Digital/RTL: SystemVerilog/Verilog design, verification, synthesis & timing"
    ),
    emoji(
      "⚡ Research computing: photonic simulation and detector data analysis (MATLAB/Python)"
    )
  ],
  softwareSkills: [
    {skillName: "Cadence Virtuoso", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "Verilog / SystemVerilog", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "MATLAB", fontAwesomeClassname: "fas fa-square-root-alt"},
    {skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Columbia University",
      // Replace with your own logo file or remove line
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "B.S. in Electrical Engineering",
      duration: "New York, NY • Aug 2024 – May 2026",
      desc: "Focus on analog circuits, VLSI, and digital logic design / Dean's List.",
      descBullets: []
    },
    {
      schoolName: "Bates College",
      logo: require("./assets/images/batesLogo.png"),
      subHeader: "B.A. in Physics, Minor: Philosophy",
      duration: "Lewiston, Maine • Aug. 2021 – May 2024",
      desc: "Magna Cum Laude / Dean’s List.",
      descBullets: []
    }
  ]
};

// Tech Stack bars (optional). Keep simple or disable.
const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "VLSI / Layout", progressPercentage: "85%"},
    {Stack: "RTL / Verification", progressPercentage: "75%"},
    {Stack: "Research / Modeling", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work experience section (disable unless you add real entries)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Hardware Security Intern",
      company: "eMemory Technology Inc.",
      companylogo: require("./assets/images/ememoryLogo.png"),
      date: "July 2025 – September 2025",
      desc: "Semiconductor IP company specializing in embedded non-volatile memory (eNVM) for SoCs—enabling on-chip secure storage and configuration.",
      descBullets: [
        "Mapped LunaSH/LunaCM and PKCS#11 semantics into a PUF-backed HSM interface framework.",
        "Co-authored SH/CM APIs for roles/partitions, NTLS/STC, HA, and audit/time.",
        "Aligned workflows to FIPS 140-3 expectations; identified compliance and test points.",
        "Supported prior-art/patent landscaping to differentiate design choices."
      ]
    },
    {
      role: "Collegiate MEP Intern",
      company: "LEAF Engineers",
      companylogo: require("./assets/images/leafLogo.png"),
      date: "May 2025 – July 2025",
      desc: "MEP engineering consultancy under PBK Architects, providing electrical power and lighting design services for commercial and institutional buildings.",
      descBullets: [
        "Developed NEC-compliant panel schedules and circuiting for large-scale building electrical systems.",
        "Performed load calculations, feeder/breaker sizing, and phase balancing.",
        "Standardized panel and circuit naming to improve drawing consistency and design reviews."
      ]
    }
  ]
};

// Disable GitHub pinned open-source section (keeps site clean)
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Projects Section (use this for BOTH projects + research)
const bigProjects = {
  title: "Selected Work",
  subtitle: "Projects & Research",
  projects: [
    {
      // Replace with a screenshot image later if you want
      image: require("./assets/images/layoutLogo.png"),
      projectName: "65nm Full-Custom Microprocessor",
      projectDesc:
        "Full-custom 65nm microprocessor with transistor-level design of ALU, shifter, PLA, SRAM, and bus architecture. Complete layout verified with DRC/LVS and post-extraction simulation.",
      footerLink: [
        {name: "GitHub Repo", url: "https://github.com/Albert-Wang1010/vlsi-microprocessor.git"},
        {name: "Report (PDF)", url: "/files/VLSI_Final_Proj.pdf"}
      ]
    },
    {
      image: require("./assets/images/otaThumb.png"),
      projectName: "Analog OTA Sizing + Stability Validation",
      projectDesc:
        "Spec-driven OTA sizing with simulation-based validation (gain/UGB/phase margin/power/load). Includes key plots + design notes.",
      footerLink: [
        {name: "GitHub Repo", url: "https://github.com/Albert-Wang1010/ota-design.git"},
        {name: "Report (PDF)", url: "/files/Analog_Final_Proj"}]
    },
    {
      image: require("./assets/images/waveformThumb.png"),
      projectName: "FIR Filter Core (Verilog) + Synthesis",
      projectDesc:
        "Designed and verified a FIR filter in Verilog with testbench; synthesized and optimized for timing/resource utilization.",
      footerLink: [
        {name: "GitHub Repo", url: "https://github.com/Albert-Wang1010/ALD_FIR_CORE.git"},
        {name: "Report (PDF)", url: "/files/ALD_Final_Proj.pdf"}
      ]
    },
    {
      image: require("./assets/images/photonicThumb.png"),
      projectName: "Photonic Crystals: Fast, Accurate Simulations (NSF REU)",
      projectDesc:
        "Projection-based learning approach for high-efficiency photonic crystal simulations; conference publication + presentation.",
      footerLink: [
        {
          name: "Publication",
          url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13129/3028208/Fast-simulations-with-high-accuracy-for-photonic-crystals-and-quantum/10.1117/12.3028208.full"
        },
        {
          name: "Presentation",
          url: "https://docs.google.com/presentation/d/12DaeQiBLaeaPHDg6b53xSWewwh2YWmKdRCnBFwUCfuM/edit?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/particleThumb.png"),
      projectName: "nEXO: SiPM PDE Studies in Liquid Xenon",
      projectDesc:
        "Data analysis pipeline and experimental characterization; presented results at APS April 2024.",
      footerLink: [
        {
          name: "Presentation",
          url: "https://docs.google.com/presentation/d/1UC1qolbfMkPhdJtLQiW1PZjwpBana1ksa7tw2a510cA/edit?usp=sharing"
        },
        {
          name: "Report (PDF)",
          url: "/files/SPE_and_CA_characterisation_with_LED.pdf"
        }
      ]
    }
  ],
  display: true
};

// Achievements (use for awards + publications + invited talks)
const achievementSection = {
  title: emoji("Highlights 🏆"),
  subtitle: "Selected publications, presentations, and awards",
  achievementsCards: [
    {
      title: "SPIE Optics + Photonics 2024 — Conference Paper (2nd author)",
      subtitle:
        "Fast simulations with high accuracy for photonic crystals (projection-based learning).",
      image: require("./assets/images/awardPlaceholder.png"),
      imageAlt: "Publication",
      footerLink: [{name: "Paper", url: "PASTE_SPIE_LINK_HERE"}]
    },
    {
      title: "APS April 2024 — Research Presentation (nEXO)",
      subtitle:
        "Presented SiPM PDE characterization work and analysis results.",
      image: require("./assets/images/awardPlaceholder.png"),
      imageAlt: "APS",
      footerLink: [{name: "Slides/Poster", url: "PASTE_APS_LINK_HERE"}]
    },
    {
      title: "NSF HPC REU Awardee",
      subtitle:
        "Research experience in photonic crystal simulation acceleration and modeling.",
      image: require("./assets/images/awardPlaceholder.png"),
      imageAlt: "NSF REU",
      footerLink: []
    }
  ],
  display: false
};

// Blogs / Talks / Podcast — disable to keep the site clean
const blogSection = {display: false};
const talkSection = {display: false};
const podcastSection = {display: false};

// Resume Section
const resumeSection = {
  title: "CV / Resume",
  subtitle: "Download my resume (PDF).",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "Want to chat about internships, design projects, or research? Email works best.",
  number: "",
  email_address: "aw3741@columbia.edu"
};

// Twitter Section (disable)
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
