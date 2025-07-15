export type TechCategory = {
  title: string
  icon: LucideIconName
  technologies: { name: string; color: keyof typeof colorMap }[]
}

//Hold the icons to use
export type LucideIconName =
  | "Code"
  | "Server"
  | "Database"
  | "Smartphone"
  | "Palette"
  | "Wrench"

export type ColorKey = keyof typeof colorMap

export const colorMap = {
  react: "bg-blue-100 text-blue-800 border-blue-200",
  nextjs: "bg-slate-100 text-slate-800 border-slate-200",
  typescript: "bg-blue-100 text-blue-800 border-blue-200",
  tailwind: "bg-cyan-100 text-cyan-800 border-cyan-200",
  vue: "bg-emerald-100 text-emerald-800 border-emerald-200",
  javascript: "bg-yellow-100 text-yellow-800 border-yellow-200",

  node: "bg-green-100 text-green-800 border-green-200",
  express: "bg-gray-100 text-gray-800 border-gray-200",
  golang: "bg-blue-100 text-yellow-800 border-yellow-200",
  spring: "bg-green-200 text-teal-800 border-teal-300",

  postgresql: "bg-blue-100 text-blue-800 border-blue-200",
  mysql: "bg-yellow-100 text-green-800 border-yellow-200",
  sqlite: "bg-blue-200 text-green-800 border-blue-300",
  mongodb: "bg-green-100 text-green-800 border-green-200",

  reactnative: "bg-blue-100 text-blue-800 border-blue-200",
  expo: "bg-slate-100 text-slate-800 border-slate-200",

  figma: "bg-purple-100 text-purple-800 border-purple-200",

  git: "bg-orange-100 text-orange-800 border-orange-200",
  docker: "bg-blue-100 text-blue-800 border-blue-200",
} as const

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: "Code",
    technologies: [
      { name: "React", color: "react" },
      { name: "Next.js", color: "nextjs" },
      { name: "TypeScript", color: "typescript" },
      { name: "Tailwind CSS", color: "tailwind" },
      { name: "Vue.js", color: "vue" },
      { name: "Javascript", color: "javascript" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    technologies: [
      { name: "Node.js", color: "node" },
      { name: "Express", color: "express" },
      { name: "Goland", color: "golang" },
      { name: "Spring Boot", color: "spring" },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    technologies: [
      { name: "PostgreSQL", color: "postgresql" },
      { name: "MySQL", color: "mysql" },
      { name: "SQLite", color: "sqlite" },
      { name: "MongoDB", color: "mongodb" },
    ],
  },
  {
    title: "Mobile",
    icon: "Smartphone",
    technologies: [
      { name: "React Native", color: "reactnative" },
      { name: "Expo", color: "expo" },
    ],
  },
  {
    title: "Design",
    icon: "Palette",
    technologies: [
      { name: "Figma", color: "figma" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    technologies: [
      { name: "Git", color: "git" },
      { name: "Docker", color: "docker" },
    ],
  },
]