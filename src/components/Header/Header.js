import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router';
// import { as Router} from 'react-router-dom'
import messages from "../../appMessages";
import { sortByAge, sortById, sortByName } from '../../Redux/action/stateAction';
import { setStorage } from '../../Redux/action/storageAction';
import { getStateFilter } from '../../Redux/selector/storageSelector';
import SearchInput from '../SearchInput/SearchInput';
import './Header.scss';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export const Header = () => {
    const { nav } = useParams();
    const { push } = useHistory();
    const stateStorageFilter = useSelector(getStateFilter);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({ 
        filterByParams: null,
         sort: null, 
         filterByName: '' 
    });

    const defineState = () => {
        console.log(stateStorageFilter)
        setFilter(stateStorageFilter)
    }

    useEffect(() => {
        console.log(stateStorageFilter)
        stateStorageFilter.sort
            ? defineState()
            : setFilter({
                filterByParams: 'id',
                sort: 'ascending',
                filterByName: '',
            })
    }, []);

    useEffect(() => {
        dispatch(setStorage(filter))
    }, [filter])

    const handleInput = (value) => {
        setFilter({ ...filter, filterByName: value })
    }

    return (
        <header className='header'>
            <SearchInput
                handleInput={handleInput}
                filterName={filter.filterByName}
                sort={filter.sort}
                filterByParams={filter.filterByParams}
            />
            <section className='header__filter'>
                <div className='header__filter--params'>
                    <div
                        onClick={() => setFilter({ ...filter, filterByParams: 'id' })}
                        className={`header__params${filter.filterByParams === 'id' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterId} /></ center>
                    </ div>
                    <div
                        onClick={() => setFilter({ ...filter, filterByParams: 'name' })}
                        className={`header__params${filter.filterByParams === 'name' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterName} /> </ center>
                    </ div>
                    <div
                        onClick={() => setFilter({ ...filter, filterByParams: 'age' })}
                        className={`header__params${filter.filterByParams === 'age' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterAge} /> </ center>
                    </ div>
                </ div>
                <div className='header__filter--cending'>
                    <div
                        className={`header__cending${filter.sort === 'ascending' ? '--active' : ''}`}
                        onClick={() => setFilter({ ...filter, sort: 'ascending' })}
                    >
                        <center> <FormattedMessage {...messages.projectFilterAscending} /> </ center>
                    </ div>
                    <div
                        onClick={() => setFilter({ ...filter, sort: 'discending' })}
                        className={`header__cending${filter.sort === 'discending' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterDiscending} /> </ center>
                    </ div>
                </ div>
            </ section>
            <nav className='header__nav'>
                <div
                    onClick={() => push('/tabel')}
                    className={`header__link${nav === 'tabel' ? '--active' : ''}`}
                >
                    <center> <FormattedMessage {...messages.projectTabel} /> </ center>
                </ div>
                <div
                    onClick={() => push('/preview')}
                    className={`header__link${nav === 'preview' ? '--active' : ''}`}
                >
                    <center> <FormattedMessage {...messages.projectPreview} /> </ center>
                </ div>
            </ nav>
        </ header>
    )
};