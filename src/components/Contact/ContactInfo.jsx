import { useState } from "react";

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);
  const email = "donatillo121@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[47%]">
      <h2 className="text-4xl font-medium">Contact me</h2>

      <p className="mt-6 w-[83%] text-lg leading-relaxed text-gray-700 font-medium">
        I'm always open to hearing about new projects, ideas, or collaborations.
        Send me a note and I'll get in touch!
      </p>

     <div className="mt-8 flex flex-col gap-1">
        <p className="text-sm uppercase tracking-wide text-gray-500">
            Copy email
        </p>

        <p
            onClick={copyEmail}
            className="w-fit cursor-pointer text-lg font-medium transition hover:text-gray-600"
        >
            {copied ? "Copied!" : email}
        </p>
        </div>
    </div>
  );
};

export default ContactInfo;