export async function handleResponse(response) {
    if(response.ok) return response.json();
    if(response.status === 400) {
        const error = await response.text();
        throw new Error("Network response error: HTTP code 400");
    }
}

export function handleError(error) {
    console.error("API call failed: " + error);
    throw error;
}