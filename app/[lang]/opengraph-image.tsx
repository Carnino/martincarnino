import { ImageResponse } from "next/og"
import { translations } from "@/lib/i18n/translations"
import { defaultLanguage, isLanguage, languages } from "@/lib/i18n/config"

export const alt = "Martín Carnino"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}

const swatches = ["#1B7F4B", "#3563E9", "#D6EE5A", "#B91919"]

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang: raw } = await params
    const { meta } = translations[isLanguage(raw) ? raw : defaultLanguage]

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    background: "#EFF1F4",
                    color: "#121417",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>Martín Carnino</div>
                <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em", maxWidth: 1000 }}>
                    {meta.ogHeadline}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", fontSize: 26, color: "#5A606B" }}>{meta.role}</div>
                    <div style={{ display: "flex", gap: 10 }}>
                        {swatches.map((color) => (
                            <div key={color} style={{ width: 36, height: 36, borderRadius: 10, background: color }} />
                        ))}
                    </div>
                </div>
            </div>
        ),
        size,
    )
}
