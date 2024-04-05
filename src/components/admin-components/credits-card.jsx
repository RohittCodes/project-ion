import React from "react";

const CreditsCard = () => {
  const Developers = [
    {
      name: "Rohith Singh",
      linkedin: "rohittcodes",
    },
    {
      name: "Uday Regimudi",
      linkedin: "uday-kiran-81577621a",
    },
    {
      name: "Varshith Krishna",
      linkedin: "varshithkrishna",
    },
    {
      name: "Dheeraj Nandiraju",
      linkedin: "dheeraj-nandiraju",
    },
    {
      name: "Harsha Vardhan",
      linkedin: "harsha-vardhan-5ba7182a7",
    },
    {
      name: "Sai Santhosh",
      linkedin: "sai-santhosh-mandava-a195b6277",
    },
  ];

  return (
    <div className="flex gap-1 px-6 py-2 justify-center text-text-primary">
      <span className="font-bold">
        Developed by:{" "}
        {Developers.map((dev, index) => (
          <>
            <a
              href={`https://linkedin.com/in/${dev.linkedin}`}
              key={`${dev.name}-${index}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              {dev.name}
            </a>
            {index === Developers.length - 1 ? "" : ","}{" "}
          </>
        ))}
      </span>
    </div>
  );
};

export default CreditsCard;
