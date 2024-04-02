'use client';

import { useState } from 'react';

export default function Filter(props) {
    const [duration, setDuration] = useState("7");
    
    const changeDuration = e => {
        setDuration(e.target.value);
    }

    return (
        <section className="section">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card main-search" id="main-search">
                        <style jsx>{`
                            .main-search {
                                margin-top: -40px;
                            }
                            .card-body {
                                padding-top: 20px;
                            }
                        `}</style>
                        <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-2 mb-2">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="1" checked={duration === "1"} onChange={changeDuration} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                Today
                                </label>
                            </div>
                            </div>
                            <div className="col-md-2 mb-2">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="7" checked={duration === "7"} onChange={changeDuration} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                This Week
                                </label>
                            </div>
                            </div>
                            <div className="col-md-2 mb-2">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="30" checked={duration === "30"} onChange={changeDuration} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                This Month
                                </label>
                            </div>
                            </div>

                            {props.detailedStats ?
                            (
                                <>
                                    <div className="col-md-3 mb-2">                                
                                    <select className="form-control" name="registry">
                                        {/* @foreach ($registries as $key => $registry)
                                        <option value="{{ $key }}">{{ $registry }}</option>
                                        @endforeach */}
                                    </select>    
                                    </div>
                                    <div className="col-md-3 mb-2">                                
                                    <select className="form-control" name="civCrim">
                                        {/* @foreach ($civCrim as $key => $value)
                                        <option value="{{ $key }}">{{ $value }}</option>
                                        @endforeach */}
                                    </select>    
                                    </div>
                                </>
                            ) : ''}
                        </div>             
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}