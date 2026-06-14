'use client'

import React, { useRef, useEffect, type ReactNode, type CSSProperties } from 'react'

/* ─── Scroll-reveal wrapper ─── */
interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      el.dataset.revealed = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = 'true'
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-item${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

/* ─── Word-by-word reveal (inline, no hooks needed) ─── */
function wrapWords(node: ReactNode, key: string, delay: number): ReactNode {
  if (typeof node === 'string') {
    const parts = node.split(/(\s+)/)
    return parts.map((part, i) => {
      if (part.trim() === '') return part
      return (
        <span key={`${key}-${i}`} className="word-reveal">
          <span style={{ animationDelay: `${delay + i * 0.045}s` }}>{part}</span>
        </span>
      )
    })
  }
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: ReactNode }>
    const inner = wrapWords(el.props.children, key, delay)
    return React.cloneElement(el, { key }, inner)
  }
  return node
}

interface RevealLineProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function RevealLine({ children, delay = 0, className = '' }: RevealLineProps) {
  const arr = React.Children.toArray(children)
  return (
    <span className={className || undefined}>
      {arr.map((child, i) => wrapWords(child, `rl${i}`, delay))}
    </span>
  )
}
