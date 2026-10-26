import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "CybrLoop — Secure the Loop. A cybersecurity team.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const icon = await readFile(join(process.cwd(), "public/assets/icon-512.png"));
  const iconUrl = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", backgroundColor: "#0B0D0D", color: "#FAFAFB", padding: "56px 80px" }}>
      <div style={{ display: "flex", position: "absolute", inset: 0, opacity: 0.35, backgroundImage: "linear-gradient(#3A3A40 1px, transparent 1px), linear-gradient(90deg, #3A3A40 1px, transparent 1px)", backgroundSize: "86px 86px" }} />
      <div style={{ display: "flex", position: "absolute", right: -90, top: 140, width: 470, height: 470, border: "1px dashed #3A3A40", borderRadius: "50%" }} />
      <div style={{ display: "flex", position: "absolute", right: 28, top: 258, width: 230, height: 230, border: "1px solid #3A3A40", borderRadius: "50%" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 52, fontWeight: 700, letterSpacing: -2 }}>
        <img src={iconUrl} alt="" width={64} height={64} />
        CybrLoop
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, width: 870 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#D7D7DB", fontSize: 20, letterSpacing: 3, textTransform: "uppercase" }}>
          <div style={{ width: 9, height: 9, backgroundColor: "#FF7A1A" }} />
          Cybersecurity team
        </div>
        <div style={{ display: "flex", fontSize: 100, fontWeight: 700, lineHeight: 1, letterSpacing: -6 }}>
          Secure the <span style={{ color: "#FF7A1A", marginLeft: 20 }}>Loop.</span>
        </div>
        <div style={{ display: "flex", maxWidth: 780, color: "#D7D7DB", fontSize: 29, lineHeight: 1.35 }}>
          CybrLoop is a cybersecurity team working to improve digital security through technical projects, research, knowledge sharing, and specialized security services.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#D7D7DB", fontSize: 18, letterSpacing: 1 }}>
        <div style={{ width: 48, height: 2, backgroundColor: "#FF7A1A" }} />
        cybrloop.com
      </div>
    </div>,
    size,
  );
}
