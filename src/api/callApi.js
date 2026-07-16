import axios from "axios";

const API = axios.create({
  baseURL: "https://flick-various-octagon.ngrok-free.dev",
   headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

// Upload CSV (URL updated to match backend)
export const uploadCSV = async (formData) => {
  const response = await API.post("/api/upload-csv", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// ✅ FIXED: Start Bulk Calling (Ab ye data accept karega aur backend ko bhejega)
export const startBulkCalling = async (data) => {
  const response = await API.post("/api/start-calling", data);
  return response.data;
};

// Single Call
export const makeCall = async (phoneNumber) => {
  const response = await API.post("/call", {
    to_number: phoneNumber,
  });
  return response.data;
};

// Get Costing Details
export const getCosting = async () => {
  const response = await API.get("/api/costing");
  return response.data;
};

export const startAICall = async (phoneNumber) => {
  const response = await API.post("/api/start-ai-call", {
    phone_number: phoneNumber,
  });
  return response.data;
};

export const pauseBulkCalling = async () => {
  const response = await API.post("/api/pause-calling");
  return response.data;
};

export const resumeBulkCalling = async () => {
  const response = await API.post("/api/resume-calling");
  return response.data;
};

export const stopBulkCalling = async () => {
  const response = await API.post("/api/stop-calling");
  return response.data;
};

export const getQueueStatus = async () => {
  const response = await API.get("/api/queue-status");
  return response.data;
};

export const getCampaignStats = async () => {
  const response = await API.get("/api/campaign-stats");
  return response.data;
};

export const getRecentActivity = async () => {
  const response = await API.get("/api/recent-activity");
  return response.data;
};

export const getCallLogs = async () => {
  const response = await API.get("/api/logs");
  return response.data;
};

export const getFooterStats = async () => {
  const response = await API.get("/api/footer-stats");
  return response.data;
};