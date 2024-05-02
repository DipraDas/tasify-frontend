"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { Button, Col, Row } from 'antd';
import { Input } from 'antd';
import { RedEnvelopeOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import loginImage from "../assets/login.jpg"
import Image from 'next/image';
import { useForm } from "react-hook-form";
import './login.css';

const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');


    const [loginInfoData, setLoginInfoData] = useState([]);
    useEffect(() => {
        fetch('./loginInfo.json')
            .then(res => res.json())
            .then(data => setLoginInfoData(data))
    }, [])

    // const router = useRouter(); // Create a router instance

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Check if the entered credentials match the dummy data
        const user = loginInfoData.find(user => user.email === email && user.password === password);
        if (user) {
            setLoginStatus('Login Successful!');
            // router.push('/dashboard').catch(err => {
            //     console.error("Failed to navigate:", err);
            // });
            window.location.href = '/projects';

        } else {
            setLoginStatus('Login Failed: Incorrect credentials.');
        }
    };
    return (
        <Row
            justify="center"
            align="middle"
            style={{ minHeight: "100vh", borderRadius: "10px" }}
        >
            <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                <Image src={loginImage} width={500} className='rounded-l-lg' alt='login image' />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>

                <div style={{ padding: "100px 80px", backgroundColor: "white", width: "100%" }} className='rounded-r-lg'>

                    <p style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", marginBottom: "70px" }}>Sign In</p>
                    {/* <form onSubmit={handleSubmit(onSubmit)} style={{}}>
                        
                        <Input
                            placeholder="Enter your email address"
                            variant={errors.email ? "" : "borderless"}
                            suffix={
                                <RedEnvelopeOutlined
                                    style={{
                                        color: 'rgba(0,0,0,.25)',
                                    }}
                                />
                            }
                            style={{
                                borderBottom: "1px solid #bfbfbf",
                                borderRadius: 0,
                                padding: 0,
                                marginTop: "40px"
                            }}
                            {...register("email"
                                // , { required: "Email Address is required" }
                            )}
                        />
                        {Object.keys(errors).length ? (
                            <>
                                {errors.email ? (
                                    <>
                                        {/* {document.getElementById('email').classList.add('error-input')} */}
                    {/* <p style={{ color: 'red', fontSize: '13px', letterSpacing: '1.5px', width: "auto", pointerEvents: "none" }}>{errors.email?.message}</p> */}
                    {/* </> */}
                    {/* ) : ( */}
                    {/* <> */}
                    {/* {!errors.email && document.getElementById('email').classList.remove('error-input')} */}
                    {/* <p style={{ fontSize: "13px", color: "white" }}>*</p> */}
                    {/* </> */}
                    {/* )} */}
                    {/* </> */}
                    {/* ) : <p style={{ fontSize: "13px", color: "white" }}>*</p> */}
                    {/* } */}
                    {/* {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>} */}

                    {/* <Input.Password
                            type='password'
                            placeholder="Enter password"
                            variant={errors.password ? "" : "borderless"} */}
                    {/* // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} */}
                    {/* suffix={
                                <LockOutlined
                                    style={{
                                        color: 'rgba(0,0,0,.25)',
                                    }}
                                />
                            }
                            style={{
                                borderBottom: "1px solid #bfbfbf",
                                borderRadius: 0,
                                padding: 0,
                                marginTop: "40px"
                            }}
                            {...register("password"
                                // , { required: "Password is required" }
                            )}
                        /> */}
                    {/* {Object.keys(errors).length ? (
                            <>
                                {errors.password ? (
                                    <>
                                        {/* {document.getElementById('password').classList.add('error-input')} */}
                    {/* <p style={{ color: 'red', fontSize: '13px', letterSpacing: '1.5px', width: "auto", pointerEvents: "none" }}>{errors.password?.message}</p> */}
                    {/* </> */}
                    {/* ) : ( */}
                    {/* <> */}
                    {/* {!errors.password && document.getElementById('password').classList.remove('error-input')} */}
                    {/* <p style={{ fontSize: "13px", color: "white" }}>*</p> */}
                    {/* </> */}
                    {/* )} */}
                    {/* </> */}
                    {/* ) : <p style={{ fontSize: "13px", color: "white" }}>*</p> */}
                    {/* } */}

                    {/* <Button type="primary" shape="circle" size={'large'} > Login</Button> */}

                    {/* <div style={{ margin: "0 80px" }}>
                            <Input
                                style={{
                                    marginTop: "50px",
                                    backgroundColor: "black",
                                    borderRadius: "20px",
                                    color: "white",
                                    fontWeight: "semibold",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    letterSpacing: '1.5px',
                                    textTransform: "uppercase"
                                }}
                                type="submit"
                                value='Login' />
                        </div> */}
                    {/* </form>  */}
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            style={{
                                width: '100%',
                                padding: '4px 0 6px 0',
                                outline: 'none',
                                borderBottom: '1px solid black',
                                marginBottom: '20px'
                            }}
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            style={{
                                width: '100%',
                                padding: '4px 0 6px 0',
                                outline: 'none',
                                borderBottom: '1px solid black',
                                marginBottom: '40px'
                            }}
                        />
                        <input
                            type="submit"
                            value="Login"
                            style={{
                                margin: "10px 0",
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "20px",
                                padding: "10px 20px"
                            }}
                        />
                    </form>
                    {loginStatus && <p>{loginStatus}</p>}
                </div>

            </Col>
        </Row>
    );
};

export default Login;