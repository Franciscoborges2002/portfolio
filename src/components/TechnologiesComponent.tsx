import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Server, Smartphone, Wrench } from "lucide-react"

const techCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5" />,
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "Next.js", color: "bg-slate-100 text-slate-800 border-slate-200" },
      { name: "TypeScript", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
      { name: "Vue.js", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    technologies: [
      { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
      { name: "Express", color: "bg-gray-100 text-gray-800 border-gray-200" },
      { name: "Goland", color: "bg-blue-100 text-yellow-800 border-yellow-200" },
      { name: "Spring Boot", color: "bg-green-200 text-teal-800 border-teal-300" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    technologies: [
      { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "MySQL", color: "bg-yellow-100 text-green-800 border-yellow-200" },
      { name: "SQLite", color: "bg-blue-200 text-green-800 border-blue-300" },
      { name: "MongoDB", color: "bg-green-100 text-green-800 border-green-200" },
      /* { name: "Redis", color: "bg-red-100 text-red-800 border-red-200" }, */
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    technologies: [
      { name: "React Native", color: "bg-blue-100 text-blue-800 border-blue-200" },
    ],
  },
  {
    title: "Design",
    icon: <Palette className="w-5 h-5" />,
    technologies: [
      { name: "Figma", color: "bg-purple-100 text-purple-800 border-purple-200" },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    technologies: [
      { name: "Git", color: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "Docker", color: "bg-blue-100 text-blue-800 border-blue-200" },/* 
      { name: "GitHub Actions", color: "bg-slate-100 text-slate-800 border-slate-200" }, */
    ],
  },
]

export default function Technologies() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Technologies & Skills</h2>
        <p className="text-muted-foreground">Tools and technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techCategories.map((category) => (
          <Card key={category.title} className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className={`text-xs ${tech.color}`}>
                    <div className="w-2 h-2 rounded-full bg-current mr-2 opacity-60"></div>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
