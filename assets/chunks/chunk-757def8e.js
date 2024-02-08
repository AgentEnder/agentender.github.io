import{j as s}from"./chunk-529f355d.js";function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",nav:"nav",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.nav,{className:"toc",children:s.jsxs(n.ol,{className:"toc-level toc-level-1",children:[s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#tldr",children:"TLDR"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#angular-beginnings",children:"Angular Beginnings"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#workspace-configuration-v2",children:"Workspace Configuration v2"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#projectjson-and-splitting-workspacejson",children:"project.json and splitting workspace.json"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#the-beginnings-of-inference",children:"The beginnings of inference"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#enter-lerna",children:"Enter Lerna"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#inference-api-v1-and-workspaces-support",children:"Inference API v1, and workspaces support"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#inference-api-v2",children:"Inference API v2"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#project-configuration-v3--project-crystal-",children:"Project Configuration v3 + Project Crystal 💎"})}),s.jsx(n.li,{className:"toc-item toc-item-h2",children:s.jsx(n.a,{className:"toc-link toc-link-h2",href:"#conclusion",children:"Conclusion"})})]})}),s.jsxs(n.h1,{id:"a-brief-look-at-changes-to-nxs-configuration",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-brief-look-at-changes-to-nxs-configuration",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"A brief look at changes to Nx's Configuration"]}),`
`,s.jsxs(n.p,{children:["Nx's configuration has changed dramatically over the years, and it's been a long journey to get to where we are today. I joined the Nx team in June 2021, right before we split up ",s.jsx(n.code,{children:"workspace.json"})," into ",s.jsx(n.code,{children:"workspace.json"})," and ",s.jsx(n.code,{children:"project.json"}),". Since joining the team, I've had a pretty direct hand in many of these changes, and have worked closely on others."]}),`
`,s.jsx(n.p,{children:"There are a few misconceptions about Nx that stem from its configuration and history, and I'd like to clear some of those up."}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Nx is only for Angular"}),`
`,s.jsx(n.li,{children:"Nx is hard to configure"}),`
`,s.jsx(n.li,{children:"Nx has a lot of configuration."}),`
`]}),`
`,s.jsxs(n.h2,{id:"tldr",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tldr",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"TLDR"]}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Nx was initially built as an Angular CLI extension. It has been its own CLI for several years, and has no direct ties to angular at this point."}),`
`,s.jsx(n.li,{children:"Nx's configuration has went through several iterations, and mostly configures itself these days."}),`
`,s.jsx(n.li,{children:"You shouldn't have to worry when the configuration changes, as Nx will migrate your existing config for you."}),`
`]}),`
`]}),`
`,s.jsxs(n.h2,{id:"angular-beginnings",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#angular-beginnings",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Angular Beginnings"]}),`
`,s.jsx(n.p,{children:"Nx was initially built as an Angular CLI extension. It was a set of schematics and builders that extended the Angular CLI's capabilities. This was a great way to get started, but it had some limitations. For example, it was difficult to add support for other frameworks, and it was difficult to add new commands to the CLI."}),`
`,s.jsx(n.p,{children:"Angular CLI also supports monorepos, and in the beginning Nx used angular's configuration. When you have multiple projects, the configuration would look something like this:"}),`
`,s.jsx(n.pre,{filename:"angular.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"version"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-number",children:"1"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"my-app"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"architect"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"builder"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"@angular-devkit/build-angular:browser"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"options"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"main"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/main.ts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"tsConfig"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/tsconfig.app.json"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/favicon.ico"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"styles"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/styles.css"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"scripts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
          `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsxs(n.p,{children:["To help distinguish a plain Angular CLI project from an Nx workspace, and better support other tools, we added support for a ",s.jsx(n.code,{children:"workspace.json"})," file. This file was identical to ",s.jsx(n.code,{children:"angular.json"}),"."]}),`
`,s.jsxs(n.p,{children:["As Nx grew and added more features, we needed to add more configuration. We added a ",s.jsx(n.code,{children:"nx.json"})," file to store this configuration. This file was used to store configuration for things that were specific to Nx, and that angular wouldn't understand. For example, we added support for ",s.jsx(n.code,{children:"tags"})," and ",s.jsx(n.code,{children:"implicitDependencies"})," to help Nx understand the relationships between projects."]}),`
`,s.jsxs(n.h2,{id:"workspace-configuration-v2",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#workspace-configuration-v2",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Workspace Configuration v2"]}),`
`,s.jsxs(n.p,{children:["After a bit, Nx grew apart from Angular CLI. It became a standalone tool that could be used with any framework. This meant that we needed to create our own configuration file. We created ",s.jsx(n.code,{children:"workspace.json"})," to replace ",s.jsx(n.code,{children:"angular.json"}),". The configuration was extraordinarily similar, but it was a different file and a few properties had a different name. The names changed to more closely match the names that Nx uses. For example, ",s.jsx(n.code,{children:"builder"})," became ",s.jsx(n.code,{children:"executor"})," and ",s.jsx(n.code,{children:"architect"})," became ",s.jsx(n.code,{children:"targets"}),"."]}),`
`,s.jsxs(n.p,{children:["These changes included some differences in ",s.jsx(n.code,{children:"nx.json"})," as well. The ",s.jsx(n.code,{children:"schematics"})," property was renamed as ",s.jsx(n.code,{children:"generators"}),"."]}),`
`,s.jsx(n.p,{children:"At this point, the files looked like this:"}),`
`,s.jsx(n.pre,{filename:"workspace.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"version"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-number",children:"2"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"my-app"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"targets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"executor"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"@nrwl/web:build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"options"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"main"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/main.ts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"tsConfig"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/tsconfig.app.json"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/favicon.ico"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"styles"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/styles.css"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"scripts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
          `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsx(n.pre,{filename:"nx.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"my-app"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"tags"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"generators"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"@nrwl/angular:component"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"style"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"scss"'}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsxs(n.p,{children:["Additionally, nx added the capability to run dependant targets before a target. This was initially done by adding a ",s.jsx(n.code,{children:"targetDependencies"})," section within ",s.jsx(n.code,{children:"nx.json"}),". The property was scoped to all targets with a given name, and looked like this:"]}),`
`,s.jsx(n.pre,{filename:"nx.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"targetDependencies"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"target"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"build-base"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"self"'}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"build-base"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"target"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"build-base"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"dependencies"'}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsxs(n.p,{children:["The above configuration would run the ",s.jsx(n.code,{children:"build-base"})," target for all projects before running the ",s.jsx(n.code,{children:"build"})," target of that same project. This was a powerful feature, but it wasn't as general as we had hoped and needed a bit more flexibility."]}),`
`,s.jsxs(n.p,{children:["Soon after, we renamed ",s.jsx(n.code,{children:"targetDependencies"})," to ",s.jsx(n.code,{children:"targetDefaults"})," + ",s.jsx(n.code,{children:"dependsOn"})," and allowed specifying it on a per-project basis. This allowed us to specify different defaults for different projects. The configuration looked like this:"]}),`
`,s.jsx(n.pre,{filename:"nx.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"targetDefaults"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"dependsOn"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"target"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"build-base"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"self"'}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsx(n.pre,{filename:"workspace.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"my-app"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"targets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"executor"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"@nrwl/web:build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"options"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"main"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/main.ts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"tsConfig"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/tsconfig.app.json"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/favicon.ico"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"styles"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/my-app/src/styles.css"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
            `,s.jsx(n.span,{className:"hljs-attr",children:'"scripts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
          `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"dependsOn"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),`
            `,s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
              `,s.jsx(n.span,{className:"hljs-attr",children:'"target"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"build-base"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
              `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"self"'}),`
            `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
          `,s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsxs(n.h2,{id:"projectjson-and-splitting-workspacejson",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#projectjson-and-splitting-workspacejson",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),s.jsx(n.code,{children:"project.json"})," and splitting ",s.jsx(n.code,{children:"workspace.json"})]}),`
`,s.jsxs(n.p,{children:["Nx is a monorepo focused tool. It's designed to work with many projects in a single repository. As such, the ",s.jsx(n.code,{children:"workspace.json"})," file can get quite large. Every time a new project is added, an existing project is modified, or an older project is removed, the ",s.jsx(n.code,{children:"workspace.json"})," file needs to be updated. This can lead to merge conflicts and other issues."]}),`
`,s.jsxs(n.p,{children:["When working with customers with over 200 projects, this was no longer scalable. We needed to split the ",s.jsx(n.code,{children:"workspace.json"})," file into multiple files. We also needed to make it easier to add new projects and modify existing projects."]}),`
`,s.jsxs(n.p,{children:["We decided that ",s.jsx(n.code,{children:"workspace.json"})," would contain a map of project name to file path. This would allow us to split the configuration into multiple files. At the same time, it was important to maintain compatibility with Angular CLI schematics and builders. We wanted to do this without having to keep a copy of the Angular CLI configuration in sync with the Nx configuration."]}),`
`,s.jsx(n.p,{children:"As such, we created a translation layer that would handle reading and writing the configuration when angular asked for it. Doing this unlocked a ton of flexibility on our side to make changes to the configuration without breaking compatibility with Angular CLI."}),`
`,s.jsxs(n.p,{children:["Additionally, we took some time to reevaluate where existing configuration options lived. Since we now have a configuration file per project it made less sense to place ",s.jsx(n.code,{children:"tags"})," and ",s.jsx(n.code,{children:"implicitDependencies"})," in ",s.jsx(n.code,{children:"nx.json"}),". We moved these properties to ",s.jsx(n.code,{children:"nx.json"})," as well."]}),`
`,s.jsx(n.p,{children:"The end result of this round of changes resulted in:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"workspace.json"})," containing a map of project name to file path"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"project.json"})," containing all of the configuration for a single project"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"nx.json"})," containing configuration that is global to the workspace"]}),`
`]}),`
`,s.jsx(n.p,{children:"This was a much cleaner and more scalable way to manage configuration. It meant less merge conflicts, but also made it easier to tell what projects may have been affected by a change."}),`
`,s.jsx(n.pre,{filename:"workspace.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"version"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-number",children:"2"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"myapp"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/myapp"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"mylib"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"libs/mylib"'}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsx(n.pre,{filename:"apps/myapp/project.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"targets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"executor"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"@nrwl/web:build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"options"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"main"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/myapp/src/main.ts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"tsConfig"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/myapp/tsconfig.app.json"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/myapp/src/favicon.ico"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","})," ",s.jsx(n.span,{className:"hljs-string",children:'"apps/myapp/src/assets"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"styles"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-string",children:'"apps/myapp/src/styles.css"'}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
        `,s.jsx(n.span,{className:"hljs-attr",children:'"scripts"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsx(n.pre,{filename:"nx.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s.jsx(n.span,{className:"hljs-attr",children:'"targetDefaults"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"build"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s.jsx(n.span,{className:"hljs-attr",children:'"dependsOn"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"target"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"build-base"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
          `,s.jsx(n.span,{className:"hljs-attr",children:'"projects"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"self"'}),`
        `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
      `,s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),`
    `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsxs(n.h2,{id:"the-beginnings-of-inference",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-beginnings-of-inference",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"The beginnings of inference"]}),`
`,s.jsxs(n.p,{children:["After the last round of changes, we noticed that the ",s.jsx(n.code,{children:"workspace.json"})," file was not particularly useful. It was just a map of project name to file path. We decided that it should be optional, and in time we dropped support for it entirely."]}),`
`,s.jsx(n.p,{children:"This change required Nx to be able to locate the configuration of projects without a central file. Adding this support was not a major task, but while doing so we also decided to open up the possibility of dynamically building configuration."}),`
`,s.jsxs(n.p,{children:["At the same time, there was a push from non-angular users to simplify the configuration. Npm/yarn/pnpm workspaces had gained a bit of popularity and it was much easier to define targets as a ",s.jsx(n.code,{children:"package.json"})," script for a segment of users. We wanted to make it easier for these users to use Nx, while also helping Nx make sense when compared to other tools. The decision was made that if there was a package.json file inside a project, Nx would be able to run its scripts as a target."]}),`
`,s.jsxs(n.h2,{id:"enter-lerna",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enter-lerna",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Enter Lerna"]}),`
`,s.jsx(n.p,{children:"Lerna has been around a long time, and maintains a good amount of popularity within the JavaScript community. It's a tool that helps manage multiple packages in a single repository. It's a bit different from Nx, but it's similar enough that we were already looking at making it easier to use the two together. Lerna had some functionality that Nx didn't (publishing packages), and Nx had some functionality that Lerna didn't (caching and code generation)."}),`
`,s.jsxs(n.p,{children:["Around this time, several things surrounding lerna started to become worrisome. There was an ",s.jsx(n.a,{href:"https://github.com/lerna/lerna/issues/2703",rel:"nofollow",children:"issue"})," filed stating that lerna had been unmaintained. A ",s.jsx(n.a,{href:"https://github.com/lerna/lerna/pull/3092",rel:"nofollow",children:"PR"})," had been merged adding a warning that lerna wasn't being actively maintained, and that the community should consider using other tools."]}),`
`,s.jsxs(n.p,{children:["These users would need to go somewhere, but any change for them would not be without difficulty. Nrwl, the company behind Nx, decided to step in and offer a solution. After talking with the maintainer, we were able to take over stewardship and step in to maintain the project. This was announced in a blog post here: ",s.jsx(n.a,{href:"https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9",rel:"nofollow",children:"Lerna is dead, Long live Lerna"}),"."]}),`
`,s.jsxs(n.h2,{id:"inference-api-v1-and-workspaces-support",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#inference-api-v1-and-workspaces-support",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Inference API v1, and workspaces support"]}),`
`,s.jsx(n.p,{children:"With Lerna under our purview we wanted to be able to unify the two tools. Nx should be able to work in a lerna workspace, and hopefully the portions of Lerna that Nx could already handle would then be able to invoke Nx under the hood. This would prevent us from having to maintain two copies of the same functionality, and we were optimistic we could do this without breaking any existing workflows."}),`
`,s.jsx(n.p,{children:"The first step of this process was to ensure that Nx could work in a Lerna repository without changing the existing structure. This meant a few things:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"workspace.json"})," had to be optional"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"project.json"})," had to be optional"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"nx.json"})," had to be optional"]}),`
`]}),`
`,s.jsx(n.p,{children:"If any of these 3 files had been required, it would have caught lerna users off guard and look like Nx was replacing lerna."}),`
`,s.jsx(n.p,{children:"This built upon our existing inference capabilities, and while opening them up further we decided to publish a version that plugin authors could take advantage of."}),`
`,s.jsx(n.p,{children:"The first version of these inference APIs never left experimental, and weren't actually used internally. Rather, they acted almost as a proof of concept and allowed us to see what the API might look like. Essentially, we needed an API that would be able to turn a project's configuration file into its actual configuration. The API looked something like this:"}),`
`,s.jsx(n.pre,{children:s.jsxs(n.code,{className:"hljs language-typescript",children:[s.jsx(n.span,{className:"hljs-keyword",children:"import"})," { ",s.jsx(n.span,{className:"hljs-title class_",children:"NxPlugin"})," } ",s.jsx(n.span,{className:"hljs-keyword",children:"from"})," ",s.jsx(n.span,{className:"hljs-string",children:"'@nx/devkit'"}),`;

`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-attr",children:"plugin"}),": ",s.jsx(n.span,{className:"hljs-title class_",children:"NxPlugin"}),` = {
  projectFilePatterns = [`,s.jsx(n.span,{className:"hljs-string",children:"'project.json'"}),`],
  registerProjectTargets = `,s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"projectFile"}),") =>"]}),` {
    `,s.jsx(n.span,{className:"hljs-comment",children:"// ..."}),`
  },
};
`]})}),`
`,s.jsxs(n.p,{children:["In this example, ",s.jsx(n.code,{children:"projectFilePatterns"})," is an array of file patterns that the plugin can handle. When Nx is looking for a project's configuration, it will look for a file that matches one of these patterns. If it finds one, it will pass it to ",s.jsx(n.code,{children:"registerProjectTargets"})," and expect it to return the targets a given project can run."]}),`
`,s.jsxs(n.p,{children:["While we didn't directly use this API, it was a very small inclusion in the core code to enable Nx running inside a repository that was only configured by ",s.jsx(n.code,{children:"package.json"})," files. The published API was also used to show how Nx could one day be used in C# or Java repositories, without introducing new configuration files."]}),`
`,s.jsxs(n.h2,{id:"inference-api-v2",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#inference-api-v2",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Inference API v2"]}),`
`,s.jsxs(n.p,{children:["We were mostly happy with the inference apis and configuration loading, but there were a few things that we wanted to clean up within Nx's codebase and the API itself. In particular we wanted to be able to streamline our handling of ",s.jsx(n.code,{children:"angular.json"})," for legacy users, and wanted to migrate the ",s.jsx(n.code,{children:"project.json"})," and ",s.jsx(n.code,{children:"package.json"})," configuration loading into the same API."]}),`
`,s.jsx(n.p,{children:"In order to do this, we needed an API that:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Could provide a full project configuration, not just the targets"}),`
`,s.jsx(n.li,{children:"Could read multiple projects from a single file (angular.json supports this)"}),`
`]}),`
`,s.jsx(n.p,{children:"Additionally, there were other plugin APIs to extend the project graph that were a bit confusing when deciding if a plugin should be an inference plugin or a project graph plugin. Project graph plugins exported a single function, that received the current project graph and returned a new one. As part of this, they could add new nodes and edges to the graph. Most nodes on the graph were projects, but adding a project via these APIs resulted in odd behavior as targets couldn't be ran because they weren't present when Nx initially loaded project configurations."}),`
`,s.jsx(n.p,{children:"As such, we decided to merge the two APIs into a single one. This API is responsible for creating nodes on the project graph, and creating edges between those nodes. The API looks something like this:"}),`
`,s.jsx(n.pre,{children:s.jsxs(n.code,{className:"hljs language-typescript",children:[s.jsx(n.span,{className:"hljs-keyword",children:"import"})," { ",s.jsx(n.span,{className:"hljs-title class_",children:"NxPlugin"})," } ",s.jsx(n.span,{className:"hljs-keyword",children:"from"})," ",s.jsx(n.span,{className:"hljs-string",children:"'@nx/devkit'"}),`;

`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-attr",children:"plugin"}),": ",s.jsx(n.span,{className:"hljs-title class_",children:"NxPlugin"}),` = {
  `,s.jsx(n.span,{className:"hljs-attr",children:"createNodes"}),": [",s.jsx(n.span,{className:"hljs-string",children:"'**/*.csproj'"}),", ",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"projectFile, ctx"}),") =>"]})," ",s.jsx(n.span,{className:"hljs-title function_",children:"readProjectsFromFile"}),`(projectFile)]
  `,s.jsx(n.span,{className:"hljs-attr",children:"createDependencies"}),": ",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"ctx"}),") =>"]})," ",s.jsx(n.span,{className:"hljs-title function_",children:"readEdgesFromContext"}),`(ctx)
};
`]})}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"CreateNodes"})," is a tuple, where the first element is a glob pattern that the plugin can handle, and the second element is a function that will read the file and return the projects it contains. ",s.jsx(n.code,{children:"createDependencies"})," is a function that will be called after all of the nodes have been created, and is responsible for creating the edges between the nodes."]}),`
`,s.jsxs(n.p,{children:["This API met all of the requirements we set out on, and ensured there was only one spot for plugin authors to add new nodes to the graph. It released as part of Nx 17, and was talked about at that years ",s.jsx(n.a,{href:"https://www.youtube.com/watch?v=bnjOu7iOrMg",rel:"nofollow",children:"Nx Conf"})]}),`
`,s.jsxs(n.h2,{id:"project-configuration-v3--project-crystal-",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-configuration-v3--project-crystal-",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Project Configuration v3 + Project Crystal 💎"]}),`
`,s.jsx(n.p,{children:"A large goal that the Nx team has consistently worked on is making Nx easier to adopt. Configuration changes are a large part of this, but we also took some time to reflect on how we integrate with other tools."}),`
`,s.jsxs(n.p,{children:["Traditionally, Nx would provide an executor that wrapped a tool like ",s.jsx(n.code,{children:"jest"}),". When running test, Nx would invoke the executor which would then invoke ",s.jsx(n.code,{children:"jest"}),". This was a bit of a pain point for users, as they would have to learn how to use Nx's executors and any of the idiosyncrasies that came with them. Additionally, it made it harder to get help when things went wrong, as the error messages would be different than what the user would see when running ",s.jsx(n.code,{children:"jest"})," directly. Users would frequently ask questions that would be better solved by Jest's documentation, but they wouldn't know that because they were using Nx's executors."]}),`
`,s.jsxs(n.p,{children:["Nx had been able to run arbitrary scripts in ",s.jsx(n.code,{children:"package.json"})," files or arbitrary commands specified in ",s.jsx(n.code,{children:"project.json"})," for a while, but it was not the default. We didn't encourage using ",s.jsx(n.code,{children:"run-commands"})," for everything, as there were some problems when using it:"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Terminal output was not as nice as it could be"}),`
`,s.jsx(n.li,{children:"Tools may need some extra configuration to work properly"}),`
`,s.jsx(n.li,{children:"Keeping the configuration in sync with the rest of the workspace was difficult"}),`
`]}),`
`,s.jsx(n.p,{children:"Making the terminal output nicer was a bit of a heavy lift, but we were able to make it work. Adding support for running commands inside a pseudo-terminal allowed us to capture output as it would look on the dev's machine, rather than the older output style that mimicked what you would see in a CI environment. Additionally, this meant that interactive commands could work how a dev would expect."}),`
`,s.jsx(n.p,{children:"For the second point, we decided to shift how we wrote our first party plugins. Instead of writing an executor that wrapped a tool, we can write plugins for many of the tools themselves to implement the same functionality. This would allow us to take advantage of the tool's configuration, and would allow us to provide a better experience for users, while being a bit more transparent about our changes."}),`
`,s.jsxs(n.p,{children:["The inference APIs we had just added were a perfect fit for keeping the configuration in sync. If we infer that every project with a jest configuration should have a ",s.jsx(n.code,{children:"test"})," target, we can add that target to the project's configuration. This would allow us to keep the configuration in sync with the rest of the workspace, and would allow us to provide a better experience for users."]}),`
`,s.jsxs(n.p,{children:["With these 3 pain points addressed, we made the major decision to step away from using executors for most of our first party plugins and infer targets from configuration files where possible. As far as configuration is concerned, nothing ",s.jsx(n.strong,{children:"really"})," changed but things did look a bit different to users. Mainly, the ",s.jsx(n.code,{children:"targets"})," section of ",s.jsx(n.code,{children:"project.json"})," was no longer required to run a target."]}),`
`,s.jsxs(n.p,{children:["Many ",s.jsx(n.code,{children:"project.json"})," files can now be as simple as this:"]}),`
`,s.jsx(n.pre,{filename:"apps/myapp/project.json",children:s.jsxs(n.code,{className:"hljs language-json",children:[s.jsx(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"name"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-string",children:'"myapp"'}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
    `,s.jsx(n.span,{className:"hljs-attr",children:'"tags"'}),s.jsx(n.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(n.span,{className:"hljs-punctuation",children:"["}),s.jsx(n.span,{className:"hljs-punctuation",children:"]"}),s.jsx(n.span,{className:"hljs-punctuation",children:","}),`
`,s.jsx(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsx(n.p,{children:"Internally, we referred to this change as project configuration v3. It represents a major shift in how we think about configuration, and how we think about integrating with other tools. As such, we released it as Nx 18: Project Crystal 💎."}),`
`,s.jsx(n.p,{children:"There are some published resources that go into more detail about this change:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:s.jsx(n.a,{href:"https://www.youtube.com/watch?v=wADNsVItnsM",rel:"nofollow",children:"Nx Project Crystal 💎"})}),`
`,s.jsx(n.li,{children:s.jsx(n.a,{href:"https://nx.dev/concepts/inferred-tasks#inferred-tasks-project-crystal",rel:"nofollow",children:"Inferred Tasks documentation"})}),`
`]}),`
`,s.jsxs(n.h2,{id:"conclusion",children:[s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:s.jsx(s.Fragment,{children:s.jsx(n.span,{children:"🔗"})})}),"Conclusion"]}),`
`,s.jsx(n.p,{children:"Nx's configuration has changed a lot over the years, and it's been a long journey to get to where we are today. We've made a lot of changes to make Nx easier to adopt, and we've made a lot of changes to make Nx easier to use."}),`
`,s.jsxs(n.p,{children:["Project Crystal helped slim down the Nx configuration within a workspace to only ",s.jsx(n.code,{children:"nx.json"})," for many repos, and opens the doors for Nx to be used in a wider variety of repositories. We're excited to see what the future holds for Nx, and as always, stay tuned 📺."]})]})}function c(e={}){const{wrapper:n}=e.components||{};return n?s.jsx(n,{...e,children:s.jsx(l,{...e})}):l(e)}const r={mdx:c,publishDate:new Date(2024,1,5),slug:"nx-configuration-history",title:"Nx Configuration History",description:"Nx's configuration has changed dramatically over the years, and it's been a long journey to get to where we are today. I joined the Nx team in June 2021, right before we split up `workspace.json` into `workspace.json` and `project.json`. Since joining the team, I've had a pretty direct hand in many of these changes, and have worked closely on others."};function o(e,n){const t=[],a=[...e];for(;a.length;)t.push(a.splice(0,Math.min(n,a.length)));return t}const i=[r].sort((e,n)=>e.publishDate.getTime()-n.publishDate.getTime()),d=Object.fromEntries(i.map(e=>[e.slug,e])),p=o(i,10);export{p,d as s};
