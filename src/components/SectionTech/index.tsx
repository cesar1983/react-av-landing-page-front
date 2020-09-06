import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map((technology) => (
          <S.Icon key={technology.title}>
            <S.Icons
              src={getImageUrl(technology.icon.url)}
              alt={technology.icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{technology.title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
