import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAlbumsAction } from "../redux/actions/albumActios";
import { getUsersAction } from "../redux/actions/userActions";

import Footer from "./contet-wrapper/Footer";
import TopBar from "./contet-wrapper/TopBar";
import ContentRowTop from "./contet-wrapper/ContentRowTop";

const ContentWrapper = () => {
  const dispatch = useDispatch();

  const fetchAlbums = async () => {
    const response = await axios
      .get("/api/products")
      .catch((err) => console.log("Error", err));
    dispatch(getAlbumsAction(response.data.products));
  };

  const fetchUseres = async () => {
    const response = await axios
      .get("/api/users")
      .catch((err) => console.log("Error:", err));
    dispatch(getUsersAction(response.data.data));
  };

  useEffect(() => {
    fetchAlbums();
    fetchUseres();
  }, []);

  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ContentRowTop />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
