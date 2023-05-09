import Head from 'next/head'
import Link from 'next/link'

/**
 * # トップページ
 *
 * - テストで，タイトルとH1だけ設定しています．
 * - [Tailwindcss](https://tailwindcss.com/)でスタイルしています．
 */
export default function Home() {
  return (
    <div className="flex flex-col h-full text-slate-600 bg-gradient-to-t from-slate-300 to-slate-50 ">
      <Head>
        <title>Nextwind Typedoc on Docker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center p-5 text-center">
        <h1 className="text-6xl font-bold mb-5">Nextwind Typedoc on Docker</h1>
        <p className="text-4xl text-slate-500">Next.js + TailwindCSS + Jest + TypeDoc + Docker</p>
      </main>

      <footer className="flex flex-col items-center justify-center p-4">
        <p>
          Template created by <Link href="https://shijimi.dev">shijimi</Link>
        </p>
      </footer>
    </div>
  )
}
