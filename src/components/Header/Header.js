import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import messages from "../../appMessages";
import { setStorage } from '../../Redux/action/storageAction';
import { getStateFilter } from '../../Redux/selector/storageSelector';
import './Header.scss';

export const Header = () => {
    const { nav } = useParams();
    const { push } = useHistory();
    const stateStorageFilter = useSelector(getStateFilter);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({params:null,cending: null});

    useEffect(() => {
        console.log(stateStorageFilter)
        stateStorageFilter.cending
            ? setFilter(stateStorageFilter)
            : setFilter({
                params: 'id',
                cending: 'ascending',
            })
    }, []);

    useEffect(() => {
        dispatch(setStorage(filter))
    }, [filter])
    
    return (
        <header className='header'>
            <section className='header__filter'>
                <div className='header__filter--params'>
                    <div
                        onClick={() => setFilter({ ...filter, params: 'id' })}
                        className={`header__params${filter.params === 'id' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterId} /> </ center>
                    </ div>
                    <div
                        onClick={() => setFilter({ ...filter, params: 'name' })}
                        className={`header__params${filter.params === 'name' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterName} /> </ center>
                    </ div>
                    <div
                        onClick={() => setFilter({ ...filter, params: 'age' })}
                        className={`header__params${filter.params === 'age' ? '--active' : ''}`}
                    >
                        <center> <FormattedMessage {...messages.projectFilterAge} /> </ center>
                    </ div>
                </ div>
                <div className='header__filter--cending'>
                    <div
                        className={`header__cending${filter.cending === 'ascending' ? '--active' : ''}`}
                        onClick={() => setFilter({ ...filter, cending: 'ascending' })}
                    >
                        <center> <FormattedMessage {...messages.projectFilterAscending} /> </ center>
                    </ div>
                    <div
                        onClick={() => setFilter({ ...filter, cending: 'discending' })}
                        className={`header__cending${filter.cending === 'discending' ? '--active' : ''}`}
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