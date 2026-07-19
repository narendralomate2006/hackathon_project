import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000"
});

export async function getFieldInformation(field) {
    try {
        const response = await api.post("/field-info", {
            field: field
        });

        return response.data;

    } catch (error) {
        if (error.response) {
            console.warn(`API responded with status code ${error.response.status}:`, error.response.data);
        } else {
            console.error("Network/Server Error connecting to backend:", error.message);
        }
        return {
            found: false,
            error: true
        };
    }
}