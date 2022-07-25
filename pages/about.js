function about() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl text-center my-8 uppercase">About</h1>
        <p className="my-4">This is a Next.js Demo that uses The Movie Database to build a generic streaming app front-end.</p>
        <p className="my-4">Some of the tools used in this project are:</p>
        <ul className="list-disc px-6">
            <li>Next.js</li>
            <li>TMDB API</li>
            <li>Server-side rendering</li>
            <li>Dynamic routes</li>
            <li>Tailwind CSS</li>
            <li>Vercel hosting</li>
        </ul>
        <p className="my-8 text-center">Built by <a className="text-rose-600 font-bold" href="https://github.com/eduardoeq" rel="noopener noreferrer" target="_blank">Eduardo Raizer</a></p>
    </div>
  )
}

export default about