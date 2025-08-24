import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Portfolio Tips for Assistant Video Editor | Assistant Video Editor Jobs",
  description: "Expert tips for creating compelling resumes and portfolios that will help you land assistant video editor jobs.",
};

const ResumePortfolio = () => {
  return (
    <>
      <Breadcrumb
        pageName="Resume & Portfolio Tips"
        description="Create compelling resumes and portfolios to showcase your video editing skills"
      />
      
      <section className="pt-16 pb-10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Resume & Portfolio Tips for Assistant Video Editors
              </h1>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Learn how to create professional resumes and portfolios that showcase your video editing skills effectively.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Resume Essentials</h2>
              <h3>Contact Information</h3>
              <ul>
                <li>Full name and professional email address</li>
                <li>Phone number and location (city, state)</li>
                <li>Professional social media profiles (LinkedIn, portfolio website)</li>
                <li>Professional headshot (optional but recommended)</li>
              </ul>

              <h3>Professional Summary</h3>
              <p>
                Write a compelling 2-3 sentence summary that highlights your key skills, 
                experience level, and career goals as an assistant video editor.
              </p>

              <h3>Skills Section</h3>
              <ul>
                <li>List video editing software proficiency levels</li>
                <li>Include technical skills (file management, formats, etc.)</li>
                <li>Highlight soft skills (communication, teamwork, etc.)</li>
                <li>Use industry-standard terminology</li>
              </ul>

              <h3>Experience</h3>
              <ul>
                <li>List relevant work experience in reverse chronological order</li>
                <li>Use action verbs to describe your responsibilities</li>
                <li>Quantify achievements when possible (e.g., "Edited 50+ videos")</li>
                <li>Focus on video editing and post-production tasks</li>
              </ul>

              <h2>Portfolio Creation</h2>
              <h3>Project Selection</h3>
              <ul>
                <li>Choose your best 8-12 pieces</li>
                <li>Showcase variety in style, genre, and technique</li>
                <li>Include both personal and professional work</li>
                <li>Demonstrate progression in your skills</li>
              </ul>

              <h3>Portfolio Organization</h3>
              <ul>
                <li>Group projects by category or style</li>
                <li>Provide context for each project</li>
                <li>Include before/after examples when relevant</li>
                <li>Add project descriptions and your role</li>
              </ul>

              <h3>Presentation Format</h3>
              <ul>
                <li>Create a professional website or use platforms like Vimeo/YouTube</li>
                <li>Ensure mobile-friendly design</li>
                <li>Include downloadable resume and contact information</li>
                <li>Keep navigation simple and intuitive</li>
              </ul>

              <h2>Showcasing Your Work</h2>
              <h3>Video Quality</h3>
              <ul>
                <li>Use high-quality video files</li>
                <li>Ensure proper audio synchronization</li>
                <li>Include captions or descriptions for context</li>
                <li>Optimize for web viewing</li>
              </ul>

              <h3>Project Descriptions</h3>
              <ul>
                <li>Explain the project's purpose and goals</li>
                <li>Describe your specific role and contributions</li>
                <li>Mention challenges overcome and solutions implemented</li>
                <li>Include client feedback or results when available</li>
              </ul>

              <h2>Online Presence</h2>
              <h3>Professional Platforms</h3>
              <ul>
                <li><strong>LinkedIn:</strong> Professional profile with portfolio links</li>
                <li><strong>Vimeo:</strong> High-quality video hosting</li>
                <li><strong>YouTube:</strong> Broader audience reach</li>
                <li><strong>Personal Website:</strong> Complete control over presentation</li>
              </ul>

              <h3>Social Media Strategy</h3>
              <ul>
                <li>Share behind-the-scenes content</li>
                <li>Post work-in-progress updates</li>
                <li>Engage with other video editors and creators</li>
                <li>Use relevant hashtags to increase visibility</li>
              </ul>

              <h2>Tips for Success</h2>
              <ul>
                <li><strong>Keep it current:</strong> Regularly update with new work</li>
                <li><strong>Quality over quantity:</strong> Better to have fewer excellent pieces</li>
                <li><strong>Tell a story:</strong> Show your creative journey and growth</li>
                <li><strong>Get feedback:</strong> Ask other professionals for input</li>
                <li><strong>Stay consistent:</strong> Maintain professional branding across platforms</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li>Including outdated or low-quality work</li>
                <li>Neglecting to proofread resume and descriptions</li>
                <li>Using generic templates without customization</li>
                <li>Forgetting to include contact information</li>
                <li>Not optimizing for mobile devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePortfolio;
