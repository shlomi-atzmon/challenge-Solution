# Fastify vs Express benchmark

A total number of 10000 users request 100 Cards.

- First commit contains express configuration
- Second commit contains fastify configuration

## Setup

- Redis server runs on a docker container - port 6379
- Tests ran on a Intel i7-8550U CPU @ 1.80GHz × 8 / 16.0 GiB machine
- NodeJS version v16.15

## Test took in seconds

- Express: 68s avg.
- Fastify: 16s avg.

## Challenge repository

https://github.com/Moonactive-BE-Meetup/BE-Challenge
