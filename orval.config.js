export default {
  intensive: {
    input: {
      target: './openapi/api-spec.json',
      filters: {
        tags: [/cinema/, /users/, /otps/],
        schemas: [
          /Cinema/,
          /Film/,
          /User/,
          /CreateOtp/,
          /CreatePayment/,
          /^PaymentResponse/,
          /Session/,
          /SignIn/,
          /UpdateProfile/,
          /OtpResponse/,
          /Schedule/,
          /Ticket/,
          /BaseResponse/,
        ],
      },
    },
    output: {
      mode: 'tags-split',
      target: './src/api/generated/endpoints',
      schemas: './src/api/generated/models',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: './src/api/instance.ts',
          name: 'instance',
        },
        useTypeOverInterfaces: true,
      },
      clean: true,
    },
  },
};
