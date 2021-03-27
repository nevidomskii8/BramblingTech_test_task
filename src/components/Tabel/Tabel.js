import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { getStateData } from '../../Redux/selector/stateSelector';
import './Tabel.scss';


export const Tabel = () => {
    const stateData = useSelector(getStateData);
    return (
        <div className='section-container'>
            {
                stateData?.map(elem => (
                    <section key={elem.id} className="section">
                        <div className="section__name">
                            <span dangerouslySetInnerHTML={{ __html: `<img src='/images/${elem.image}.svg' />` }} />
                            <span>{elem.name}</span>
                        </div>

                        <div className="section__age">
                            <span>{elem.age} лет</span>
                        </div>
                        <div className="section__phone">
                            <span>{elem.phone}</span>
                            {elem.favourite ? <StarLot /> : <StarEmpty />}
                        </div>
                    </section>
                ))
            }

        </div>
    )
};