import styles from '../styles/Home.module.css'

export default function Home({ locale, lastUpdate }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {locale} 
        </h1>
        Último update nessa lang <br />
        {lastUpdate}
      </main>

    </div>
  )
}


export async function getStaticProps(ctx) {
  const d = new Date()
  return { props: {
      locale: ctx.locale,
      lastUpdate: `${d.getHours()} ${d.getMinutes()} ${d.getSeconds()}`
    },
    revalidate: 10,
  }
}
