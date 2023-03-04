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

<script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '928389575005890');
              fbq('track', 'PageView');
            `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=928389575005890&ev=PageView&noscript=1" />`,
            }}
          />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
