import SidebarHeader from "./SidebarHeader";
import WelcomeCard from "./WelcomeCard";

function Sidebar({

    isOpen,

    setIsOpen,

    assistantEnabled,

    setAssistantEnabled,

    fieldData

}) {

    if (!isOpen) return null;

    return (

        <div
            style={{
                position: "fixed",
                right: 0,
                top: 0,
                width: "360px",
                height: "100vh",
                background: "#fff",
                boxShadow: "-2px 0 10px rgba(0,0,0,.2)",
                padding: "20px",
                overflowY: "auto",
                zIndex: 999999
            }}
        >

            <SidebarHeader
                setIsOpen={setIsOpen}
            />

            <WelcomeCard

                assistantEnabled={assistantEnabled}

                setAssistantEnabled={setAssistantEnabled}

            />

            {

                assistantEnabled && fieldData && (

                    <div
                        style={{
                            marginTop: "25px",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "15px"
                        }}
                    >

                        <h3>Field Information</h3>

                        {fieldData.error ? (
                            <div style={{ color: "#d32f2f" }}>
                                <p><b>⚠️ Connection Error</b></p>
                                <p style={{ fontSize: "13px", marginTop: "10px" }}>
                                    Could not connect to the backend server. Please verify that the Flask server is running at <code>http://127.0.0.1:5000</code>.
                                </p>
                            </div>
                        ) : fieldData.found !== false ? (
                            <>
                                <p>
                                    <b>Document :</b> {fieldData.document}
                                </p>
                                <p>
                                    <b>Location :</b> {fieldData.location}
                                </p>
                                <p>
                                    <b>Format :</b> {fieldData.format}
                                </p>
                                <p>
                                    <b>Description :</b> {fieldData.description}
                                </p>
                                <p>
                                    <b>Why Required :</b> {fieldData.why}
                                </p>
                            </>
                        ) : (
                            <div style={{ color: "#666" }}>
                                <p>No specific guidance found for this field.</p>
                                <p style={{ fontSize: "13px", fontStyle: "italic", marginTop: "10px" }}>
                                    Try focusing on:
                                    <br />
                                    • Name
                                    <br />
                                    • Aadhaar Number
                                    <br />
                                    • PAN Number
                                </p>
                            </div>
                        )}

                    </div>

                )

            }

        </div>

    );

}

export default Sidebar;