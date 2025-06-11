import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, MapPin, Youtube } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SiLeetcode } from "react-icons/si";

export function InformationComponent() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4">
                        <Avatar className="h-36 w-36">
                            <AvatarImage src="/images/profilePhoto.png" alt="John Doe" />
                            <AvatarFallback>FB</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Francisco Borges</CardTitle>
                            <p className="text-muted-foreground">Master in Engineering and Management of Information Systems <Link href="https://www.uminho.pt/PT" target="_blank" className="hover:underline">@uminho</Link></p>
                            <p className="text-muted-foreground">Working <Link href="https://www.ccg.pt/" target="_blank" className="hover:underline">@CCG</Link></p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        Portugal
                    </div>

                    {/* <div className="flex flex-wrap gap-2 cursor-pointer">
                  <Badge>Working</Badge>
                  <Badge variant="secondary">Remote</Badge>
                </div> */}

                    <div className="space-y-2">
                        <Button asChild className="w-full">
                            <Link href="/files/cv.pdf" target="_blank" download>
                                {/* <FileUser className="mr-2 h-4 w-4"/> */}
                                Download CV
                            </Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href="mailto:franciscomsborges2002@gmail.com">
                                {/* <Mail className="mr-2 h-4 w-4" /> */}
                                Contact Me
                            </Link>
                        </Button>

                        <Separator />

                        <div className="flex justify-around gap-8 w-full">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://github.com/franciscoborges2002" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://www.linkedin.com/in/francisco-borges2002" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://www.youtube.com/@franciscoborges7897" target="_blank" rel="noopener noreferrer">
                                    <Youtube className="h-5 w-5" />
                                    <span className="sr-only">Website</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://leetcode.com/u/fborges/" target="_blank" rel="noopener noreferrer">
                                    <SiLeetcode className="h-5 w-5" />
                                    <span className="sr-only">Website</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">JavaScript</Badge>
                        <Badge variant="outline" className="cursor-pointer">TypeScript</Badge>
                        <Badge variant="outline" className="cursor-pointer">React</Badge>
                        <Badge variant="outline" className="cursor-pointer">Next.js</Badge>
                        <Badge variant="outline" className="cursor-pointer">Node.js</Badge>
                        <Badge variant="outline" className="cursor-pointer">PostgreSQL</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {/* MUDAR A informação */}
                    <div className="relative pt-4">
                        <div className="absolute left-0 top-0 w-px h-full bg-border"></div>
                        <ol className="relative space-y-4 overflow-y-auto scrollbar-thin scrollbar-webkit" style={{ maxHeight: "150px" }}>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">December 2024 - present</time>
                                <h3 className="text-sm font-semibold">Assistant Researcher</h3>
                                <h3 className="text-sm font-semibold hover:underline">
                                    <Link href="https://ccg.pt/" target="_blank">
                                        @ccg
                                    </Link>
                                </h3>
                                {/* <p className="text-sm text-muted-foreground">Was assigned into a project.</p> */}
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">November 2024 - present</time> <br />
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">December 2022 - October 2023</time>

                                <h3 className="text-sm font-semibold">Member of technological Department</h3>
                                <h3 className="text-sm font-semibold hover:underline">
                                    <Link href="https://aissc.dsi.uminho.pt/" target="_blank">
                                        @AIS.SC
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground">Worked as a member of the technological department, building and mantaining projects.</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">April 2022 - October 2024</time>
                                <h3 className="text-sm font-semibold">ioAcademy</h3>
                                <h3 className="text-sm font-semibold hover:underline">
                                    <Link href="https://iotech.pt/" target="_blank">
                                        @ioTech
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground">Made various projects in trade of formation.</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">June 2022 - September 2022</time>
                                <h3 className="text-sm font-semibold">ioSummer - Internship</h3>
                                <h3 className="text-sm font-semibold hover:underline">
                                    <Link href="https://iotech.pt/" target="_blank">
                                        @ioTech
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground">Made an integration between APIs.</p>
                            </li>

                        </ol>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {/* MUDAR A informação */}
                    <div className="relative pt-4">
                        <div className="absolute left-0 top-0 w-px h-full bg-border"></div>
                        <ol className="relative space-y-4">
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">September 2023 - Present</time>
                                <h3 className="text-sm font-semibold">Master in Engineering and Managment of Information Systems</h3>
                                <h3 className="text-sm font-semibold hover:underline">
                                    <Link href="https://www.uminho.pt/PT" target="_blank">
                                        @Uminho
                                    </Link>
                                </h3>
                                {/* <p className="text-sm text-muted-foreground">Became a contributor to a popular React library</p> */}
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -left-1.5 border border-background"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">September 2020 - June 2023</time>
                                <h3 className="text-sm font-semibold">Bachelor in Engineering and Managment of Information Systems</h3>
                                <h3 className="text-sm font-semibold hover:underline">
                                    <Link href="https://www.uminho.pt/PT" target="_blank">
                                        @Uminho
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground">Finished with: 14.994/20</p>
                            </li>
                        </ol>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}