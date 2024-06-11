import Header from "@/components/Header";
import Post from "@/components/home/Post";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100 py-24"> {/* Add padding-top */}
        <div className="items-center text-center font-bold text-5xl py-20">
          {/* <Post
            title="Example Title"
            content="Example Content"
            publishedAt="June 7, 2024"
          /> */}
          <h1>Add Your content here</h1>
        </div>
      </div>
    </>
  );
}
