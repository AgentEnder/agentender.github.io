import{j as n}from"./chunk-529f355d.js";function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"nx-from-angular-roots-to-crystal-future",children:"Nx: From Angular Roots to Crystal Future"}),`
`,n.jsx(s.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"#introduction",children:"Introduction"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#the-quick-scoop-tldr",children:"The Quick Scoop (tldr)"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#the-final-result",children:"The Final Result"})}),`
`]}),`
`]}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#nxs-angular-beginnings",children:"Nx’s Angular Beginnings"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#birth-of-the-nx-cli-evolution-beyond-angular",children:"Birth of the Nx CLI: Evolution Beyond Angular"})}),`
`,n.jsx(s.li,{children:n.jsxs(s.a,{href:"#projectjson-and-splitting-workspacejson",children:[n.jsx(s.code,{children:"project.json"})," and splitting ",n.jsx(s.code,{children:"workspace.json"})]})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#the-beginnings-of-inference",children:"The Beginnings of Inference"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#enter-lerna",children:"Enter Lerna"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#inference-api-v1-and-workspaces-support",children:"Inference API v1, and Workspaces Support"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#elevating-workspaces-with-inference-api-v2",children:"Elevating Workspaces with Inference API v2"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#entering-the-crystal-era-",children:"Entering the Crystal Era 💎"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#conclusion",children:"Conclusion"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"#references-and-links",children:"References and Links"})}),`
`]}),`
`,n.jsxs(s.h2,{id:"introduction",children:["Introduction",n.jsx(s.a,{className:"heading-link",href:"#introduction",children:"#"})]}),`
`,n.jsxs(s.p,{children:["Nx’s configuration has changed dramatically over the years, and it’s been a long journey to get to where we are today. I joined the Nx team in June 2021, right before we split up ",n.jsx(s.code,{children:"workspace.json"})," into ",n.jsx(s.code,{children:"workspace.json"})," and ",n.jsx(s.code,{children:"project.json"}),". Since joining the team, I’ve had a pretty direct hand in many of these changes, and have worked closely on others."]}),`
`,n.jsx(s.p,{children:"There are a few misconceptions about Nx that stem from its configuration and history, and I’d like to clear some of those up."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Nx is only for Angular"}),`
`,n.jsx(s.li,{children:"Nx is hard to configure"}),`
`,n.jsx(s.li,{children:"Nx has a lot of configuration."}),`
`]}),`
`,n.jsxs(s.h3,{id:"the-quick-scoop-tldr",children:["The Quick Scoop (tldr)",n.jsx(s.a,{className:"heading-link",href:"#the-quick-scoop-tldr",children:"#"})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Nx was initially built as an Angular CLI extension. It has been its own CLI for several years, and has no direct ties to angular at this point."}),`
`,n.jsx(s.li,{children:"Nx’s configuration has went through several iterations, and mostly configures itself these days."}),`
`,n.jsx(s.li,{children:"You shouldn’t have to worry when the configuration changes, as Nx will migrate your existing config for you."}),`
`]}),`
`,n.jsxs(s.h3,{id:"the-final-result",children:["The Final Result",n.jsx(s.a,{className:"heading-link",href:"#the-final-result",children:"#"})]}),`
`,n.jsx(s.p,{children:"After Nx 18, the Nx side of configuration for individual projects in a workspace can be as simple as this:"}),`
`,n.jsx(s.pre,{filename:"apps/myapp/project.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"name"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"myapp"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsx(s.p,{children:"The rest of the configuration that one may expect (targets to run as the most common example) can be inferred from configuration files present in the project’s root. This is a dramatic reduction from where we started, and hopefully makes Nx easier to adopt and learn."}),`
`,n.jsxs(s.h2,{id:"nxs-angular-beginnings",children:["Nx’s Angular Beginnings",n.jsx(s.a,{className:"heading-link",href:"#nxs-angular-beginnings",children:"#"})]}),`
`,n.jsx(s.p,{children:"Nx was initially built as an Angular CLI extension. It was a set of schematics and builders that extended the Angular CLI’s capabilities. This was a great way to get started, but it had some limitations. For example, it was difficult to add support for other frameworks, and it was difficult to add new commands to the CLI."}),`
`,n.jsx(s.p,{children:"Angular CLI also supports monorepos, and in the beginning Nx used angular’s configuration. When you have multiple projects, the configuration would look something like this:"}),`
`,n.jsx(s.pre,{filename:"angular.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"version"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-number",children:"1"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"my-app"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"architect"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"builder"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"@angular-devkit/build-angular:browser"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"options"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"main"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/main.ts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"tsConfig"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/tsconfig.app.json"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/favicon.ico"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"styles"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/styles.css"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"scripts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
          `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsxs(s.p,{children:["To help distinguish a plain Angular CLI project from an Nx workspace, and better support other tools, we added support for a ",n.jsx(s.code,{children:"workspace.json"})," file. This file was identical to ",n.jsx(s.code,{children:"angular.json"}),"."]}),`
`,n.jsxs(s.p,{children:["As Nx grew and added more features, we needed to add more configuration. We added a ",n.jsx(s.code,{children:"nx.json"})," file to store this configuration. This file was used to store configuration for things that were specific to Nx, and that angular wouldn’t understand. For example, we added support for ",n.jsx(s.code,{children:"tags"})," and ",n.jsx(s.code,{children:"implicitDependencies"})," to help Nx understand the relationships between projects."]}),`
`,n.jsxs(s.h2,{id:"birth-of-the-nx-cli-evolution-beyond-angular",children:["Birth of the Nx CLI: Evolution Beyond Angular",n.jsx(s.a,{className:"heading-link",href:"#birth-of-the-nx-cli-evolution-beyond-angular",children:"#"})]}),`
`,n.jsxs(s.p,{children:["After a bit, Nx grew apart from Angular CLI. It became a standalone tool that could be used with any framework. This meant that we needed to create our own configuration file. We created ",n.jsx(s.code,{children:"workspace.json"})," to replace ",n.jsx(s.code,{children:"angular.json"}),". The configuration was extraordinarily similar, but it was a different file and a few properties had a different name. The names changed to more closely match the names that Nx uses. For example, ",n.jsx(s.code,{children:"builder"})," became ",n.jsx(s.code,{children:"executor"})," and ",n.jsx(s.code,{children:"architect"})," became ",n.jsx(s.code,{children:"targets"}),"."]}),`
`,n.jsxs(s.p,{children:["These changes included some differences in ",n.jsx(s.code,{children:"nx.json"})," as well. The ",n.jsx(s.code,{children:"schematics"})," property was renamed as ",n.jsx(s.code,{children:"generators"}),"."]}),`
`,n.jsx(s.p,{children:"At this point, the files looked like this:"}),`
`,n.jsx(s.pre,{filename:"workspace.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"version"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-number",children:"2"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"my-app"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"targets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"executor"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"@nrwl/web:build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"options"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"main"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/main.ts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"tsConfig"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/tsconfig.app.json"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/favicon.ico"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"styles"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/styles.css"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"scripts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
          `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsx(s.pre,{filename:"nx.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"my-app"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"tags"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"generators"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"@nrwl/angular:component"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"style"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"scss"'}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsxs(s.p,{children:["Additionally, nx added the capability to run dependant targets before a target. This was initially done by adding a ",n.jsx(s.code,{children:"targetDependencies"})," section within ",n.jsx(s.code,{children:"nx.json"}),". The property was scoped to all targets with a given name, and looked like this:"]}),`
`,n.jsx(s.pre,{filename:"nx.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"targetDependencies"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"target"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"build-base"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"self"'}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"build-base"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"target"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"build-base"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"dependencies"'}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsxs(s.p,{children:["The above configuration would run the ",n.jsx(s.code,{children:"build-base"})," target for all projects before running the ",n.jsx(s.code,{children:"build"})," target of that same project. This was a powerful feature, but it wasn’t as general as we had hoped and needed a bit more flexibility."]}),`
`,n.jsxs(s.p,{children:["Soon after, we renamed ",n.jsx(s.code,{children:"targetDependencies"})," to ",n.jsx(s.code,{children:"targetDefaults"})," + ",n.jsx(s.code,{children:"dependsOn"})," and allowed specifying it on a per-project basis. This allowed us to specify different defaults for different projects. The configuration looked like this:"]}),`
`,n.jsx(s.pre,{filename:"nx.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"targetDefaults"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"dependsOn"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"target"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"build-base"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"self"'}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsx(s.pre,{filename:"workspace.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"my-app"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"targets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"executor"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"@nrwl/web:build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"options"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"main"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/main.ts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"tsConfig"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/tsconfig.app.json"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/favicon.ico"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"styles"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/my-app/src/styles.css"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
            `,n.jsx(s.span,{className:"hljs-attr",children:'"scripts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
          `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"dependsOn"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),`
            `,n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
              `,n.jsx(s.span,{className:"hljs-attr",children:'"target"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"build-base"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
              `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"self"'}),`
            `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
          `,n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsxs(s.h2,{id:"projectjson-and-splitting-workspacejson",children:[n.jsx(s.code,{children:"project.json"})," and splitting ",n.jsx(s.code,{children:"workspace.json"}),n.jsx(s.a,{className:"heading-link",href:"#projectjson-and-splitting-workspacejson",children:"#"})]}),`
`,n.jsxs(s.p,{children:["Nx is a monorepo focused tool. It’s designed to work with many projects in a single repository. As such, the ",n.jsx(s.code,{children:"workspace.json"})," file can get quite large. Every time a new project is added, an existing project is modified, or an older project is removed, the ",n.jsx(s.code,{children:"workspace.json"})," file needs to be updated. This can lead to merge conflicts and other issues."]}),`
`,n.jsxs(s.p,{children:["When working with customers with over 200 projects, this was no longer scalable. We needed to split the ",n.jsx(s.code,{children:"workspace.json"})," file into multiple files. We also needed to make it easier to add new projects and modify existing projects."]}),`
`,n.jsxs(s.p,{children:["We decided that ",n.jsx(s.code,{children:"workspace.json"})," would contain a map of project name to file path. This would allow us to split the configuration into multiple files. At the same time, it was important to maintain compatibility with Angular CLI schematics and builders. We wanted to do this without having to keep a copy of the Angular CLI configuration in sync with the Nx configuration."]}),`
`,n.jsx(s.p,{children:"As such, we created a translation layer that would handle reading and writing the configuration when angular asked for it. Doing this unlocked a ton of flexibility on our side to make changes to the configuration without breaking compatibility with Angular CLI."}),`
`,n.jsxs(s.p,{children:["Additionally, we took some time to reevaluate where existing configuration options lived. Since we now have a configuration file per project it made less sense to place ",n.jsx(s.code,{children:"tags"})," and ",n.jsx(s.code,{children:"implicitDependencies"})," in ",n.jsx(s.code,{children:"nx.json"}),". We moved these properties to ",n.jsx(s.code,{children:"project.json"})," as well."]}),`
`,n.jsx(s.p,{children:"The end result of this round of changes resulted in:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"workspace.json"})," containing a map of project name to file path"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"project.json"})," containing all of the configuration for a single project"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"nx.json"})," containing configuration that is global to the workspace"]}),`
`]}),`
`,n.jsx(s.p,{children:"This was a much cleaner and more scalable way to manage configuration. It meant less merge conflicts, but also made it easier to tell what projects may have been affected by a change."}),`
`,n.jsx(s.pre,{filename:"workspace.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"version"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-number",children:"2"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"myapp"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/myapp"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"mylib"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"libs/mylib"'}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsx(s.pre,{filename:"apps/myapp/project.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"targets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"executor"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"@nrwl/web:build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"options"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"main"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/myapp/src/main.ts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"tsConfig"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/myapp/tsconfig.app.json"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/myapp/src/favicon.ico"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","})," ",n.jsx(s.span,{className:"hljs-string",children:'"apps/myapp/src/assets"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"styles"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-string",children:'"apps/myapp/src/styles.css"'}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
        `,n.jsx(s.span,{className:"hljs-attr",children:'"scripts"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsx(s.pre,{filename:"nx.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n.jsx(s.span,{className:"hljs-attr",children:'"targetDefaults"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"build"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"hljs-attr",children:'"dependsOn"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"target"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"build-base"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
          `,n.jsx(s.span,{className:"hljs-attr",children:'"projects"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"self"'}),`
        `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
      `,n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),`
    `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsxs(s.h2,{id:"the-beginnings-of-inference",children:["The Beginnings of Inference",n.jsx(s.a,{className:"heading-link",href:"#the-beginnings-of-inference",children:"#"})]}),`
`,n.jsxs(s.p,{children:["After the last round of changes, we noticed that the ",n.jsx(s.code,{children:"workspace.json"})," file was not particularly useful. It was just a map of project name to file path. We decided that it should be optional, and in time we dropped support for it entirely."]}),`
`,n.jsx(s.p,{children:"This change required Nx to be able to locate the configuration of projects without a central file. Adding this support was not a major task, but while doing so we also decided to open up the possibility of dynamically building configuration."}),`
`,n.jsxs(s.p,{children:["At the same time, there was a push from non-angular users to simplify the configuration. Npm/yarn/pnpm workspaces had gained a bit of popularity and it was much easier to define targets as a ",n.jsx(s.code,{children:"package.json"})," script for a segment of users. We wanted to make it easier for these users to use Nx, while also helping Nx make sense when compared to other tools. The decision was made that if there was a package.json file inside a project, Nx would be able to run its scripts as a target."]}),`
`,n.jsxs(s.h2,{id:"enter-lerna",children:["Enter Lerna",n.jsx(s.a,{className:"heading-link",href:"#enter-lerna",children:"#"})]}),`
`,n.jsx(s.p,{children:"Lerna has been around a long time, and maintains a good amount of popularity within the JavaScript community. It’s a tool that helps manage multiple packages in a single repository. It’s a bit different from Nx, but it’s similar enough that we were already looking at making it easier to use the two together. Lerna had some functionality that Nx didn’t (publishing packages), and Nx had some functionality that Lerna didn’t (caching and code generation)."}),`
`,n.jsxs(s.p,{children:["Around this time, several things surrounding lerna started to become worrisome. There was an ",n.jsx(s.a,{href:"https://github.com/lerna/lerna/issues/2703",rel:"noopener noreferrer",target:"_blank",children:"issue"})," filed stating that lerna had been unmaintained. A ",n.jsx(s.a,{href:"https://github.com/lerna/lerna/pull/3092",rel:"noopener noreferrer",target:"_blank",children:"PR"})," had been merged adding a warning that lerna wasn’t being actively maintained, and that the community should consider using other tools."]}),`
`,n.jsxs(s.p,{children:["These users would need to go somewhere, but any change for them would not be without difficulty. Nrwl, the company behind Nx, decided to step in and offer a solution. After talking with the maintainer, we were able to take over stewardship and step in to maintain the project. This was announced in a blog post here: ",n.jsx(s.a,{href:"https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9",rel:"noopener noreferrer",target:"_blank",children:"Lerna is dead, Long live Lerna"}),"."]}),`
`,n.jsxs(s.h2,{id:"inference-api-v1-and-workspaces-support",children:["Inference API v1, and Workspaces Support",n.jsx(s.a,{className:"heading-link",href:"#inference-api-v1-and-workspaces-support",children:"#"})]}),`
`,n.jsx(s.p,{children:"With Lerna under our purview we wanted to be able to unify the two tools. Nx should be able to work in a lerna workspace, and hopefully the portions of Lerna that Nx could already handle would then be able to invoke Nx under the hood. This would prevent us from having to maintain two copies of the same functionality, and we were optimistic we could do this without breaking any existing workflows."}),`
`,n.jsx(s.p,{children:"The first step of this process was to ensure that Nx could work in a Lerna repository without changing the existing structure. This meant a few things:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"workspace.json"})," had to be optional"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"project.json"})," had to be optional"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"nx.json"})," had to be optional"]}),`
`]}),`
`,n.jsx(s.p,{children:"If any of these 3 files had been required, it would have caught lerna users off guard and look like Nx was replacing lerna."}),`
`,n.jsx(s.p,{children:"This built upon our existing inference capabilities, and while opening them up further we decided to publish a version that plugin authors could take advantage of."}),`
`,n.jsx(s.p,{children:"The first version of these inference APIs never left experimental, and weren’t actually used internally. Rather, they acted almost as a proof of concept and allowed us to see what the API might look like. Essentially, we needed an API that would be able to turn a project’s configuration file into its actual configuration. The API looked something like this:"}),`
`,n.jsx(s.pre,{children:n.jsxs(s.code,{className:"hljs language-typescript",children:[n.jsx(s.span,{className:"hljs-keyword",children:"import"})," { ",n.jsx(s.span,{className:"hljs-title class_",children:"NxPlugin"})," } ",n.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",n.jsx(s.span,{className:"hljs-string",children:"'@nx/devkit'"}),`;

`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",n.jsx(s.span,{className:"hljs-attr",children:"plugin"}),": ",n.jsx(s.span,{className:"hljs-title class_",children:"NxPlugin"}),` = {
  projectFilePatterns = [`,n.jsx(s.span,{className:"hljs-string",children:"'project.json'"}),`],
  registerProjectTargets = `,n.jsxs(s.span,{className:"hljs-function",children:["(",n.jsx(s.span,{className:"hljs-params",children:"projectFile"}),") =>"]}),` {
    `,n.jsx(s.span,{className:"hljs-comment",children:"// ..."}),`
  },
};
`]})}),`
`,n.jsxs(s.p,{children:["In this example, ",n.jsx(s.code,{children:"projectFilePatterns"})," is an array of file patterns that the plugin can handle. When Nx is looking for a project’s configuration, it will look for a file that matches one of these patterns. If it finds one, it will pass it to ",n.jsx(s.code,{children:"registerProjectTargets"})," and expect it to return the targets a given project can run."]}),`
`,n.jsxs(s.p,{children:["While we didn’t directly use this API, it was a very small inclusion in the core code to enable Nx running inside a repository that was only configured by ",n.jsx(s.code,{children:"package.json"})," files. The published API was also used to show how Nx could one day be used in C# or Java repositories, without introducing new configuration files."]}),`
`,n.jsxs(s.h2,{id:"elevating-workspaces-with-inference-api-v2",children:["Elevating Workspaces with Inference API v2",n.jsx(s.a,{className:"heading-link",href:"#elevating-workspaces-with-inference-api-v2",children:"#"})]}),`
`,n.jsxs(s.p,{children:["We were mostly happy with the inference apis and configuration loading, but there were a few things that we wanted to clean up within Nx’s codebase and the API itself. In particular we wanted to be able to streamline our handling of ",n.jsx(s.code,{children:"angular.json"})," for legacy users, and wanted to migrate the ",n.jsx(s.code,{children:"project.json"})," and ",n.jsx(s.code,{children:"package.json"})," configuration loading into the same API."]}),`
`,n.jsx(s.p,{children:"In order to do this, we needed an API that:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Could provide a full project configuration, not just the targets"}),`
`,n.jsx(s.li,{children:"Could read multiple projects from a single file (angular.json supports this)"}),`
`]}),`
`,n.jsx(s.p,{children:"Additionally, there were other plugin APIs to extend the project graph that were a bit confusing when deciding if a plugin should be an inference plugin or a project graph plugin. Project graph plugins exported a single function, that received the current project graph and returned a new one. As part of this, they could add new nodes and edges to the graph. Most nodes on the graph were projects, but adding a project via these APIs resulted in odd behavior as targets couldn’t be ran because they weren’t present when Nx initially loaded project configurations."}),`
`,n.jsx(s.p,{children:"As such, we decided to merge the two APIs into a single one. This API is responsible for creating nodes on the project graph, and creating edges between those nodes. The API looks something like this:"}),`
`,n.jsx(s.pre,{children:n.jsxs(s.code,{className:"hljs language-typescript",children:[n.jsx(s.span,{className:"hljs-keyword",children:"import"})," { ",n.jsx(s.span,{className:"hljs-title class_",children:"NxPlugin"})," } ",n.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",n.jsx(s.span,{className:"hljs-string",children:"'@nx/devkit'"}),`;

`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",n.jsx(s.span,{className:"hljs-attr",children:"plugin"}),": ",n.jsx(s.span,{className:"hljs-title class_",children:"NxPlugin"}),` = {
  `,n.jsx(s.span,{className:"hljs-attr",children:"createNodes"}),": [",n.jsx(s.span,{className:"hljs-string",children:"'**/*.csproj'"}),", ",n.jsxs(s.span,{className:"hljs-function",children:["(",n.jsx(s.span,{className:"hljs-params",children:"projectFile, ctx"}),") =>"]})," ",n.jsx(s.span,{className:"hljs-title function_",children:"readProjectsFromFile"}),`(projectFile)]
  `,n.jsx(s.span,{className:"hljs-attr",children:"createDependencies"}),": ",n.jsxs(s.span,{className:"hljs-function",children:["(",n.jsx(s.span,{className:"hljs-params",children:"ctx"}),") =>"]})," ",n.jsx(s.span,{className:"hljs-title function_",children:"readEdgesFromContext"}),`(ctx)
};
`]})}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"CreateNodes"})," is a tuple, where the first element is a glob pattern that the plugin can handle, and the second element is a function that will read the file and return the projects it contains. ",n.jsx(s.code,{children:"createDependencies"})," is a function that will be called after all of the nodes have been created, and is responsible for creating the edges between the nodes."]}),`
`,n.jsxs(s.p,{children:["This API met all of the requirements we set out on, and ensured there was only one spot for plugin authors to add new nodes to the graph. It released as part of Nx 17, and was talked about at that years ",n.jsx(s.a,{href:"https://www.youtube.com/watch?v=bnjOu7iOrMg",rel:"noopener noreferrer",target:"_blank",children:"Nx Conf"})]}),`
`,n.jsxs(s.h2,{id:"entering-the-crystal-era-",children:["Entering the Crystal Era 💎",n.jsx(s.a,{className:"heading-link",href:"#entering-the-crystal-era-",children:"#"})]}),`
`,n.jsx(s.p,{children:"A large goal that the Nx team has consistently worked on is making Nx easier to adopt. Configuration changes are a large part of this, but we also took some time to reflect on how we integrate with other tools."}),`
`,n.jsxs(s.p,{children:["Traditionally, Nx would provide an executor that wrapped a tool like ",n.jsx(s.code,{children:"jest"}),". When running test, Nx would invoke the executor which would then invoke ",n.jsx(s.code,{children:"jest"}),". This was a bit of a pain point for users, as they would have to learn how to use Nx’s executors and any of the idiosyncrasies that came with them. Additionally, it made it harder to get help when things went wrong, as the error messages would be different than what the user would see when running ",n.jsx(s.code,{children:"jest"})," directly. Users would frequently ask questions that would be better solved by Jest’s documentation, but they wouldn’t know that because they were using Nx’s executors."]}),`
`,n.jsxs(s.p,{children:["Nx had been able to run arbitrary scripts in ",n.jsx(s.code,{children:"package.json"})," files or arbitrary commands specified in ",n.jsx(s.code,{children:"project.json"})," for a while, but it was not the default. We didn’t encourage using ",n.jsx(s.code,{children:"run-commands"})," for everything, as there were some problems when using it:"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Terminal output was not as nice as it could be"}),`
`,n.jsx(s.li,{children:"Tools may need some extra configuration to work properly"}),`
`,n.jsx(s.li,{children:"Keeping the configuration in sync with the rest of the workspace was difficult"}),`
`]}),`
`,n.jsx(s.p,{children:"Making the terminal output nicer was a bit of a heavy lift, but we were able to make it work. Adding support for running commands inside a pseudo-terminal allowed us to capture output as it would look on the dev’s machine, rather than the older output style that mimicked what you would see in a CI environment. Additionally, this meant that interactive commands could work how a dev would expect."}),`
`,n.jsx(s.p,{children:"For the second point, we decided to shift how we wrote our first party plugins. Instead of writing an executor that wrapped a tool, we can write plugins for many of the tools themselves to implement the same functionality. This would allow us to take advantage of the tool’s configuration, and would allow us to provide a better experience for users, while being a bit more transparent about our changes."}),`
`,n.jsxs(s.p,{children:["The inference APIs we had just added were a perfect fit for keeping the configuration in sync. If we infer that every project with a jest configuration should have a ",n.jsx(s.code,{children:"test"})," target, we can add that target to the project’s configuration. This would allow us to keep the configuration in sync with the rest of the workspace, and would allow us to provide a better experience for users."]}),`
`,n.jsxs(s.p,{children:["With these 3 pain points addressed, we made the major decision to step away from using executors for most of our first party plugins and infer targets from configuration files where possible. As far as configuration is concerned, nothing ",n.jsx(s.strong,{children:"really"})," changed but things did look a bit different to users. Mainly, the ",n.jsx(s.code,{children:"targets"})," section of ",n.jsx(s.code,{children:"project.json"})," was no longer required to run a target."]}),`
`,n.jsxs(s.p,{children:["Many ",n.jsx(s.code,{children:"project.json"})," files can now be as simple as this:"]}),`
`,n.jsx(s.pre,{filename:"apps/myapp/project.json",children:n.jsxs(s.code,{className:"hljs language-json",children:[n.jsx(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"name"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-string",children:'"myapp"'}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
    `,n.jsx(s.span,{className:"hljs-attr",children:'"tags"'}),n.jsx(s.span,{className:"hljs-punctuation",children:":"})," ",n.jsx(s.span,{className:"hljs-punctuation",children:"["}),n.jsx(s.span,{className:"hljs-punctuation",children:"]"}),n.jsx(s.span,{className:"hljs-punctuation",children:","}),`
`,n.jsx(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n.jsx(s.p,{children:"Internally, we referred to this change as project configuration v3. It represents a major shift in how we think about configuration, and how we think about integrating with other tools. As such, we released it as Nx 18: Project Crystal 💎."}),`
`,n.jsx(s.p,{children:"There are some published resources that go into more detail about this change:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://www.youtube.com/watch?v=wADNsVItnsM",rel:"noopener noreferrer",target:"_blank",children:"Nx Project Crystal 💎"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://nx.dev/concepts/inferred-tasks#inferred-tasks-project-crystal",rel:"noopener noreferrer",target:"_blank",children:"Inferred Tasks documentation"})}),`
`]}),`
`,n.jsxs(s.h2,{id:"conclusion",children:["Conclusion",n.jsx(s.a,{className:"heading-link",href:"#conclusion",children:"#"})]}),`
`,n.jsx(s.p,{children:"Nx’s configuration has changed a lot over the years, and it’s been a long journey to get to where we are today. We’ve made a lot of changes to make Nx easier to adopt, and we’ve made a lot of changes to make Nx easier to use."}),`
`,n.jsxs(s.p,{children:["Project Crystal helped slim down the Nx configuration within a workspace to only ",n.jsx(s.code,{children:"nx.json"})," for many repos, and opens the doors for Nx to be used in a wider variety of repositories. We’re excited to see what the future holds for Nx, and as always, stay tuned 📺."]}),`
`,n.jsxs(s.h2,{id:"references-and-links",children:["References and Links",n.jsx(s.a,{className:"heading-link",href:"#references-and-links",children:"#"})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://www.youtube.com/watch?v=wADNsVItnsM",rel:"noopener noreferrer",target:"_blank",children:"Nx Project Crystal 💎"})}),`
`]})]})}function c(e={}){const{wrapper:s}=e.components||{};return s?n.jsx(s,{...e,children:n.jsx(l,{...e})}):l(e)}const r={mdx:c,publishDate:new Date(2024,1,5),slug:"nx-configuration-history",title:"Nx Configuration History",description:"Nx's configuration has changed dramatically over the years, and it's been a long journey to get to where we are today. I joined the Nx team in June 2021, right before we split up `workspace.json` into `workspace.json` and `project.json`. Since joining the team, I've had a pretty direct hand in many of these changes, and have worked closely on others."};function h(e,s){const t=[],a=[...e];for(;a.length;)t.push(a.splice(0,Math.min(s,a.length)));return t}const i=[r].sort((e,s)=>e.publishDate.getTime()-s.publishDate.getTime()),d=Object.fromEntries(i.map(e=>[e.slug,e])),p=h(i,10);export{p,d as s};
