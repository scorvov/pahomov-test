import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface GlobalStyle {
    body: {
      color: string
  }
}
}
