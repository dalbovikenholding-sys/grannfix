import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#1a6b3c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 700,
            fontFamily: 'sans-serif',
            lineHeight: 1,
          }}
        >
          G
        </div>
      </div>
    ),
    { ...size }
  )
}
