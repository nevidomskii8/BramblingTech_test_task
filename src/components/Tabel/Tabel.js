import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as StarLot } from '../../assets/svg/star-lot.svg';
import { ReactComponent as StarEmpty } from '../../assets/svg/star-empty.svg';
import { ReactComponent as Close } from '../../assets/svg/btnClose.svg';
import { getStateData } from '../../Redux/selector/stateSelector';

import './Tabel.scss';
import { getStateFilter } from '../../Redux/selector/storageSelector';
import { removeObject } from '../../Redux/action/stateAction';


export const Tabel = () => {
    const { filterByName } = useSelector(getStateFilter);
    const stateData = useSelector(getStateData);
    const dispatch = useDispatch();
    const [state, setState] = useState([]);

    useEffect(() => {
        let testRegex = filterByName ? new RegExp([filterByName?.toUpperCase()]) : /''/ ;
        setState(stateData.filter(elem => testRegex.test(elem.name.toUpperCase())));
    }, [filterByName]);

    useEffect(() => {
        let testRegex = filterByName ? new RegExp([filterByName.toUpperCase()]) :  /''/;
        filterByName
            ? setState(stateData.filter(elem => testRegex.test(elem.name.toUpperCase())))
            : setState(stateData);
    }, [stateData]);

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
                        <Close onClick={() => dispatch(removeObject(elem.id))} className="section__delete"/>
                    </section>
                ))
            }

        </div>
    )
};