import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { CSSTransition } from 'react-transition-group';


export const Item = ({ item, time, removeItem }) => {
    const [start, setStart] = useState(false)
    const timeRef = useRef()

    useEffect(() => {
        timeRef.current = setTimeout(() => {
            setStart(true)
        }, time * 300)
        return () => clearTimeout(timeRef.current)
    }, [])
    
    if (start)return (
            <CSSTransition
                in={start}
                key={item.id}
                timeout={1000}
                classNames='fade'
                onEnter={() => { }}

            >
                <section className="section">
                    <div className="section__name">
                        <span dangerouslySetInnerHTML={{ __html: `<img src='/images/${item.image}.svg' />` }} />
                        <span>{item.name}</span>
                    </div>
                    <div className="section__age">
                        <span>{item.age} лет</span>
                    </div>
                    <div className="section__phone">
                        <span>{item.phone}</span>
                        {item.favourite ? <StarLot /> : <StarEmpty />}
                    </div>
                    <Close onClick={() => removeItem(item.id)} className="section__delete" />
                </section>
            </CSSTransition>

    )
    return null
}