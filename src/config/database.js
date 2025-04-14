module.exports = {
  dialect: "postgres",
  database: "postgres",
  username: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  define: {
    timestamps: true, // Cria duas colunas : createdAt e updateAt
    underscored: true, // nomenclatura _ (não camelCase) customersGroup > customers_group
    underscoredAll: true,
  },
};
