const manifest = {
    manifest_version: 3,

    name: "FormSaarthi AI",

    version: "1.0",

    description: "AI Copilot for Government Forms",

    permissions: [
        "activeTab",
        "storage"
    ],

    host_permissions: [
        "<all_urls>"
    ],

    background: {
        service_worker: "src/background/background.js"
    },

    content_scripts: [
        {
            matches: ["<all_urls>"],
            js: ["src/content/index.jsx"]
        }
    ],

    action: {
        default_title: "FormSaarthi AI"
    }
};

export default manifest;