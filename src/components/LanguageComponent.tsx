import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
];

export function LanguageComponent() {
    const { i18n } = useTranslation()

    useEffect(() => {
        const saved = localStorage.getItem("lang")
        if (saved) {
            i18n.changeLanguage(saved)   // no setLang needed
        }
    }, [i18n])

    const handleChange = (code: string) => {
        localStorage.setItem("lang", code)
        i18n.changeLanguage(code)        // no setLang needed
    }

    const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]

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
    )
}