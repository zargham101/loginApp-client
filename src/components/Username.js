import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate } from '../helpers/validate'
import { useAuthStore } from '../store/store'

import styles from '../styles/Username.module.css';

export default function Username() {

    const navigate = useNavigate();
    const setUsername = useAuthStore(state => state.setUsername)
    // const username = useAuthStore(state => state.auth.username)

    // useEffect(() => {
    //     console.log(username)
    // })

    const formik = useFormik({
        initialValues: {
            username: 'zargham1234'
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            setUsername(values.username);
            console.log(values);
        }
    })

    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'> Hello again</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
                            Explore more by connecting with us...
                        </span>
                    </div>

                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <img src={avatar} className={styles.profile_img} alt='avatar' />
                        </div>
                        <div className='textbox flex flex-col items-center gap-6'>
                            <input {...formik.getFieldProps('username')} className={styles.textbox} type='text' placeholder='Username' />
                            <button className='bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded' type='submit'>Let's Go</button>
                        </div>

                        <div className='text-center py-4'>
                            <span className='text-gray-500'>Not a member <Link className='text-red-500' to='/register'>Register Now</Link></span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
