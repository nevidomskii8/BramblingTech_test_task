import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useLocation} from "react-router-dom";
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { getStateData } from '../../Redux/selector/stateSelector';
import { VisibilitySensorImage } from '../VisibilyteSensorVideo/VisibilitySensorVidoe';
import VisibilitySensor from 'react-visibility-sensor';
import { removeObject } from '../../Redux/action/stateAction';
import { handleFilter } from '../Tabel/handleFilter';
import './Preview.scss';




export const Preview = () => {
    const stateData = useSelector(getStateData);
    const dispatch = useDispatch();
    const [visible, setVisibile] = useState(false);
    const [state, setState] = useState([]);
    
    const search = useLocation().search;
    const sortParams = new URLSearchParams(search).get('filter-by-params');
    const filterName = new URLSearchParams(search).get('filter');
    const sort = new URLSearchParams(search).get('sort');

    let checkQueryParams = sort || sortParams

    useEffect(() => {
        let testRegex = filterName ? new RegExp([filterName.toUpperCase()]) : /''/;
        let sortedState = handleFilter({ sortParams, sort }, stateData)
        
        checkQueryParams && filterName.length !== 0
            ? setState(sortedState.filter(elem => testRegex.test(elem.name.toUpperCase())))
            : setState(sortedState)
    }, [stateData])

    useEffect(() => {
        let testRegex = filterName ? new RegExp([filterName.toUpperCase()]) : /''/;
        let sortedState = handleFilter({ sortParams, sort }, stateData)
        filterName && filterName.length !== 0
            ? setState(sortedState.filter(elem => testRegex.test(elem.name.toUpperCase())))
            : setState(sortedState)
    }, [sort, sortParams, filterName])



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