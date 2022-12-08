import styled from "styled-components";

export default styled.div`
   {
    .container {
      padding: 565px 314px 652px 322px;
      /* padding: 100px; */

      > div {
        width: 1524px;
      }
    }

    .rect1 {
      height: 913px;

      .bigLight {
        position: absolute;
        top: 175px;
        left: 610px;
      }

      .signLight {
        position: absolute;
        top: 537px;
        right: 120px;
      }

      .bigBeam {
        position: absolute;
        top: 195px;
        left: 348px;
      }
    }

    .rect2 {
      height: 540px;
      margin-top: 30px;

      .mediumLight {
        position: absolute;

        &:nth-child(1) {
          left: 288px;
        }

        &:nth-child(2) {
          left: 738px
        }

        &:nth-child(3) {
          left: 1190px;
        }
      }

      .mediumBeam {
        position: absolute;

        &:nth-child(1) {
          left: calc(288px - 94px);
        }

        &:nth-child(2) {
          left: calc(738px - 94px);
        }

        &:nth-child(3) {
          left: calc(1190px - 94px);
        }
      }

      .sos {
        position: absolute;
        top: 334px;
        left: 1270px;
      }

      .sosLayer1 {
        position: absolute;
        top: 331.76px;
        left: 1269.76px;
        z-index:999;
        opacity: 0
      }

      .sosLayer2 {
        position: absolute;
        top: 282.32px;
        left: 1220.32px;
        z-index:999;
        opacity: 0
      }

      .sosLayer3 {
        position: absolute;
        top: 224px;
        left: 1162px;
        z-index:999;
        opacity: 0
      }

      .deviceLight {
        position: absolute;
        top: 140px;
        left: 652px;
      }
    }

    .rect3 {
      height: 540px;
      margin-top: 30px;

      .airCondition {
        position: absolute;
        top: 230px;
        left: 44px;
      }

      .sideLight {
        position: absolute;
        top: 130px;
        right: 0px;
      }

      .sideBeam {
        position: absolute;
        top: 10px;
        right: 42px;
      }

      .wifi {
        position: absolute;
        top: 304px;
        left: 544px;
      }

      .fan {
        position: absolute;
        top: 58px;
        left: 418px;
      }

      .plug {
        position: absolute;
        top: 322px;
        left: 566px;
      }

      .knob {
        position: absolute;
        top: 280px;
        left: 134px;
      }

      .knobBg {
        position: absolute;
        top: 106px;
        left: 112px;
      }

      .camera {
        position: absolute;
        top: 42px;
        left: -110px;
      }

      .smallLight {
        position: absolute;

        &:nth-child(1) {
          top: 0px;
        left: 110px;
        }

        &:nth-child(2) {
          top: 0px;
          left: 612px;
        }
      }

      .smallBeam {
        position: absolute;

        &:nth-child(1) {
          top: 0px;
          left: calc(110px - 50px);
        }

        &:nth-child(2) {
          top: 0px;
          left: calc(612px - 50px);
        }
      }

      .window {
        position: absolute;
        top: 194px;
        left: 336px;
      }

      .windowBg {
        position: absolute;
        top: 112px;
        left: 204px;
      }

      .windowBar {
        position: absolute;
        top: 112px;
        left: 366px;
      }

      .sensor {
        position: absolute;
        top: 324px;
        left: 598px;
      }
    }
  }
`;
