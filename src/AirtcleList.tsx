import Article from "./components/airticle";
import getArticles from "./services/AirtcleServices";


const ArticleList = () => {

    return (
        <div>
            {getArticles().map((article) => (
                <Article title={article.title}>
                    {article.body}
                </Article>
            ))}
        </div>
    );
}; export default ArticleList;