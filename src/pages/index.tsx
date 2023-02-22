import { SensesSection } from '@/components/SensesSection'
import { SectionTwo } from '@/components/SectionTwo'
import { HeroSection } from '../components/HeroSection'
import { MetodologySection } from '@/components/MethodologySection'
import { MFConsultingSection } from '@/components/MFConsultingSection'

import { useMobile} from '@/hooks/useMobile'
import { useEffect, useState } from 'react'

import Head from 'next/head'


export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      var {device} = useMobile() 
      setIsMobile(device)
    }
  }, [isMobile])
  return (
    <>
      <Head>
        <title>Matheus Fernandes Nutri</title>
        <meta
          name="description"
          content="Meu objetivo é fazer com que todos os meus pacientes alcancem um nível de físico e saúde que sempre sonharam."
        />
        <meta name="title" content="Matheus Fernandes Nutricionista" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/marca-dagua-mf.png" />
      </Head>
      <HeroSection />
      <SectionTwo />
      <MetodologySection />
      <SensesSection />
      {!isMobile && <MFConsultingSection />}
    </>
  )
}
