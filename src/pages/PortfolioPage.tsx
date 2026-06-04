import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import { getNewestArticles } from "@/lib/articles";

import HighlightedProjectsCard from "@/components/HighlightedProjectsCard";
import Technologies from "@/components/TechnologiesComponent";
import { useTranslation } from "react-i18next";

export default function PortfolioPage() {
  const { t } = useTranslation();
  const featureProjects = projects.filter((project) => project.feature);
  const newestArticles = getNewestArticles();

  return (
    <div className="px-5">
      <div className="space-y-0 prose dark:prose-invert max-w-none">
        {/* README */}
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-bold mt-0">{t("home.readmeTitle")}</h2>
          <Card className="">
            <CardContent className="pt-2 pb-2 space-y-2">
              <p className="m-0">Refactor</p>
            </CardContent>
          </Card>
        </div>

        {/* HIGHLIGHTED PROJECTS */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold m-0">
            {t("home.highlightedProjects")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 not-prose">
            {featureProjects.map((project, index) => (
              <HighlightedProjectsCard key={index} project={project} />
            ))}
          </div>

          <Link to="/projects#projects" className="flex flex-col">
            <Button className="w-1/2 self-center cursor-pointer">
              {t("home.moreProjects")}
            </Button>
          </Link>
        </div>

        {/* ARTICLES */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold m-0">{t("home.articlesTitle")}</h2>

          <div className="flex flex-col gap-2">
            {newestArticles.map((article, i) => (
              <Link
                to={`/articles/${article.slug}`}
                key={i}
                className="rounded-xl transition-all duration-300 flex flex-col gap-2 no-underline hover:bg-muted/30"
              >
                <div className="flex flex-row items-center justify-between px-5">
                  <h2 className="text-lg no-underline p-0 mt-2 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-xs text-muted-foreground m-0">
                    {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/articles#articles" className="flex flex-col">
            <Button className="w-1/2 self-center cursor-pointer">
              {t("home.moreArticles")}
            </Button>
          </Link>
        </div>

        {/* TECHNOLOGIES */}
        <div id="technologies">
          <Technologies />
        </div>
      </div>
    </div>
  );
}
