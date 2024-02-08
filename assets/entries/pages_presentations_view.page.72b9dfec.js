import{r as a,j as d}from"../chunks/chunk-529f355d.js";import{_ as r}from"../chunks/chunk-101896b7.js";import{P as _}from"../chunks/chunk-980425a9.js";import{u as g}from"../chunks/chunk-a9f9b8c5.js";const p=(n,s)=>{const t=n[s];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+s)))})},y=`let initialized = false;

// eslint-disable-next-line no-undef
remark
  // eslint-disable-next-line no-undef
  .create({ source: \`\${md}\`, ratio: '16:9' })
  .on('showSlide', function (slide) {
    if (initialized) return;
    initialized = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLVideoElement) {
            if (entry.isIntersecting) {
              entry.target.play();
              entry.target.currentTime = 0;
            } else if (!entry.isIntersecting) {
              entry.target.pause();
            }
          } else if (entry.target instanceof HTMLImageElement) {
            if (entry.isIntersecting && entry.target.src.endsWith('.gif')) {
              entry.target.src = entry.target.getAttribute('src');
            }
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.95,
        root: document.querySelector('.remark-visible'),
      }
    );
    document.querySelectorAll('video,img').forEach((el) => {
      observer.observe(el);
    });
  });
`;function E(n){const[s,t]=a.useState(!1),[i,o]=a.useState();return a.useEffect(()=>{const e=_[n.presentationSlug];e?.mdUrl&&async function(){const c=await p(Object.assign({"../presentation-data/devup-2023-benchmarking/slides.md":()=>r(()=>import("../chunks/chunk-6aac39f8.js"),[]),"../presentation-data/devup-2023-full-stack-type-safety/slides.md":()=>r(()=>import("../chunks/chunk-60d00f96.js"),[]),"../presentation-data/nx-conf-2023-inference/slides.md":()=>r(()=>import("../chunks/chunk-ba07d5ef.js"),[]),"../presentation-data/that-conf-tx-2024-compartmentalization/slides.md":()=>r(()=>import("../chunks/chunk-127b5749.js"),[]),"../presentation-data/that-conf-wi-2023-benchmarking/slides.md":()=>r(()=>import("../chunks/chunk-02c8efd9.js"),[])}),`../presentation-data/${e.slug}/${e.mdUrl}.md`).then(l=>l.default);o(c.replace(/`/g,"\\`").replace(/\${/g,"\\${"))}();const u=document.getElementById("presentation-style");u&&u.remove(),e?.scssUrl&&Object.assign({"../presentation-data/devup-2023-benchmarking/slides.scss":()=>r(()=>import("../chunks/chunk-ad53865d.js"),[]),"../presentation-data/devup-2023-full-stack-type-safety/slides.scss":()=>r(()=>import("../chunks/chunk-959ec27e.js"),[]),"../presentation-data/nx-conf-2023-inference/slides.scss":()=>r(()=>import("../chunks/chunk-b6853bbe.js"),[])})[`../presentation-data/${e.slug}/${e.scssUrl}.scss`]().then(l=>{const m=document.createElement("style");m.id="presentation-style",m.innerHTML=l.default,document.head.appendChild(m)}),e?.htmlUrl&&async function(){const c=await p(Object.assign({}),`../presentation-data/${e.slug}/${e.htmlUrl}.html`);document.body.innerHTML=c.default}()},[n.presentationSlug]),f({url:"https://remarkjs.com/downloads/remark-latest.min.js"},()=>{t(!0)}),f({body:y.replace("`${md}`",`\`${i}\``),waitFor:!!(s&&i)}),d.jsx(d.Fragment,{})}function f({url:n,body:s,waitFor:t},i){a.useEffect(()=>{const o=[];if(t===void 0||t){const e=document.createElement("script");n?e.src=n:s&&(e.innerHTML=s),document.body.appendChild(e),i&&(e.onload=i),o.push(()=>{document.body.removeChild(e)})}return()=>{for(const e of o)e()}},[s,n,i,t])}const T={title:"Craigory Coppola - View Presentation"};function k(){const n=g(),[s,t]=a.useState();return a.useEffect(()=>{t(n?.routeParams?.presentation)},[n]),s?d.jsx(E,{presentationSlug:s}):d.jsx("div",{children:"Hello?"})}export{k as Page,T as documentProps};
