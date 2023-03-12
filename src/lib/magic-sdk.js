// Magic Auth. library
import { Magic } from "magic-sdk";

// new instants from magic. Note: (typeof window !== "undefined" &&) to check if window available or not
const magic =
  typeof window !== "undefined" && new Magic("pk_live_DA338F61A7058FF8");

export default magic;
