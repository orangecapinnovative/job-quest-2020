const authen = {
  user: "admin",
  pass: "1234",
};

module.exports = {
  stringConnection: `mongodb+srv://${authen.user}:${authen.pass}@job-quest.sgcyz.mongodb.net/thaijoke`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  host: "job-quest.sgcyz.mongodb.net",
};
