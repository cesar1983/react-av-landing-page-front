import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import { PricingBoxProps } from 'types/api'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallment,
  benefits
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span>
        R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>

    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button
      href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOSET20"
      onClick={onClick}
      withPrice
    >
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${numberInstallments * priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
