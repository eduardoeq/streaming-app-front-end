import requests from '../../utils/requests';
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

function id(props) {
    const result = props.result;
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="px-8 max-w-3xl text-xl mx-auto flex flex-col justify-center">
            <h1 className="text-4xl text-center mb-8 uppercase">
                {result.title || result.original_name}
            </h1>
            <Link href="/">
                <ChevronLeftIcon className="w-10 h-10 cursor-pointer"/>
            </Link>
            <Image
                className="object-contain"
                height={480}
                width={270}
                src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
                alt="Movie poster"
            />
            <p className="my-4">{result.overview}</p>
            <Link href={result.homepage} passHref>
                <a 
                    className="my-4 text-2xl text-rose-600 text-center mb-20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    More information
                </a>
            </Link>
        </div>
    )
}

export default id;

export async function getServerSideProps(context) {
    const id = context.query.id;
    const media_type = context.query.media_type;

    const request = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${requests.movie.apiKey}&language=en-US`)
    .then( res => {
      return res.json()
    });
  
    return {
      props: { 
        result: request
      }
    }
  }
