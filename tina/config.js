import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "image",
            label: "Image",
            fields: [
              {
                type: "string",
                name: "url",
                label: "URL",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
            ],
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },

  // Dashboard customization
  dashboard: {
    // Customize brand name
    brandName: "KSU",

    // Customize theme with light green background
    theme: {
      primaryColor: "#90EE90", // Light green
      colors: {
        background: "#E6F2E6", // Soft light green background
        foreground: "#333333",
      },
    },
  },

  // Optional: CMS Callback for additional customization
  cmsCallback: (cms) => {
    // Further customize if needed
    return cms;
  },
});
