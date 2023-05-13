
fetch("https://api.themoviedb.org/3/movie/550?api_key=2d251f526c17be62ed7f8c76426218f0")
.then(res=>res.json())
.then(data=>console.log(data));




<div className="serch-movie-container">
    <div className="input-area">
        <h2>映画検索サービス・</h2>
        <input></input>
    </div>
    <div className="output-area">
        <img src="#" alt="映画のポスター画像" className="movie-img" />
        <p className="movie-title"></p>
        <p className="movie-year"></p>
        <p className="movie-evaluation"></p>
        <p className="over-view"></p>

    </div>
</div>