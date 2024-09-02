import styled from 'styled-components'
import Reveal from '../components/Reveal'
import { ChevronDown } from '../components/Icons'
import Layout from '../components/Layout'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 8em 16em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;

  svg {
    width: 48px;
    height: 48px;
  }

  @media(max-width: 2560px) {
    padding: 4em 8em;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media(max-width: 720px) {
    padding: 2em 4em;
  }
`

const HeaderText = styled.h1`
  font-size: 4em;

  @media(max-width: 2560px) {
    font-size: 3em;
  }

  @media(max-width: 1080px) {
    font-size: 2em;
  }
`

const SubheaderText = styled.h2`
  font-size: 4vw;

  @media(max-width: 720px) {
    font-size: 1.5em;
  }
`

const DescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media(max-width: 1000px) {
    width: 100%;
  }
`

const BottomAlignedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
`

const ScrollCTAContainer = styled.div`
  padding: 2em 8em;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media(max-width: 720px) {
    padding: 1em 4em;
  }
`

const FixedContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
`

const BannerContainer = styled(FixedContainer)`
  img {
    object-fit: cover;
    object-position: right center;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at right, rgba(0,0,0,0) 25%,rgba(0,0,0,1) 60%,rgba(0,0,0,1) 100%);
    border-radius: 50%;
    position: absolute;
    top: 0; left: 0;
    transform: scale(1.5);
  }
`

const Aurora1 = styled.div`
  box-shadow: 0 0 60vmax 45vmax purple;
  animation: hueRotate 10s 0s linear infinite, aurora-1 19s 0s ease-in-out infinite;
  position: absolute;
  opacity: 3%;
  width: 1px;
  height: 2px;
  border-radius: 50%;

  @keyframes aurora-1 {
    0% {
      top: 0%;
      left: 50%;
    }
    25% {
      left: 0%;
    }
    50% {
      top: 100%;
    }
    75% {
      left: 100%;
    }
    100% {
      top: 0%;
      left: 50%;
    }
  }
`

const Aurora2 = styled.div`
  box-shadow: 0 0 60vmax 45vmax red;
  animation: hueRotate 15s 0s linear infinite, aurora-2 25s 0s ease-in-out infinite;
  position: absolute;
  opacity: 3%;
  width: 2px;
  height: 1px;
  border-radius: 50%;

  @keyframes aurora-2 {
    0% {
      top: 50%;
      left: 100%;
    }
    25% {
      top: 100%;
    }
    50% {
      left: 0%;
    }
    75% {
      top: 0%;
    }
    100% {
      top: 50%;
      left: 100%;
    }
  }
`

const Aurora3 = styled.div`
  box-shadow: 0 0 60vmax 45vmax magenta;
  animation: hueRotate 20s 0s linear infinite, aurora-3 15s 0s ease-in-out infinite;
  position: absolute;
  opacity: 3%;
  width: 1px;
  height: 1px;
  border-radius: 50%;

  @keyframes aurora-3 {
    0% {
      top: 100%;
      left: 50%;
    }
    25% {
      left: 100%;
    }
    50% {
      top: 0%;
    }
    75% {
      left: 0%;
    }
    100% {
      top: 100%;
      left: 50%;
    }
  }
`

const HomePage = () => {
  const yearsElapsed = new Date().getUTCFullYear() - 2021

  const aboutRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['0 1', '1.25 1'],
  })
  const [scrollY, setScrollY] = useState(scrollYProgress.get())
  useMotionValueEvent(scrollYProgress, 'change', position => setScrollY(position))

  return (
    <>
      <FixedContainer style={{ opacity: 1 - scrollY }}>
        <Aurora1 />
        <Aurora2 />
        <Aurora3 />
      </FixedContainer>
      <BannerContainer style={{ opacity: scrollY * 0.5 }}>
        <img src="/images/headshot.jpg" alt="Bruce" />
      </BannerContainer>
      <Layout>
        <Section>
          <Reveal>
            <HeaderText>{'Bruce Nguyen'.toLowerCase()}</HeaderText>
          </Reveal>
          <Reveal delay={0.5}>
            <SubheaderText>
              <span>Software Engineer /</span>
              {' '}
              <span>Designer /</span>
              {' '}
              <span>Toronto-based.</span>
            </SubheaderText>
          </Reveal>
          <Reveal delay={1}>
            <BottomAlignedContainer style={{ opacity: 1 - scrollY }}>
              <ScrollCTAContainer>
                <ChevronDown color="white" />
              </ScrollCTAContainer>
            </BottomAlignedContainer>
          </Reveal>
        </Section>
        <Section>
          <DescriptionContainer ref={aboutRef}>
            <Reveal>
              <p>
                Hey, I am a software engineer based out of Toronto. My passion is in blurring the lines between engineering and art. I have
                {' '}
                {yearsElapsed}
                {' '}
                years of experience building web applications, and a lifetimes worth of experience appreciating good design.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p>
                <br />
                Currently full-time as a Software Engineer at
                {' '}
                <a href="https://toolbx.com" target="_blank" rel="noopener noreferrer">TOOLBX</a>
                {' '}
                building e-commerce solutions for building suppliers.
              </p>
            </Reveal>
          </DescriptionContainer>
        </Section>
      </Layout>
    </>
  )
}

export default HomePage
