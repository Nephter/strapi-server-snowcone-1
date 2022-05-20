module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array(
      "b0vUgyLzPRFKZu9uXnSFug==,tsgGFpVo2q92QD9GAGfbiw==,nBW0mlfSLNiXx/PN/iukYg==,ejsnoeWZRRufit5Q7Ep+tg=="
    ),
  },
});
