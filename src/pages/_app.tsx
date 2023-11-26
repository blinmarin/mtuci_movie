import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import {Varela_Round} from 'next/font/google'

const Varela = Varela_Round({weight: '400', subsets: ['latin']})

const App = ({ Component, pageProps }: AppProps) => (
  <main className='Varela text-2xl w-screen bg-amber-50 text-amber-800 font-bold' >
    <Layout >
      <Component {...pageProps} />
    </Layout>
  </main>


)

export default App
