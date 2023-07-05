# API-test da Argus

## How to run for development

1. Clone this repository

```bash
npm i
```

2. Create a MariaDB database with whatever name you want
3. Configure the `.env` file using the `.env.example`
4. Run all migrations

```bash
npx prisma migrate dev
```

5. Run the back-end

```bash
npm run start
```