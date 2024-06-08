import React from 'react';

interface PostProps {
  title: string;
  content: string;
  publishedAt: string;
}

const Post: React.FC<PostProps> = ({ title, content, publishedAt }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">Published on {publishedAt}</p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
