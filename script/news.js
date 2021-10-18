 // api_key--04d6f49e4fde4e058b2bd3f8657bc806
    // console.log(fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=04d6f49e4fde4e058b2bd3f8657bc806`))

    async function searchNews(){
        let data = document.getElementById("search").value;
        let res = await fetch(`https://newsapi.org/v2/everything?q=${data}&from=2021-10-18&sortBy=popularity&apiKey=04d6f49e4fde4e058b2bd3f8657bc806`);
        let newData = await res.json();
        console.log(newData);
        appendNews(newData.articles)
    }

    // let show = document.getElementById("show");

    // let data = JSON.parse(localStorage.getItem("newsData"));
    // console.log("data",data.articles);

    // appendNews(data);

    // let show = document.getElementById("show");
    function appendNews(data) {
        show.innerText = null;
        data.forEach(function (news) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = news.urlToImage;
            let heading = document.createElement("h3");
            let p = document.createElement("p");
            heading.innerText = news.title;
            p.innerText = news.description;
            div.append(heading, img, p);
            show.append(div)

        });
    }