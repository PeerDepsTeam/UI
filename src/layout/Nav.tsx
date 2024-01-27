import {Link} from "react-router-dom";
import {LucideIcon} from "lucide-react";

import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";

export interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    to: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function Nav({links, isCollapsed}: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 bg-yellow-50 py-2 data-[collapsed=true]:py-2"
    >
      <nav className=" grid gap-1 bg-yellow-50 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  to={link.to}
                  className={cn(
                    buttonVariants({variant: link.variant, size: "icon"}),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "white:hover:text-dark dark:text-muted-foreground dark:hover:bg-muted"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              to={link.to}
              className={cn(
                buttonVariants({variant: link.variant, size: "sm"}),
                link.variant === "default" &&
                  "white:hover:text-dark dark:text-white dark:hover:bg-muted",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
