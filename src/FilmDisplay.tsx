import { Film } from './Types'
import Rating from './Rating'

interface Props {
    data: Film
}

const FilmDisplay: React.FC<Props> = ({ data }) => {
    const { Title, Year, imdbRating, Awards, Genre, Ratings, Metascore } = data
    const metascoreNum = parseFloat(Metascore)
    const IMDBScore = parseFloat(imdbRating) * 10
    const rottenTomatoesScore = parseFloat(Ratings[1]?.Value.split('%')[0])

    const getAverage = (score1: number, score2?: number, score3?: number) => {
        if (score1 && score2 && score3) {
            return ((score1 + score2 + score3) / 3).toFixed(0)
        } else if (score1 && score2) {
            return ((score1 + score2) / 2).toFixed(0)
        } else if (score1) {
            return (score1).toFixed(0)
        }
        else if (score2) {
            return (score2).toFixed(0)
        }
        else if (score3) {
            return (score3).toFixed(0)
        }
        return 0
    }

    const averageScore = getAverage(metascoreNum, IMDBScore, rottenTomatoesScore)
    console.log(data)
    return <div>
        {!data.Response && <div>Film not found!</div>}
        {data && <div className="film-info">
            <h1>{Title} - {Year}</h1>
            <h5>{Genre}</h5>
            <h5>IMDB Rating: {imdbRating && imdbRating}</h5>
            <h5>Awards: {Awards}</h5>
            <hr />
            <h5 style={{ fontSize: 'large' }}>Average Rating (Rotten Tomatoes, IMDB, Metacritic): <span style={{ fontSize: 'x-large' }}>{averageScore}%</span></h5>
        </div>
        }

        {averageScore && <Rating averageScore={parseFloat(averageScore)} />}
    </div>
}

export default FilmDisplay




