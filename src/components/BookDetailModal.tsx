import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/data/books";

const statusConfig = {
  "currently-reading": { label: "Currently Reading", className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  finished: { label: "Finished", className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  "want-to-read": { label: "Want to Read", className: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30" },
};

interface BookDetailModalProps {
  book: Book | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatDate(date: string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BookDetailModal({ book, open, onOpenChange }: BookDetailModalProps) {
  if (!book) return null;
  const status = statusConfig[book.status];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-zinc-900 text-white sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{book.title}</DialogTitle>
          <DialogDescription className="sr-only">Details about {book.title}</DialogDescription>
        </DialogHeader>

        <div className="flex gap-4">
          <img
            src={book.coverUrl}
            alt={`${book.title} cover`}
            className="h-40 w-28 shrink-0 rounded-lg object-cover shadow-lg"
          />
          <div className="flex flex-col justify-between py-1">
            <div>
              <h2 className="text-lg font-bold leading-tight text-white/95">{book.title}</h2>
              <p className="mt-1 text-sm text-white/50">{book.author}</p>
              <p className="text-xs text-white/30">{book.year}</p>
            </div>
            <Badge className={`w-fit text-[11px] ${status.className}`}>{status.label}</Badge>
          </div>
        </div>

        <div className="mt-2 space-y-4">
          {/* <div className="flex gap-6 text-sm">
            <div>
              <span className="text-white/40 text-xs uppercase tracking-wider">Started</span>
              <p className="text-white/70">{formatDate(book.startDate)}</p>
            </div>
            <div>
              <span className="text-white/40 text-xs uppercase tracking-wider">Finished</span>
              <p className="text-white/70">{formatDate(book.finishDate)}</p>
            </div>
          </div> */}

          {book.thoughts && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-white/40 mb-1">My Thoughts</h3>
              <p className="text-sm leading-relaxed text-white/70">{book.thoughts}</p>
            </div>
          )}

          {book.takeaways.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-white/40 mb-2">Key Takeaways</h3>
              <ul className="space-y-1.5">
                {book.takeaways.map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
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
