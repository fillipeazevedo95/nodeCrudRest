module.exports = {
  dialect: "postgres",
  host: "localgost",
  username: "postgres",
  password: "secret",
  database: "localhost",
  define: {
    timestamp: true, // Cria duas colunas : createdAt e updateAt
    underscored: true, // nomenclatura _ (não camelCase) customersGroup > customers_group
    underscoredAll: true,
  },
};
