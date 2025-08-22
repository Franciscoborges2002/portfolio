import {
  Code,
  Server,
  Database,
  Smartphone,
  Palette,
  Wrench,
  LucideIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { colorMap, LucideIconName, techCategories } from "@/data/technologies"

// Map icon names to components
const iconMap: Record<LucideIconName, LucideIcon> = {
  Code,
  Server,
  Database,
  Smartphone,
  Palette,
  Wrench,
}

export default function Technologies() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Technologies & Skills</h2>
        <p className="text-muted-foreground">Tools and technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {techCategories.map((category) => {
          const Icon = iconMap[category.icon as LucideIconName]
          return (
            <Card key={category.title} className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon className="w-5 h-5" stroke="currentColor" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant="outline"
                      className={`text-xs ${colorMap[tech.color]}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-current mr-2 opacity-60" />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        }
        )
        }
      </div>
    </section>
  )
}
