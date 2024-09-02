import { motion } from 'framer-motion'
import Footer from './Footer'

interface Props {
  backgroundColor?: string
  children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <motion.div
      initial={{ translateX: '100%' }}
      animate={{ translateX: '0%' }}
      exit={{ translateX: '-100%' }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.4, 1] }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
      <Footer />
    </motion.div>
  )
}

export default Layout
