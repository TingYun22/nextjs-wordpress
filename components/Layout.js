import Head from 'next/head'
import Footer from './Footer'
// import Menu from './Menu'
// import Meta from '@/components/meta'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Ting Yun</title>
        </Head>
        <main>{children}</main>
        <Footer />
    </>
  )
}