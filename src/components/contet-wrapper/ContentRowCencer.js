import React from "react";
import LastAlbumInDb from "./content-row-center/LastAlbumInDb";
import AlbumsInDb from "./content-row-center/AlbumsInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Album in DB -->*/}
      <LastAlbumInDb />
      {/*<!-- End content row last album in Data Base -->*/}

      {/*<!-- Albums in DB -->*/}
      <AlbumsInDb />
    </div>
  );
}

export default ContentRowCenter;
