import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';


const postsDir = '../abtraining/posts/posts';
const getPosts = path.dirname(path.resolve(postsDir));

// const postsDirectory = JSON.stringify(getPosts);

export function getSortedPostsData() {
    // // Get file names under /posts
    // const fileNames = fs.readdirSync(getPosts)
    // const allPostsData = fileNames.map(fileName => {
    //     // Remove ".md" from file name to get id
    //     const id = fileName.replace(/\.md$/, '')

    //     // Read markdown file as string
    //     const fullPath = path.join(getPosts, fileName)
    //     const fileContents = fs.readFileSync(fullPath, 'utf8')

    //     // Use gray-matter to parse the post metadata section
    //     const matterResult = matter(fileContents)

    //     // Combine the data with the id
    //     return {
    //         id,
    //         ...matterResult.data
    //     }
    // })
    // //Sort posts by date
    // return allPostsData();

    const filenames = fs.readdirSync(getPosts);
    const allPostsData = filenames.map(fileName => {
        // const id = fileName.replace(/\.md$/, '')
        const removeMarkup = fileName.replace(/\.md$/, '')
        const id = JSON.stringify(removeMarkup);
        return {
            id
        }
    })

    return allPostsData;
}