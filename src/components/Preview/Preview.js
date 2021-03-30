import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { getStateData } from '../../Redux/selector/stateSelector';
import VisibilitySensor from 'react-visibility-sensor';
import { removeObject } from '../../Redux/action/stateAction';
import './Preview.scss';
import { handleFilter } from '../../helper/handleFilter';
import { Item } from './Item';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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

    const removeItem = (id) => dispatch(removeObject(id))
    return (
        <div className='card-container'>
            <TransitionGroup>
                {
                    state?.map((item, i) => (

                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            unmountOnExit
                            classNames={`${i % 2 === 0 ? 'cardLeft' : 'cardRight'}`}
                        >
                            <Item item={item} removeItem={removeItem} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
};