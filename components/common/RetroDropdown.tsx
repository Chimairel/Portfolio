"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const RetroDropdown = DropdownMenu;
export const RetroDropdownTrigger = DropdownMenuTrigger;

export const RetroDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContent>
>(({ className, align = "end", sideOffset = 4, ...props }, ref) => (
  <DropdownMenuContent
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "w-48 border-2 border-border rounded-none bg-card text-foreground font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--color-border)] font-mono p-0",
      className
    )}
    {...props}
  />
));
RetroDropdownContent.displayName = "RetroDropdownContent";

export const RetroDropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItem>
>(({ className, ...props }, ref) => (
  <DropdownMenuItem
    ref={ref}
    className={cn(
      "cursor-pointer rounded-none transition-none focus:bg-foreground focus:text-background py-3 px-4 border-b-2 border-border last:border-0",
      className
    )}
    {...props}
  />
));
RetroDropdownItem.displayName = "RetroDropdownItem";
