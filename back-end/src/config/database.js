module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'dockerpassword',
  database: 'beachguide',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};