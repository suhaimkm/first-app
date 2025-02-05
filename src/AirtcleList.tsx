import Article from "./components/airticle";

const articles = [
    {
        title: "React Basics",
        body: "React is a JavaScript library for building UIs."
    },
    {
        title: "Understanding Props",
        body: "Props allow components to receive data"

    },
    {
        title: "What is Bootstrap?",
        body: "Bootstrap is a CSS framework that helps indesigning responsive websites."
    },
];
const ArticleList = () => {
    return (
        <div>
            {articles.map((article) => (
                <Article  title={article.title}>{article.body}</Article>
            ))}
        </div>
    );
};export default ArticleList;