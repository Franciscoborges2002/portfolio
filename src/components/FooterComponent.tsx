import Link from "next/link";
import { Github } from 'lucide-react';

export function Footer() {
    return (
        <footer className="flex flex-row justify-between items-center pb-5">
            <p></p>
            <p>Made with ❤️ by <Link href="https://github.com/Franciscoborges2002" target="_blank">Francisco Borges</Link>.</p>
            <p className="pr-5"><Link href="https://github.com/Franciscoborges2002/portfoliov2" target="_blank"><Github className="h-5 w-5 hover:scale-110 transition-all duration-300" /></Link></p>
        </footer>
    )
}