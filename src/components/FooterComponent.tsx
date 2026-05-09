import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center pb-5">
      <p></p>
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/Franciscoborges2002"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Francisco Borges
        </a>
        .
      </p>
      <p className="pr-5">
        <a
          href="https://github.com/Franciscoborges2002/portfoliov2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-5 w-5 hover:scale-110 transition-all duration-300" />
        </a>
      </p>
    </footer>
  );
}
