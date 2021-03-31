import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { getStateData } from '../../Redux/selector/stateSelector';
import { removeObject} from '../../Redux/action/stateAction';
import { TransitionGroup } from 'react-transition-group';
import { Item } from './Item';
import { handleFilter } from '../../helper/handleFilter';
import './Tabel.scss';


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

        if (checkQueryParams && filterName.length !== 0) {
            setState(sortedState.filter(elem => testRegex.test(elem.name.toUpperCase())))
        } else {
            setState(sortedState)
        }
    }, [stateData])

    useEffect(() => {
        let testRegex = filterName ? new RegExp([filterName.toUpperCase()]) : /''/;
        let sortedState = handleFilter({ sortParams, sort }, stateData)

        filterName && filterName.length !== 0
            ? setState(sortedState.filter(elem => testRegex.test(elem.name.toUpperCase())))
            : setState(sortedState)
    }, [sort, sortParams, filterName])

    const removeItem = id => dispatch(removeObject(id))



    return (
        <div className='section-container'>
            <TransitionGroup>
                {
                    state.map((item, i) => {
                        return (
                            <Item item={item} key={i} time={i} removeItem={removeItem} />
                        )
                    })
                }
            </TransitionGroup>

        </div>
    )
};