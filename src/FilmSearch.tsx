import React, { useState, useEffect } from "react"
import FilmDisplay from "./FilmDisplay"
import { Film } from './Types'


const FilmSearch: React.FC = () => {
    const [filmSearch, setFilmSearch] = useState('')
    const [finalQuery, setFinalQuery] = useState('The imitation game')
    const [data, setData] = useState<Film | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const API_KEY = 'c5e8f2c8'

    const handleSubmit = (e: React.FormEvent, searchQuery: string) => {
        e.preventDefault()
        setIsLoading(true)
        setFinalQuery(searchQuery)
    }

    useEffect(() => {
        console.log('useEffect ran')
        const fetchData = async () => {
            try {
                const result = await (await fetch(`http://www.omdbapi.com/?type=movie&t=${finalQuery}&apikey=${API_KEY}`)).json()
                setData(result)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

        // useEffect(() => {
        //   formatData()
        // }, [data])


    }, [API_KEY, finalQuery])
    console.log(data)

    return (
        <>
            <form className="form" onSubmit={(e) => handleSubmit(e, filmSearch)}>
                <input type="text" value={filmSearch} className="search-input" onChange={(e) => setFilmSearch(e.target.value)} />
                <button type="submit">go</button>
            </form>
            {isLoading && '...Loading'}
            {data && <FilmDisplay data={data} />}
        </>
    )
}

export default FilmSearch