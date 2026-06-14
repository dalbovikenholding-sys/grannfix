'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const tasks = [
  { cat: 'Flytt & bära',   title: 'Möbelflyttning, 2 rum',         loc: 'Luleå',  price: '800 kr', n: 2 },
  { cat: 'Städhjälp',      title: 'Storstäd 3-rums lägenhet',       loc: 'Boden',  price: '700 kr', n: 0 },
  { cat: 'Trädgård',       title: 'Gräsklippning + krattning',       loc: 'Piteå',  price: '400 kr', n: 1 },
  { cat: 'Snöskottning',   title: 'Skotta uppfart och tak',          loc: 'Luleå',  price: '320 kr', n: 3 },
  { cat: 'Montering',      title: 'IKEA, tre möbler',                loc: 'Piteå',  price: '500 kr', n: 1 },
  { cat: 'Hämtning',       title: 'Körning till återvinning',        loc: 'Luleå',  price: '200 kr', n: 0 },
  { cat: 'Städhjälp',      title: 'Inflyttningsstäd, 4 rum',         loc: 'Boden',  price: '900 kr', n: 2 },
  { cat: 'Flytt & bära',   title: 'Flytt av ett piano',              loc: 'Luleå',  price: '600 kr', n: 0 },
]

export function TaskFeedMock() {
  const [start, setStart] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStart(s => (s + 1) % tasks.length), 2600)
    return () => clearInterval(id)
  }, [])

  const visible = [0, 1, 2].map(i => tasks[(start + i) % tasks.length])

  return (
    <div className="gf-card" style={{ overflow: 'hidden', userSelect: 'none' }}>
      {/* Card header */}
      <div
        style={{
          padding: '15px 20px',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            className="pulse-dot"
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '9999px',
              background: '#22a05a',
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>Uppdrag i närheten</span>
        </div>
        <span
          style={{
            fontSize: '11px',
            color: '#9CA3AF',
            letterSpacing: '0.04em',
          }}
        >
          {tasks.length} aktiva
        </span>
      </div>

      {/* Task rows */}
      <div>
        {visible.map((task, i) => (
          <div
            key={`${start}-${i}`}
            className={i === 0 ? 'notif-in' : undefined}
            style={{
              padding: '13px 20px',
              borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none',
              background: i === 0 ? 'rgba(26,107,60,0.025)' : '#fff',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              transition: 'background 0.3s ease',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '5px',
                  flexWrap: 'wrap',
                }}
              >
                <span className="gf-chip gf-chip-green" style={{ fontSize: '10px', padding: '2px 8px' }}>
                  {task.cat}
                </span>
                {task.n === 0 && (
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#fff',
                      background: '#1a6b3c',
                      padding: '2px 7px',
                      borderRadius: '999px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    NYTT
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#111',
                  marginBottom: '3px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {task.title}
              </p>
              <p style={{ fontSize: '11px', color: '#9CA3AF' }}>
                {task.loc} · idag
                {task.n > 0 ? ` · ${task.n} intresserad${task.n !== 1 ? 'e' : ''}` : ''}
              </p>
            </div>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#1a6b3c',
                whiteSpace: 'nowrap',
                paddingTop: '2px',
                flexShrink: 0,
              }}
            >
              {task.price}
            </span>
          </div>
        ))}
      </div>

      {/* Card footer */}
      <div
        style={{
          padding: '13px 20px',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          background: '#FAFAFA',
        }}
      >
        <Link
          href="/uppdrag"
          style={{
            fontSize: '12px',
            color: '#1a6b3c',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          Visa alla uppdrag
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      if (!visible) setVisible(true)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [visible])

  return (
    <div
      ref={ref}
      className="cursor-glow hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    />
  )
}
