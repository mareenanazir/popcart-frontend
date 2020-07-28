import React, { Fragment } from "react"

import { ExternalLink } from "react-external-link";

import { Card } from "../card"
import { Image } from "../image"
import { Label } from "../label"
import { Seo } from "../seo"
import { CARDS, SEO_INFO, SHARE_WITH_FRIEND_LINK } from "../../utils/values"
import { Button } from "../button"
import { CopyToClipboard } from "../copy-to-clipboard"
import {
  PriceWrapper,
  BrandWrapper,
  TitleWrapper,
  ImageWrapper,
  CardWrapper,
  ProductsWrapper,
  ShareWithFriendWrapper,
  RetailerWrapper,
} from "./styled"

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const seoImage = `${SHARE_WITH_FRIEND_LINK}elchim-dryer.png`
  return (
    <Fragment>
      <Seo
        title={SEO_INFO.TITLE}
        description={SEO_INFO.DESCRIPTION}
        url={SEO_INFO.url}
        image={seoImage}
      />
      <ProductsWrapper>
        {CARDS.map((card, index) => (
          <CardWrapper>
            <Card>
              <ImageWrapper>
                <Image src={card.IMAGE_LINK} alt={card.TITLE} />
              </ImageWrapper>
              <PriceWrapper>
                <Label> {`$${card.PRICE}`}</Label>
              </PriceWrapper>
              <BrandWrapper>
                <Label> {card.BRAND}</Label>
              </BrandWrapper>
              <TitleWrapper>
                <Label>{card.TITLE} </Label>
              </TitleWrapper>
              <RetailerWrapper>
                <Label> {card.RETAILER}</Label>
              </RetailerWrapper>
              <Button>
                <ExternalLink href={card.SHOP_NOW_LINK}>
                  Shop Now
                </ExternalLink>
              </Button>
            </Card>
          </CardWrapper>
        ))}
      </ProductsWrapper>
      <ShareWithFriendWrapper>
        <CopyToClipboard text={SHARE_WITH_FRIEND_LINK}/>
      </ShareWithFriendWrapper>
    </Fragment>
  )
}
