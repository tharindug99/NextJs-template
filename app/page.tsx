import Post from "@/components/home/Post";

export default function Home() {
  return (
    <main className="mb-40 ">
        <Post 
            title="Example Title" 
            content="Example Content" 
            publishedAt="June 7, 2024" 
        />
    </main>
  );
}
