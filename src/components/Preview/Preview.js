import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { getStateData } from '../../Redux/selector/stateSelector';
import { VisibilitySensorImage } from '../VisibilyteSensorVideo/VisibilitySensorVidoe';
import './Preview.scss';
import VisibilitySensor from 'react-visibility-sensor';
import { getStateFilter } from '../../Redux/selector/storageSelector';
import { removeObject } from '../../Redux/action/stateAction';



export const Preview = () => {
    const {filterByName} = useSelector(getStateFilter);
    const stateData = useSelector(getStateData);
    const dispatch = useDispatch();
    const [visible, setVisibile] = useState(false);
    const [state, setState] = useState([]);

    useEffect(() => {
        let testRegex = filterByName ? new RegExp([filterByName.toUpperCase()]) : /''/;
        setState(stateData.filter(elem => testRegex.test(elem.name.toUpperCase())));
    }, [filterByName]);

    useEffect(() => {
        let testRegex = filterByName ? new RegExp([filterByName.toUpperCase()]):  /''/;
        filterByName
            ? setState(stateData.filter(elem => testRegex.test(elem.name.toUpperCase())))
            : setState(stateData);
    }, [state]);


    return (
        <div className='card-container'>
            {
                state?.map((elem, i) => (
                    <VisibilitySensor
                        key={elem.id}
                        onChange={isVisible => {
                            if (isVisible && !visible) {
                                setVisibile(true);
                            }
                            if (!isVisible && visible) {
                                setVisibile(false);
                            }
                        }}
                    >
                        {/* <div className={`visblie-wraper${i % 2 === 0 ? '__odd' : '__even'}${visible ? '--visible' : '--unvisible'}`}> */}
                            <section className={`card${elem.video ? '--video' : ''}`}>
                            <Close onClick={() => dispatch(removeObject(elem.id))} className="card__delete"/>
                                <div className='card__info'>
                                    <div className="card__info--head">
                                        <span dangerouslySetInnerHTML={{ __html: `<img src='/images/${elem.image}.svg' />` }} />
                                        <span>{elem.name}</span>
                                        {elem.favourite ? <StarLot /> : <StarEmpty />}
                                    </div>

                                    <div className="card__info--medium">
                                        <p>{elem.age} лет</p>
                                        <p>{elem.phone}</p>
                                    </div>
                                    <div className="card__info--foot">
                                        {elem.phrase}
                                    </div>
                                </div>
                                
                                {elem.video &&
                                    <VisibilitySensorImage src={`/Videos/${elem.video}.mp4`} />
                                }
                            </section>
                        {/* </div> */}
                    </VisibilitySensor>
                ))
            }
        </div>
    )
};