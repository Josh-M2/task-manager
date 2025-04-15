import { io } from "socket.io-client";
const beURL = `${import.meta.env.VITE_BE_URL}`;

export const socket = io(beURL, {});
