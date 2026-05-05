import { ProjectCard } from "@/components/ProjectCard"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import { Book, books } from "../../data/books"
import { BookDetailModal } from "@/components/BookDetailModal"
import { BookCard } from "@/components/BookCard"

function BookSkeleton() {
    return (
        <Card className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
                <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="flex-grow">
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                </div>
            </CardContent>
            <CardFooter className="mt-auto">
                <div className="flex gap-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                </div>
            </CardFooter>
        </Card>
    )
}

function BooksGrid() {
    return (
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
            {books.map((book, index) => (
                <BookCard key={index} book={book} />
            ))}
        </div>
    )
}

export default function BooksPage() {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    
    return (
        <div className="w-full px-5 mx-auto">
            {/* RIGHT PART */}
            <div id="books">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">📚 Books</h1>
                </div>
                <Suspense fallback={
                    <div>
                        {[...Array(6)].map((_, index) => (
                            <BooksGrid key={index} />
                        ))}
                    </div>
                }>
                    <BooksGrid />
                </Suspense>
            </div>

            <BookDetailModal
        book={selectedBook}
        open={!!selectedBook}
        onOpenChange={(open) => !open && setSelectedBook(null)}
      />
        </div>
    )
}
function useState<T>(arg0: null): [any, any] {
    throw new Error("Function not implemented.")
}

