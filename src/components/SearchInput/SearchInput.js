import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

const SearchInput = ({sort, filterByParams,filterName, handleInput}) => {
    const { nav } = useParams();

    const [query, setQuery] = useState("")
    const history = useHistory()

    const onChange = (e) => {
        handleInput(e.target.value)
    }

    useEffect(() => {
        setQuery(filterName)
    },[filterName])

    useEffect(() => {
        setQuery('')
        console.log('naaav')
    },[nav])

    

    const params = new URLSearchParams()
    useEffect(() => {
        if (sort || filterByParams) {
            params.set("filter", filterName)
            params.set('filter-by-params', filterByParams)
            params.set('sort', sort)
        } else {
            params.delete("filter")
        }

        history.push({ search: params.toString() })
    }, [query, history, sort, filterByParams])

    return <input  className="header__input-filter" type="text" value={query} onChange={onChange} />
}

export default SearchInput