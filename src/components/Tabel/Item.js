import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import './Tabel.scss';

export const Item = ({ item, time, removeItem }) => {
    const [start, setStart] = useState(false)
    const timeRef = useRef()
    const timeReftoState = useRef()
    const itemRef = useRef()


    useEffect(() => {
        timeRef.current = setTimeout(() => {
            setStart(true)
        }, time * 100)
        return () => {
            clearTimeout(timeRef.current); clearTimeout(timeReftoState.current)
        }
    }, [])

    const handlerRemoveItem = () => {
        itemRef.current.className = 'section'
        timeReftoState.current = setTimeout(() => {
            removeItem(item.id)
        }, 350)
    }

    return (
        <section ref={itemRef} hidden className={`section ${start ? 'section__show' : ''}`}>
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
            <Close onClick={handlerRemoveItem} className="section__delete" />
        </section>
    )
}