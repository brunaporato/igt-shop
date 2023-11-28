import { styled } from "@/styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  cursor: 'pointer',
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
    transition: 'all 0.3s'
  }
})

export default function Home() {
  return (
    <Button>
      <span>teste</span>
      Enviar
    </Button>
  )
}
