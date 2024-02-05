import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center rounded-br-3xl rounded-tl-3xl border border-teal-500 p-3 text-center sm:flex-row">
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="my-2 text-gray-500">
          Checkout these resources with 100 JavaScript Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-bl-none rounded-tl-xl"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="flex-1 p-7">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="JavaScript"
        />
      </div>
    </div>
  );
}
