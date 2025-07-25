import React from 'react';

const Sitemap = () => {
  const sitemapData = {
    "Main Pages": [
      { name: "Home", url: "https://ce-website-new.vercel.app" },
      { name: "About Us", url: "https://ce-website-new.vercel.app/about-us" },
    ],
    Services: [
      { name: "Artificial Intelligence", url: "https://ce-website-new.vercel.app/services/artificial-intelligence" },
      { name: "MVP Development", url: "https://ce-website-new.vercel.app/services/mvp-development" },
      { name: "Cloud Computing", url: "https://ce-website-new.vercel.app/services/cloud-computing" },
      { name: "Software Development", url: "https://ce-website-new.vercel.app/services/software-development" },
      { name: "Software Security", url: "https://ce-website-new.vercel.app/services/software-security" },
      { name: "UI/UX", url: "https://ce-website-new.vercel.app/services/ui-ux" },
      { name: "Support & Maintenance", url: "https://ce-website-new.vercel.app/services/support-and-maintenance" },
    ],
    Blogs: [
      { name: "Classy Endeavors Blogs", url: "https://blog.classyendeavors.com/" },
    ],
  };

  return (
    <section className="relative overflow-hidden z-10 pt-40 pb-20">

      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-medium mb-4">Site Map</h1>
        {Object.entries(sitemapData).map(([category, links]) => (
          <div key={category}>
            <h2 className="text-xl font-medium mt-6 mb-2">{category}</h2>
            <ul className="list-disc list-inside custom-bullets flex flex-col gap-3">
              {links.map(link => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 hover:text-primary/80 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sitemap;
