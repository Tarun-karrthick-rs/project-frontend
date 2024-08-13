const API_KEY = "300d097a-f21b-41de-be22-bb30ad27fa7b";
// const API_KEY="dummy";

export const getMatchInfo = async (retries = 3) => {
    const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);

            if (retries > 0 && errorData.status === 'failure' && errorData.reason.includes('Blocked')) {
                console.log(`Retrying... Attempts left: ${retries}`);
                await new Promise(resolve => setTimeout(resolve, 5000));
                return getMatchInfo(retries - 1);
            }

            throw new Error(errorData.reason || 'API request failed');
        }

        return await response.json();
    } catch (err) {
        console.error('Network/API Error:', err);
        throw err;
    }
};
