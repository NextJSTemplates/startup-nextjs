import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Jobs",
    path: "/jobs",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Assistant Video Editor Jobs",
        path: "/jobs/assistant-video-editor-jobs",
        newTab: false,
      },
      {
        id: 22,
        title: "Freelance Jobs",
        path: "/jobs/freelance-assistant-video-editor",
        newTab: false,
      },
      {
        id: 23,
        title: "Remote Jobs",
        path: "/jobs/remote-assistant-video-editor",
        newTab: false,
      },
      {
        id: 24,
        title: "Entry-Level Jobs",
        path: "/jobs/entry-level-assistant-video-editor",
        newTab: false,
      },
      {
        id: 25,
        title: "Salary & Career Path",
        path: "/jobs/salary-career",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Guides",
    path: "/guides",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "What Does an Assistant Video Editor Do?",
        path: "/guides/what-does-an-assistant-video-editor-do",
        newTab: false,
      },
      {
        id: 32,
        title: "How to Become an Assistant Video Editor",
        path: "/guides/how-to-become",
        newTab: false,
      },
      {
        id: 33,
        title: "Skills Needed",
        path: "/guides/skills",
        newTab: false,
      },
      {
        id: 34,
        title: "Resume & Portfolio Tips",
        path: "/guides/resume-portfolio",
        newTab: false,
      },
      {
        id: 35,
        title: "Interview Preparation",
        path: "/guides/interview-preparation",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Tools",
    path: "/tools",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Best Free Editing Software",
        path: "/tools/free-editing-software",
        newTab: false,
      },
      {
        id: 42,
        title: "Paid Editing Tools",
        path: "/tools/paid-editing-tools",
        newTab: false,
      },
      {
        id: 43,
        title: "Resume Templates",
        path: "/tools/resume-templates",
        newTab: false,
      },
      {
        id: 44,
        title: "Project Management Tools",
        path: "/tools/project-management-tools",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Assistant Video Editor vs Video Editor",
        path: "/blog/assistant-vs-video-editor",
        newTab: false,
      },
      {
        id: 52,
        title: "Finding Freelance Clients",
        path: "/blog/finding-freelance-clients",
        newTab: false,
      },
      {
        id: 53,
        title: "AI Tools for Video Editors",
        path: "/blog/ai-tools-for-video-editors",
        newTab: false,
      },
      {
        id: 54,
        title: "Daily Tasks of an Assistant Editor",
        path: "/blog/daily-tasks",
        newTab: false,
      },
    ],
  },
];

export default menuData;
