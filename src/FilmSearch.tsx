import React, { useState, useEffect } from "react"
import FilmDisplay from "./FilmDisplay"

interface Props {

    // API_KEY: string,
}

const FilmSearch = () => {
    const [filmSearch, setFilmSearch] = useState('')
    const setQuery = (e: React.FormEvent, searchQuery: string) => {
        e.preventDefault()
        console.log(searchQuery)
    }
    const [data, setData] = useState<any>({})
    const [isLoading, setIsLoading] = useState(true)

    const API_KEY = 'c5e8f2c8'

    const { Title, Year, imdbRating, Awards } = data

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('submit form')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await (await fetch(`http://www.omdbapi.com/?type=movie&t=gump&apikey=${API_KEY}`)).json()
                setData(result)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

        // useEffect(() => {
        //   formatData()
        // }, [data])


    }, [API_KEY])
    console.log(data)

    return (
        <>
            <form className="form" onSubmit={(e) => setQuery(e, filmSearch)}>
                <input type="text" value={filmSearch} className="search-input" onChange={(e) => setFilmSearch(e.target.value)} />
                <button type="submit">go</button>
            </form>
            <FilmDisplay data={data} />
        </>
    )
}

export default FilmSearch