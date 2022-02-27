import React from 'react'

const Skeleton = () => {
    return (
        <div className="description">
            <div className="recipe-grid">
                <div className='recipe-card'>
                    <div className='img-circle' style={{
                        zIndex: '2'
                    }}>
                        <img src alt="" className="card-item-image loader"
                        />
                    </div>
                    <div className='card-content'>
                        <div className="loader"
                            style={{
                                minWidth: '100px', maxHeight: '15px'
                            }}
                        >&nbsp;</div>
                        {/* <hr style={{
                            borderStyle: 'ridge', borderBlockColor: 'rosy#5d4037'
                        }} /> */}
                        <div style={{
                            fontSize: '14px', marginTop: '15%', marginLeft: '15%'
                        }}>
                            <span>
                                <div className="loader"
                                    style={{
                                        maxWidth: '80px', maxHeight: '15px'
                                    }}
                                >&nbsp;</div>
                            </span><br />
                            <span>
                                <div className="loader"
                                    style={{
                                        maxWidth: '80px', maxHeight: '15px'
                                    }}
                                >&nbsp;</div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='recipe-ingr'>
                    <span style={{
                        fontWeight: '900', fontSize: '18px', color: '#5d4037',
                        wordWrap: 'break-word'
                    }}>
                        {/* <div className="loader"
                            style={{
                                maxWidth: '150px', maxHeight: '15px'
                            }}
                        >&nbsp;</div> */}
                    </span>
                    <ul style={{
                        color: '#5d4037', fontWeight: 'bold', letterSpacing: '1px', lineHeight: '100%'
                    }}>
                        <div className="loader" style={{ maxWidth: '350px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '300px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '200px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '250px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '300px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '230px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '220px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '250px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '240px', maxHeight: '15px' }}>&nbsp;</div><br />
                        <div className="loader" style={{ maxWidth: '180px', maxHeight: '15px' }}>&nbsp;</div><br />
                    </ul>
                </div>
            </div>
            <div className="how-to">
                <span style={{
                    padding: '2%', color: '#5d4037', fontSize: '18px', fontWeight: 'bold',
                    letterSpacing: '1px'
                }}>
                    <div className="loader" style={{ minWidth: '200px', maxHeight: '15px' }}>&nbsp;</div><br />
                </span>
                <span style={{
                    padding: '2%', color: '#5d4037', fontSize: '14px', fontWeight: 'bold',
                    letterSpacing: '1px'
                }}>
                    <div className="loader" style={{ minWidth: '680px', maxHeight: '15px' }}>&nbsp;</div><br />
                </span>
                <div className="loader" style={{ minWidth: '80px', maxHeight: '30px' }}>&nbsp;</div><br />
            </div>
        </div>
    )
}

export default Skeleton
