// websiteDetector.js

const supportedWebsites = [
    "scholarship.gov.in",
    "mahadbt.maharashtra.gov.in",
    "scholarships.gov.in"
];

export function isSupportedWebsite() {

    const currentWebsite = window.location.hostname;

    console.log("Current Website:", currentWebsite);

    return supportedWebsites.includes(currentWebsite);

}