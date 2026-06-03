module.exports = {
  siteUrl: 'https://www.sintaclean.hr',
  generateRobotsTxt: true,

  additionalPaths: async () => {
    return [
      { loc: '/' },
      { loc: '/usluge' },
      { loc: '/kontakt' },
      { loc: '/najam' },
      { loc: '/galerija' },
      { loc: '/onama' },
    ]
  }
}