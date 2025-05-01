"use client";
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  return (
    <div className={styles.c1}>
      <div className={styles.c1}>
        <Image
          src="/InkR_logo__1.png" // ✅ Starts with a forward slash
          alt="Logo"
          width={100}
          height={100}
        />


        <p className={styles.t1}>Take your stories wherever you go</p>

        <div className={styles.btnRow}>
          <button className={styles.btn1}
            onClick={() => {
              router.push('/signup')

            }}
          >Create an Account</button>

          <button className={styles.btn2}
            onClick={() => {
              router.push('/login')
            }}
          >
            <Image src="https://c8.alamy.com/comp/T2W7K9/person-icon-in-line-style-man-symbol-isolated-on-white-background-simple-avatar-abstract-icon-in-black-user-sign-in-flat-style-vector-illustration-T2W7K9.jpg"
              alt="sign in logo"
              className={styles.btnicon}
              width={20}
              height={20}
            />
            <span>Sign in with your account</span>
          </button>
        </div>
      </div>



      <Image src="https://m.media-amazon.com/images/G/01/kindle/journeys/t7Rfmh40U_1VaJ1y/MmM2OGM0Y2Et._CB544843388_.jpg"
        alt="Logo"
        className={styles.bottoming}
        width={1000}
        height={500}
      />
    </div>
  )
}

export default page