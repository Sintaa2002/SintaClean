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
      { loc: '/usluge/dubinsko-ciscenje-namjestaja-zagreb' },
      { loc: '/usluge/ciscenje-stubista-zagreb' },
      { loc: '/usluge/ciscenje-ureda-zagreb' },
      { loc: '/usluge/kosnja-trave-zapresic' },
      { loc: '/usluge/dubinsko-automobila-zagreb' },
      { loc: '/usluge/ciscenje-radijatora-zagreb' },
      { loc: '/najam/dubinsko-ciscenje-aparat' },
      { loc: '/najam/karcher-parni-cistac' },
      { loc: '/najam/wirbel-samponirka' },
      { loc: '/najam/aparat-ciscenje-podova' },
      { loc: '/najam/mokro-suhi-usisavac' },
      { loc: '/najam/aku-busilica' }
    ]
  }
}

