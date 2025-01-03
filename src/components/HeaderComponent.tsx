'use client'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Notch } from "./NotchComponent"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                    setIsVisible(false)
                } else { // if scroll up show the navbar
                    setIsVisible(true)
                }

                // remember current page location to use in the next move
                setLastScrollY(window.scrollY)
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>{/* bg-background/80 backdrop-blur-sm */}
            {/*             <div className="container w-full mx-auto px-4"> */}
            <div className="w-full flex flex-row gap-5 items-center pt-2 px-10 ">
                <div className="flex-1">
                    {/* Left side - empty for balance */}
                </div>
                {/* MIDDLE */}
                <div className="flex-1 flex justify-center">
                    {/* <div className="w-96 h-12 bg-foreground/10 rounded-3xl">
                            asd
                        </div> */}
                    <Notch text='Currently Working' isActive={false} />

                </div>
                {/* LEFT */}
                <div className="flex-1 flex justify-end">
                    <Link href='/'>
                        <Button variant="ghost" size="sm">
                            Home
                        </Button>
                    </Link>
                    <Link href='/projects'>
                        <Button variant="ghost" size="sm">
                            Projects
                        </Button>
                    </Link>
                    <Link href='/articles'>
                        <Button variant="ghost" size="sm">
                            Articles
                        </Button>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
            {/*             </div> */}
        </header>
    )
}