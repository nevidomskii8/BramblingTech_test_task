import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import './Header.scss'

export const Header = () => {
    const { nav } = useParams()
    const { push } = useHistory()
    const [activeParams, setActiveParams] = useState(null)
    const [activeCending, setActiveCending] = useState(null)

    

    return (
        <header className="header">
            <section className="header__filter">
                <div className="header__filter--params">
                    <div className={`header__params${activeParams === "ID" ? '--active' : ''}`}>
                        <center>ID</center>
                    </div>
                    <div className={`header__params${activeParams === "Имя" ? '--active' : ''}`}>
                        <center>Имя</center>
                    </div>
                    <div className={`header__params${activeParams === "Возраст" ? '--active' : ''}`}>
                        <center>Возраст</center>
                    </div>
                </div>
                <div className="header__filter--cending">
                    <div className={`header__cending${activeCending === 'По возростанию' ? '--active' : ''}`}>
                        <center>По возростанию</center>
                    </div>
                    <div className={`header__cending${activeCending === 'По убыванию' ? '--active' : ''}`}>
                        <center>По убыванию</center>
                    </div>
                </div>
            </section>
            <nav className="header__nav">
                <div
                    onClick={() => push('/tabel')}
                    className={`header__link${nav === "tabel" ? '--active' : ''}`}
                >
                    <span>
                        таблица
                    </span>
                </div>
                <div
                    onClick={() => push('/preview')}
                    className={`header__link${nav === 'preview' ? '--active' : ''}`}
                >
                    <span>
                        превью
                    </span>
                </div>
            </nav>
        </header>
    )
}