import { defineConfig } from 'orval';

export default defineConfig({
  cinema: {
    input: {
      target: './openapi/api-spec.json',
      filters: {
        mode: 'exclude',
        tags: [/pages/, /otps/, /android/, /tester/, /car/, /deliver/, /pizza/],
        schemas: [/Otp/, /Car/, /Loan/, /Rent/, /Deliver/, /Pizza/],
      },
      override: {
        transformer: (spec) => {
          Object.values(spec.paths).forEach((path) => {
            Object.values(path).forEach((operation) => {
              if (operation.tags) {
                operation.tags = operation.tags.map((tag) =>
                  tag
                    .replace(/[^\p{L}\p{N}_-]/gu, '')
                    .replace(/^[-_]+|[-_]+$/g, ''),
                );
              }
            });
          });
          return spec;
        },
      },
    },
    output: {
      mode: 'tags-split',
      target: './src/shared/api/generated/endpoints',
      schemas: './src/shared/api/generated/models',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: './src/shared/api/instance.ts',
          name: 'instance',
        },
        header: (info) => {
          const headerLines = Array.isArray(info.header) ? info.header : [];
          return [
            '/* eslint-disable */',
            '// @ts-nocheck',
            ...headerLines,
            '',
          ].join('\n');
        },
      },
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
