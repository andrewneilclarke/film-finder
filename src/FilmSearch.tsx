import React, { useState, useEffect, useRef } from "react"
import FilmDisplay from "./FilmDisplay"
import { Film } from './Types'

const FilmSearch: React.FC = () => {
    const [filmSearch, setFilmSearch] = useState('')
    const [finalQuery, setFinalQuery] = useState('The imitation game')
    const [data, setData] = useState<Film | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<unknown>('')

    // get api key from netlify
    let serverURL: string;
    try {
        fetch('../public/netlify/functions/api')
            .then(response => {
                serverURL = response.url;
                console.log(serverURL, response)
            })
    } catch (err) {
        console.log(err)
    }

    const API_KEY = process.env.REACT_APP_API_KEY

    // reference the input field
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent, searchQuery: string) => {
        e.preventDefault()
        setIsLoading(true)
        setFinalQuery(searchQuery)
        setFilmSearch('')
        setIsLoading(false)
    }

    useEffect(() => {
        // focus the input when needed
        inputRef.current?.focus()
    }, [finalQuery])

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
        <div className="film-search">
            <form className="form" onSubmit={(e) => { if (filmSearch) { handleSubmit(e, filmSearch) } }}>
                <input ref={inputRef} type="text" value={filmSearch} className="search-input" onChange={(e) => setFilmSearch(e.target.value)} />
                <button type="submit">go</button>
            </form>
            {isLoading && '...Loading'}
            {error && JSON.stringify(error)}
            {data?.Actors && <FilmDisplay data={data} />}
        </div>
    )
}

export default FilmSearch