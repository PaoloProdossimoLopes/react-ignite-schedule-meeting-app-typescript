import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import img from '../../assets/calendario-completo.png'
import { ClaimUsernameForm } from './components/ClainUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="lg">
          Conecte seu calendario e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={img}
          height={400}
          priority={true}
          quality={100}
          alt="preview do app"
        ></Image>
      </Preview>
    </Container>
  )
}
