import config from "config";
import { Http } from "services/http";

// const path = `${config.API_ENDPOINT}`;
const apiKey = `${config.API_KEY}`;
const apiConfig = {
  headers: {
    "x-api-key": apiKey,
  },
};

const getDummy = async (params = {}) => {
  return Http.get(`/products/1`, { params });
};

const getLiveStream = async (params = {}) => {
  return Http.post(
    `${config.API_ENDPOINT}/videolivestream/az1669769589624ERnDr/ebbc111c4fe6cfd7d3ktqf/stream_link/hls`,
    // `/videolivestream/az1669769589624ERnDr/ebbc111c4fe6cfd7d3ktqf/stream_link/hls`,
    params,
    apiConfig
  );
};

const sendCommand = async (params = {}) => {
  return Http.post(`${config.API_ENDPOINT}/tuya/commands`, params, apiConfig);
  // return Http.post(`/tuya/commands`, params, apiConfig);
};

const exportedObject = {
    getDummy,
    getLiveStream,
    sendCommand,
};

export default exportedObject;
