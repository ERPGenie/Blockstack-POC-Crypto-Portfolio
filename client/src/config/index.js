export default {
  dev: {
    coinMarketCapApiBase: 'http://localhost:9000/.netlify/functions/app',
    frontBase: 'http://localhost:8080/'
  },
  prod: {
    coinMarketCapApiBase: 'https://cryptoportfolio.netlify.com/.netlify/functions/app',
    frontBase: ''
  }
}
