import { ethers } from "ethers";
import identiFi from "./IdentiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xFd82AefE4eEC40610E479a71f20ab216203AE999",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};
