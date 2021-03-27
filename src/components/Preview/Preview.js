import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as StatLot } from '../../assets/svg/star-lot.svg';
import { getStateData } from '../../Redux/selector/stateSelector';
import './Preview.scss';

export const Preview = () => {

    const stateData = useSelector(getStateData);

    return (
        <div className='card-container'>
            {
                stateData?.map(elem => (
                    <section key={elem.id} className={`card${elem.video ? '--video' : ''}`}>
                <div className="card__info">
                    <div className="card__info--head">
                    <span dangerouslySetInnerHTML={{ __html: `<img src='/images/${elem.image}.svg' />` }} />
                        <span>{elem.name}</span>
                        <StatLot />
                    </div>
                    
                    <div className="card__info--medium">
                        <p>{elem.age} лет</p>
                        <p>{elem.phone}</p>
                    </div>
                    <div className="card__info--foot">
                        {elem.phrase}
                    </div>
                </div>
                {elem.video && <video width="470" height="250" controls autoPlay={true}>
                    <source src={`/Videos/${elem.video}.mp4`} type="video/mp4" />
                </video>}
            </section>
                ))
            }
        </div>
    )
};