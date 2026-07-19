function SidebarHeader({ setIsOpen }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2>🤖 FormSaarthi AI</h2>

            <button onClick={() => setIsOpen(false)}>
                ✖
            </button>
        </div>
    );
}

export default SidebarHeader;