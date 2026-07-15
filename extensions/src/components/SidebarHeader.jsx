export default function SidebarHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>🤖 FormSaarthi AI</h2>
        <p
          style={{
            margin: 0,
            color: "gray",
            fontSize: "13px",
          }}
        >
          Your AI Form Assistant
        </p>
      </div>

      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "limegreen",
        }}
      />
    </div>
  );
}