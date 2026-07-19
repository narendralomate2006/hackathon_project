import { sendFieldInfo } from "./messageHandler";

function cleanFieldName(name) {
    if (!name) return "";
    let clean = name.trim();
    // Remove trailing colons, asterisks, and extra spacing
    clean = clean.replace(/:\s*$/, "");
    clean = clean.replace(/\*\s*$/, "");
    clean = clean.replace(/^\s*\*/, "");
    return clean.trim();
}

function getFieldName(field) {

    // 1. Placeholder
    if (field.placeholder && field.placeholder.trim() !== "") {
        return cleanFieldName(field.placeholder);
    }

    // 2. Label using for=""
    if (field.id) {
        const label = document.querySelector(`label[for="${field.id}"]`);

        if (label && label.innerText.trim() !== "") {
            return cleanFieldName(label.innerText);
        }
    }

    // 3. aria-label
    const ariaLabel = field.getAttribute("aria-label");

    if (ariaLabel && ariaLabel.trim() !== "") {
        return cleanFieldName(ariaLabel);
    }

    // 3b. aria-labelledby
    const ariaLabelledBy = field.getAttribute("aria-labelledby");
    if (ariaLabelledBy) {
        const ids = ariaLabelledBy.split(/\s+/);
        let labels = [];
        for (const id of ids) {
            if (id) {
                const element = document.getElementById(id);
                if (element) {
                    const text = element.innerText || element.textContent;
                    if (text && text.trim() !== "") {
                        labels.push(text.trim());
                    }
                }
            }
        }
        if (labels.length > 0) {
            return cleanFieldName(labels.join(" "));
        }
    }

    // 4. name attribute
    if (field.name && field.name.trim() !== "") {
        return cleanFieldName(field.name);
    }

    // 5. Google Forms / Government Forms
    let parent = field.parentElement;

    while (parent) {

        // role="heading"
        const heading = parent.querySelector('[role="heading"]');

        if (heading && heading.innerText.trim() !== "") {
            return cleanFieldName(heading.innerText);
        }

        // spans
        const spans = parent.querySelectorAll("span");

        for (const span of spans) {

            const text = span.innerText.trim();

            if (text.length > 5) {
                return cleanFieldName(text);
            }

        }

        // divs
        const divs = parent.querySelectorAll("div");

        for (const div of divs) {

            const text = div.innerText.trim();

            if (text.length > 5) {
                return cleanFieldName(text);
            }

        }

        parent = parent.parentElement;
    }

    return "Unknown Field";
}

export function initializeFieldDetector() {

    const fields = document.querySelectorAll(
        "input, textarea, select"
    );

    console.log(`Found ${fields.length} fields`);

    fields.forEach((field) => {

        field.addEventListener("focus", () => {

            const fieldInfo = {

                name: getFieldName(field),

                placeholder: field.placeholder || "",

                type: field.type || field.tagName.toLowerCase(),

                required: field.required,

                id: field.id || "",

                nameAttribute: field.name || ""

            };

            console.log("Current Field:", fieldInfo);

            console.log(field);

            console.log(field.outerHTML);

            sendFieldInfo(fieldInfo);

        });

    });

}