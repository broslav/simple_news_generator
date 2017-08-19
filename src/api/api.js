export function getArticles(count = 30, filter_articles = null, filter_publishers = null) {

    return new Promise((resolve, reject) => {
        window.JsAPI.Dao.getArticles({
            block_id: 84683,
            count: count,
            fields: 0xFFFF,
            filter_publishers: filter_publishers,
            filter_articles: filter_articles
        }, (articles) => {
            resolve(articles);
        }, (reason) => {
            reject(reason);
            console.warn(reason);
        });
    });
}

export function getSources() {
    return new Promise((resolve, reject) => {
        window.JsAPI.Dao.getProperties({
            block_id: 84683
        }, (blockProps) => {
            resolve(blockProps);
        }, (reason) => {
            reject(reason);
            console.warn(reason);
        })
    });
}