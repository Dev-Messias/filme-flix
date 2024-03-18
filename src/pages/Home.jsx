
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

function Home(){
    return(
        <>
            <Hero/>
            <MovieRow title="Upcomig" url={import.meta.env.VITE_UPCOMING} />
            <MovieRow title="Trending" url={import.meta.env.VITE_TRENDING} />
            <MovieRow title="Top Rated" url={import.meta.env.VITE_TOP_RATED} />
            <MovieRow title="Popular" url={import.meta.env.VITE_POPULAR} />
        </>
    )
}

export default Home;