import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = HTMLAttributes<HTMLElement>;

export function GlowCard({ className, style, ...props }: GlowCardProps) {
  return (
    <article
      {...props}
      className={cn(
        "rounded-2xl border-[0.1rem] border-solid border-app-primary-0 bg-app-bg-surface/85 p-5 shadow-[0_0_5px_1px_color-mix(in_srgb,var(--app-primary-color-0)_80%,transparent)] backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_10px_2px_color-mix(in_srgb,var(--app-primary-color-0)_85%,transparent)] sm:p-6",
        className
      )}
      style={style}
    />
  );
}
