import React from "react";

const blogPosts = [
  {
    title: "THE HOSPITAL-DEPENDENT PATIENT",
    author: "John Doe",
    date: "April 8th, 2015",
    text: "Cari too est elore proressius symnimus, qui sepu tur molorionem consaecullum leceriom. Elrum est robare quam litare.",
    image: "/blog1.jpg",
  },
  {
    title: "SPENDING MORE AND GETTING LESS FOR HEALTH CARE",
    author: "John Doe",
    date: "April 8th, 2015",
    text: "Cari too est elore proressius symnimus, qui sepu tur molorionem consaecullum leceriom. Elrum est robare quam litare.",
    image: "/blog2.jpg",
  },
  {
    title: "A VITAL MEASURE: YOUR SURGEON'S SKILL",
    author: "John Doe",
    date: "April 8th, 2015",
    text: "Cari too est elore proressius symnimus, qui sepu tur molorionem consaecullum leceriom. Elrum est robare quam litare.",
    image: "/blog.jpg",
  },
  {
    title: "EMERGENCY ROOMS ARE NO PLACE FOR THE ELDERLY",
    author: "John Doe",
    date: "April 8th, 2015",
    text: "Cari too est elore proressius symnimus, qui sepu tur molorionem consaecullum leceriom. Elrum est robare quam litare.",
    image: "/blog4.jpg",
  },
];



const Blog = ( ) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f3f4f6",
    fontFamily: "sans-serif",
    width: "1170px",
    height: "827px", 
    margin: "0 auto", 
    padding: "2rem",
  };

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    flex: 1,
  };

  const centeredColumnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
    flex: 1,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    borderRadius: "0.5rem",
    objectFit: "cover",
    marginBottom: "1rem",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#1f2937",
    marginBottom: "0.25rem",
    textAlign: "center",
  };

  const authorStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    color: "#6b7280",
    marginBottom: "0.5rem",
    textAlign: "center",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    color: "#4b5563",
    lineHeight: 1.5,
    textAlign: "center",
      paddingLeft: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h3 style={{fontWeight:"bold"}}> Blog <br/>Updates</h3>
      </div>
      <div style={centeredColumnStyle}>
       
        <div style={cardStyle}>
          <img src={blogPosts[0].image} alt="Left blog" style={imgStyle} />
          <h2 style={titleStyle}>{blogPosts[0].title}</h2>
          <p style={authorStyle}>
            <span style={{ fontWeight: 600 }}>post by </span>
            <span style={{ fontWeight: 500 }}>{blogPosts[0].author}</span>
            <span style={{ fontWeight: 300 }}> in {blogPosts[0].date}</span>
          </p>
          <p style={textStyle}>{blogPosts[0].text}</p>
        </div>
      </div>

      <div style={columnStyle}>
        {[1, 2].map((i) => (
          <div key={i} style={cardStyle}>
            <img src={blogPosts[i].image} alt="Middle blog" style={imgStyle} />
            <h2 style={titleStyle}>{blogPosts[i].title}</h2>
            <p style={authorStyle}>
              <span style={{ fontWeight: 600 }}>post by </span>
              <span style={{ fontWeight: 500 }}>{blogPosts[i].author}</span>
              <span style={{ fontWeight: 300 }}> in {blogPosts[i].date}</span>
            </p>
            <p style={textStyle}>{blogPosts[i].text}</p>
          </div>
        ))}
      </div>

      <div style={centeredColumnStyle}>
        <div style={cardStyle}>
          <img src={blogPosts[3].image} alt="Right blog" style={imgStyle} />
          <h2 style={titleStyle}>{blogPosts[3].title}</h2>
          <p style={authorStyle}>
            <span style={{ fontWeight: 600 }}>post by </span>
            <span style={{ fontWeight: 500 }}>{blogPosts[3].author}</span>
            <span style={{ fontWeight: 300 }}> in {blogPosts[3].date}</span>
          </p>
          <p style={textStyle}>{blogPosts[3].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
