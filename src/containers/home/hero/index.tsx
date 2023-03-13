import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Parallax from "parallax-js";
import Image from "next/image";

import Button from "@/components/ui/button";
import {
  Icon1,
  Shape1,
  Shape2,
  ShapeBannerLine1,
  ShapeBannerLine2,
  ShapeCircle1,
  ShapeLine2,
  ShapeMap1,
  ShapeMap2,
} from "@/utils/images";
import {
  HomeSliderItem,
  Section,
  Content,
  SubTitle,
  HeroTitleWrap,
  LayerStyle,
  SliderShape,
  DonateCircleWrap,
  DonateContent,
} from "./style";

const Hero = (props: any) => {
  const { subTitle, title, sliderImage } = props.data;
  console.log(props.data);

  // Parallax actives
  const sceneEl: any = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);

  return (
    <Section>
      <HomeSliderItem>
        <Container>
          <Row>
            <Col md={6} lg={6} xl={7}>
              <Content>
                <SubTitle>
                  <Image src={Icon1} alt="Givest" />
                  <h6>{subTitle}</h6>
                </SubTitle>
                <HeroTitleWrap>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: title,
                    }}
                  />
                </HeroTitleWrap>
                <div className="btn-wrp" style={{ display: "flex" }}>
                  <Button path="/causes" color="gradient">
                    All Causes <i className="flaticon-right-arrow"></i>
                  </Button>
                  <Button path="/donate" variant="outlined" sx={{ ml: "10px" }}>
                    Donate Now <i className="flaticon-right-arrow"></i>
                  </Button>
                </div>
              </Content>
            </Col>
            <Col
              md={{ span: 5, offset: 1 }}
              lg={{ span: 5, offset: 1 }}
              xl={{ span: 5, offset: 0 }}
            >
              <LayerStyle>
                <div className="thumb scene">
                  <span className="scene-layer" data-depth="0.20">
                    <img src={sliderImage} alt="" />
                  </span>
                  <div className="shape-circle scene">
                    <span className="scene-layer" data-depth="0.10">
                      <Image src={ShapeCircle1} alt="" />
                    </span>
                    <span
                      className="scene-layer"
                      data-depth="0.40"
                      ref={sceneEl}
                    >
                      <Image className="circle-img" src={Shape1} alt="" />
                    </span>
                  </div>
                </div>
                <div className="shape-style1 scene" ref={sceneEl}>
                  <span className="scene-layer" data-depth="0.30">
                    <Image src={Shape2} alt="" />
                  </span>
                </div>
                <DonateCircleWrap>
                  <div className="pie-chart-circle"></div>
                  <DonateContent>
                    <div className="raised-amount">$865M</div>
                    <Image
                      className="line-shape-img"
                      src={ShapeLine2}
                      alt="Image-Givest"
                    />
                    <h5 className="donate-title">Total Raised</h5>
                  </DonateContent>
                </DonateCircleWrap>
              </LayerStyle>
            </Col>
          </Row>
        </Container>
        <SliderShape>
          <div className="slider-shape">
            <div className="shape-style1">
              <Image className="shape-img1" src={ShapeMap1} alt="" />
            </div>
            <div className="shape-style2">
              <Image className="shape-img2" src={ShapeMap2} alt="" />
            </div>
            <div className="shape-style3">
              <Image className="shape-img3" src={ShapeBannerLine1} alt="" />
            </div>
            <div className="shape-style4">
              <Image className="shape-img3" src={ShapeBannerLine2} alt="" />
            </div>
          </div>
        </SliderShape>
      </HomeSliderItem>
    </Section>
  );
};

export default Hero;
