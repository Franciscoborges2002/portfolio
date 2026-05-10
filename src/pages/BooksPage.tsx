import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BookCard } from "@/components/BookCard";
import { BookDetailModal } from "@/components/BookDetailModal";
import { books, type Book, type BookStatus } from "@/data/books";

const STATUS_ORDER: BookStatus[] = [
  "currently-reading",
  "finished",
  "abandoned",
  "want-to-read",
];

export default function BooksPage() {
  const { t } = useTranslation();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleBookClick(book: Book) {
    setSelectedBook(book);
    setModalOpen(true);
  }

  const grouped = STATUS_ORDER.map((status) => ({
    status,
    label: t(`books.status.${status}`),
    items: books.filter((b) => b.status === status),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="w-full px-5 mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          {t("books.title")}
        </h1>
      </div>

      <div className="space-y-10">
        {grouped.map(({ status, label, items }) => (
          <section key={status}>
            <h2 className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
              {label}
            </h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {items.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={() => handleBookClick(book)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <BookDetailModal
        book={selectedBook}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
