import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
}

const Reveal = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.delay ?? 0.25 }}
    >
      {props.children}
    </motion.div>
  )
}

export default Reveal
