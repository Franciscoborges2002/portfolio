// Header.tsx (Server Component)
import Link from "next/link";
import { Notch } from "./NotchComponent";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { LanguageComponent } from "./LanguageComponent";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
            <div className="w-full flex items-center gap-5 pt-2 px-4 md:px-10 min-h-14">
                <div className="flex-1" />

                {/* only one Notch (centered) */}
                <div className="flex-1 flex justify-center">
                    <Notch text="Currently Working" isActive={false} />
                </div>

                {/* right side: desktop nav + mobile popover */}
                <div className="flex-1 flex justify-end items-center gap-1">
                    <nav className="hidden md:flex items-center">
                        <Link href="/" className="px-2 py-1 rounded hover:bg-white/5">Home</Link>
                        <Link href="/projects" className="px-2 py-1 rounded hover:bg-white/5">Projects</Link>
                        <Link href="/articles" className="px-2 py-1 rounded hover:bg-white/5">Articles</Link>
                        <LanguageComponent />
                        <ThemeToggle />
                    </nav>

                    {/* === MOBILE POPOVER WRAPPER (right) === */}
                    <div className="relative md:hidden">
                        {/* The ONE checkbox (peer). Fixed + unfocusable to prevent scroll-to-top. */}
                        <input
                            id="nav-pop"
                            type="checkbox"
                            tabIndex={-1}
                            className="peer sr-only fixed top-2 right-2"
                        />

                        {/* Hamburger label */}
                        <label
                            htmlFor="nav-pop"
                            className="p-2 rounded-lg hover:bg-white/5 cursor-pointer inline-flex"
                            aria-label="Open menu"
                        >
                            <Menu className="h-5 w-5 peer-checked:hidden" />
                            <X className="h-5 w-5 hidden peer-checked:block" />
                        </label>

                        {/* The mini menu below the hamburger */}
                        <div
                            className="absolute right-0 top-full mt-2 z-50 w-56 origin-top
                         rounded-xl border border-white/10 bg-[#0b1323]/95 backdrop-blur
                         shadow-lg opacity-0 scale-95 translate-y-1 pointer-events-none
                         transition-all duration-150
                         peer-checked:opacity-100 peer-checked:scale-100 peer-checked:translate-y-0 peer-checked:pointer-events-auto"
                        >
                            <nav className="py-2 text-white/90">
                                <Link className="block px-3 py-2 rounded hover:bg-white/5" href="/">Home</Link>
                                <Link className="block px-3 py-2 rounded hover:bg-white/5" href="/projects">Projects</Link>
                                <Link className="block px-3 py-2 rounded hover:bg-white/5" href="/articles">Articles</Link>
                                <div className="flex flex-row items-center gap-2 px-3">
                                    <Button className="w-5 h-10" variant="outline">
                                        <LanguageComponent />
                                    </Button>
                                    <Button className="w-5 h-10" variant="outline">
                                        <ThemeToggle />
                                    </Button>
                                </div>
                            </nav>
                        </div>

                        {/* Click-away overlay (under the menu so it doesn't block dropdown portals) */}
                        <label
                            htmlFor="nav-pop"
                            aria-hidden="true"
                            className="fixed inset-0 z-40 hidden peer-checked:block cursor-default"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
