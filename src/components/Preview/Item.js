import React from 'react'
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { VisibilitySensorImage } from '../VisibilyteSensorVideo/VisibilitySensorVidoe';


export const Item = ({item, removeItem}) => (
    <section className={`card${item.video ? '--video' : ''}`}>
        <Close onClick={() => removeItem(item.id)} className="card__delete" />
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