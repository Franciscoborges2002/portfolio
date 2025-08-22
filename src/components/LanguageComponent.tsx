"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Add your supported languages here
const LANGUAGES = [
    { code: "en", label: "English", flag: "🇺🇸" }/* ,
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "es", label: "Español", flag: "🇪🇸" }, */
];

export function LanguageComponent() {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);
    }, []);

    const handleChange = (code: string) => {
        setLang(code);
        localStorage.setItem("lang", code);

        // If you're using Next.js i18n routing:
        // window.location.href = `/${code}${window.location.pathname.replace(/^\\/..../, "")}`;
    };

    const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <span className="text-lg">{current.flag}</span>
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="cursor-pointer">
                {LANGUAGES.map((l) => (
                    <DropdownMenuItem
                        key={l.code}
                        onClick={() => handleChange(l.code)}
                        className="flex items-center gap-2"
                    >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
