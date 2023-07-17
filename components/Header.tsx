export default function Header(){
    return(
        <header>
            <h1>X-ray Tool <sup> Experiment </sup> </h1>
            <nav>
                <a href="#About">About</a>
                <a href="#Datasets">Datasets</a>
                <a href="#GitHub">GitHub</a>
                <button className="accent-btn" style={{marginLeft:"2em"}}>Contribute</button>
            </nav>
        </header>
    )
}