import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nextjs</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
      </Head>
      <main class="container">
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp
