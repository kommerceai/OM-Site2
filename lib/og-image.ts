import { ImageResponse } from "next/server"

export function generateOgImage(title: string, description: string) {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#001F5A",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
        alt="Organic Marketing logo"
        width={200}
        height={200}
      />
      <h1 style={{ fontSize: 60, fontWeight: "bold", marginTop: 20, textAlign: "center" }}>{title}</h1>
      <p style={{ fontSize: 30, marginTop: 20, textAlign: "center", maxWidth: "80%" }}>{description}</p>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}

