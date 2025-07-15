import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src', 'data', 'articles');

/* 
    Gets the articles sorted
*/
export function getSortedArticlesData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(articlesDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to be the url
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        /* console.log(matterResult) */

        // Combine the data with the id
        return {
            slug: slug,
            date: matterResult.data.date,
            title: matterResult.data.title
        };
    });

    // Group posts by year
    const groupedArticles = allPostsData.reduce((acc: { [year: number]: { slug: string; date: string; title: string; }[] }, post) => {
        const year = parseInt(post.date.split('/')[2]);
        if (!acc[year]) acc[year] = [];
        acc[year].push(post);
        return acc;
    }, {});

    //return year:[articles]
    return {
        groupedArticles
    };
}

/* 
    Get the data from an specified article
*/
export function getArticleData(fileName: string) {
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug: fileName.replace(/\.md$/, ''),
        data: data,
        content,
    }
}

/*
    Returns the most recent articles, for main page
*/
export function getNewestArticles() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(articlesDirectory);

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to be the url
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        /* console.log(matterResult) */

        // Combine the data with the id
        return {
            slug: slug,
            date: matterResult.data.date,
            title: matterResult.data.title
        };
    });

    /* console.log(newestArticles); */

    return allPostsData;
}

/* 
    Gets all the slugs available in the folder
*/
export function getSlugArticles() {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allSlugs = fileNames.map((fileName) => {
        // Remove ".md" from file name to be the url
        const slug = fileName.replace(/\.md$/, '');

        // Combine the data with the id
        return {
            slug: slug,
        }
    });

    return allSlugs;
}