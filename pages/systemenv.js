import Link from 'next/link'

import styles from '../styles/Env.module.css'

const ENV_VARS = [
  {
    name: 'VERCEL',
    value: process.env.VERCEL
  },
  {
    name: 'CI',
    value: process.env.CI
  },
  {
    name: 'VERCEL_ENV',
    value: process.env.VERCEL_ENV
  },
  {
    name: 'VERCEL_URL',
    value: process.env.VERCEL_URL
  },
  {
    name: 'VERCEL_BRANCH_URL',
    value: process.env.VERCEL_BRANCH_URL
  },
  {
    name: 'VERCEL_REGION',
    value: process.env.VERCEL_REGION
  },
  {
    name: 'VERCEL_GIT_PROVIDER',
    value: process.env.VERCEL_GIT_PROVIDER
  },
  {
    name: 'VERCEL_GIT_REPO_SLUG',
    value: process.env.VERCEL_GIT_REPO_SLUG
  },
  {
    name: 'VERCEL_GIT_REPO_OWNER',
    value: process.env.VERCEL_GIT_REPO_OWNER
  },
  {
    name: 'VERCEL_GIT_REPO_ID',
    value: process.env.VERCEL_GIT_REPO_ID
  },
  {
    name: 'VERCEL_GIT_COMMIT_REF',
    value: process.env.VERCEL_GIT_COMMIT_REF
  },
  {
    name: 'VERCEL_GIT_COMMIT_SHA',
    value: process.env.VERCEL_GIT_COMMIT_SHA
  },
  {
    name: 'VERCEL_GIT_COMMIT_MESSAGE',
    value: process.env.VERCEL_GIT_COMMIT_MESSAGE
  },
  {
    name: 'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
    value: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN
  },
  {
    name: 'VERCEL_GIT_COMMIT_AUTHOR_NAME',
    value: process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME
  },
  {
    name: 'VERCEL_GIT_PREVIOUS_SHA',
    value: process.env.VERCEL_GIT_PREVIOUS_SHA
  },
  {
    name: 'VERCEL_GIT_PULL_REQUEST_ID',
    value: process.env.VERCEL_GIT_PULL_REQUEST_ID
  },
]


export default function Env() {

  console.log("env", process.env);

  return (
    <div className={styles.outer}>
      {ENV_VARS.map((envvar) => (
        <div key={envvar.key} className={styles.inner}>
          <b><code>process.env.{envvar.name}</code></b><br />
          <code>{envvar.value || 'undefined'}</code>
        </div>
      ))}
      <div className={styles.url}>
        Repo URL to this file:<br />
        <Link href="https://github.com/sebastianroming/nextjs-starter-kit/blob/dev/pages/systemenv.js">https://github.com/sebastianroming/nextjs-starter-kit/blob/dev/pages/systemenv.js</Link>
      </div>
    </div>
  )

}
