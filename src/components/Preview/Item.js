import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { VisibilitySensorImage } from '../VisibilyteSensorVideo/VisibilitySensorVidoe';
import { CSSTransition } from 'react-transition-group';


export const Item = ({ item, time, removeItem }) => {
    const [start, setStart] = useState(false)
    const timeRef = useRef()
    const timeReftoState = useRef()
    const itemRef = useRef()

    useEffect(() => {
        timeRef.current = setTimeout(() => {
            setStart(true)
        }, time * 300)
        return () => clearTimeout(timeRef.current)
    }, [])

    const handlerRemoveItem = () => {
        // const {className} = 
        itemRef.current.className === 'card__show' 
        ? itemRef.current.className = 'card'
        : itemRef.current.className = 'card--video'
        timeReftoState.current = setTimeout(() => {
            removeItem(item.id)
        }, 350)
    }

    return (
        <section ref={itemRef} className={`card__show${item.video ? '--video__show' : ''}`}>
            <Close onClick={handlerRemoveItem} className="card__delete" />
            <div className='card__info'>
                <div className="card__info--head">
                    <span dangerouslySetInnerHTML={{ __html: `<img src='/images/${item.image}.svg' />` }} />
                    <span>{item.name}</span>
                    {item.favourite ? <StarLot /> : <StarEmpty />}
                </div>

                <div className="card__info--medium">
                    <p>{item.age} лет</p>
                    <p>{item.phone}</p>
                </div>
                <div className="card__info--foot">
                    {item.phrase}
                </div>
            </div>

            {item.video &&
                <VisibilitySensorImage src={`/Videos/${item.video}.mp4`} />
            }
        </section>

    )
    return null

}