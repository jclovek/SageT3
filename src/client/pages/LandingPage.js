import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import ImageCarousel from '@/components/image-carousel';
import Link from 'next/link';

function LandingPage() {

  return (
    <div className='home-page'>
      <div className="landing-page">
        <div className="gen">
          <div className="socials">
            <h2>Sage Wiki</h2>
            <p>Sustaitable lifestyle blog, wiki & marketplace</p>
            <p>Find purpose in everyday choices</p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="para">
          <h1>A blog about all things planetary, mindful living and what brings joy.</h1>
          <p>Our mission is to make discovering your own path to a more aesthetic, healthy and responsible life style
            as easy as 1-2-3. Our overarching goals are to effect health through our connection to our environment –
            empower action, purpose and the power of community.</p>
        </div>
      </div>
      <div className="talk">
        <div className="talk-container">
          <div className="talk-box">
            <h2>Let's <span id='Barcelony-Font'>Talk</span></h2>
            <p>A blog about all thins planetary, mindful living and what brings us joy</p>
          </div>
          <ImageCarousel />
        </div>
      </div>
      <div className="act">
        <div className="act-container">
          <div className="act-box act-box1">
            <h1>Let's </h1>
            <h2><span id='Barcelony-Font'>Act</span></h2>
            <p>because what we buy matters</p>
          </div>
          <div className="act-box act-box2">
            <Link href='/Shop'>
              <h1>Home</h1>
              <img src="/images/home.jpg" alt="Home" />
            </Link>
          </div>
          <div className="act-box act-box3">
            <Link href='/Shop'>
              <h1>Style</h1>
              <img src="/images/style.jpg" alt="Style" />
            </Link>
          </div>
          <div className="act-box act-box4">
            <Link href='/Shop'>
              <h1>Health</h1>
              <img src="/images/health.jpg" alt="Health" />
            </Link>
          </div>
        </div>
      </div>
      <div className="gather">
        <div className="gather-title">
              <h1>Let's <span id='Barcelony-Font'>Gather</span></h1>
              <p>Where we find our common voice, learn, experience and make things happen</p>
        </div>
        <div className="gather-container">
          <div className="gather-box gather-box1">
            <Link href='#'>
              <img src="/images/experience.jpg" alt="Experience" />
              <h1 id='Barcelony-Font'>Experience</h1>
            </Link>
          </div>
          <div className="gather-box gather-box2">
            <Link href='/WikiWorld'>
              <img src="/images/world.jpg" alt="World" />
              <h1 id='Barcelony-Font'>World</h1>
            </Link>
          </div>
          <div className="gather-box gather-box3">
            <Link href="/Act">
              <img src="/images/act.jpg" alt="Act" />
              <h1 id='Barcelony-Font'>Act</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;