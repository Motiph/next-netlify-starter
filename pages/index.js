import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Makeup Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Makeup Machine" />
        <p className="description">
          All about you <code> Coming soon</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
