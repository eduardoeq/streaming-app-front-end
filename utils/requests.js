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
        url: `/discover/movie?api_key=${API_KEY}&with_genre=28`
    },
    comedy: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=35`
    },
    horror: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=27`
    },
    romance: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`
    },
    mystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=9648`
    },
    sciFi: {
        title: 'SciFi',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=878`
    },
    western: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=37`
    },
    animation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=16`
    },
    tv: {
        title: 'TV Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10770`
    }
};