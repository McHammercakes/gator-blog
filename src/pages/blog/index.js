import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/dodgers-stadium.jpg')`
          }}></div>
        <section className="section">
          <div className="container">
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                color: "black",
                padding: "1rem",
                textAlign: "center"
              }}>
              Latest Posts
            </h1>
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
