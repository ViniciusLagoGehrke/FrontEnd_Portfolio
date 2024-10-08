import siteMetadata from '@/data/siteMetadata'
const isProduction = process.env.NODE_ENV === 'production'

export const server = isProduction ? siteMetadata.siteUrl : 'http://localhost:3000'
