import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <meta
          name="description"
          content="Meu objetivo é fazer com que todos os meus pacientes alcancem um nível de físico e saúde que sempre sonharam. Seu objetivo será o meu objetivo, e eu vou te mostrar o melhor caminho para conquistá-los."
        />
        <meta name="title"
          content="Matheus Fernandes Nutricionista pós-graduado em Nutrição, Metabolismo e Fisiologia no Exercício." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
