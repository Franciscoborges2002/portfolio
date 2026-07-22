import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/data/books";
import { useTranslation } from "react-i18next";

const statusClassName = {
  "currently-reading": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  finished: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "want-to-read": "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  abandoned: "bg-red-500/20 text-red-400 border-red-500/30",
};

interface BookDetailModalProps {
  book: Book | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDetailModal({
  book,
  open,
  onOpenChange,
}: BookDetailModalProps) {
  const { t } = useTranslation();
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-border bg-background text-foreground sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{book.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Details about {book.title}
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-4">
          <img
            src={book.coverUrl}
            alt={`${book.title} cover`}
            className="h-40 w-28 shrink-0 rounded-lg object-cover shadow-lg"
          />
          <div className="flex flex-col justify-between py-1">
            <div>
              <h2 className="text-lg font-bold leading-tight text-foreground">
                {book.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {book.author}
              </p>
              <p className="text-xs text-muted-foreground">{book.year}</p>
            </div>
            <Badge
              className={`w-fit text-[11px] ${statusClassName[book.status]}`}
            >
              {t(`books.status.${book.status}`)}
            </Badge>
          </div>
        </div>

        <div className="flex gap-4 text-xs text-muted-foreground">
          <p>ISBN: {book.isbn}</p>
          <p>Language: {book.language}</p>
        </div>

        <div className="mt-2 space-y-4">
          {book.thoughts && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                My Thoughts
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {book.thoughts}
              </p>
            </div>
          )}

          {book.takeaways.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Key Takeaways
              </h3>
              <ul className="space-y-1.5">
                {book.takeaways.map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
