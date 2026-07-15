const manifest = {
  manifest_version: 3,

  name: "FormSaarthi AI",

  version: "1.0.0",

  description: "AI Assistant for filling scholarship and government forms.",

  permissions: [
    "storage",
    "activeTab",
    "scripting"
  ],

  host_permissions: [
    "<all_urls>"
  ],

  action: {
    default_title: "FormSaarthi AI"
  },

  background: {
    service_worker: "src/background/background.js",
    type: "module"
  },

  content_scripts: [
  {
    matches: ["<all_urls>"],
    js: ["src/content/content.jsx"],
    run_at: "document_idle",
  },
],
};

export default manifest;