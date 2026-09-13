import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

export const alt = `${profile.name} — ${profile.role}`;
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
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 28, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 56,
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
        <div style={{ fontSize: 28, color: "#8a93a6", marginTop: 32 }}>{profile.tagline}</div>
      </div>
    ),
    size
  );
}
