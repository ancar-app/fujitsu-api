/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './v1/healthcheck'
import { Methods as Methods1 } from './v2/async/jobs'
import { Methods as Methods2 } from './v2/async/jobs/cancel'
import { Methods as Methods3 } from './v2/async/jobs/result/_id@string'
import { Methods as Methods4 } from './v2/async/qubo/solve'
import { Methods as Methods5 } from './v2/qubo/solve'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.aispf.global.fujitsu.com/da' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/healthcheck'
  const PATH1 = '/v2/async/jobs'
  const PATH2 = '/v2/async/jobs/cancel'
  const PATH3 = '/v2/async/jobs/result'
  const PATH4 = '/v2/async/qubo/solve'
  const PATH5 = '/v2/qubo/solve'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    v1: {
      healthcheck: {
        get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    },
    v2: {
      async: {
        jobs: {
          cancel: {
            post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
              fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json(),
            $post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
              fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH2}`
          },
          result: {
            _id: (val4: string) => {
              const prefix4 = `${PATH3}/${val4}`

              return {
                get: (option: { headers: Methods3['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods3['get']['resBody']>(prefix, prefix4, GET, option).json(),
                $get: (option: { headers: Methods3['get']['reqHeaders'], config?: T }) =>
                  fetch<Methods3['get']['resBody']>(prefix, prefix4, GET, option).json().then(r => r.body),
                delete: (option: { headers: Methods3['delete']['reqHeaders'], config?: T }) =>
                  fetch<Methods3['delete']['resBody']>(prefix, prefix4, DELETE, option).json(),
                $delete: (option: { headers: Methods3['delete']['reqHeaders'], config?: T }) =>
                  fetch<Methods3['delete']['resBody']>(prefix, prefix4, DELETE, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            }
          },
          get: (option: { headers: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
          $get: (option: { headers: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        qubo: {
          solve: {
            post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody']>(prefix, PATH4, POST, option).json(),
            $post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T }) =>
              fetch<Methods4['post']['resBody']>(prefix, PATH4, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH4}`
          }
        }
      },
      qubo: {
        solve: {
          post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T }) =>
            fetch<Methods5['post']['resBody']>(prefix, PATH5, POST, option).json(),
          $post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T }) =>
            fetch<Methods5['post']['resBody']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
