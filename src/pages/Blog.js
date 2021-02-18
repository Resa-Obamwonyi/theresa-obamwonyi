import HeadSection from "../components/HeadSection";
import axios from "axios";
import BlogSection from '../components/BlogSection';

const GetPost = () => {
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
              brief
              slug
              cuid
              coverImage
            }
          }
        }
      }
      `,
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));;
}


const Blog = () => {
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
        <BlogSection />
        <BlogSection />
        <BlogSection />
        <BlogSection />
        <BlogSection />
        <BlogSection />
      </div>
    </div>
  );
}

export default Blog;
