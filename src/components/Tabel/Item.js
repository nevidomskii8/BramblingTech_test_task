import React from 'react'
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';


export const Item = ({item, removeItem}) => {
    return (
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
    )
}