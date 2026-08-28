import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

type CursorState = 'default' | 'hover' | 'view' | 'drag' | 'text'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)

      // Detect element under cursor
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="view"]')) {
        setCursorState('view')
      } else if (target.closest('[data-cursor="drag"]')) {
        setCursorState('drag')
      } else if (target.closest('a, button, [role="button"]')) {
        setCursorState('hover')
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, span')) {
        setCursorState('text')
      } else {
        setCursorState('default')
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    const onMouseDown = () => {
      if (dotRef.current) dotRef.current.classList.add('clicking')
      if (ringRef.current) ringRef.current.classList.add('clicking')
    }
    const onMouseUp = () => {
      if (dotRef.current) dotRef.current.classList.remove('clicking')
      if (ringRef.current) ringRef.current.classList.remove('clicking')
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    // Lerp animation loop
    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t

      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible])

  return (
    <>
      {/* Dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        className={`cursor-dot cursor-dot--${cursorState} ${isVisible ? 'visible' : ''}`}
      />

      {/* Ring — follows with lag */}
      <div
        ref={ringRef}
        className={`cursor-ring cursor-ring--${cursorState} ${isVisible ? 'visible' : ''}`}
      />

      {/* Label — shows on "view" state */}
      <div
        ref={labelRef}
        className={`cursor-label ${cursorState === 'view' ? 'cursor-label--visible' : ''} ${isVisible ? 'visible' : ''}`}
      >
        View
      </div>
    </>
  )
}
