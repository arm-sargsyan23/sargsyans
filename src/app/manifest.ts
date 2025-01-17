import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sargsyan's",
    short_name: 'SS',
    description: "Best youtube's alternative platform.",
    scope: '/',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#191B28',
    theme_color: '#ef4444',
    icons: [
      {
        src: '/images/256.png',
        sizes: '256x256',
        type: 'image/png'
      }
    ]
  }
}
