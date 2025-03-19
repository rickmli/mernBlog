import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg font-semibold dark:text-white sm:text-xl"
            >
              <span className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-white">
                Rick's
              </span>{" "}
              Blog
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="ABOUT" />
              <Footer.LinkGroup col>
                {/* TODO: connect website */}
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  No website yet
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rick's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="FOLLOW ME" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/rickmli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/rickmli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Rick's blog"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex gap-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100022032679427"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/rickmli/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/rick_m_li"
              icon={BsTwitter}
            />
            <Footer.Icon href="https://github.com/rickmli" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp;
