import { JobCategory, GuideCategory, ToolCategory, BlogPost } from "@/types/site";

export const jobCategories: JobCategory[] = [
  {
    id: "assistant-video-editor-jobs",
    title: "Assistant Video Editor Jobs",
    description: "Find full-time assistant video editor positions at top companies and studios",
    path: "/jobs/assistant-video-editor-jobs",
    count: 150,
  },
  {
    id: "freelance-assistant-video-editor",
    title: "Freelance Jobs",
    description: "Discover freelance and contract assistant video editor opportunities",
    path: "/jobs/freelance-assistant-video-editor",
    count: 89,
  },
  {
    id: "remote-assistant-video-editor",
    title: "Remote Jobs",
    description: "Work from anywhere with remote assistant video editor positions",
    path: "/jobs/remote-assistant-video-editor",
    count: 67,
  },
  {
    id: "entry-level-assistant-video-editor",
    title: "Entry-Level Jobs",
    description: "Perfect for beginners starting their video editing career",
    path: "/jobs/entry-level-assistant-video-editor",
    count: 45,
  },
  {
    id: "salary-career",
    title: "Salary & Career Path",
    description: "Learn about assistant video editor salaries and career progression",
    path: "/jobs/salary-career",
  },
];

export const guideCategories: GuideCategory[] = [
  {
    id: "what-does-an-assistant-video-editor-do",
    title: "What Does an Assistant Video Editor Do?",
    description: "Learn about the day-to-day responsibilities and tasks of assistant video editors",
    path: "/guides/what-does-an-assistant-video-editor-do",
    readTime: "5 min read",
  },
  {
    id: "how-to-become",
    title: "How to Become an Assistant Video Editor",
    description: "Step-by-step guide to starting your career as an assistant video editor",
    path: "/guides/how-to-become",
    readTime: "8 min read",
  },
  {
    id: "skills",
    title: "Skills Needed",
    description: "Essential skills and competencies required for assistant video editor positions",
    path: "/guides/skills",
    readTime: "6 min read",
  },
  {
    id: "resume-portfolio",
    title: "Resume & Portfolio Tips",
    description: "How to create a compelling resume and portfolio to land your dream job",
    path: "/guides/resume-portfolio",
    readTime: "7 min read",
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    description: "Prepare for assistant video editor job interviews with expert tips",
    path: "/guides/interview-preparation",
    readTime: "6 min read",
  },
];

export const toolCategories: ToolCategory[] = [
  {
    id: "free-editing-software",
    title: "Best Free Editing Software",
    description: "Top free video editing software for beginners and professionals",
    path: "/tools/free-editing-software",
    isFree: true,
  },
  {
    id: "paid-editing-tools",
    title: "Paid Editing Tools",
    description: "Professional video editing software and tools for advanced users",
    path: "/tools/paid-editing-tools",
    isFree: false,
  },
  {
    id: "resume-templates",
    title: "Resume Templates",
    description: "Professional resume templates designed for video editors",
    path: "/tools/resume-templates",
    isFree: true,
  },
  {
    id: "project-management-tools",
    title: "Project Management Tools",
    description: "Essential tools for managing video editing projects efficiently",
    path: "/tools/project-management-tools",
    isFree: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "assistant-vs-video-editor",
    title: "Assistant Video Editor vs Video Editor",
    description: "Understanding the key differences between assistant and senior video editor roles",
    path: "/blog/assistant-vs-video-editor",
    publishDate: "2024-01-15",
    author: "Sarah Johnson",
    readTime: "4 min read",
    tags: ["career", "roles", "comparison"],
  },
  {
    id: "finding-freelance-clients",
    title: "Finding Freelance Clients",
    description: "Proven strategies to find and retain freelance video editing clients",
    path: "/blog/finding-freelance-clients",
    publishDate: "2024-01-10",
    author: "Mike Chen",
    readTime: "6 min read",
    tags: ["freelance", "clients", "business"],
  },
  {
    id: "ai-tools-for-video-editors",
    title: "AI Tools for Video Editors",
    description: "How artificial intelligence is revolutionizing video editing workflows",
    path: "/blog/ai-tools-for-video-editors",
    publishDate: "2024-01-05",
    author: "Emily Rodriguez",
    readTime: "5 min read",
    tags: ["AI", "technology", "workflow"],
  },
  {
    id: "daily-tasks",
    title: "Daily Tasks of an Assistant Editor",
    description: "A day in the life of an assistant video editor - what to expect",
    path: "/blog/daily-tasks",
    publishDate: "2024-01-01",
    author: "David Kim",
    readTime: "3 min read",
    tags: ["daily routine", "workflow", "experience"],
  },
];
