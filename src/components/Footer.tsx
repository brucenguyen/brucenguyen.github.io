import { Github, LinkedIn, PaperPlane } from './Icons'
import { styled } from 'styled-components'
import Reveal from './Reveal'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em 8em;
  flex-wrap: wrap;
  gap: 1em;
  box-sizing: border-box;

  p {
    font-size: 1em;
  }

  @media(max-width: 720px) {
    padding: 1em 4em;
  }

  @media(max-width: 400px) {
    justify-content: center;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;

  svg {
    opacity: 0.5;
    transition: opacity 250ms;

    &:hover {
      opacity: 1;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <Reveal delay={0}>
          <a title="Github" href="https://github.com/brucenguyen" target="_blank" rel="noopener noreferrer">
            <Github color="white" />
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <a title="LinkedIn" href="https://www.linkedin.com/in/brucenguyencs" target="_blank" rel="noopener noreferrer">
            <LinkedIn color="white" />
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a title="Email" href="mailto:bruce.nguyen@uwaterloo.ca">
            <PaperPlane color="white" />
          </a>
        </Reveal>
      </IconContainer>
      <Reveal delay={0.3}>
        <p>{'© Bruce Nguyen 2024'.toLowerCase()}</p>
      </Reveal>
    </FooterContainer>
  )
}

export default Footer
