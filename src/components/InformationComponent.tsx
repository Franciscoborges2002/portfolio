import { useState } from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Linkedin, MapPin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiLeetcode } from "react-icons/si";
import { siGithub, siTryhackme } from "simple-icons";
import { techCategories, colorMap } from "@/data/technologies";
import { useTranslation } from "react-i18next";

export function InformationComponent() {
  const { t } = useTranslation();
  const allTechs = techCategories.flatMap((category) => category.technologies);
  const [showAll, setShowAll] = useState(false);
  const visibleTechs = showAll ? allTechs : allTechs.slice(0, 5);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4">
            <Avatar className="h-36 w-36">
              <AvatarImage
                src="/images/profilePhoto.png"
                alt="Francisco Borges"
              />
              <AvatarFallback>FB</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Francisco Borges</CardTitle>
              <p className="text-muted-foreground">
                {t("aside.role")}{" "}
                <a
                  href="https://www.uminho.pt/PT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @uminho
                </a>
              </p>
              <p className="text-muted-foreground">{t("aside.working")}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Portugal
          </div>

          <div className="space-y-2">
            <Button asChild className="w-full">
              <a
                href="/files/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                {t("aside.downloadCV")}
              </a>
            </Button>
            <Button asChild className="w-full">
              <a href="mailto:franciscomsborges2002@gmail.com">
                {t("aside.contactMe")}
              </a>
            </Button>

            <Separator />

            <div className="flex justify-around flex-wrap gap-8 w-full">
              <Button variant="outline" size="icon" asChild className="p-2">
                <a
                  href="https://github.com/franciscoborges2002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                  >
                    <title>{siGithub.title}</title>
                    <path d={siGithub.path} />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="p-2">
                <a
                  href="https://www.linkedin.com/in/francisco-borges2002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="p-2">
                <a
                  href="https://www.youtube.com/@franciscoborges7897"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="p-2">
                <a
                  href="https://leetcode.com/u/fborges/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode className="h-5 w-5" />
                  <span className="sr-only">LeetCode</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="p-2">
                <a
                  href="https://tryhackme.com/p/fborges02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                  >
                    <title>{siTryhackme.title}</title>
                    <path d={siTryhackme.path} />
                  </svg>
                  <span className="sr-only">TryHackMe</span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Skills</CardTitle>
          <Link to="/#technologies">
            <ArrowRight className="w-5 h-5 text-primary/90 hover:text-primary/50 transition-all duration-150" />
          </Link>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {visibleTechs.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className={`cursor-pointer text-xs ${colorMap[tech.color]}`}
              >
                <div className="w-2 h-2 rounded-full bg-current mr-2 opacity-60" />
                {tech.name}
              </Badge>
            ))}
          </div>
          {allTechs.length > 5 && (
            <button
              className="mt-2 text-sm text-primary hover:text-primary/60 transition-all duration-200 cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t("aside.showLess") : t("aside.showMore")}
            </button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("aside.experience")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="relative pt-4">
            <div className="absolute left-0 top-0 w-px h-full bg-border" />
            <ol
              className="relative space-y-4 overflow-y-auto scrollbar-thin scrollbar-webkit"
              style={{ maxHeight: "150px" }}
            >
              {[
                {
                  period: "December 2024 - June 2026",
                  role: "Backend Developer",
                  company: "@ccg",
                  url: "https://ccg.pt/",
                  description: "",
                },
                {
                  period: "November 2024 - present",
                  role: "Mobile/Frontend Developer",
                  company: "@AIS.SC",
                  url: "https://aissc.dsi.uminho.pt/",
                  description:
                    "Worked as lead mobile & frontend developer. Conducted a team of 3 developers to build the interface for the event application.",
                },
                {
                  period: "December 2022 - October 2023",
                  role: "Backend Developer",
                  company: "@AIS.SC",
                  url: "https://aissc.dsi.uminho.pt/",
                  description:
                    "Worked mainly in backend, modifying, upgrading and researching new features to service.",
                },
                {
                  period: "April 2022 - October 2024",
                  role: "ioAcademy",
                  company: "@ioTech",
                  url: "https://iotech.pt/",
                  description: "Made various projects in trade of formation.",
                },
                {
                  period: "June 2022 - September 2022",
                  role: "ioSummer - Internship",
                  company: "@ioTech",
                  url: "https://iotech.pt/",
                  description:
                    "Made an integration between APIs for an Industry 4.0 project.",
                },
              ].map((item, i) => (
                <li key={i} className="ml-4">
                  <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background" />
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    {item.period}
                  </time>
                  <h3 className="text-sm font-semibold">{item.role}</h3>
                  <h3 className="text-sm font-semibold hover:underline">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("aside.education")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="relative pt-4">
            <div className="absolute left-0 top-0 w-px h-full bg-border" />
            <ol className="relative space-y-4">
              {[
                {
                  period: "September 2023 - Present",
                  degree:
                    "Master in Engineering and Management of Information Systems",
                  institution: "@Uminho",
                  url: "https://www.uminho.pt/PT",
                  description: "",
                },
                {
                  period: "September 2020 - June 2023",
                  degree:
                    "Bachelor in Engineering and Management of Information Systems",
                  institution: "@Uminho",
                  url: "https://www.uminho.pt/PT",
                  description: "Finished with: 14.994/20",
                },
              ].map((item, i) => (
                <li key={i} className="ml-4">
                  <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background" />
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    {item.period}
                  </time>
                  <h3 className="text-sm font-semibold">{item.degree}</h3>
                  <h3 className="text-sm font-semibold hover:underline">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.institution}
                    </a>
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
