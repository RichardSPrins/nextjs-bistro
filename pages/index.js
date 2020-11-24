import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'

export default function Home() {
  const [isActive, setActive] = React.useState(false)
  return (
    <div
      className="h-screen w-screen absolute"
      style={{
        backgroundImage: 'url("/home-img.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex h-60 z-10 absolute w-screen" style={{ backgroundColor: '#1E1F20' }}>
        <h1 className="z-20 text-white text-9xl mt-44 ml-20">76 GASTROPUB</h1>
        <nav className={`nav${isActive ? '' : ' active'}`}>
          <a href="#" className={styles.nav__link}>Home</a>
          <a href="#" className={styles.nav__link}>About</a>
          <a href="#" className={styles.nav__link}>Shop</a>
          <a href="#" className={styles.nav__link}>Contact</a>
        </nav>
        <div className={styles.hamburger} onClick={() => { setActive(!isActive); console.log(isActive); }}>
          <span className={styles.hamburger__patty}></span>
          <span className={styles.hamburger__patty}></span>
          <span className={styles.hamburger__patty}></span>
        </div>
      </div>
      <div></div>
      <style jsx>{`
        .nav {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: #2b2e4a;
          clip-path: circle(29px at calc(100% - 5vw - 60px / 2) calc(5vh + 60px / 2));
          transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);
        }
        .nav .active {
          clip-path: circle(75% at 100% / 2 50vh);
        }
      `}</style>
    </div>
  )
}
