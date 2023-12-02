import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  border: 'none',
  padding: '0.75rem',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  cursor: 'pointer',

  variants: {
    position: {
      header: {
        backgroundColor: '$gray800',
        color: '$gray300',
      },
      footer: {
        backgroundColor: '$green500',
        color: '$gray100',
      }
    },
  },

  '&:hover': {
    opacity: 0.8,
  },

  span: {
    backgroundColor: '$green500',
    width: '1.68rem',
    height: '1.68rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '50%',
    border: '3px solid $gray900',

    color: '$gray100',
    fontSize: '0.87rem',
    fontWeight: 700,
    lineHeight: 1.6,

    position: 'absolute',
    right: '-0.45rem',
    top: '-0.45rem',
  }
})