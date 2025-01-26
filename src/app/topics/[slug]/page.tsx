import PostList from "@/components/posts/post-list";
import PostCreateForm from "@/components/posts/PostcreateForm";
import { fetchPostByTopicSlug } from "@/lib/query/post";
import React from "react";

type TopicShowPageProps = {
  params: Promise<{ slug: string }>;
};

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <div className="flex flex-col gap-2 mt-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl md:text-2xl">{slug}</h1>
         <PostCreateForm slug = {slug}/>
      </div>
      <div className="col-span-3">
        <PostList fetchData = {() => fetchPostByTopicSlug(slug)}/>
      </div>
      
    </div>
  );
};

export default TopicShowPage;