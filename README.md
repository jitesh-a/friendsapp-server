# Friendsbook App Server

## Endpoints available

1. GET /users?limit=0&offset=10 - Get list of all users (paginated)
2. GET /users/:id - Get user by id
3. GET /users/:id/friends?limit=0&offset=10 - Get user friends (paginated)

Where limit is the number of records to be fetched and offset is the page number.

User model contains:
1. id (Auto Increment - Seed)
2. firstName
3. lastName
4. avatar

## Tech stack
1. Express
2. Jest
3. Eslint
4. mysql2
5. Supertest

### Quick setup
1. npm install
2. npm run start

### Other useful scripts
1. npm run lint (see lint erros)
2. npm run lint-fix (fix potentially fixable)
3. npm run test
