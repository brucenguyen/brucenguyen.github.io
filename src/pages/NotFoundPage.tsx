import styled from 'styled-components'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 4em 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV2eDhzNmtpbnY1ZWFuMm54NjgzMnI3OXJqdGc3eW15Y3BqaWVtYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JJKs3I69qfaQleE/giphy.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media(max-width: 720px) {
    padding: 2em 4em;
  }
`

const HeaderText = styled.h1`
  font-size: 3em;

  @media(max-width: 1080px) {
    font-size: 2em;
  }
`

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Reveal>
          <HeaderText>page not found</HeaderText>
        </Reveal>
        <Reveal delay={0.5}>
          <p>
            {`This isn't the page you're looking for. `}
            <Link to="/">Return.</Link>
          </p>
        </Reveal>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
