import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../ui/icons";
import { PosterCard } from "./PosterCard";
import { ThumbnailCard } from "./ThumbnailCard";
import { PreviewCard } from "./PreviewCard";

export function MovieRow({ title, items, variant = "poster" }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        scrollRef.current?.scrollBy({ left: direction * 600, behavior: "smooth" });
    };

    return (
        <section className="px-4 py-5 sm:px-6 sm:py-6 md:px-10">
            <h2 className="mb-3 text-base font-bold text-white sm:mb-4 sm:text-xl">{title}</h2>

            <div className="group relative">
                <button
                    type="button"
                    onClick={() => scroll(-1)}
                    aria-label="Scroll kiri"
                    className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100"
                >
                    <ArrowLeftIcon />
                </button>

                <div
                    ref={scrollRef}
                    className="flex justify-center gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {items.map((item) =>
                        item.preview ? (
                            <PreviewCard key={item.id} {...item} />
                        ) : variant === "thumbnail" ? (
                            <ThumbnailCard key={item.id} {...item} />
                        ) : (
                            <PosterCard key={item.id} {...item} />
                        )
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => scroll(1)}
                    aria-label="Scroll kanan"
                    className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100"
                >
                    <ArrowRightIcon />
                </button>
            </div>
        </section>
    );
}
