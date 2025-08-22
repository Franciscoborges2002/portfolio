import { InformationComponent } from "./InformationComponent";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { Button } from "./ui/button";

export default function InfoAside() {
    return (
        <div className="relative w-full">
            {/* Large screens */}
            <aside className="hidden lg:block w-86 shrink-0">
                <InformationComponent />
            </aside>

            {/* Hidden checkbox */}
            <input id="info-toggle" type="checkbox" className="peer sr-only" />

            {/* OPEN button */}
            <label
                htmlFor="info-toggle"
                className="lg:hidden fixed z-50 left-4 bottom-20 peer-checked:hidden"
            >
                <Button asChild variant="outline" className="inline-flex items-center gap-2">
                    <span>
                        <PanelLeftOpen className="h-5 w-5 inline-block" />
                        <span className="text-sm ml-2">Info</span>
                    </span>
                </Button>
            </label>

            {/* CLOSE button */}
            <label
                htmlFor="info-toggle"
                className="lg:hidden fixed z-60 left-4 top-28 hidden peer-checked:inline-block"
            >
                <Button asChild variant="outline" className="inline-flex items-center gap-2">
                    <span>
                        <PanelLeftClose className="h-5 w-5 inline-block" />
                        <span className="text-sm ml-2">Close</span>
                    </span>
                </Button>
            </label>

            {/* Backdrop */}
            <label
                htmlFor="info-toggle"
                aria-hidden="true"
                className="lg:hidden fixed inset-0 z-40 bg-black/60 opacity-0 pointer-events-none
                   peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-200"
            />

            {/* LEFT drawer */}
            <aside
                className="lg:hidden fixed px-5 top-0 left-0 z-50 h-dvh w-[50%] max-w-[90vw] bg-black/60 shadow-xl
                   -translate-x-full peer-checked:translate-x-0 transition-transform duration-300"
                role="dialog"
                aria-modal="true"
            >
                <div className="h-full overflow-y-auto py-5">
                    {/* <div className="flex justify-end py-3">
                        <Button variant="outline" size="icon">
                            X
                        </Button>
                    </div> */}
                    <InformationComponent />
                </div>
            </aside>
        </div>
    );
}