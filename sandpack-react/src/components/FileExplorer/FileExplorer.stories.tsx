import * as React from "react";

import { SandpackLayout } from "../../common/Layout";
import { SandpackCodeEditor } from "../../components/CodeEditor";
import { SandpackProvider } from "../../contexts/sandpackContext";

import { Directory } from "./Directory";
import { File } from "./File";

import { FileExplorer } from "./";

export default {
  title: "components/File Explorer",
};

export const Component: React.FC = () => (
  <>
    <SandpackProvider
      customSetup={{
        entry: "/index.tsx",
        files: {
          "/index.tsx": "",
          "/src/app.tsx": "",
          "/src/components/button.tsx": "",
        },
      }}
    >
      <SandpackLayout>
        <FileExplorer />
        <SandpackCodeEditor />
      </SandpackLayout>
    </SandpackProvider>

    <SandpackProvider
      customSetup={{
        entry: "/index.tsx",
        files: {
          "/index.tsx": "",
          "/src/app.tsx": "",
          "/src/components/button.tsx": "",
        },
      }}
    >
      <SandpackLayout theme="night-owl">
        <FileExplorer />
        <SandpackCodeEditor />
      </SandpackLayout>
    </SandpackProvider>
  </>
);

export const LongFileTree: React.FC = () => (
  <SandpackProvider
    customSetup={{
      entry: "/index.tsx",
      files: new Array(20).fill(" ").reduce((acc, _curr, index) => {
        acc[`/src/com${index}.js`] = "";

        return acc;
      }, {}),
    }}
  >
    <SandpackLayout>
      <FileExplorer />
    </SandpackLayout>
  </SandpackProvider>
);

export const FileStory: React.FC = () => (
  <SandpackProvider>
    <SandpackLayout>
      <File depth={1} path="file.ts" />
    </SandpackLayout>
  </SandpackProvider>
);

export const DirectoryIconStory: React.FC = () => (
  <SandpackProvider>
    <SandpackLayout>
      <Directory
        activePath="file.ts"
        depth={1}
        files={{ App: { code: "" } }}
        prefixedPath="/src"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        selectFile={(): any => null}
      />
    </SandpackLayout>
  </SandpackProvider>
);
