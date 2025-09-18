export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://res.cloudinary.com/donpcwlwk/image/upload/v1714638525/IMG_8227_gy6ylo_Squared_q8szk6.jpg',
      light: 'https://res.cloudinary.com/donpcwlwk/image/upload/v1714638525/IMG_8227_gy6ylo_Squared_q8szk6.jpg',
      alt: 'My profile picture'
    },
    meetingLink: '',
    email: 'rokas.kirdulis@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'red',
      neutral: 'neutral'
    },
  },
  footer: {
    credits: `Custom made by me • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/rokas_kirdulis?igsh=enhsZjEzczBoNGg3&utm_source=qr',
      'target': '_blank',
      'aria-label': 'Me on instagram'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Tarkkett',
      'target': '_blank',
      'aria-label': 'Me on github'
    }]
  }
})
