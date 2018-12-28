import styled from 'styled-components'

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${p => p.direction ? p.direction : 'row'};
  justify-content: ${p => p.justify ? p.justify : 'center'};
  align-items: ${p => p.align ? p.align : 'center'};
  width: ${p => p.stretch && p.direction !== 'col' ? '100%' : p.w ? p.w : 'auto'};
  height: ${p => p.stretch && p.direction === 'col' ? '100%' : p.h ? p.h : 'auto'};

  ${p => p.break && `
    @media(${p.mob ? 'min' : 'max'}-width: ${p.break}px){
      display: none;
    }
  `}
`
