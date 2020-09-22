import { useEffect, useState } from "react";
import flamelink from "../api/flamelink";

export default () => {
  const [games, setGames] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const flamelinkSchema = async () => {
    try {
      const response = await flamelink.schemas.get("myGames");
      setGames(response);
    } catch (err) {
      setErrMessage("Something went wrong.");
    }
  };

  useEffect(() => {
    flamelinkSchema();
  }, []);

  return [flamelinkSchema, games, errMessage];
};
