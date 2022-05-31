import test from 'node:test'
import assert from 'node:assert'

import {
    routes
} from './../../../src/routes/heroRoute.js'
import { DEFAULT_HEADER } from '../../../src/util/util.js'

test('Hero routes - endpoints test suite', async (t) => {
    await t.todo('it should call /heroes:get route')
    await t.todo('it should call /heroes:post route')
})