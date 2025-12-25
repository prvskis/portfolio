export default function ArtBackground() {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* animated blobs */}
        <div
          className="blob blob-1"
          style={{
            left: "10%",
            top: "12%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle at 10% 10%, rgba(74,210,255,0.28), transparent 20%)",
          }}
        />
        <div
          className="blob blob-2"
          style={{
            right: "6%",
            top: "10%",
            width: "620px",
            height: "620px",
            background:
              "radial-gradient(circle at 40% 40%, rgba(255,87,179,0.22), transparent 62%)",
          }}
        />
        <div
          className="blob blob-3"
          style={{
            left: "34%",
            bottom: "6%",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle at 80% 80%, rgba(54,120,255,0.18), transparent 80%)",
          }}
        />
  
        {/* grid + grain cùng layer */}
        <div className="absolute inset-0 gridlines opacity-50" />
        <div className="absolute inset-0 grain" />
      </div>
    );
  }
  