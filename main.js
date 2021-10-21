// Anime-Js ---------
// import anime from "animejs";

// Reveal JS-------------
// import Reveal from "reveal.js";

// import "reveal.js/dist/reveal.css";
// import "reveal.js/dist/theme/night.css";

// Video JS-----------
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// // video js themes
// import "@videojs/themes/dist/city/index.css";

// import "@videojs/themes/dist/fantasy/index.css";

// import "@videojs/themes/dist/forest/index.css";

// import "@videojs/themes/dist/sea/index.css";

// Chart JS----------------
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);

// Intro JS-------------------
// import "intro.js/introjs.css";
// import intro from "intro.js";

// Tesseract JS---------------
// import { recognize } from "tesseract.js";

// Editor JS--------------------
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import List from "@editorjs/list";
// import Embed from "@editorjs/embed";
// import Checklist from "@editorjs/checklist";
// import RawTool from "@editorjs/raw";
// import Quote from "@editorjs/quote";
// import SimpleImage from "@editorjs/simple-image";

import "./style.css";

// anime({
//   targets: "svg polygon",
//   keyframes: [
//     { points: "50 500 , 50 100 , 650 100 , 650 500 , 50 500" },
//     {
//       points: "150 450 , 550 400 , 650 100 , 650 500 , 150 450",
//       fill: "rgb(39, 29, 179)",
//     },
//   ],
//   direction: "alternate",
//   easing: "easeInOutSine",
//   loop: true,
//   duration: 3000,
// });

// anime({
//   targets: ".mySvg path",
//   strokeDashoffset: 1000,
//   duration: 3000,
//   easing: "easeInOutQuad",
//   loop: true,
//   direction: "alternate",
// });

// Reveal.initialize({
//   controls: true,
//   hash: false,

//   controlsLayout: "edges", //edges,bottom-right
//   controlsTutorial: false,
//   progress: false,
//   slideNumber: true,
//   keyboard: true,
//   overview: true,
//   center: true,
//   touch: true,
//   loop: false,
//   autoSlide: 2000,
//   rtl: false,
//   shuffle: false,
//   help: true,
//   mouseWheel: false,
//   transition: "slide", // none/fade/slide/convex/concave/zoom,
//   transitionSpeed: "slow", // default/fast/slow

//   hideInactiveCursor: true,

//   hideCursorTime: 5000,
// });

//------------------- Video js here

// const player = videojs("my-player", {
//   controls: true,
//   height: 400,
//   sources: "you-video-here",
//   autoplay: true,
//   muted: true,
// });

// player.addClass("video-js");

// themes city,fantasy,forest & sea
// player.addClass("vjs-theme-city");

// -----------Chart JS Here

// const context = document.getElementById("myChart").getContext("2d");

// new Chart(context, {
//   type: "doughnut", //doughnut,bar,line,pie,bubble,polarArea,"scatter","radar",

//   data: {
//     labels: ["Youtube", "Instagram", "Twitter", "LinkedIn"],
//     datasets: [
//       {
//         label: "# of Followers",
//         data: [900, 640, 300, 500],
//         backgroundColor: [
//           "rgb(255, 203, 218)",
//           "rgb(0, 140, 255)",
//           "rgb(84, 0, 194)",
//           "rgb(214, 33, 102)",
//         ],
//       },
//     ],
//   },
// });

//------------------- Intro js here

// intro()
//   .setOptions({
//     steps: [
//       {
//         title: "Hey",
//         intro: "Welcome to 6 Pack Programmer",
//       },
//       {
//         intro:
//           "<img src='https://c.tenor.com/41I-iMyClCgAAAAd/programmer-programming.gif' class='introImage'   />",
//         element: ".myBtn",
//         title: "that's you",
//         disableInteraction: true,
//         position: "auto", //bottom,bottom-left-aligned,bottom-middle-aligned,bottom-right-aligned,left,right,top
//       },
//     ],

//     exitOnOverlayClick: false,
//     exitOnEsc: false,
//     showProgress: true,
//     showButtons: true,
//     showStepNumbers: true,
//     showBullets: false,
//   })
//   .start();

// intro()
//   .setOptions({
//     hints: [
//       {
//         element: ".myImage",
//         hint: "don't worry its free",
//       },
//     ],
//     hintButtonLabel: "subscribe",
//   })
//   .showHints();

// ----------------------------Tesseract JS

// const fileUpload = document.getElementById("uploadImage");

// fileUpload.addEventListener("change", (e) => {
//   const img = e.target.files[0].name;
//   readImage(img);
// });

// const readImage = async (img) => {
//   const {
//     data: { text },
//   } = await recognize(img, "eng");

//   document.getElementById("myPara").innerText = text;
// };

// ----------------------------Editor JS-------------

// const editor = new EditorJS({
//   holder: "editorjs",
//   tools: {
//     header: {
//       class: Header,
//       inlineToolbar: true,
//     },
//     list: {
//       class: List,
//       inlineToolbar: true,
//     },
//     embed: Embed,
//     checklist: Checklist,
//     raw: RawTool,
//     image: SimpleImage,
//     quote: {
//       class: Quote,
//       inlineToolbar: true,
//       shortcut: "CMD+2",
//       config: {
//         quotePlaceholder: "Enter a quote",
//         captionPlaceholder: "Quote's author",
//       },
//     },
//   },

//   onReady: () => alert("Editor is Ready"),
// });

// document.getElementById("saveBtn").addEventListener("click", async () => {
//   const { blocks } = await editor.save();

//   blocks.forEach((item) => {
//     console.log(item.data.text);
//   });
// });
