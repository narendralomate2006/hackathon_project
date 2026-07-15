import { FaRobot } from "react-icons/fa";

export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        border: "none",
        background: "#2563eb",
        color: "white",
        cursor: "pointer",
        zIndex: 2147483647,
        boxShadow: "0 5px 15px rgba(0,0,0,.3)",
      }}
    >
      <FaRobot size={28} />
    </button>
  );
}