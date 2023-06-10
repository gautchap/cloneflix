import { useDispatch } from "react-redux";
import { setSearchBar } from "../store/slices/ApiSlice";

export const SearchBarFetch = ({ target, fetchType }) => {
    const dispatch = useDispatch();

    target.length > 0 &&
        fetch(
            `https://api.themoviedb.org/3/search/${fetchType}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-fr&query=${target}&page=1&include_adult=false`
        )
            .then((res) => res.json())
            .then((res) => {
                dispatch(setSearchBar({ results: res.results, type: fetchType }));
            });
};
