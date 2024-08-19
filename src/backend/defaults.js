const { DB_USER, DB_PASSWORD, DB_SUBDOMAIN, DB_NAME, PORT, LOCATION } = process.env

const defaults = {
  site: {
    port: PORT || 1200,
    name: 'Budget'
  },
  rateLimit: {
    max: 1000,
    time: 3600000/* 60 minutes = 60 (min) * 60 (sec) * 1000 (ms) */
  },
  db: {
    local: 'mongodb://127.0.0.1:27017/budget',
    server: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_SUBDOMAIN}/${DB_NAME}?retryWrites=true&w=majority`
  }
}

defaults.db.address = LOCATION === 'local'
  ? defaults.db.local
  : defaults.db.server

module.exports = defaults
