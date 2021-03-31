import React, { useEffect, useRef, useState } from 'react'

export const WrapperTime = (props) => {
    const [start, setStart] = useState(false)
    const timerRef = useRef()

    useEffect(() => {
        const interval = props.time * 300
        timerRef.current = setTimeout(() => {
            setStart(true)
        },interval)
        return () => clearInterval(timerRef.interval)
    },[])

    if (start) {
        return props.children
    }
    return null
}