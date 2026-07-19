// formDetector.js

export function hasForm() {

    const forms = document.querySelectorAll("form");

    const inputs = document.querySelectorAll("input");

    const selects = document.querySelectorAll("select");

    const textareas = document.querySelectorAll("textarea");

    return (
        forms.length > 0 ||
        inputs.length > 2 ||
        selects.length > 0 ||
        textareas.length > 0
    );

}