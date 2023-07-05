# API-test da Argus

## How to run for development

1. Clone this repository

```bash
npm i
```

2. Create a MariaDB database with whatever name you want
4. Configure the `.env` file using the `.env.example`
5. Run all migrations

```bash
npx prisma migrate dev
```

6. Seed db

```bash
npm run dev:seed
```

6. Run the back-end

```bash
npm run start
```