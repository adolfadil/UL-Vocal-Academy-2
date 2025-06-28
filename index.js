
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>UL Vocal Academy - Free Trial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Free Trial Registration</h1>
        <p style={{ fontSize: '1rem', textAlign: 'center' }}>
          Pilih jadwal kamu dan daftar sekarang!
        </p>
      </main>
    </>
  );
}
