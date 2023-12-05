import { styled } from "@/styles"

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

export const CartContainer = styled('div', {
  backgroundColor: '$gray800',
  height: '100vh',
  width: '30rem',
  position: 'absolute',
  right: '0',
  zIndex: 2,

  display: 'flex',
  flexDirection: 'column',

  padding: '1.5rem 1.5rem 3rem 3rem',

  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',

  '.close': {
    border: 'none',
    background: 'transparent',
    color: '$gray300',
    cursor: 'pointer',

    textAlign: 'end',
    marginBottom: '1.5rem',
  },

  h1: {
    fontSize: '$lg',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 0,
  }
})

export const ItemsContainer = styled('section', {
  padding: '2rem 1.5rem 0 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  
  overflowY: 'auto',

  height: 'fit-content',

  '&::-webkit-scrollbar': {
    width: 10,
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray800',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$green500',
    borderRadius: 10,
    border: '1px solid $gray800',
  }
})

export const ItemCart = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',

  gap: '1.25rem',
  alignSelf: 'stretch',

  '.details': {
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'nowrap',

    gap: '0.5rem',


    span: {
      fontSize: '$md',
      color: '$gray300',
    },

    strong: {
      fontSize: '$md',
      lineHeight: 1.6,
    },
  },
})

export const ImgContainerCart = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  height: '6rem',
  width: '6rem',
  flexShrink: 0,
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const CartBottom = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  lineHeight: 1.6,

  margin: 'auto 0 3rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '.quantity': {
    marginTop: '0.7rem'
  },

  '.price': {
    fontWeight: 700,
    fontSize: '$md',

    span: {
      '& + span': {
        fontSize: '$xl'
      }
    }
  },

})

export const RemoveButton = styled('button', {
  color: '$green500',
  fontWeight: 700,
  textAlign: 'start',
  paddingTop: '0.3rem',

  fontSize: '1rem',

  border: 'none',
  background: 'none',

  cursor: 'pointer',

  '&:hover': {
    color: '$green300',
  },
})