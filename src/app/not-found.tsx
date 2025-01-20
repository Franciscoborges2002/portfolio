import Link from "next/link";

export default function NotFound(){
    return(
        <div className="w-full h-full flex flex-col items-center gap-4 p-40">
            <h1 className="text-3xl font-bold tracking-tight">404</h1>
            <p className="text-xl">Sorry, the page you are looking for does not exist!</p>
            <Link href="/" className="underline">Home</Link>
        </div>
    );
}