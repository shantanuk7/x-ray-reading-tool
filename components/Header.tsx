export default function Header(){
    return(
        <header>
            <h1>X-ray Tool <sup> Experiment </sup> </h1>
            <nav>
                <a href="/about">About</a>
                <a href="/dataset">Datasets</a>
                <a href="https://github.com/shantanuk7/x-ray-reading-tool/">GitHub</a>
                <button className="accent-btn" style={{marginLeft:"2em"}}><a href="/contribute">Contribute</a></button>
            </nav>
        </header>
    )
}