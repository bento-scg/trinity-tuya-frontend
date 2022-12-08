import React, { useState, useRef, useEffect } from "react";
import Style from "./style";
import Video from "components/video";
import api from "store/home/api";
import rec1 from "assets/images/rectangle_1.png";
import rec2 from "assets/images/rectangle_2.png";
import rec3 from "assets/images/rectangle_3.png";
import bigLight from "assets/images/bigLight.png";
import signLight from "assets/images/signLight.png";
import mediumLight from "assets/images/mediumLight.png";
import sos from "assets/images/sos.png";
import sosLayer_1 from "assets/images/sosLayer_1.png";
import sosLayer_2 from "assets/images/sosLayer_2.png";
import sosLayer_3 from "assets/images/sosLayer_3.png";
import airCondition from "assets/images/airCondition.png";
import sideLight from "assets/images/sideLight.png";
import wifi from "assets/images/wifi.png";
import fan from "assets/images/fan.png";
import plug from "assets/images/plug.png";
import knob from "assets/images/knob.png";
import knobBg from "assets/images/knobBg.png";
import camera from "assets/images/camera.png";
import smallLight from "assets/images/smallLight.png";
import window from "assets/images/window.png";
import windowBg from "assets/images/windowBg.png";
import windowBar from "assets/images/windowBar.png";
import sensor from "assets/images/sensor.png";
import bigBeam from "assets/images/bigBeam.png";
import mediumBeam from "assets/images/mediumBeam.png";
import sideBeam from "assets/images/sideBeam.png";
import smallBeam from "assets/images/smallBeam.png";
import deviceLight from "assets/images/deviceLight.png";
import { io } from "socket.io-client";
import { gsap } from "gsap/all";
import config from "config"

