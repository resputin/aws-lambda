const { NODE_ENV, MONGO_DB_URL, SESSION_SECRET, PORT } = process.env;

const CONFIG = {
  SESSION_SECRET,
  MONGO_DB_URL,
  options: {
    port: PORT,
    endpoint: '/api',
    // disable playground in production
    // playground: NODE_ENV === 'development' ? '/playground' : false
  }
};

module.exports = { ...CONFIG };
