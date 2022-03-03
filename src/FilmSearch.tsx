import React, { useState, useEffect } from "react"
import FilmDisplay from "./FilmDisplay"
import { Film } from './Types'


const FilmSearch: React.FC = () => {
    const [filmSearch, setFilmSearch] = useState('')
    const [finalQuery, setFinalQuery] = useState('The imitation game')
    const [data, setData] = useState<Film | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<unknown>('')

    const API_KEY = process.env.REACT_APP_API_KEY

    const handleSubmit = (e: React.FormEvent, searchQuery: string) => {
        e.preventDefault()
        setIsLoading(true)
        setFinalQuery(searchQuery)
        setIsLoading(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await (await fetch(`https://www.omdbapi.com/?type=movie&t=${finalQuery}&apikey=${API_KEY}`)).json()
                setData(result)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
                setError(err.message)
            }
        }
        fetchData()
        return () => {
            setIsLoading(false)

        };
    }, [API_KEY, finalQuery])

    return (
        <>
            <form className="form" onSubmit={(e) => { if (filmSearch) { handleSubmit(e, filmSearch) } }}>
                <input type="text" value={filmSearch} className="search-input" onChange={(e) => setFilmSearch(e.target.value)} />
                <button type="submit">go</button>
            </form>
            {isLoading && '...Loading'}
            {error && JSON.stringify(error)}
            {data?.Actors && <FilmDisplay data={data} />}
        </>
    )
}

export default FilmSearch