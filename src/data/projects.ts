export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription?: string;
  tech: string[];
  tags?: string[];
  github?: string;
  demo?: string;
  image: string;
  feature: boolean;
  takeaways?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "steamShark",
    shortDescription:
      "A Google chrome extension to prevent phishing attacks in steam environmnent!",
    longDescription:
      "steamShark is a Chrome extension built to protect Steam users from phishing attacks. It inspects trade URLs and external links in real time, cross-referencing them against a backend API to flag known malicious domains before the user interacts with them. This was my first Chrome extension — I built it to solve a real problem in the Steam trading community where phishing scams were widespread.",
    tech: ["Javascript", "Git", "API", "golang", "SQLite", "react"],
    tags: ["OpenSource", "Extension"],
    github: "https://github.com/steamShark",
    demo: "https://steamshark.app/",
    image: "/images/projects/steamShark.png",
    feature: true,
    takeaways: [
      "Built my first Chrome extension from scratch, learning the extension manifest and content script lifecycle",
      "Learned how Chrome extensions communicate with external APIs using fetch inside service workers",
      "Understood how to inject scripts into web pages and interact with the DOM from an extension context",
      "Got hands-on experience connecting a frontend extension to a Go backend with a SQLite database",
    ],
  },
  {
    id: 2,
    title: "TSI2market App",
    shortDescription:
      "Main frontend developer for the TSI2Market application hosted by AISSC @Uminho.",
    tech: ["React Native", "Expo", "React", "Shadcn", "tailwindcss"],
    tags: ["Event App", "Frontend"],
    image: "/images/projects/TSI2Market.png",
    feature: true,
  },
  {
    id: 3,
    title: "Liiink",
    shortDescription: "An fully opensource alternative to linktree!",
    tech: ["React", "Css", "Vite", "Typescript"],
    tags: ["OpenSource"],
    github: "https://github.com/Franciscoborges2002/liiink",
    demo: "https://franciscoborges2002.github.io/pomoCore/",
    image: "/images/projects/liiink.png",
    feature: false,
  },
  {
    id: 4,
    title: "bolsasEstudo.pt",
    shortDescription: "Show the available schollarships in portugal.",
    tech: ["Nodejs", "Express", "Typescript", "Vuejs", "Postgres"],
    tags: ["🏗️ Under Constrution", "OpenSource"],
    github: "https://github.com/Franciscoborges2002/bolsasEstudo.pt",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 5,
    title: "leetcode Stats Card",
    shortDescription: "Show your leetcode stats with a card in your socials.",
    tech: ["React", "Nextjs"],
    tags: ["V1.0.0", "Opensource"],
    demo: "https://leetcodestatscard.fborges.dev/",
    github: "https://github.com/Franciscoborges2002/leetStatsCard",
    image: "/images/projects/leetcodeStatsCard.png",
    feature: true,
  },
  {
    id: 6,
    title: "Refferly",
    shortDescription:
      "An website to show crypto faucets and share strategies to make some money in crypto space.",
    tech: ["Vuejs", "Shlink", "crypto"],
    tags: ["V1.0.0"],
    demo: "https://refferly.club/",
    image: "/images/projects/refferlyClub.png",
    feature: false,
  },
  {
    id: 7,
    title: "TF2 Trading Utils",
    shortDescription:
      "An extension to help Team Fortress 2 players trading their items.",
    tech: ["Javascript", "Git"],
    tags: ["V1.2.0", "Opensource", "Extension", "200+ Downloads"],
    demo: "https://chromewebstore.google.com/detail/tf2tradingutils/pjfeekdjhfcpaphlmapjeamcakidicjf",
    github: "https://github.com/Franciscoborges2002/tf2TradingUtils",
    image: "/images/projects/tf2TradingUtils.png",
    feature: true,
  },
  {
    id: 8,
    title: "utils.fborges.dev",
    shortDescription:
      "A extension to help Team Fortress 2 players trading their items.",
    tech: ["Javascript", "Git"],
    tags: ["V1.0.0", "Opensource", "Extension"],
    demo: "https://utils.fborges.dev/",
    github: "https://github.com/Franciscoborges2002/utils.fborges.dev",
    image: "/images/projects/utils.fborges.dev.png",
    feature: false,
  },
  {
    id: 9,
    title: "PomoCore",
    shortDescription:
      "A website that applies the Pomodoro Technique to your tasks, helping you manage time, boost productivity, and track progress.",
    tech: ["Vue", "LocalStorage"],
    github: "https://github.com/Franciscoborges2002/pomoCore",
    demo: "https://franciscoborges2002.github.io/pomoCore/",
    image: "/images/projects/pomocore.png",
    feature: false,
  },
  {
    id: 10,
    title: "faceitJS",
    shortDescription: "A API wrapper for faceit API to facilitate the usage.",
    tags: ["Opensource", "Package"],
    tech: ["Javascript", "Git", "npm"],
    github: "https://github.com/Franciscoborges2002/faceitjs",
    demo: "https://www.npmjs.com/package/@fborges2002/faceitjs",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 11,
    title: "backpacktfJS",
    shortDescription:
      "A API wrapper for backpack.tf API to facilitate the usage.",
    tags: ["Opensource", "Package"],
    tech: ["Javascript", "Git", "npm"],
    github: "https://github.com/Franciscoborges2002/backpacktfJS",
    demo: "https://www.npmjs.com/package/backpacktfjs",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 12,
    title: "startproject cli",
    shortDescription:
      "A simple CLI tool to start a JS project in major frameworks.",
    tags: ["Opensource", "Package"],
    tech: ["Javascript", "Git", "npm"],
    github: "https://github.com/Franciscoborges2002/startProjectCLI",
    demo: "https://www.npmjs.com/package/startprojectcli",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 13,
    title: "goalVision",
    shortDescription:
      "Designed to bridge the gap between football coaches and players who are eager to take their skills to the next level.",
    tags: ["⏸️ Paused"],
    tech: ["Javascript", "express", "nodejs", "vue.js"],
    /* demo: "https://www.goalvision.pt", */
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 14,
    title: "Arquitecture Transformation",
    shortDescription:
      "Transform a monolithic application to a microservices architecture.",
    tech: ["Java", "Spring", "MySQL", "Docker", "UML"],
    tags: ["📚 College Project"],
    github: "https://github.com/Franciscoborges2002/ASID",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 15,
    title: "Handball Management System (HMS)",
    shortDescription: "Handle information of handball matches in real time.",
    tech: ["Java", "Spring", "Android Studio", "MySQL", "Docker", "UML"],
    tags: ["📚 College Project"],
    github: "https://github.com/Franciscoborges2002/ABC-DAI",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
  {
    id: 16,
    title: "Smart Urban Solution (SUS)",
    shortDescription:
      "Develop a parking management application and the gamification of a transportation application.",
    tech: [
      "Java",
      "Spring",
      "Kafka",
      "Android Studio",
      "MySQL",
      "Docker",
      "OpenCV",
      "NIOP",
      "IPCamera",
      "UML",
    ],
    tags: ["📚 College Project"],
    github: "https://github.com/Franciscoborges2002/ACSI",
    image: "/images/projects/placeholder.png",
    feature: false,
  },
];
