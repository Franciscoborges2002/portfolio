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
                className="lg:hidden fixed z-50 left-4
                   bottom-[calc(env(safe-area-inset-bottom)+1rem)]
                   peer-checked:hidden"
            >
                <Button asChild variant="outline" className="inline-flex items-center gap-2">
                    <span>
                        <PanelLeftOpen className="h-5 w-5 inline-block" />
                        <span className="text-sm ml-2">Info</span>
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
                className="lg:hidden fixed px-5 top-0 left-0 z-50 h-dvh h-[calc(100svh-4rem-env(safe-area-inset-top))]  /* svh for iOS
                        w-[min(22rem,92vw)]                         /* comfy width on 320–375px
                        px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4
                        bg-black/60 backdrop-blur-md
                        shadow-xl border-r border-white/10
                        -translate-x-full peer-checked:translate-x-0
                        transition-transform duration-300
                        w-[min(22rem,92vw)] 
                        "
                role="dialog"
                aria-modal="true"
            >
                {/* make the panel a positioning context */}
                <div className="h-full overflow-y-auto relative">
                    {/* CLOSE in the panel's top-right (your red box) */}
                    <label
                        htmlFor="info-toggle"
                        className="
        absolute z-10
        top-2 right-2
        md:top-3 md:right-3
        /* if you want to respect safe-area on very small phones: */
        /* right-[calc(env(safe-area-inset-right)+0.5rem)] */
      "
                    >
                        <Button asChild variant="outline" size="sm" className="inline-flex items-center gap-2">
                            <span>
                                <PanelLeftClose className="h-5 w-5 inline-block" />
                                <span className="text-sm ml-2">Close</span>
                            </span>
                        </Button>
                    </label>

                    <InformationComponent />
                </div>
            </aside>
        </div>
    );
}