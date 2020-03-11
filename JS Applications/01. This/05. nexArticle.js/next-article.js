function getArticleGenerator(articles) {
    let index = 0;
    return function () {
        let art = document.createElement('article');
        if (index < articles.length) {
            art.innerHTML = articles[index];
            document.querySelector('#content').appendChild(art);
            index++;
            console.log(this);
        }
    }
}