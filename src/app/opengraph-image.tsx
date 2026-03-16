import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vipassana.cool — Your Guide to Vipassana Meditation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            color: "#a78bfa",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Unofficial Guide
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Everything You Need to Know About Vipassana Meditation
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          FAQ, preparation tips, personal experiences & a companion guide to dhamma.org
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#64748b",
          }}
        >
          vipassana.cool
        </div>
      </div>
    ),
    { ...size }
  );
}
