import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { Box } from "@mui/material";
import Loading from "../components/Loading";

export default function MohoModel() {
  const [loaded, setLoaded] = useState(false);
  const [styles, setStyles] = useState({
    opacity: 0,
    transition: "all ease 4s",
  });
  function onLoad() {
    setStyles((prev) => ({
      ...prev,
      opacity: 1,
      transition: "all ease 4s",
    }));
    setLoaded(true);
  }
  return (
    <Box sx={{ flex: 1 }} style={styles}>
      {!loaded && <Loading loaded={loaded} />}
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/iF8skT1diJd5tAsE/scene.splinecode"
      />
    </Box>
  );
}
