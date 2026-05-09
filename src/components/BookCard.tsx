import type { Book } from "@/data/books";
import { Badge } from "./ui/badge";

const statusConfig = {
  "currently-reading": {
    label: "Currently Reading",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  finished: {
    label: "Finished",
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  "want-to-read": {
    label: "Want to Read",
    className: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  },
};

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export function BookCard({ book, onClick }: BookCardProps) {
  const status = statusConfig[book.status];

  return (
    <button
      onClick={onClick}
      className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-left transition-all hover:bg-white/[0.06] hover:border-white/10 hover:shadow-lg hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-white/20 w-full"
    >
      <img
        src={book.coverUrl}
        alt={`${book.title} cover`}
        className="h-32 w-22 shrink-0 rounded-lg object-cover shadow-md"
        loading="lazy"
      />
      <div className="flex flex-col justify-between py-1 min-w-0">
        <div>
          <h3 className="font-semibold text-white/90 text-base leading-tight truncate">
            {book.title}
          </h3>
          <p className="mt-1 text-sm text-white/50">{book.author}</p>
          <p className="mt-0.5 text-xs text-white/30">{book.year}</p>
        </div>
        <Badge className={`w-fit text-[11px] ${status.className}`}>
          {status.label}
        </Badge>
      </div>
    </button>
  );
}
