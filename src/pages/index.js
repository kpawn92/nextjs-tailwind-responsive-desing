import Article from "./components/content/article/Article"
import Categories from "./components/content/nav/Categories"
import Layout from "./components/layout/Layout"

function Main() {
    return (
        <Layout>
            <Categories />
            <Article />
        </Layout>
    )
}

export default Main