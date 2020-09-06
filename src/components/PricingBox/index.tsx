import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import ReactHtmlParser from 'react-html-parser'
import { PricingBoxProps } from 'types/api'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

type Props = {
  pricingBox: PricingBoxProps
}

const PricingBox = ({ pricingBox }: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${pricingBox.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{pricingBox.numberInstallments}x de</span>
        R${pricingBox.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>

    <S.BenefitsList>{ReactHtmlParser(pricingBox.benefits)}</S.BenefitsList>

    <Button
      href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOSET20"
      onClick={onClick}
      withPrice
    >
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$399</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
