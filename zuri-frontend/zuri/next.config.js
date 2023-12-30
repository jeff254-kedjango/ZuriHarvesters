module.exports = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'jsonplaceholder.typicode.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '**',
        },
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          pathname: '**',
        },
      ],
    },
  reactStrictMode: true,
}