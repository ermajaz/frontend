import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Destination } from "@/types/destination";

const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
        {Array?.from({ length: rating }).map((_, i) => (
            <Star
                key={i}
                className="w-3.5 h-3.5 fill-orange-300 text-orange-300"
                strokeWidth={0}
            />
        ))}
    </div>
);

function CardImage({ destination, hovered }: { destination: Destination, hovered: boolean }) {
    return (
        <div className="w-full h-full overflow-hidden">
            <Image
                src={destination.leftImage}
                alt={destination.title}
                fill
                quality={100}
                className={`object-cover transition-all duration-700 ${hovered ? "scale-105 brightness-[0.55]" : "brightness-[0.7]"}`}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-3xl font-extrabold text-white drop-shadow-lg">
                    {destination.title}
                </h4>
                <p className="italic text-green-400 mt-1 text-sm">
                    “{destination.subtitle}”
                </p>
                <p className="mt-2 text-gray-200 leading-relaxed text-xs md:text-sm line-clamp-3">
                    {destination.description}
                </p>

                {/* ⭐ Ratings */}
                <div className="w-full mt-3 space-y-2">
                    {destination.reviews.slice(0, 3).map((review, idx) => (
                        <div key={idx} className="space-y-0.5">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold text-white">
                                    {review.category}
                                </p>
                                {renderStars(review.rating)}
                            </div>
                            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-green-600 rounded-full"
                                    style={{
                                        width: `${(review.rating / review.max) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ✨ View Story Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 right-6"
            >
                <Button
                    className="px-4 py-2 text-sm font-semibold rounded-none text-white border border-white/50 cursor-pointer bg-black/50 backdrop-blur-sm hover:bg-black/70 hover:scale-105 transition-all duration-300"
                    onClick={() =>
                        window.open(`${destination?.link}`, "_blank")
                    }
                >
                    View Story
                </Button>
            </motion.div>
        </div>
    )
};

export default CardImage;