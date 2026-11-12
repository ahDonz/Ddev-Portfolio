import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("donatillo121@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <section className="min-h-screen px-5 sm:px-8 md:px-20 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-start">

          {/* Left Side */}
          <div>
            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-bold
                leading-tight
              "
            >
              Contact
            </h1>
          </div>


          {/* Right Side */}
          <div className="w-full max-w-lg">

            <p
              className="
                text-sm
                sm:text-base
                leading-relaxed
                mb-8
              "
            >
              Have a project, idea, or collaboration you'd like to work on together?
              <br />
              I'd love to hear from you! Send me a note and I'll get in touch:
            </p>


            <div className="space-y-5">

              {/* Copy Email */}
              <button
                onClick={copyEmail}
                className="
                  block
                  text-left
                  text-sm
                  sm:text-base
                  font-semibold
                  text-blue-600
                  hover:text-blue-800
                  hover:underline
                  transition
                  cursor-pointer
                "
              >
                {copied ? "Email Copied!" : "donatillo121@gmail.com"}
              </button>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/don-johnson-atillo-b6595839b/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  text-sm
                  sm:text-base
                  font-semibold
                  text-blue-600
                  hover:text-blue-800
                  hover:underline
                  transition
                "
              >
                LinkedIn
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/ahDonz"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  text-sm
                  sm:text-base
                  font-semibold
                  text-blue-600
                  hover:text-blue-800
                  hover:underline
                  transition
                "
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;