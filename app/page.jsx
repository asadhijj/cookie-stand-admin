"use client";
import { useContext } from 'react';
import { Inter } from '@next/font/google'
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import { AuthContext } from './contexts/auth';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const {tokens} = useContext(AuthContext);

  return (
    <>
    {tokens ? <> <Form /></> : <LoginForm />}
    </>
    
  )
}
