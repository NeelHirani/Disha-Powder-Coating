import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/UIComponents";
import { cn } from "@/lib/utils";
import workshopImage from "@assets/generated_images/Powder_coating_workshop_hero_d77b1d0b.png";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  subtitle,
  light = false,
  className,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center md:mb-16", className)}>
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.65rem]",
          light ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed md:text-lg",
            light ? "text-slate-300" : "text-slate-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-center overflow-hidden bg-slate-950">
      <img
        src={workshopImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <Container className="relative z-10 py-20 md:py-28">
        {eyebrow && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-orange-400">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
          {highlight && <span className="mt-1 block text-orange-400">{highlight}</span>}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{description}</p>
      </Container>
    </section>
  );
}

export function CtaBanner({
  title,
  description,
  primaryHref = "/quote",
  primaryLabel = "Get Free Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.2),transparent_55%)]" />
      <Container className="relative z-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={primaryHref}>
            <Button className="h-12 rounded-full bg-orange-500 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600">
              {primaryLabel}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link href={secondaryHref}>
            <Button
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base font-medium text-white hover:bg-white/10"
            >
              {secondaryLabel}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function SurfaceCard({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
