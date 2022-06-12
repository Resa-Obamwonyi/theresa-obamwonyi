import React, {useEffect, useState} from "react";
import axios from "axios";
import BlogViewHome from '../BlogViewHome';
import {ArticleHomeStyle} from "./style";


const ArticlesHome = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
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
    <ArticleHomeStyle>
        {data.slice(0, 4).map((response) => (
          <BlogViewHome response={response} key={response.cuid} />
        ))}
    </ArticleHomeStyle>
  );
}


export default ArticlesHome;
