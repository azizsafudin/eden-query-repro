import { Elysia } from 'elysia'

const app = new Elysia().get('/example/endpoint', () => ({ hello: 'world'}))

export type App = typeof app