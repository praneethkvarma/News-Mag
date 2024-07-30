import Newsitem from "./Newsitem";
import { useState, useEffect } from "react";

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);
    const API_KEY='pub_49442fc18b8d99a2846f5c97229ceb4695f5b';
    useEffect(()=>{
        let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=${category}`;
        fetch(url).then(response=> response.json()).then(data=> {setArticles(data.results)
         console.log(data.results)
        });
    },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.image_url} url={news.source_url}/>
      })}

    </div>
   
  )
}

export default NewsBoard
