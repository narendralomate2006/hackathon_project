function FloatingButton({ setIsOpen }) {

    return (

        <button

            onClick={() => setIsOpen(true)}

            style={{

                position: "fixed",

                bottom: "25px",

                right: "25px",

                width: "65px",

                height: "65px",

                borderRadius: "50%",

                border: "none",

                fontSize: "28px",

                cursor: "pointer",

                background: "#1976d2",

                color: "white",

                zIndex: 999999

            }}

        >

            🤖

        </button>

    );

}

export default FloatingButton;