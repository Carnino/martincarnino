"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import type { ProjectStatus } from "@/lib/projects"

const DOT: Record<ProjectStatus, string> = {
    live: "bg-live",
    private: "bg-muted-foreground/60",
    thesis: "bg-amber-500",
}

export function StatusLabel({ status, className }: { status: ProjectStatus; className?: string }) {
    const { t } = useLanguage()
    return (
        <span className={cn("inline-flex items-center gap-1.5", className)}>
            <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", DOT[status])} />
            {t.work.status[status]}
        </span>
    )
}
