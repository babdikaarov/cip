export default ({ env }) => ({
   email: {
      config: {
         provider: "nodemailer",
         providerOptions: {
            host: env("SMTP_HOST", "smtp.mail.ru"),
            port: env("SMTP_PORT", 465),
            auth: {
               user: env("SMTP_USERNAME"),
               pass: env("SMTP_PASSWORD"),
            },
            // ... any custom nodemailer options
         },
         settings: {
            defaultFrom: env("SMTP_USERNAME"),
            defaultReplyTo: env("SMTP_USERNAME"),
         },
      },
   },
});
