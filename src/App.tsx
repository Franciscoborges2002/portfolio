import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/HeaderComponent";
import { Footer } from "@/components/FooterComponent";
import InfoAside from "@/components/InfoAsideComponent";
import PortfolioPage from "@/pages/PortfolioPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ArticlesPage from "@/pages/ArticlesPage";
import ArticleDetailPage from "@/pages/ArticleDetailPage";
import BooksPage from "@/pages/BooksPage";
import NotFound from "@/pages/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className="py-20 grid gap-6 lg:grid-cols-[1fr_2fr] lg:px-20">
        <div className="w-full">
          <InfoAside />
        </div>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
