import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleRegister(data: any) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda</Heading>
        <Text>
          Connecte o seu calendario para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que sao agendados
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            disabled={isSignedIn}
            onClick={() => signIn('google')}
            variant="secondary"
          >
            Conectar
          </Button>
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se habilitou as permissoes
            de acesso ao google calendar
          </AuthError>
        )}

        <Button
          type="submit"
          disabled={!isSignedIn || hasAuthError}
          onClick={handleRegister}
        >
          Proximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
