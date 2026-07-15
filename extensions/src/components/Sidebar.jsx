import SidebarHeader from "./SidebarHeader";
export default function Sidebar({ isOpen }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-380px",
        width: "350px",
        height: "100vh",
        background: "#ffffff",
        boxShadow: "-5px 0 20px rgba(0,0,0,0.2)",
        transition: "right 0.3s ease",
        zIndex: 2147483647,
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <SidebarHeader />

      <hr />

      <p>Hello 👋</p>

      <p>Need help filling this form?</p>
    </div>
  );
}