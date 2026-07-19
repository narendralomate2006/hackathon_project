function WelcomeCard({

    assistantEnabled,

    setAssistantEnabled

}) {

    if (assistantEnabled) {

        return (

            <div
                style={{
                    marginTop: "25px",
                    padding: "15px",
                    background: "#e8f5e9",
                    borderRadius: "10px"
                }}
            >

                <h3>

                    ✅ AI Assistant Active

                </h3>

                <p>

                    Click any form field to get guidance.

                </p>

            </div>

        );

    }

    return (

        <div
            style={{
                marginTop: "25px"
            }}
        >

            <h2>Hello 👋</h2>

            <p>

                Need AI assistance while filling this form?

            </p>

            <button

                onClick={() => setAssistantEnabled(true)}

                style={{
                    padding: "10px 18px",
                    marginRight: "10px",
                    cursor: "pointer"
                }}

            >

                Start AI Assistance

            </button>

            <button

                onClick={() => setAssistantEnabled(false)}

                style={{
                    padding: "10px 18px",
                    cursor: "pointer"
                }}

            >

                Maybe Later

            </button>

        </div>

    );

}

export default WelcomeCard;