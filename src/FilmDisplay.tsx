import React, { useState, useEffect } from "react"

interface Props {
    data: { Title: string, Year: string, imdbRating: string, Awards: string, Genre: string, Ratings: { source: string, value: string }[], Metascore: string, imdbID: string }

}

const FilmDisplay: React.FC<Props> = ({ data }) => {
    console.log(Object.keys(data))
    const { Title, Year, imdbRating, Awards, Genre, Ratings, Metascore, imdbID } = data
    return <div>
        {data && <div className="film-info">
            <h1>{Title} - {Year}</h1>
            <h5>{imdbRating}</h5>
            <h5>{Awards}</h5>
            <h5>{Genre}</h5>
            <h5>{Ratings}</h5>
            <h5>Metascrore: {Metascore}</h5>
            <h5>IMDB ID: {imdbID}</h5>
        </div>
        }
    </div>
}

export default FilmDisplay




