export type LogoProps = {
  url: string
  alternativeText: string
}

export type HeroProps = {
  title: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type TechIcon = {
  title: string
  icon: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  benefits: string
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  button: {
    label: string
    url: string
  }
}

export type Author = {
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
  photo: {
    alternativeText: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: {
    alternativeText: string
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
  extraQuestion: Question
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionModules: SectionModulesProps
  sectionConcepts: SectionConceptsProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
