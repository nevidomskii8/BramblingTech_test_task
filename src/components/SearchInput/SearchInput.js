import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const SearchInput = ({sort, filterByParams,filterName, handleInput}) => {
    const [query, setQuery] = useState("")
    const history = useHistory()

    const onChange = (e) => {
        handleInput(e.target.value)
        setQuery(e.target.value)
    }

    const params = new URLSearchParams()
    useEffect(() => {
        if (query || sort || filterByParams) {
            params.set("filter", filterName)
            params.set('filter-by-params', filterByParams)
            params.set('sort', sort)
        } else {
            params.delete("filter")
        }

        history.push({ search: params.toString() })
    }, [query, history, sort, filterByParams])

    return <input  className="header__input-filter" type="text" defaultValue={filterName} onInput={onChange} />
}

export default SearchInput