import { cn } from "../shadcn/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { inRange } from "~/utils";

interface HoverEffectProps {
  items: (() => JSX.Element)[];
  className?: string;
  backgroundColor: string;
  roundness: string;
  overrideIndex?: number;
}

export const HoverEffect = ({ items, className, backgroundColor, roundness, overrideIndex }: HoverEffectProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const targetIndex = inRange(overrideIndex, 0, items.length) ? overrideIndex : hoverIndex;

  return (
    <div className={className}>
      {items.map((Content, index) => (
        <div key={index} className="relative group block p-2 h-full w-full" onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
          <AnimatePresence>
            {targetIndex === index && (
              <motion.span
                className={cn(backgroundColor, roundness, "z-0 absolute inset-0 h-full w-full  block")}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-50">
            <Content />
          </div>
        </div>
      ))}
    </div>
  );
};
