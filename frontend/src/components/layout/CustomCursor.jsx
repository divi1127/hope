import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const move = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const over = (e) =>
      setHovering(!!e.target.closest('a, button, [role="button"]'))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[99] pointer-events-none mix-blend-multiply"
      animate={{
        x: position.x - (hovering ? 22 : 5),
        y: position.y - (hovering ? 22 : 5),
        width: hovering ? 44 : 10,
        height: hovering ? 44 : 10,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      style={{
        borderRadius: '50%',
        backgroundColor: 'rgba(233, 139, 80, 0.35)',
      }}
    />
  )
}