 // api_key--04d6f49e4fde4e058b2bd3f8657bc806
    // console.log(fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=04d6f49e4fde4e058b2bd3f8657bc806`));


    async function searchNews() {
        let data = document.getElementById("search").value;
        let res = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=04d6f49e4fde4e058b2bd3f8657bc806`);
        let newsData = await res.json();
        console.log(newsData.articles)
        appendNews(newsData.articles);
        // searchNews(newsData.articles);
    }
    searchNews();
    let home = document.getElementById("home");
    function appendNews(data) {
        home.innerHTML = null;
        data.forEach(function (news) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = news.urlToImage;
            let heading = document.createElement("h3");
            let p = document.createElement("p");
            heading.innerText = news.title;
            p.innerText = news.description;
            div.append(heading, img, p);
            home.append(div)

        });
    }

    // if (localStorage.getItem("newsData") === null) {
    //     localStorage.setItem("newsData", JSON.stringify([]));
    // }

    // async function searchNewss() {
    //     let data = document.getElementById("search").value;
    //     let ress = await fetch(`https://newsapi.org/v2/everything?q=${data}&from=2021-10-18&sortBy=popularity&apiKey=04d6f49e4fde4e058b2bd3f8657bc806`);
    //     let newDatas = await ress.json();
    //     console.log(newDatas);
    //     let dataN = JSON.parse(localStorage.getItem("newsData"));
    //     dataN.push(newDatas);
    //     localStorage.setItem("newsData",JSON.stringify(dataN));
    // }