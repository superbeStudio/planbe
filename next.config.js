const withPWA = require("next-pwa")({
  dest: "public",
});

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/statistics",
        destination: "/statistics/result",
        permanent: true,
      },
    ];
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
