import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './style'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit">
        reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
