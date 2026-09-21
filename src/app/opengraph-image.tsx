import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #05070d 0%, #0b1220 60%, #0a1a2e 100%)",
          color: "#e7ebf3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#22d3ee", fontSize: 24 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#22d3ee" }} />
          Available for new opportunities
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginTop: 4,
            letterSpacing: -1,
            background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.role}
        </div>
        <div style={{ fontSize: 36, fontWeight: 600, marginTop: 4, color: "#e7ebf3" }}>
          AI Automation &amp; AI Agents
        </div>
        <div style={{ fontSize: 24, color: "#8a93a6", marginTop: 28, lineHeight: 1.4 }}>
          SaaS & CRM applications · AI agents · Voice automation · Python workflows
        </div>
        <div style={{ fontSize: 22, color: "#8a93a6", marginTop: 10 }}>
          React · Next.js · TypeScript · Node.js · Python · PostgreSQL
        </div>
      </div>
    ),
    size
  );
}
