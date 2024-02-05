import { Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";

function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(
    function () {
      async function fetchPost() {
        try {
          setLoading(true);
          const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
          const data = await res.json();
          if (res.ok) {
            setPost(data.posts[0]);
            setLoading(false);
            setError(false);
          }
        } catch (err) {
          setError(true);
          setLoading(false);
        }
      }
      fetchPost();
    },
    [postSlug],
  );

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col p-3">
      <h1 className="mx-auto mt-10 max-w-2xl p-3 text-center font-serif text-3xl lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="mt-5 self-center"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 max-h-[600px] w-full object-cover p-3"
      />
      <div className="mx-auto flex w-full max-w-2xl justify-between border-b border-slate-300 p-3 text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="post-content mx-auto w-full max-w-2xl p-3"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="mx-auto w-full max-w-4xl">
        <CallToAction />
      </div>
    </main>
  );
}

export default PostPage;
