export const fetchNews = async (category = '', page = 1) => {
    const query = category;
    console.log("Fetching news...");
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=20&page=${page}&sortBy=popularity&apiKey=a4ca9f18c365447ab6d959620653d25e`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        if (data.status === 'error') {
            throw new Error(data.message);
        }

        return data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

