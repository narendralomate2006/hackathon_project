// messageHandler.js

export function sendFieldInfo(fieldInfo) {

    window.dispatchEvent(

        new CustomEvent("field-selected", {

            detail: fieldInfo

        })

    );

}