
import styles from '../styles/Env.module.css'

const ENV_VARS = [
  {
    name: 'NEXT_PUBLIC_VERCEL_ENV',
    value: process.env.NEXT_PUBLIC_VERCEL_ENV
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_URL',
    value: process.env.NEXT_PUBLIC_VERCEL_URL
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_BRANCH_URL',
    value: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_PROVIDER',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_REPO_ID',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_ID
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME
  },
  {
    name: 'NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID',
    value: process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID
  },
]


export default function Env() {

  return (
    <div className={styles.outer}>
      {ENV_VARS.map((envvar) => (
        <div key={envvar.key} className={styles.inner}>
          <b><code>process.env.{envvar.name}</code></b><br />
          <code>{envvar.value || 'undefined'}</code>
        </div>
      ))}
      </div>
  )

}
