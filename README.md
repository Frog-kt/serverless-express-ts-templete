# Servreless TypeScript Express Templete

Templates for Serverless-framework, TypeScript, and Express environments.

## Deploy

```bash
# pnpm 
npm i -g pnpm

# install packages
pnpm install
```

### Local Deploy

```bash
# local
npm run dev

# test
npm test

# Lambda Local
serverless offline
```

### Cloud Deploy (AWS)

```bash
# Dploy aws
serverless deploy --profile {AWS Profile name} --stage {dev|stg|prod}
```
