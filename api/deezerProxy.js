export default async function handler(req, res) {
    const { query, playlist } = req.query;

    // Determine the endpoint to call based on query parameters
    let apiUrl;
    if (query) {
        // Handle search requests
        apiUrl = `https://api.deezer.com/search?q=${query}`;
    } else if (playlist) {
        // Handle genre playlists requests
        apiUrl = `https://api.deezer.com/playlist/${playlist}`;
    } else {
        // Invalid request
        return res.status(400).json({ error: "Missing required parameters" });
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching from Deezer API: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data); // Forward the Deezer API response to the client
    } catch (error) {
        console.error('Error in proxy:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from Deezer API' });
    }
}
