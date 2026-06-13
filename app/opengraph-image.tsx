import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#1a6b3c',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: '#1a6b3c',
              fontSize: 64,
              fontWeight: 800,
              fontFamily: 'sans-serif',
              lineHeight: 1,
            }}
          >
            G
          </div>
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 80,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          Grannfix
        </div>
        <div
          style={{
            color: '#a7d9bc',
            fontSize: 36,
            fontFamily: 'sans-serif',
            fontWeight: 400,
            letterSpacing: '0px',
          }}
        >
          Grannhjälp i Norrbotten
        </div>
      </div>
    ),
    { ...size }
  )
}
