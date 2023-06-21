const PROXY_CONFIG = [
  {
    context: [
      "/Student",
    ],
    target: "https://localhost:44351/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
