import { client } from "./api";

export const getAnime = async () => client.get(`/api/v1/top-anime`);

export const getCoupleCharts = async () => client.get(`/api/v1/couple-ship`);
