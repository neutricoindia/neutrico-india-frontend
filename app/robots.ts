import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: ['Applebot', 'Bingbot', "MSNBot"],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://www.neutricoindia.in/sitemap.xml',
  }
}