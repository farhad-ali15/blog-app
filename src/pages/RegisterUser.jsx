import React from 'react'
import Header from '../components/Header'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function RegisterUser() {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            address: '',
            phone: ''
        },
        validationSchema: Yup.object({
            fullname: Yup.string().min(3, 'Please provide at least 3 characters in name').required('Please provide your name'),
            email: Yup.string().required('Please provide your valid email').email(),
            address: Yup.string().min(3, 'Please provide at least 5 characters in address').required('Please provide your address'),
            phone: Yup.string().min(3, 'Please provide at least 11 characters in phone').required('Please provide your Phone Number'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })


    return (
        <div>
            <Header />
            <form onSubmit={formik.handleSubmit} >
                <div className="row mb-3">
                    <label htmlfor="fullname" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} type="text" name='fullname' className="form-control" id="fullname" />
                        <span style={{ color: 'red' }}>{formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname : null}</span>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlfor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="text" name='email' className="form-control" id="email" />
                        <span style={{ color: 'red' }}>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlfor="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input onChange={formik.handleChange} value={formik.values.address} onBlur={formik.handleBlur} type="text" name='address' className="form-control" id="address" />
                        <span style={{ color: 'red' }}>{formik.touched.address && formik.errors.address ? formik.errors.address : null}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlfor="phone" className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} type="text" name='phone' className="form-control" id="phone" />
                        <span style={{ color: 'red' }}>{formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}</span>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
    )
}

export default RegisterUser