import React, { Fragment } from "react"

import { Card } from "../card"
import { Image } from "../image"
import { Label } from "../label"
import { ExternalLink } from "react-external-link";
import { Seo } from "../seo"

import { CopyToClipboard } from "react-copy-to-clipboard"
import { CARDS, SEO_INFO, SHARE_WITH_FRIEND_LINK } from "../../utils/values"
import { Button } from "../button"
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

export const App = () => {
  const seoImage = "https://www.google.com/search?q=popcart&rlz=1C5CHFA_enPK885PK885&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiC2vrZ4u3qAhUN_BQKHaBnA44Q_AUoAXoECBMQAw&biw=1440&bih=686#imgrc=ICuSVeO0Gy1L5M"
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
              <Button className="shop-now">
                <ExternalLink href={card.SHOP_NOW_LINK} className="shop-now">
                  Shop Now
                </ExternalLink>
              </Button>
            </Card>
          </CardWrapper>
        ))}
      </ProductsWrapper>
      <ShareWithFriendWrapper>
        <CopyToClipboard text={SHARE_WITH_FRIEND_LINK}>
          <Button className="shop-now">Share with friend</Button>
        </CopyToClipboard>
      </ShareWithFriendWrapper>
    </Fragment>
  )
}
