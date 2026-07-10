import React from 'react'
import NavigationBar from './NavigationBar'

const AddStudent = () => {
    return (
        <div>
            <NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow">
                            <div class="card-header bg-primary text-white text-center">
                                <h3>Student Details </h3>
                            </div>
                            <div className="card-body">
                                <div className="row g-3">

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Admission Number</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Date of Birth</label>
                                        <input type="date" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Class/Grade</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Section</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Caste</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Father Name</label>
                                        <input type="url" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Mother Name</label>
                                        <input type="url" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Guardian Name</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Contact Number</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent