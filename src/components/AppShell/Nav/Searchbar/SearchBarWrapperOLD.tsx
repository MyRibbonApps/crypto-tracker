import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { postApiRequest } from "../../../../shared/api";
import SearchBarComponent from "./Searchbar/SearchBarComponent";

const SearchBar: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showSearchError, setSearchError] = useState<boolean>(false);
  const [showSearchSkeleton, setShowSkeleton] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  // const navigate = useNavigate();

  const onSearchHandler = async (
    controller: AbortController = new AbortController(),
    searchInput: string,
    currentResults: any
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
    } catch (e: any) {
      console.dir(e);
      if (e && e.message && e.message === "The user aborted a request.") {
        console.log("EHHHHH");
        return currentResults;
      }
      return null;
    }
  };

  const onResultClickHandler = (id: string) => {
    console.log(id);
    // navigate(`/currencies/${id}`);
  };
  useEffect(() => {
    onSearchHandler(new AbortController(), "Bitcoin", []);
  }, []);
  return (
    <SearchBarComponent
      onSearchHandle={onSearchHandler}
      onResultClickHandler={onResultClickHandler}
    />
  );
};
export default SearchBar;
