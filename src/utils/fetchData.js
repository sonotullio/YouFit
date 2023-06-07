export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
};

export const fetchData = async (url, options) => {
    const opt = {...options, headers: {...options.headers, 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY}};
    const res = await fetch(url, opt);
    const data = await res.json();

    return data;
};