import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation} from "react-router-dom";
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { getStateData } from '../../Redux/selector/stateSelector';
import { removeObject } from '../../Redux/action/stateAction';
import { handleFilter } from './handleFilter';

import './Tabel.scss';;


export const Tabel = () => {
    const stateData = useSelector(getStateData);
    const dispatch = useDispatch();
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
        <div className='section-container'>
            {
                state?.map(elem => (
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
                        <Close onClick={() => dispatch(removeObject(elem.id))} className="section__delete" />
                    </section>
                ))
            }

        </div>
    )
};