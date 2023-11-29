import React from 'react'
import img from  '/image.png'
const NewsCard = ({ item }) => {

    return (
        <>
                <div className="card mb-3 rounded-0 shadow-sm p-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img style={{ height: '250px' }} src={item.urlToImage ? item.urlToImage : img} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><small className="text-body-secondary"> {item.author}</small></p>
                                <a href={item.url} target="_blank" className="btn btn-success rounded-0 float-end">Read Full News</a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default NewsCard
