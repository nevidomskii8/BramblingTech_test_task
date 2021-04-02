import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { VisibilitySensorImage } from '../VisibilyteSensorVideo/VisibilitySensorVidoe';
import { CSSTransition } from 'react-transition-group';
import { current } from '@reduxjs/toolkit';


export const Item = ({ item, time, removeItem }) => {
    const [show, setShow] = useState(false)
    const timeRef = useRef()
    const timeReftoState = useRef()
    const itemRef = useRef()

    useEffect(() => {
        timeRef.current = setTimeout(() => {
            setShow(true)
        }, time * 400)
        return () => clearTimeout(timeRef.current)
    }, [])

    const handlerRemoveItem = () => {
        console.log(itemRef.current.className)
        itemRef.current.className === 'card__video--show'
            ? itemRef.current.className = 'card__video'
            : itemRef.current.className = 'card__unvideo'
        timeReftoState.current = setTimeout(() => {
            removeItem(item.id)
        }, 350)
    }

    return item.video
        ? <section ref={itemRef} className={`card__video${show ? '--show': ''}`}>
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
            <VisibilitySensorImage src={`/Videos/${item.video}.mp4`} />
        </section>
        : <section ref={itemRef} className={`card__unvideo${show ? '--show': ''}`}>
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
        </section>
}