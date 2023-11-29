import React, { useContext, useState } from 'react'
import NewsContext from '../context/NewsContext'

const Navbar = () => {
    //  const [text,setText] = useState("")
     const {Newsdispatch,getNews,input,nav}= useContext(NewsContext);
     let search = (e) => {
        e.preventDefault();
        getNews()
        Newsdispatch({
            type: "Input",
            payload: ""
        })
    }
    let Inputchange = (e) => {
        Newsdispatch({
            type: "Input",
            payload: e.target.value
        })
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">KAL TAK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#" onClick={nav}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={nav} href="#">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " onClick={nav} aria-disabled="true">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " onClick={nav} aria-disabled="true">Politics</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={search}>
                            <input className="form-control me-2" type="search" placeholder="Search" value={input} onChange={Inputchange} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
