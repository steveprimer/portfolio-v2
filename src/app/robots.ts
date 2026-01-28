import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Allow all bots (Google, Bing, OpenAI, etc.)
      allow: '/',     // Allow access to everything
      disallow: '/private/', // Block private routes if you have any
    },
    sitemap: 'https://ansonstephan.netlify.app/sitemap.xml', // Replace with your actual domain later
  };
}