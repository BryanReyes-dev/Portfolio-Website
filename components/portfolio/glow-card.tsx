import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = HTMLAttributes<HTMLElement>;

export function GlowCard({ className, style, ...props }: GlowCardProps) {
  return (
    <article
      {...props}
      className={cn(
        "rounded-2xl border-[1.5px] border-solid p-5 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_10px_2px_color-mix(in_srgb,var(--app-primary-color-0)_75%,transparent)] sm:p-6",
        className
      )}
      style={{
        borderColor: "var(--app-primary-color-0)",
        backgroundColor:
          "color-mix(in srgb, var(--app-bg-surface) 86%, var(--background))",
        boxShadow:
          "0 0 5px 1px color-mix(in srgb, var(--app-primary-color-0) 80%, transparent)",
        ...style,
      }}
    />
  );
}
