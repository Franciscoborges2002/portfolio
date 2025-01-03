import { getSortedArticlesData } from '../../lib/articles';

export async function getStaticProps() {
    const allArticlesData = getSortedArticlesData();
    console.log(allArticlesData)
    return {
        props: {
            allArticlesData,
        },
    };
}