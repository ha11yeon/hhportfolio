//import Project from "./project";
import Blog from "./components/homepage/project";


async function getData() {
    const res = await fetch(`https://dev.to/api/articles?username=said7388`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    const data = await res.json();
  
    const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  
    return filtered;
  };

  export default async function Home() {
    const blogs = await getData();
  
    return (
      <>
        
        <Blog blogs={blogs} />
        
      </>
    )
  };