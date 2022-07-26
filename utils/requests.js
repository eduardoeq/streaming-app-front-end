const API_KEY=process.env.API_KEY;

export default {
    trending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    topRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    action: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`
    },
    comedy: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`
    },
    horror: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`
    },
    romance: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`
    },
    mystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`
    },
    sciFi: {
        title: 'SciFi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`
    },
    western: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`
    },
    animation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`
    },
    tv: {
        title: 'TV Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`
    },
    movie: {
        apiKey: `${API_KEY}`
    }
};