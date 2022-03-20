import { useNavigate } from "react-router";

import { postApiRequest } from "../../../../shared/api";
import SearchBarComponent from "./Searchbar/SearchBarComponent.js";

const SearchBar = () => {
  const navigate = useNavigate();

  const onSearchHandler = async (
    controller = new AbortController(),
    searchInput,
    currentResults
  ) => {
    const body = {
      searchInput,
    };
    try {
      const res = await postApiRequest("http://localhost:3001/searchCrypto", {
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      return res;

      //
    } catch (e) {
      console.dir(e);
      if (e && e.message && e.message === "The user aborted a request.") {
        console.log("EHHHHH");
        return currentResults;
      }
      return null;
    }
  };

  const onResultClickHandler = (id) => {
    console.log(id);
    navigate(`/currencies/${id}`);
  };

  return (
    <SearchBarComponent
      onSearchHandler={onSearchHandler}
      onResultClickHandler={onResultClickHandler}
    />
  );
};
export default SearchBar;
