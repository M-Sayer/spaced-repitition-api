# Spaced repetition API!

Project by Muhajir Sayer and Matthew R.

Live Link:
https://spaced-repetition-brown.vercel.app/learn

Heroku Link:
https://secret-brushlands-54692.herokuapp.com/

GitHub Client Link:
https://github.com/M-Sayer/spaced-repetition

GitHub API Link:
https://github.com/M-Sayer/spaced-repetition-api

Users can register an account which will save thier progress.

Users can login and learn French using thier user name and password.

Users learn new words through spaced-repetition.

Screenshots:
https://github.com/MattDizzle/favicon-host/blob/master/Dash.JPG?raw=true

https://github.com/MattDizzle/favicon-host/blob/master/Learn.JPG?raw=true

https://github.com/MattDizzle/favicon-host/blob/master/Login.JPG?raw=true

https://github.com/MattDizzle/favicon-host/blob/master/Registration.JPG?raw=true


POST  
https://secret-brushlands-54692.herokuapp.com/api/user


Required body format:
{
    "name": "Drake",
    "username": "aubrey",
    "password": "IbLooW1$"
}

POST  
https://secret-brushlands-54692.herokuapp.com/api/auth


Required body format:
{
    "username": "aubrey",
    "password": "IbLooW1$"
}

Returns an object containing an authToken which allows access to private routes.
example:
{
    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJuYW1lIjoiRHJhb2UiLCJpYXQiOjE1OTkzMzc2ODYsImV4cCI6MTU5OTM0ODQ4Niwic3ViIjoiYXVicmV5In0.4yyNvg2_aqfjskCvA-7Xy32YIe48vCAsvIbG3so7r6k"
}

GET 
https://secret-brushlands-54692.herokuapp.com/api/language

Bearer Token required.

Returns an object of the current head or word a person is learning.
example:
{
    "language": {
        "id": 4,
        "name": "French",
        "user_id": 4,
        "head": 32,
        "total_score": 9
    },
    "words": [
        {
            "id": 32,
            "language_id": 4,
            "original": "merci",
            "translation": "thank you",
            "next": 35,
            "memory_value": 4,
            "correct_count": 2,
            "incorrect_count": 0,
            "head": 32
        },
        {
            "id": 35,
            "language_id": 4,
            "original": "de rien",
            "translation": "you are welcome",
            "next": 34,
            "memory_value": 1,
            "correct_count": 0,
            "incorrect_count": 2,
            "head": 32
        },
        {
            "id": 34,
            "language_id": 4,
            "original": "excusez-moi",
            "translation": "excuse me",
            "next": 31,
            "memory_value": 2,
            "correct_count": 2,
            "incorrect_count": 1,
            "head": 32
        },
        {
            "id": 31,
            "language_id": 4,
            "original": "bon",
            "translation": "good",
            "next": 33,
            "memory_value": 4,
            "correct_count": 3,
            "incorrect_count": 2,
            "head": 32
        },
        {
            "id": 33,
            "language_id": 4,
            "original": "mauvais",
            "translation": "bad",
            "next": 36,
            "memory_value": 4,
            "correct_count": 2,
            "incorrect_count": 3,
            "head": 32
        },
        {
            "id": 36,
            "language_id": 4,
            "original": "demain",
            "translation": "tomorrow",
            "next": 37,
            "memory_value": 1,
            "correct_count": 0,
            "incorrect_count": 0,
            "head": 32
        },
        {
            "id": 37,
            "language_id": 4,
            "original": "hier",
            "translation": "yesterday",
            "next": 38,
            "memory_value": 1,
            "correct_count": 0,
            "incorrect_count": 0,
            "head": 32
        },
        {
            "id": 38,
            "language_id": 4,
            "original": "monde",
            "translation": "world",
            "next": 39,
            "memory_value": 1,
            "correct_count": 0,
            "incorrect_count": 0,
            "head": 32
        },
        {
            "id": 39,
            "language_id": 4,
            "original": "temps",
            "translation": "time",
            "next": 40,
            "memory_value": 1,
            "correct_count": 0,
            "incorrect_count": 0,
            "head": 32
        },
        {
            "id": 40,
            "language_id": 4,
            "original": "amour",
            "translation": "love",
            "next": null,
            "memory_value": 1,
            "correct_count": 0,
            "incorrect_count": 0,
            "head": 32
        }
    ]
}


GET 
https://secret-brushlands-54692.herokuapp.com/api/language/head

Bearer Token required.

Returns an object of the current head or word a person is learning.
example:
{
    "nextWord": "merci",
    "wordCorrectCount": 2,
    "wordIncorrectCount": 0,
    "totalScore": 9
}

## Local dev setup

If using user `dunder-mifflin`:

```bash
mv example.env .env
createdb -U dunder-mifflin spaced-repetition
createdb -U dunder-mifflin spaced-repetition-test
```

If your `dunder-mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=spaced-repetition-test npm run migrate
```

And `npm test` should work at this point

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests mode `npm test`

Run the migrations up `npm run migrate`

Run the migrations down `npm run migrate -- 0`
