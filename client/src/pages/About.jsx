export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-2xl p-3 text-center">
        <div>
          <h1 className="font my-7 text-center text-3xl font-semibold">
            About Sahand' Blog
          </h1>
          <div className="text-md flex flex-col gap-6 text-gray-500">
            <p>
              Welcome to Sahand's Blog! This blog was created by Sahand Ghavidel
              as a personal project to share his thoughts and ideas with the
              world. Sahand is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sahand is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
