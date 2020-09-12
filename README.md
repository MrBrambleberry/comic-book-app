
# Marvel API demo

The purpose of this applicationis to render content from the [Marvel API](https://developer.marvel.com/) using React components

## How do I run the application?

Follow these steps:

1) [Sign up to a Marvel Developer account](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2F) to get your API keys (don't forget to whitelist the domain `localhost` too)
2) Create a file called `.env.local` in the project root
3) Within this file add your public and private key in the following format:
```
REACT_APP_MARVEL_PUBLIC_KEY='your public key'
REACT_APP_MARVEL_PRIVATE_KEY='your private key'
```
Then simply run `npm run start` in the project root and you'll run the app

This will allow you to see Marvel API content. The API is rate limited and subject to [terms of use](https://developer.marvel.com/terms)

Tests can be run using `npm run test`

Data provided by Marvel. © 2014 Marvel