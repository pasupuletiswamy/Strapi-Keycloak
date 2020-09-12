module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7b0c4700d38fbc1dd8fbfdfb3eb509a7'),
    }
  },
});
