import React, {useEffect, useState} from "react";
import HeadSection from "../components/HeadSection";
import axios from "axios";
import BlogSection from '../components/BlogSection';

const Blog = () => {

  const [data, setData] = useState([]);

  useEffect( () => {
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
})
  return (
    <div>
      <HeadSection>
        <h2>
          Medium
          <br />
          <span className="pop-color">"Twitter"</span>
          <br />
          Hashnode.
        </h2>
        <p className="intro-paragraph">
          I write about people, emotions and technology.
        </p>
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
      </div>
    </div>
  );
}


export default Blog;
