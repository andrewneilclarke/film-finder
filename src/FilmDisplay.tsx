import { Film } from './Types'
import Rating from './Rating'

interface Props {
    data: Film
}


const FilmDisplay: React.FC<Props> = ({ data }) => {
    // console.log(Object.keys(data))
    const { Title, Year, imdbRating, Awards, Genre, Ratings, Metascore, imdbID } = data
    data && console.log(data, Ratings)
    return <div>
        {data && <div className="film-info">
            <h1>{Title} - {Year}</h1>
            <h5>{imdbRating}</h5>
            <h5>{Awards}</h5>
            <h5>{Genre}</h5>
            <h5>Ratings: </h5>
            {/* <h5>{Ratings.map(rating =>
            (
                <div>
                    <span>{rating.Value}</span>
                </div>
            )
            )}</h5> */}
            {/* <h5>Metascrore: {Metascore}</h5> */}
            <h5>IMDB ID: {imdbID}</h5>
        </div>
        }

        {imdbRating && <Rating imdbRating={imdbRating} />}
    </div>
}

export default FilmDisplay