const Home = () => {
  const socket = useRef();

  const [status, setStatus] = useState({
    showVideo: false,
    isOnBigLight: false,
    isOnMediumLight: false,
    isOnSideLight: false,
    isOnSmallLight: false,
    isPluged: false,
    isWindowOpened: false,
  });

  useEffect(() => {
    // socket.current = io("ws://localhost:8900");
    // socket.current = io("ws://jojo-book-socket.herokuapp.com");
    // socket.current = io("https://jojo-book-socket.herokuapp.com");
    // socket.current.on("getMessage", (data) => {
    // });
  }, []);

  const toggleBigLight = async () => {
    // const params = {
    //   device_id: "eb6634d76f47e6efccaggx",
    //   commands: [
    //     {
    //       code: "switch_led",
    //       value: !status.isOnBigLight,
    //     },
    //   ],
    // };
    // api.sendCommand(params).then((res) => {
    //   console.log(res);
    // });

    setStatus({ ...status, isOnBigLight: !status.isOnBigLight });
    // res.status === "200" && setStatus({ ...status, isOnBigLight: !status.isOnBigLight });
  };

  const toggleDownLight = async () => {
    const params = {
      device_id: config.DOWNLIGHT,
      commands: [
        {
          code: "switch_led",
          value: !status.isOnMediumLight,
        },
      ],
    };
    api.sendCommand(params).then((res) => {
      console.log(res);
    });
    setStatus({ ...status, isOnMediumLight: !status.isOnMediumLight });
  };

  const toggleSideLight = async () => {
    setStatus({ ...status, isOnSideLight: !status.isOnSideLight });
  };

  const toggleSmallLight = async () => {
    setStatus({ ...status, isOnSmallLight: !status.isOnSmallLight });
  };

  const toggleVideo = async () => {
    setStatus({ ...status, showVideo: !status.showVideo });
  };

  const togglePlug = async () => {
    const params = {
      device_id: config.SMART_SOCKET,
      commands: [
        {
          code: "switch_1",
          value: !status.isPluged,
        },
      ],
    };
    api.sendCommand(params).then((res) => {
      console.log(res);
    });

    setStatus({ ...status, isPluged: !status.isPluged });
  };

  const toggleWindow = async () => {
    setStatus({ ...status, isWindowOpened: !status.isWindowOpened });
  };

  const toggleAC = async () => {
    const params = {
      device_id: "eb6ca623546756b0b3kfkc",
      commands: [
        {
          code: "switch",
          value: true,
        },
      ],
    };
    api.sendCommand(params).then((res) => {
      console.log(res);
    });
  };

  // sos animation
  const sosOn = () => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".sosLayer1", { duration: 1, opacity: 1, ease: "back" });
    tl.to(".sosLayer2", { duration: 1, opacity: 1 });
    tl.to(".sosLayer3", { duration: 1, opacity: 1 });
  };

  useEffect(() => {
    sosOn();
  }, []);

  return (
    <Style>
      {status.showVideo ? <Video></Video> : <></>}
      <div className="container">
        <div className="rect1 relative">
          <img className="absolute" src={rec1} alt="rectangle_1.jpg" />
          {status.isOnBigLight ? (
            <img className="bigBeam" src={bigBeam} alt="bigBeam.jpg" />
          ) : (
            <></>
          )}
          <img
            className="bigLight"
            src={bigLight}
            alt="bigLight.jpg"
            onClick={toggleBigLight}
          />
          <img className="signLight" src={signLight} alt="signLight.jpg" />
        </div>
        <div className="rect2 relative">
          <img className="absolute" src={rec2} alt="rectangle_2.jpg" />
          {status.isOnMediumLight ? (
            <div>
              <img
                className="mediumBeam"
                src={mediumBeam}
                alt="mediumBeam.jpg"
              />
              <img
                className="mediumBeam"
                src={mediumBeam}
                alt="mediumBeam.jpg"
              />
              <img
                className="mediumBeam"
                src={mediumBeam}
                alt="mediumBeam.jpg"
              />
            </div>
          ) : (
            <></>
          )}
          <div>
            <img
              className="mediumLight"
              src={mediumLight}
              alt="mediumLight.jpg"
            />
            <img
              className="mediumLight"
              src={mediumLight}
              alt="mediumLight.jpg"
            />
            <img
              className="mediumLight"
              src={mediumLight}
              alt="mediumLight.jpg"
            />
          </div>
          <img className="sos" src={sos} alt="sos.jpg" />
          <img className="sosLayer1" src={sosLayer_1} alt="sosLayer_1.jpg" />
          <img className="sosLayer2" src={sosLayer_2} alt="sosLayer_2.jpg" />
          <img className="sosLayer3" src={sosLayer_3} alt="sosLayer_3.jpg" />
          <img
            className="deviceLight"
            src={deviceLight}
            alt="deviceLight.jpg"
            onClick={toggleDownLight}
          />
        </div>
        <div className="rect3 flex">
          <div className="relative w-full mr-7">
            <img className="absolute" src={rec3} alt="rectangle_3.jpg" />
            <img
              className="airCondition"
              src={airCondition}
              alt="airCondition.jpg"
              onClick={toggleAC}
            />
            {status.isOnSideLight ? (
              <img className="sideBeam" src={sideBeam} alt="sideBeam.jpg" />
            ) : (
              <></>
            )}
            <img className="sideLight" src={sideLight} alt="sideLight.jpg" />
            <img
              className="wifi"
              src={wifi}
              alt="wifi.jpg"
              onClick={toggleSideLight}
            />
          </div>
          <div className="relative w-full">
            <img className="absolute" src={rec3} alt="rectangle_3.jpg" />
            <img className="fan" src={fan} alt="fan.jpg" />
            <img
              className="plug"
              src={plug}
              alt="plug.jpg"
              onClick={togglePlug}
            />
          </div>
        </div>
        <div className="rect3 flex">
          <div className="relative w-full mr-7">
            <img className="absolute" src={rec3} alt="rectangle_3.jpg" />
            <div>
              <img className="knobBg" src={knobBg} alt="knobBg.jpg" />
              <img className="knob" src={knob} alt="knob.jpg" />
            </div>
            <img
              className="camera"
              src={camera}
              alt="camera.jpg"
              onClick={toggleVideo}
            />
          </div>
          <div className="relative w-full">
            <img className="absolute" src={rec3} alt="rectangle_3.jpg" />
            {status.isOnSmallLight ? (
              <div>
                <img
                  className="smallBeam"
                  src={smallBeam}
                  alt="smallBeam.jpg"
                />
                <img
                  className="smallBeam"
                  src={smallBeam}
                  alt="smallBeam.jpg"
                />
              </div>
            ) : (
              <></>
            )}
            <div>
              <img
                className="smallLight"
                src={smallLight}
                alt="smallLight.jpg"
              />
              <img
                className="smallLight"
                src={smallLight}
                alt="smallLight.jpg"
              />
            </div>
            <div onClick={toggleWindow}>
              <img className="windowBg" src={windowBg} alt="windowBg.jpg" />
              {status.isWindowOpened ? (
                <img
                  className="windowBar"
                  src={windowBar}
                  alt="windowBar.jpg"
                />
              ) : (
                <></>
              )}
              <img className="window" src={window} alt="window.jpg" />
            </div>
            <img
              className="sensor"
              src={sensor}
              alt="sensor.jpg"
              onClick={toggleSmallLight}
            />
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Home;
