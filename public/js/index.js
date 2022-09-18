import React, { useEffect } from "react";
(function (s) {
  s.setAttribute("charset", "utf-8");
  s.src =
    "https://assets.ubembed.com/universalscript/releases/v0.179.2/bundle.js";
  s.onload = function () {
    ube.init({
      environment: "production",
      geoData: {
        latitude: 22.7,
        longitude: 75.84,
        continentCode: "AS",
        countryCode: "IN",
        regionCode: "MP",
        city: "indore",
      },
      ubCode: "018a72ab3c4a4e98b4018cef9709b538",
      matchingRules: [],
    });
  };
  document.getElementsByTagName("head")[0].appendChild(s);
})(document.createElement("script"));

const fetchApiData = (url) => {};

const App = () => {
  const API = "https://api.coincap.io/v2/assets";
  useEffect(() => {
    fetchApiData(API);
  }, []);
};

export default App;
