import React, {useEffect, useState} from "react";
import HeadSection from "../components/HeadSection";
import axios from "axios";
import BlogSection from '../components/BlogSection';
import MedBlogSection from "../components/BlogSectionMed";


const Blog = () => {

  const [data, setData] = useState([]);
  const [med, setMed] = useState([]);


  useEffect(() => {
  // Hashnode Posts
   axios({
    url: "https://api.hashnode.com/",
    method: "post",
    data: {
      query: `
      query {
        user(username:"Resa") {
          publication {
            posts (page:0) {
              title
              slug
              cuid
              coverImage
            }
          }
        }
      }
      `,
    },
  }).then((res) => {
      const posts = res.data.data.user.publication.posts;
      setData(posts);
    })
     .catch((err) => console.log(err));
    
    // // Medium posts
    // axios
    //   .get(
    //     "https://api.rss2json.com/v1/api.json?rss_url=https://resa-obamwonyi.medium.com/feed"
    //   )
    //   .then((res) => {
    //     const medPosts = res.data.items;
    //     setMed(medPosts)
    //   })
    //   .catch((err) => console.log(err));
})
  return (
    <div>
      <HeadSection>
        <h2>
          Technical Writings
        </h2>
        <p className="intro-paragraph">
          Here, you can find my collection of technical articles to help developers. </p>
      </HeadSection>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          margin: "auto 5%",
        }}
      >
        {data.map((response) => (
          <BlogSection response={response} key={response.cuid} />
        ))}

        {/* {med.map((response) => (
          <MedBlogSection response={response} key={response.guid} />
        ))} */}
        
      </div>
    </div>
  );
}


export default Blog;
