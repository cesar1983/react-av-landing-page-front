import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { SectionFaqProps } from 'types/api'

import * as S from './styles'

const SectionFaq = ({ title, questions, extraQuestion }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>
        <S.Questions>
          {questions.map(({ question, answer }, id) => (
            <S.Question key={id}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>{extraQuestion.question}</Heading>
          <div dangerouslySetInnerHTML={{ __html: extraQuestion.answer }} />
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
