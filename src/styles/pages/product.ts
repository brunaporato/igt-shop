import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '1180px',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  variants: {
    type: {
      skeleton: {
        width: 576,
        background: '$gray800',
      } 
    }
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xxl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xxl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: 'all 0.2s'
    }
  },

  variants: {
    type: {
      skeletonName: {
        background: '$gray800',
        height: '3rem',
        borderRadius: 6,
        marginBottom: '1rem',
      },

      skeletonDescription: {
        background: '$gray800',
        height: '4rem',
        width: '50%',
        borderRadius: 6,
      }
    }
  }
})