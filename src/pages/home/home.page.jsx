import ProgressBar from "../../components/progress-bar/progress-bar"

const HomePage = () => {
    
    return (
        <>
            <h1>Page d'accueil 🦄</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate molestias doloribus suscipit explicabo corrupti odio, ex reiciendis eligendi officiis, enim rerum. Nemo quibusdam ad quisquam?</p>

            <h2>Demo barre de progression</h2>
            <ProgressBar val={5} />
            {/* <ProgressBar val={-3} /> */}
        </>
    )
}

export default HomePage