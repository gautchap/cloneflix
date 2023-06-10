import { useEffect } from "react";

export const ModalFetch = ({ categorie, element, setVideo, setFavToggle }) => {
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/${categorie}/${element.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=fr-fr`
        )
            .then((res) => res.json())
            .then((res) => setVideo(res.results));

        if (!localStorage.getItem("" + categorie + "")) {
            localStorage.setItem("" + categorie + "", JSON.stringify([]));
        }

        let filmsStorage = JSON.parse(localStorage.getItem("" + categorie + ""));
        const arr = filmsStorage.filter((elements) => elements.id === element.id);

        arr[0] ? setFavToggle(true) : setFavToggle(false);
    }, [categorie, element.id, setFavToggle, setVideo]);
};
