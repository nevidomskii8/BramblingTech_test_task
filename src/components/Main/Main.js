import React from 'react'
import { useParams } from 'react-router'
import { Header } from '../Header/Header'
import { Preview } from '../Preview/Preview'
import { Tabel } from '../Tabel/Tabel'
import './Main.scss'

export const Main = () => {
    const { nav } = useParams()

    return (
        <div className='container'>
            <Header/>
            <main className="main">
            {nav === 'tabel' && <Tabel/>}
            {nav === 'preview' && <Preview/>}
            </main>
        </div>
    )
}