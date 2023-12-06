import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$xxl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',

    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    
    textDecoration: 'none',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  },

  '.products': {
    display: 'inline-flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
})

export const ImgContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',

  margin: '4rem 0 0 -2.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

  img: {
    objectFit: 'cover',
  },

  '&:first-child': {
    marginLeft: 0
  }
})