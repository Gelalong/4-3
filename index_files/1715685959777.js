
  (function initColor() {
    const colors = ["#E8F7FF","#C0E8FF","#97D5FF","#6FC1FF","#46A9FF","#1E90FF","#1571DB","#0D57B8","#073F94","#032B70","#001A4D"];
    const themeIncrements = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  
    colors.forEach((color, index) => {
      const propName = `--ai-create-color-theme-${themeIncrements[index]}`;
      document.documentElement.style.setProperty(propName, color);
    });
  })();
  
  (function initFont() {
    [
      { name: 'Roboto', key: '--custom-heading-font', fontFamily: 'Roboto,ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
      { name: 'Roboto', key: '--custom-body-font', fontFamily: 'Roboto,ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
    ]
      .forEach(({ name, key, fontFamily }) => {
        if (name && name !== "undefined") {
          const font = new FontFace(name, `url("/static/font/${name}.ttf")`);
          document.fonts.add(font);
          font.load();
          document.documentElement.style.setProperty(key, fontFamily);
        }
      });
  })();
  async function render() {
  window.siteRoutes = [{
    "name": "Business Introduction",
    "path": "business-introduction",
    "title": "Business Introduction - TRUCK TRADE LIMITED"
  }, {
    "name": "Team Introduction",
    "path": "team-introduction",
    "title": "Team Introduction - TRUCK TRADE LIMITED"
  }, {
    "name": "Contact Us",
    "path": "contact-us",
    "title": "Contact Us - TRUCK TRADE LIMITED"
  }];
  const routerList = [];
  const createRoot = await siteEngine.getPackage("createRoot");
  const React = await siteEngine.getPackage("React");
  const ErrorBoundary = await siteEngine.getPackage("ErrorBoundary");
  const RouterWrap = await siteEngine.getPackage("RouterWrap");
  const {
    createBrowserRouter,
    RouterProvider,
    Navigate
  } = await siteEngine.getPackage("ReactRouterDom");
  const AnimateInView = await siteEngine.getPackage('@Basic/AnimateInView');
  const EditableImg = await siteEngine.getPackage('@Basic/EditableImg');
  const EditableText = await siteEngine.getPackage('@Basic/EditableText');
  const EditableButton = await siteEngine.getPackage('@Basic/EditableButton');
  const EditableIcon = await siteEngine.getPackage('@Basic/EditableIcon');
  const Marquee = await siteEngine.getPackage('Marquee'); //跑马灯
  const Carousel = await siteEngine.getPackage('Carousel'); //轮播图
  const motion = await siteEngine.getPackage('motion');
  const framerMotion = await siteEngine.getPackage('framerMotion');
  const AnimatePresence = await siteEngine.getPackage('AnimatePresence');
  let Navigation = /*#__PURE__*/React.createElement(React.Fragment, null);
  let Footer = /*#__PURE__*/React.createElement(React.Fragment, null);
  const defaultRouter = "business-introduction";
  function Layout(props) {
    return /*#__PURE__*/React.createElement(RouterWrap, null, Navigation, props.children, Footer);
  }
  try {
    function Navigation_01({
      logo = "https://source.unsplash.com/1200x600/?designer",
      navItems = [{
        pageName: "Home",
        pagePath: "/"
      }, {
        pageName: "About",
        pagePath: "/about"
      }, {
        pageName: "Service",
        pagePath: "/service"
      }, {
        pageName: "Case",
        pagePath: "/case"
      }, {
        pageName: "Blog",
        pagePath: "/blog"
      }, {
        pageName: "Contact",
        pagePath: "/contact"
      }, {
        pageName: "Localtion",
        pagePath: "/localtion"
      }, {
        pageName: "Map",
        pagePath: "/map"
      }],
      primaryButton = {
        icon: "fa-solid fa-arrow-right",
        textAttr: "text=Contact us"
      }
    }) {
      const [isDropdownOpen, setDropdownOpen] = React.useState(false);
      const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);
      const MAX_ITEMS = 4;
      return /*#__PURE__*/React.createElement("section", {
        className: "sticky top-0 z-40 w-full h-16 bg-white/80 backdrop-blur-xl dark:bg-black/80 md:px-8"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-full mx-auto max-w-7xl h-full hidden gap-5 md:grid md:grid-cols-[1fr_0.5fr_1fr] md:items-center"
      }, navItems.length > MAX_ITEMS ? /*#__PURE__*/React.createElement("nav", {
        className: "w-full h-full flex items-center justify-start"
      }, navItems.slice(0, MAX_ITEMS).map((item, index) => /*#__PURE__*/React.createElement(EditableButton, {
        key: item.pagePath,
        className: "pr-12 py-3 text-black whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60",
        onClick: () => setDropdownOpen(false)
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: `navItems_${index}_pageName`
      }, `text=${item.pageName}&link=${item.pagePath}`))), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement(motion.button, {
        className: "py-1 flex items-center",
        onClick: () => setDropdownOpen(!isDropdownOpen),
        whileTap: {
          scale: 0.9
        }
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 fill-black dark:fill-white hover:fill-black/60 dark:hover:fill-white/60"
      }, /*#__PURE__*/React.createElement("path", {
        "fill-rule": "evenodd",
        d: "M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
        "clip-rule": "evenodd"
      }))), isDropdownOpen && /*#__PURE__*/React.createElement(AnimatePresence, null, /*#__PURE__*/React.createElement(motion.div, {
        className: "absolute p-5  flex flex-col gap-4 origin-top rounded-lg bg-white border border-black/10 dark:border-white/10 shadow-lg dark:bg-black",
        animate: {
          scale: [0, 1],
          opacity: [0, 1]
        }
      }, navItems.slice(MAX_ITEMS, navItems.length).map((item, index) => /*#__PURE__*/React.createElement(EditableButton, {
        key: item.pagePath,
        className: "w-full h-full text-black whitespace-nowrap cursor-pointer text-left hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60",
        onClick: () => setDropdownOpen(false)
      }, /*#__PURE__*/React.createElement(EditableText, {
        link: item.pagePath,
        propKey: `navItems_${index + MAX_ITEMS}_pageName`
      }, `text=${item.pageName}&link=${item.pagePath}`))))))) : /*#__PURE__*/React.createElement("nav", {
        className: "w-full h-full flex items-center justify-start"
      }, navItems.map((item, index) => /*#__PURE__*/React.createElement(EditableButton, {
        key: item.pagePath,
        className: "pr-12 py-3 text-black whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60"
      }, /*#__PURE__*/React.createElement(EditableText, {
        link: item.pagePath,
        propKey: `navItems_${index}_pageName`
      }, `text=${item.pageName}&link=${item.pagePath}`)))), /*#__PURE__*/React.createElement("div", {
        className: "w-full h-full flex items-center justify-center"
      }, /*#__PURE__*/React.createElement(EditableImg, {
        propKey: `logo`,
        className: "w-auto h-10 object-cover",
        src: logo,
        alt: `logo`
      })), /*#__PURE__*/React.createElement("div", {
        className: "w-full h-full flex items-center justify-end"
      }, /*#__PURE__*/React.createElement(EditableButton, {
        className: "BTN-PRIMARY w-fit h-10 px-5 group text-sm whitespace-nowrap font-semibold text-white flex gap-2 items-center rounded-full bg-blue-500 hover:bg-blue-600 hover:transition-all hover:duration-300"
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: `primaryButton_textAttr`
      }, primaryButton.textAttr), /*#__PURE__*/React.createElement(EditableIcon, {
        propKey: `primaryButton_icon`,
        icon: primaryButton.icon,
        iconLibrary: "FontAwesome",
        className: `text-sm text-white group-hover:translate-x-1 transition-all`
      })))), /*#__PURE__*/React.createElement("div", {
        className: "relative z-40 w-full h-full flex items-center md:hidden"
      }, /*#__PURE__*/React.createElement(EditableImg, {
        propKey: `logo`,
        className: "w-auto h-10 px-6 object-cover",
        src: logo,
        alt: `logo`
      }), /*#__PURE__*/React.createElement(motion.button, {
        className: "absolute right-6",
        onClick: () => setMobileNavOpen(!isMobileNavOpen),
        whileTap: {
          scale: 0.9
        }
      }, isMobileNavOpen ? /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 fill-black dark:fill-white"
      }, /*#__PURE__*/React.createElement("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
        "clip-rule": "evenodd"
      })) : /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 fill-black dark:fill-white"
      }, /*#__PURE__*/React.createElement("path", {
        "fill-rule": "evenodd",
        d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
        "clip-rule": "evenodd"
      }))), isMobileNavOpen ? /*#__PURE__*/React.createElement("div", {
        className: "absolute z-50 top-16 w-full flex flex-col gap-3 bg-white rounded-b-xl shadow-xl dark:bg-black"
      }, /*#__PURE__*/React.createElement(motion.nav, {
        className: "w-full py-3 flex flex-col",
        animate: {
          y: [20, 0],
          opacity: [0, 1]
        },
        transition: {
          duration: 0.4
        }
      }, navItems.map((item, index) => /*#__PURE__*/React.createElement(EditableButton, {
        key: item.pagePath,
        className: "w-full px-6 py-3 text-black text-left whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60",
        onClick: () => setMobileNavOpen(!isMobileNavOpen)
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: `navItems_${index}_pageName`
      }, `text=${item.pageName}&link=${item.pagePath}`))))) : null));
    }
    Navigation = /*#__PURE__*/React.createElement(ErrorBoundary, {
      key: "1mxH0ulieeJptJIQEwwdt"
    }, /*#__PURE__*/React.createElement(Navigation_01, {
      "logo": "https://cdn.wegic.ai/assets/onepage/thread/icon/1715685887660.png",
      "siteTitle": "TRUCK TRADE LIMITED",
      "navItems": [{
        "pageName": "Business Introduction",
        "pagePath": "business-introduction"
      }, {
        "pageName": "Team Introduction",
        "pagePath": "team-introduction"
      }, {
        "pageName": "Contact Us",
        "pagePath": "contact-us"
      }],
      "socialContact": [{
        "icon": "fa-brands fa-github",
        "link": "https://www.github.com/"
      }, {
        "icon": "fa-brands fa-twitter",
        "link": "https://twitter.com/"
      }, {
        "icon": "fa-solid fa-envelope",
        "link": "https://twitter.com/"
      }],
      "primaryButton": {
        "icon": "fa-solid fa-arrow-right",
        "textAttr": "Contact us"
      },
      key: "1mxH0ulieeJptJIQEwwdt"
    }));
  } catch (error) {}
  {
    const list = [];
    try {
      function Hero_13({
        applyTextAttr = `text=Join the creative field&link=/`,
        heroTitle = `Crafting Designs that Inspire`,
        heroDescription = `Unlock your potential with our bespoke design services. Elevate your brand today.`,
        applyIcon = 'fa-solid fa-arrow-right'
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "w-full h-screen overflow-hidden bg-white dark:bg-slate-800 flex justify-center items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto py-10 px-4 relative z-[1] text-white flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col w-fit items-center"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY mb-6 text-4xl text-center font-extrabold text-black dark:text-white md:text-6xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "heroTitle"
        }, heroTitle)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mb-8 text-center max-w-lg text-base font-normal text-black/60 dark:text-white/70 lg:mb-10"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "heroDescription"
        }, heroDescription)), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-PRIMARY inline-flex group mt-4 items-center justify-center text-white bg-black font-medium dark:text-black dark:bg-white py-2 xl:py-3 px-8 rounded-lg text-sm sm:text-base 2xl:text-lg transition-all duration-500"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "applyTextAttr"
        }, applyTextAttr), /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "applyIcon",
          icon: applyIcon,
          iconLibrary: "FontAwesome",
          className: "ml-2 -mr-2 text-base text-white dark:text-black group-hover:translate-x-1 group-hover:transition-all duration-500"
        })))), /*#__PURE__*/React.createElement("svg", {
          className: "IMAGE absolute w-screen h-screen object-cover",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid slice"
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
          id: "Gradient1",
          cx: "50%",
          cy: "50%",
          fx: "0.441602%",
          fy: "50%",
          r: ".5"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "fx",
          dur: "54s",
          values: "0%;3%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "rgba(255, 0, 255, 1)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "rgba(255, 0, 255, 0)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "Gradient2",
          cx: "50%",
          cy: "50%",
          fx: "2.68147%",
          fy: "50%",
          r: ".5"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "fx",
          dur: "43.5s",
          values: "0%;3%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "rgba(255, 255, 0, 1)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "rgba(255, 255, 0, 0)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "Gradient3",
          cx: "50%",
          cy: "50%",
          fx: "0.836536%",
          fy: "50%",
          r: ".5"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "fx",
          dur: "41.5s",
          values: "0%;3%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "rgba(0, 255, 255, 1)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "rgba(0, 255, 255, 0)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "Gradient4",
          cx: "50%",
          cy: "50%",
          fx: "4.56417%",
          fy: "50%",
          r: ".5"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "fx",
          dur: "43s",
          values: "0%;5%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "rgba(0, 255, 0, 1)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "rgba(0, 255, 0, 0)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "Gradient5",
          cx: "50%",
          cy: "50%",
          fx: "2.65405%",
          fy: "50%",
          r: ".5"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "fx",
          dur: "44.5s",
          values: "0%;5%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "rgba(0,0,255, 1)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "rgba(0,0,255, 0)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "Gradient6",
          cx: "50%",
          cy: "50%",
          fx: "0.981338%",
          fy: "50%",
          r: ".5"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "fx",
          dur: "45.5s",
          values: "0%;5%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "rgba(255,0,0, 1)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "rgba(255,0,0, 0)"
        }))), /*#__PURE__*/React.createElement("rect", {
          x: "13.744%",
          y: "1.18473%",
          width: "100%",
          height: "100%",
          fill: "url(#Gradient1)",
          transform: "rotate(334.41 50 50)"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "x",
          dur: "40s",
          values: "25%;0%;25%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("animate", {
          attributeName: "y",
          dur: "41s",
          values: "0%;25%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          dur: "17s",
          repeatCount: "indefinite"
        })), /*#__PURE__*/React.createElement("rect", {
          x: "-2.17916%",
          y: "35.4267%",
          width: "100%",
          height: "100%",
          fill: "url(#Gradient2)",
          transform: "rotate(255.072 50 50)"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "x",
          dur: "43s",
          values: "-25%;0%;-25%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("animate", {
          attributeName: "y",
          dur: "44s",
          values: "0%;50%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          dur: "32s",
          repeatCount: "indefinite"
        })), /*#__PURE__*/React.createElement("rect", {
          x: "9.00483%",
          y: "14.5733%",
          width: "100%",
          height: "100%",
          fill: "url(#Gradient3)",
          transform: "rotate(139.903 50 50)"
        }, /*#__PURE__*/React.createElement("animate", {
          attributeName: "x",
          dur: "45s",
          values: "0%;25%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("animate", {
          attributeName: "y",
          dur: "32s",
          values: "0%;25%;0%",
          repeatCount: "indefinite"
        }), /*#__PURE__*/React.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "360 50 50",
          to: "0 50 50",
          dur: "19s",
          repeatCount: "indefinite"
        }))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "4u1c8EIvOz-fPw_cO6H3t"
      }, /*#__PURE__*/React.createElement(Hero_13, {
        "applyTextAttr": "text=Discover Our Journey&link=/",
        "heroTitle": "Welcome to TRUCK TRADE LIMITED",
        "heroDescription": "Leading the way in innovative trading solutions and exceptional service.",
        "applyIcon": "fa-solid fa-arrow-right",
        key: "4u1c8EIvOz-fPw_cO6H3t"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Feature_07({
        features = [{
          icon: 'fa-solid fa-magnifying-glass',
          title: 'Innovative Design Solutions',
          description: 'Our team provides modern design solutions that elevate your brand and engage your audience.'
        }, {
          icon: 'fa-solid fa-lock',
          title: 'Secure and Reliable',
          description: 'We prioritize security and reliability to ensure your digital assets are protected.'
        }, {
          icon: 'fa-solid fa-headset',
          title: 'Dedicated Support',
          description: 'Our customer support team is available 24/7 to assist you with any inquiries.'
        }]
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-1 text-center gap-y-10 md:grid-cols-3 md:text-left"
        }, features.map((feature, index) => /*#__PURE__*/React.createElement("div", {
          key: index,
          className: `md:${index > 0 ? 'border-l border-black/10 dark:border-white/10' : ''} md:px-6 lg:px-12`
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `features_${index}_icon`,
          icon: feature.icon,
          iconLibrary: "FontAwesome",
          className: "text-4xl text-slate-900 dark:text-white/80"
        }), /*#__PURE__*/React.createElement("h3", {
          className: "TITLE-PRIMARY mt-12 text-lg font-bold text-slate-900 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `features_${index}_title`
        }, feature.title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-5 text-base text-slate-700 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `features_${index}_description`
        }, feature.description))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "987UceE9OnE9BIL0JKgG4"
      }, /*#__PURE__*/React.createElement(Feature_07, {
        "features": [{
          "icon": "fa-solid fa-chart-line",
          "title": "Market Expertise",
          "description": "Our team leverages deep market knowledge to provide top-notch trading solutions."
        }, {
          "icon": "fa-solid fa-handshake",
          "title": "Client Trust",
          "description": "We build lasting relationships based on trust and transparency."
        }, {
          "icon": "fa-solid fa-headset",
          "title": "24/7 Support",
          "description": "Our dedicated support team is always available to assist you."
        }],
        key: "987UceE9OnE9BIL0JKgG4"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Stats_08({
        stats = [{
          id: 1,
          name: "Projects Completed",
          value: "1,200+"
        }, {
          id: 2,
          name: "Satisfied Clients",
          value: "800+"
        }, {
          id: 3,
          name: "Awards Won",
          value: "15+"
        }, {
          id: 4,
          name: "Years of Service",
          value: "10+"
        }],
        backgroundImageUrl = "https://source.unsplash.com/random/1200x800/?creative,work",
        sectionTitle = "Our Achievements",
        mainHeading = "Trusted by the Best in Design",
        description = "We've collaborated with industry leaders to create memorable experiences that last a lifetime."
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `backgroundImageUrl`,
          src: backgroundImageUrl,
          className: "IMAGE absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        }), /*#__PURE__*/React.createElement("div", {
          className: "relative mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-SECONDARY text-base font-semibold leading-8 text-sky-400"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `sectionTitle`
        }, sectionTitle)), /*#__PURE__*/React.createElement("p", {
          className: "TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `mainHeading`
        }, mainHeading)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg leading-8 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `description`
        }, description))), /*#__PURE__*/React.createElement("dl", {
          className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        }, stats.map((stat, index) => /*#__PURE__*/React.createElement("div", {
          key: stat.id,
          className: "flex flex-col gap-y-3 border-l border-white/20 pl-6"
        }, /*#__PURE__*/React.createElement("dt", {
          className: "TEXT-CONTENT text-sm leading-6"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `stats_${index}_name`
        }, stat.name)), /*#__PURE__*/React.createElement("dd", {
          className: "TEXT-CONTENT order-first text-3xl font-semibold tracking-tight"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `stats_${index}_value`
        }, stat.value)))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "0iqkrHx25PLvrxkiqM5AI"
      }, /*#__PURE__*/React.createElement(Stats_08, {
        "stats": [{
          "id": 1,
          "name": "Years in Business",
          "value": "20+"
        }, {
          "id": 2,
          "name": "Global Clients",
          "value": "500+"
        }, {
          "id": 3,
          "name": "Successful Trades",
          "value": "10,000+"
        }, {
          "id": 4,
          "name": "Awards Received",
          "value": "30+"
        }],
        "backgroundImageUrl": "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3Msc3VjY2Vzc3x8fHx8fDE3MTU2ODU4ODQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
        "sectionTitle": "Our Achievements",
        "mainHeading": "Excellence in Trading",
        "description": "We are proud of our achievements and the trust our clients place in us.",
        key: "0iqkrHx25PLvrxkiqM5AI"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Gallery_04({
        categories = [{
          name: 'Web Design',
          images: [{
            src: 'https://source.unsplash.com/random/800x700/?website,interface',
            title: 'Landing Page Design',
            tag: 'Web'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?template,theme',
            title: 'WordPress Theme',
            tag: 'Template'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?responsive,layout',
            title: 'Responsive Layouts',
            tag: 'Responsive'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?user,experience',
            title: 'User Experience Project',
            tag: 'UX'
          }]
        }, {
          name: 'Graphic Design',
          images: [{
            src: 'https://source.unsplash.com/random/800x700/?poster,graphic',
            title: 'Marketing Poster',
            tag: 'Graphic'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?branding,identity',
            title: 'Corporate Branding',
            tag: 'Branding'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?illustration,art',
            title: 'Digital Illustrations',
            tag: 'Art'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?print,design',
            title: 'Print Design Suite',
            tag: 'Print'
          }]
        }, {
          name: 'UI/UX',
          images: [{
            src: 'https://source.unsplash.com/random/800x700/?app,dashboard',
            title: 'Dashboard UI Kit',
            tag: 'UI/UX'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?mobile,interface',
            title: 'Mobile App Interfaces',
            tag: 'Mobile'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?wireframe,prototype',
            title: 'Wireframing Sessions',
            tag: 'Wireframe'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?ux,design',
            title: 'UX Design Workshop',
            tag: 'Workshop'
          }]
        }, {
          name: 'Photography',
          images: [{
            src: 'https://source.unsplash.com/random/800x700/?nature,travel',
            title: 'Nature and Wildlife',
            tag: 'Photo'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?city,life',
            title: 'Urban City Life',
            tag: 'Urban'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?portrait,photography',
            title: 'Portrait Photography',
            tag: 'Portrait'
          }, {
            src: 'https://source.unsplash.com/random/800x700/?landscape,view',
            title: 'Landscape Views',
            tag: 'Landscape'
          }]
        }]
      }) {
        const [activeCategory, setActiveCategory] = React.useState(categories[0]);
        const [activeIndex, setActiveIndex] = React.useState(0);
        return /*#__PURE__*/React.createElement("div", {
          className: "w-full bg-white dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-full max-w-7xl mx-auto py-20 px-4"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
          className: "filter-options flex flex-wrap justify-start gap-2 mb-6"
        }, categories.map((category, index) => /*#__PURE__*/React.createElement("li", {
          key: category.name,
          className: "inline-block"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          onClick: () => {
            setActiveCategory(category);
            setActiveIndex(index);
          },
          className: `inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-100 rounded-full text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600  dark:border-slate-800 ${activeCategory.name === category.name ? 'bg-sky-50 border-sky-200 text-sky-600 dark:bg-white' : 'text-slate-900 hover:bg-sky-400 dark:text-slate-200 dark:hover:text-white'}`
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `categories_${index}_name`
        }, category.name)))))), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        }, activeCategory.images.map((image, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative overflow-hidden rounded-lg shadow-lg group bg-slate-100 dark:bg-slate-900"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `categories_${activeIndex}_images_${index}_src`,
          className: "transition-transform object-cover w-full h-auto aspect-[4/3] duration-500 ease-in-out transform group-hover:scale-110",
          src: image.src
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute inset-0 pointer-events-none bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute flex pointer-events-none items-center gap-1.5 bottom-0 left-0 p-6 z-10 bg-gradient-to-t from-black w-full"
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute flex items-center gap-1.5 bottom-0 left-0 p-4 z-20"
        }, /*#__PURE__*/React.createElement("p", {
          className: "TITLE-PRIMARY text-white text-lg font-semibold"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `categories_${activeIndex}_images_${index}_title`
        }, image.title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-xs inline-flex p-1.5 rounded font-medium bg-white/20 text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `categories_${activeIndex}_images_${index}_tag`
        }, image.tag)))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "Sd3y5ks_pGPX9ZJtukx1w"
      }, /*#__PURE__*/React.createElement(Gallery_04, {
        "categories": [{
          "name": "Milestones",
          "images": [{
            "src": "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3MsbWVldGluZ3x8fHx8fDE3MTU2ODU4ODQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "title": "First Major Deal",
            "tag": "Milestone"
          }, {
            "src": "https://images.unsplash.com/photo-1643047757508-f747bbe05acb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YXdhcmQsY2VyZW1vbnl8fHx8fHwxNzE1Njg1ODg0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "title": "Award Ceremony",
            "tag": "Award"
          }, {
            "src": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLHRlYW18fHx8fHwxNzE1Njg1ODg0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "title": "Team Expansion",
            "tag": "Team"
          }, {
            "src": "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29uZmVyZW5jZSx0cmFkZXx8fHx8fDE3MTU2ODU4ODQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "title": "International Conference",
            "tag": "Conference"
          }]
        }],
        key: "Sd3y5ks_pGPX9ZJtukx1w"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Steps_02({
        title = `How it works?`,
        description = `Our design studio provides all the elements you need to create a stunning and professional website.`,
        steps = [{
          key: `design`,
          number: `01`,
          subTitle: `Start with a great design`,
          detail: `Our studio offers a variety of design blocks and components to kickstart your website creation.`
        }, {
          key: `content`,
          number: `02`,
          subTitle: `Add clever content areas`,
          detail: `Incorporate smart content areas to deliver your message effectively and engage visitors.`
        }, {
          key: `update`,
          number: `03`,
          subTitle: `Easily update your site`,
          detail: `With our user-friendly tools, updating and maintaining your site is simple and hassle-free.`
        }],
        imageUrl = `https://source.unsplash.com/1000x700/?pattern`
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 bg-slate-50 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-4 py-10 mx-auto max-w-7xl flex flex-col gap-20"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: " grid grid-cols-1 items-center gap-14 md:grid-cols-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-6"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-base font-normal text-slate-600 dark:text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description))), /*#__PURE__*/React.createElement(EditableImg, {
          propKey: "imageUrl",
          className: "IMAGE object-cover w-full rounded-lg aspect-[2/1]",
          src: imageUrl,
          alt: imageUrl
        }))), /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-1 gap-16 md:grid-cols-3"
        }, steps.map((item, index) => /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "w-full flex flex-row gap-8 md:flex-col"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative flex flex-col items-center md:flex-row"
        }, /*#__PURE__*/React.createElement("div", {
          className: "inline-flex items-center justify-center w-12 h-12 text-xl font-medium text-white bg-sky-500 rounded-full shrink-0"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `steps_${index}_number`
        }, item.number)), /*#__PURE__*/React.createElement("div", {
          className: "absolute top-16 w-px h-3/4 bg-black/10 dark:bg-white/10  md:h-px md:w-3/4 md:ml-8 md:left-10 md:top-6"
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-4"
        }, /*#__PURE__*/React.createElement("h3", {
          className: "TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `steps_${index}_subTitle`
        }, item.subTitle)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-base font-normal text-slate-600 dark:text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `steps_${index}_detail`
        }, item.detail)))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "ZiMdm0-RaL5Nn20Assi2S"
      }, /*#__PURE__*/React.createElement(Steps_02, {
        "title": "How We Operate",
        "description": "Our streamlined process ensures efficiency and client satisfaction.",
        "steps": [{
          "key": "consultation",
          "number": "01",
          "subTitle": "Initial Consultation",
          "detail": "We begin with understanding your needs and goals."
        }, {
          "key": "strategy",
          "number": "02",
          "subTitle": "Strategic Planning",
          "detail": "We develop a customized strategy to meet your objectives."
        }, {
          "key": "execution",
          "number": "03",
          "subTitle": "Execution",
          "detail": "Our team executes the plan with precision and expertise."
        }],
        "imageUrl": "https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8c3RyYXRlZ3kscGxhbm5pbmd8fHx8fHwxNzE1Njg1ODg0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000",
        key: "ZiMdm0-RaL5Nn20Assi2S"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Contact_07({
        title = "Get in Touch",
        description = "We're open for any suggestion or just to have a chat",
        officeLocations = [{
          city: "Los Angeles",
          address: "4556 Brendan Ferry, Los Angeles, CA 90210"
        }, {
          city: "New York",
          address: "886 Walter Street, New York, NY 12345"
        }, {
          city: "Toronto",
          address: "7363 Cynthia Pass, Toronto, ON N3Y 4H8"
        }, {
          city: "London",
          address: "114 Cobble Lane, London N1 2EF"
        }]
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white dark:bg-slate-800 py-16 sm:py-20 w-full"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg leading-8 text-slate-700 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description))), /*#__PURE__*/React.createElement("div", {
          className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        }, officeLocations.map((location, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          key: index,
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
          className: "TITLE-SECONDARY border-l border-black/10 dark:border-white/10 pl-6 font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `officeLocations_${index}_city`
        }, location.city)), /*#__PURE__*/React.createElement("address", {
          className: "DESC border-l border-black/10 dark:border-white/10 pl-6 pt-2 not-italic text-slate-600 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `officeLocations_${index}_address`
        }, location.address))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "-oWsrYtlsq-F19eHDOfM-"
      }, /*#__PURE__*/React.createElement(Contact_07, {
        "title": "Contact Us",
        "description": "We're here to answer your questions and discuss your trading needs.",
        "officeLocations": [{
          "city": "Hong Kong",
          "address": "123 Central Plaza, Hong Kong"
        }, {
          "city": "New York",
          "address": "456 Wall Street, New York, NY"
        }, {
          "city": "London",
          "address": "789 Financial District, London"
        }],
        key: "-oWsrYtlsq-F19eHDOfM-"
      }));
      list.push(node);
    } catch (error) {}
    routerList.push({
      path: "business-introduction",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  {
    const list = [];
    try {
      function Header_02({
        title = "Design Studio - Create, Innovate, Inspire",
        description = "At our design studio, we transform visions into reality. Our dedicated team ensures every project is a masterpiece."
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl text-center"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `title`
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-6 text-lg leading-8 text-slate-700 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `description`
        }, description))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "yyL0PnvX8oQ7RiNcNjAEk"
      }, /*#__PURE__*/React.createElement(Header_02, {
        "title": "Meet Our Dynamic Team",
        "description": "Discover the passionate professionals driving TRUCK TRADE LIMITED forward with innovation and dedication.",
        key: "yyL0PnvX8oQ7RiNcNjAEk"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Team_14({
        title = "Join a team of makers",
        subtitle = "We are makers at heart. Problem solvers and storytellers. We are a diverse team of individuals who build things to make our customers happy.",
        features = [{
          title: "Passionate",
          icon: "fa-solid fa-heart",
          description: "You are passionate about digital products of any kind and are a builder at heart."
        }, {
          title: "Energetic",
          icon: "fa-solid fa-bolt",
          description: "You are passionate about digital products of any kind and are a builder at heart."
        }, {
          title: "Achiever",
          icon: "fa-solid fa-trophy",
          description: "You are passionate about digital products of any kind and are a builder at heart."
        }],
        images = ["https://source.unsplash.com/random/1200x900/?office,team", "https://source.unsplash.com/random/1200x900/?workspace,creative", "https://source.unsplash.com/random/1200x900/?technology,innovation", "https://source.unsplash.com/random/1200x900/?computer,design"]
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "relative bg-white dark:bg-slate-900 px-6 py-24 md:px-8 md:py-32 "
        }, /*#__PURE__*/React.createElement(AnimateInView, null, /*#__PURE__*/React.createElement("div", {
          className: "w-full max-w-7xl mx-auto flex flex-col gap-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-3xl mx-auto text-center flex flex-col gap-6"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title",
          className: "TITLE-PRIMARY text-5xl font-bold text-slate-900 dark:text-slate-50"
        }, title), /*#__PURE__*/React.createElement(EditableText, {
          propKey: "subtitle",
          className: "DESC text-slate-600 dark:text-slate-400"
        }, subtitle)), /*#__PURE__*/React.createElement("div", {
          className: "w-full grid md:grid-cols-3 gap-10 md:gap-14 max-w-xs mx-auto md:max-w-none"
        }, features.map((feature, index) => /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "w-full flex items-center text-center text-slate-900 dark:text-slate-50 flex flex-col gap-4"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `features_${index}_icon`,
          icon: feature.icon,
          className: "text-2xl"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: `features_${index}_title`,
          className: "TITLE-PRIMARY font-bold"
        }, feature.title), /*#__PURE__*/React.createElement(EditableText, {
          propKey: `features_${index}_description`,
          className: "DESC text-sm text-slate-600 dark:text-slate-400"
        }, feature.description)))), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 md:-mx-5"
        }, images.map((image, index) => /*#__PURE__*/React.createElement(EditableImg, {
          key: index,
          propKey: `images_${index}`,
          src: image,
          className: "IMAGE w-full h-auto aspect-[16/10] object-cover"
        }))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "i2Hj3DC2RGD7rECUjK_d0"
      }, /*#__PURE__*/React.createElement(Team_14, {
        "title": "Our Team",
        "subtitle": "A diverse group of experts committed to excellence and customer satisfaction.",
        "features": [{
          "title": "Innovative",
          "icon": "fa-solid fa-lightbulb",
          "description": "We bring fresh ideas and creative solutions to the table."
        }, {
          "title": "Dedicated",
          "icon": "fa-solid fa-hands-helping",
          "description": "Our team is committed to delivering outstanding results."
        }, {
          "title": "Experienced",
          "icon": "fa-solid fa-briefcase",
          "description": "Years of industry experience drive our success."
        }],
        "images": ["https://source.unsplash.com/random/1200x900/?team,work", "https://source.unsplash.com/random/1200x900/?office,meeting", "https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3MsZGlzY3Vzc2lvbnx8fHx8fDE3MTU2ODU4OTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200", "https://source.unsplash.com/random/1200x900/?collaboration,workplace"],
        key: "i2Hj3DC2RGD7rECUjK_d0"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Authors_03({
        title = 'Our Featured Creators',
        profileIcon = "fa-solid fa-check",
        profileUrls = ['https://source.unsplash.com/680x680/?portrait,artist', 'https://source.unsplash.com/680x680/?face,painter', 'https://source.unsplash.com/680x680/?profile,designer', 'https://source.unsplash.com/680x680/?human,illustrator', 'https://source.unsplash.com/680x680/?person,photographer'],
        coverUrls = ['https://source.unsplash.com/800x700/?artwork,canvas', 'https://source.unsplash.com/800x700/?painting,studio', 'https://source.unsplash.com/800x700/?gallery,exhibition', 'https://source.unsplash.com/800x700/?creative,workspace', 'https://source.unsplash.com/800x700/?design,office'],
        names = ['Alex Doe', 'Chris Raven', 'Eva Stone', 'Mia Wong', 'Jack Frost'],
        earnings = ['$12,245.67', '$9,784.55', '$15,873.00', '$7,349.45', '$13,765.88']
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-12 bg-white dark:bg-slate-800 sm:py-16 lg:py-20"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-center md:text-left md:flex md:items-center md:justify-between"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title))), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-1 gap-4 px-12 mt-12 text-center sm:mt-16 md:px-0 sm:gap-6 xl:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
        }, profileUrls.map((profileUrl, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative overflow-hidden transition-all duration-200 transform bg-white dark:bg-slate-600 border border-black/10 dark:border-white/10 rounded-lg hover:shadow-lg hover:-translate-y-1"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `coverUrls_${index}`,
          className: "IMAGE bg-slate-100 aspect-[4/3] object-cover",
          src: coverUrls[index],
          alt: coverUrls[index]
        })), /*#__PURE__*/React.createElement("div", {
          className: "-mt-16 sm:flex sm:items-center sm:justify-center sm:space-x-5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative inline-flex"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `profileUrls_${index}`,
          className: "IMAGE rounded-full ring-4 ring-white dark:ring-slate-600 h-28 w-28 object-cover",
          src: profileUrl,
          alt: profileUrl
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute bottom-0 right-0 pr-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "inline-flex items-center justify-center text-white bg-sky-500 rounded-full ring-4 ring-white dark:ring-slate-600 w-7 h-7"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `profileIcon`,
          icon: profileIcon,
          iconLibrary: "FontAwesome",
          className: "text-base text-white"
        }))))), /*#__PURE__*/React.createElement("div", {
          className: "px-4 pt-3 pb-6"
        }, /*#__PURE__*/React.createElement("p", {
          className: "TITLE-SECONDARY text-base font-bold text-gray-900 dark:text-white"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "relative inline-flex items-center justify-center"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `names_${index}`
        }, names[index]))), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-1 text-sm font-medium text-gray-500 dark:text-slate-400 uppercase"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `earnings_${index}`
        }, earnings[index])))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "6qx_GfWdSRQu-8bOXhe1c"
      }, /*#__PURE__*/React.createElement(Authors_03, {
        "title": "Key Team Members",
        "profileIcon": "fa-solid fa-check",
        "profileUrls": ["https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=680&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsYnVzaW5lc3N8fHx8fHwxNzE1Njg1ODkx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=680", "https://source.unsplash.com/680x680/?face,executive", "https://source.unsplash.com/680x680/?profile,leader", "https://source.unsplash.com/680x680/?person,manager", "https://source.unsplash.com/680x680/?human,professional"],
        "coverUrls": ["https://source.unsplash.com/800x700/?office,team", "https://source.unsplash.com/800x700/?meeting,collaboration", "https://source.unsplash.com/800x700/?workspace,innovation", "https://source.unsplash.com/800x700/?discussion,planning", "https://source.unsplash.com/800x700/?strategy,execution"],
        "names": ["John Smith", "Jane Doe", "Michael Brown", "Emily Davis", "David Wilson"],
        "earnings": ["$120,000", "$110,000", "$130,000", "$115,000", "$125,000"],
        key: "6qx_GfWdSRQu-8bOXhe1c"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Testimonial_11({
        testimonialText = "Our design studio focuses on delivering exceptional creative solutions. Our commitment to quality and innovation has been instrumental in crafting memorable experiences.",
        authorName = "Alex Johnson",
        authorTitle = "Creative Director at DesignStudio",
        backgroundImageUrl = "https://source.unsplash.com/random/2250x1200/?studio,design",
        backgroundColor = {
          colorA: "#ff4694",
          colorB: "#776fff"
        }
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white py-16 sm:py-20 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20 dark:bg-slate-900"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: "backgroundImageUrl",
          className: "IMAGE absolute inset-0 z-[1] opacity-30 h-full w-full object-cover",
          src: backgroundImageUrl,
          alt: backgroundImageUrl
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute -left-80 -top-56 transform-gpu blur-3xl",
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("div", {
          className: `aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-[0.45]`,
          style: {
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl",
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("div", {
          className: `aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[${backgroundColor.colorA}] to-[${backgroundColor.colorB}] opacity-25`,
          style: {
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "relative mx-auto max-w-2xl lg:mx-0"
        }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("blockquote", {
          className: "DESC text-lg font-semibold text-white/90 sm:text-xl sm:leading-8"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "testimonialText"
        }, testimonialText)), /*#__PURE__*/React.createElement("figcaption", {
          className: "mt-6 text-base text-white/90 "
        }, /*#__PURE__*/React.createElement("div", {
          className: "font-semibold"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "authorName"
        }, authorName)), /*#__PURE__*/React.createElement("div", {
          className: "mt-1"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "authorTitle"
        }, authorTitle))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "7OM-8fxzXbLm3lM0PqIiQ"
      }, /*#__PURE__*/React.createElement(Testimonial_11, {
        "testimonialText": "Working at TRUCK TRADE LIMITED has been a transformative experience. The team's dedication and innovative spirit are truly inspiring.",
        "authorName": "Sarah Lee",
        "authorTitle": "Project Manager",
        "backgroundImageUrl": "https://source.unsplash.com/random/3250x2000/?team,success",
        "backgroundColor": {
          "colorA": "#00aaff",
          "colorB": "#ffaa00"
        },
        key: "7OM-8fxzXbLm3lM0PqIiQ"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Carousel_02({
        prevSlideIcon = 'fa-solid fa-chevron-left',
        nextSlideIcon = 'fa-solid fa-chevron-right',
        buttonPrevious = "Previous",
        buttonNext = "Next",
        images = [{
          src: "https://source.unsplash.com/800x600/?office",
          label: "Design Your Workspace",
          description: "Create an inspiring space that matches your creative workflow."
        }, {
          src: "https://source.unsplash.com/800x600/?meeting",
          label: "Collaborative Meetings",
          description: "Brainstorm and collaborate with your team in a comfortable setting."
        }, {
          src: "https://source.unsplash.com/800x600/?creative",
          label: "Innovative Solutions",
          description: "Drive innovation with our state-of-the-art design studio."
        }],
        interval = 10000
      }) {
        const [activeIndex, setActiveIndex] = React.useState(0);
        const goPrev = () => setActiveIndex(prev => (prev - 1 + images.length) % images.length);
        const goNext = () => setActiveIndex(prev => (prev + 1) % images.length);
        const goToSlide = index => setActiveIndex(index);
        React.useEffect(() => {
          const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % images.length);
          }, interval);
          return () => clearInterval(timer);
        }, [interval, images.length]);
        return /*#__PURE__*/React.createElement("div", {
          className: "w-full dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl w-full mx-auto py-20 px-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative"
        }, /*#__PURE__*/React.createElement("div", {
          className: "absolute bottom-0 left-0 right-0 z-10 mx-auto mb-4 flex list-none justify-center p-0"
        }, images.map((_, index) => /*#__PURE__*/React.createElement(EditableButton, {
          key: index,
          type: "button",
          onClick: () => goToSlide(index),
          className: `mx-1 h-1 rounded w-10 flex-initial cursor-pointer border-0 bg-black/10 dark:bg-white/10 p-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-40"}`,
          "aria-label": `Slide ${index + 1}`
        }))), /*#__PURE__*/React.createElement("div", {
          className: "relative w-full overflow-hidden"
        }, images.map((image, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          key: image.src,
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: `float-left w-full transition-transform duration-500 ease-in-out ${index === activeIndex ? "block" : "hidden"}`
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `images_${index}_src`,
          className: "IMAGE block w-full aspect-video rounded-lg object-cover bg-slate-100",
          src: image.src,
          alt: ""
        }), /*#__PURE__*/React.createElement("div", {
          className: "absolute px-6 inset-x-0 bottom-5 hidden py-5 text-center text-white/90 md:block"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY text-4xl font-bold mb-3"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `images_${index}_label`
        }, image.label)), /*#__PURE__*/React.createElement("p", {
          className: "DESC"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `images_${index}_description`
        }, image.description))))))), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY absolute bottom-0 left-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90",
          type: "button",
          onClick: goPrev
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "prevSlideIcon",
          icon: prevSlideIcon,
          iconLibrary: "FontAwesome",
          className: "text-xl text-white/90"
        }), /*#__PURE__*/React.createElement("span", {
          className: "sr-only"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `buttonPrevious`
        }, buttonPrevious))), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY absolute bottom-0 right-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90",
          type: "button",
          onClick: goNext
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "nextSlideIcon",
          icon: nextSlideIcon,
          iconLibrary: "FontAwesome",
          className: "text-xl text-white/90"
        }), /*#__PURE__*/React.createElement("span", {
          className: "sr-only"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `buttonNext`
        }, buttonNext))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "tb4EnaoWu0prZ8JwVPnsy"
      }, /*#__PURE__*/React.createElement(Carousel_02, {
        "prevSlideIcon": "fa-solid fa-chevron-left",
        "nextSlideIcon": "fa-solid fa-chevron-right",
        "buttonPrevious": "Previous",
        "buttonNext": "Next",
        "images": [{
          "src": "https://source.unsplash.com/800x600/?team,activity",
          "label": "Team Building",
          "description": "Strengthening bonds through team-building activities."
        }, {
          "src": "https://source.unsplash.com/800x600/?office,event",
          "label": "Corporate Events",
          "description": "Engaging in events that foster collaboration and growth."
        }, {
          "src": "https://source.unsplash.com/800x600/?workshop,training",
          "label": "Workshops",
          "description": "Continuous learning through workshops and training sessions."
        }],
        "interval": 8000,
        key: "tb4EnaoWu0prZ8JwVPnsy"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Contact_01({
        title = `Get in touch with us & let's talk.`,
        officeHours = [{
          id: 'hours1',
          icon: 'fa-solid fa-clock',
          title: 'Office Hours',
          texts: ['Monday-Friday', '8:00 am to 5:00 pm']
        }, {
          id: 'location1',
          icon: 'fa-solid fa-location-dot',
          title: 'Our Address',
          texts: ['8502 Preston Rd. Ingle', 'Maine 98380, USA']
        }, {
          id: 'location2',
          icon: 'fa-solid fa-building',
          title: 'Office 2',
          texts: ['8502 Preston Rd. Ingle', 'Maine 98380, USA']
        }, {
          id: 'contact',
          icon: 'fa-solid fa-phone',
          title: 'Get In Touch',
          texts: ['+1-246-888-0653', '+1-222-632-0194']
        }],
        imageUrl = `https://source.unsplash.com/800x700/?office,contact`
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "relative py-12 overflow-hidden bg-slate-50 sm:py-16 lg:py-20 xl:py-24 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "absolute bottom-0 dark:bg-slate-700 left-0 lg:w-[50%] bg-sky-100 lg:h-[75%] hidden lg:block"
        }), /*#__PURE__*/React.createElement("div", {
          className: "relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-36"
        }, /*#__PURE__*/React.createElement("div", {
          className: "xl:pl-8 lg:order-2"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-1 mt-12 sm:grid-cols-2 gap-y-8 sm:gap-12 xl:gap-x-16 sm:mt-16 lg:mt-20"
        }, officeHours.map((item, index) => {
          const {
            id,
            icon,
            title,
            texts
          } = item;
          return /*#__PURE__*/React.createElement("div", {
            key: id,
            className: "flex items-start"
          }, /*#__PURE__*/React.createElement(EditableIcon, {
            propKey: `officeHours_${index}_icon`,
            icon: icon,
            iconLibrary: "FontAwesome",
            className: "text-lg text-sky-500 dark:text-white/90 shrink-0"
          }), /*#__PURE__*/React.createElement("div", {
            className: "ml-4"
          }, /*#__PURE__*/React.createElement("h3", {
            className: "TITLE-SECONDARY text-lg font-medium text-slate-900 dark:text-white/90"
          }, /*#__PURE__*/React.createElement(EditableText, {
            propKey: `officeHours_${index}_title`
          }, title)), /*#__PURE__*/React.createElement("p", {
            className: "DESC mt-4 text-sm font-normal text-slate-600 dark:text-white/90"
          }, texts.map((line, lineIndex) => /*#__PURE__*/React.createElement("div", {
            key: line
          }, /*#__PURE__*/React.createElement(EditableText, {
            propKey: `officeHours_${index}_texts_${lineIndex}`
          }, line), /*#__PURE__*/React.createElement("br", null))))));
        }))), /*#__PURE__*/React.createElement("div", {
          className: "relative px-6 lg:px-0 lg:order-1"
        }, /*#__PURE__*/React.createElement("div", {
          className: "absolute bottom-0 left-0 w-full dark:bg-slate-700 -mb-12 bg-sky-100 sm:h-96 sm:-mb-16 h-72 lg:hidden"
        }), /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: "imageUrl",
          className: "IMAGE relative object-cover w-full h-full rounded-2xl bg-slate-100 aspect-[4/3]",
          src: imageUrl,
          alt: imageUrl
        }))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "P1ruE6yS_D3LoacHrL0VK"
      }, /*#__PURE__*/React.createElement(Contact_01, {
        "title": "Connect with Us",
        "officeHours": [{
          "id": "hours1",
          "icon": "fa-solid fa-clock",
          "title": "Office Hours",
          "texts": ["Monday-Friday", "9:00 am to 6:00 pm"]
        }, {
          "id": "location1",
          "icon": "fa-solid fa-location-dot",
          "title": "Main Office",
          "texts": ["123 Central Plaza", "Hong Kong"]
        }, {
          "id": "contact",
          "icon": "fa-solid fa-phone",
          "title": "Contact Us",
          "texts": ["+852-1234-5678", "+852-8765-4321"]
        }],
        "imageUrl": "https://source.unsplash.com/800x700/?business,contact",
        key: "P1ruE6yS_D3LoacHrL0VK"
      }));
      list.push(node);
    } catch (error) {}
    routerList.push({
      path: "team-introduction",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  {
    const list = [];
    try {
      function Header_04({
        title = "Welcome to Our Design Studio",
        description = "Discover creativity and innovation with every project we undertake. Let's build something amazing together.",
        cards = [{
          name: "Innovative Designs",
          description: "Creating visually stunning designs that stand out.",
          icon: "fa-solid fa-lightbulb"
        }, {
          name: "Expert Development",
          description: "Developing robust, scalable, and efficient solutions.",
          icon: "fa-solid fa-code"
        }, {
          name: "Strategic Marketing",
          description: "Crafting marketing strategies that deliver results.",
          icon: "fa-solid fa-bullhorn"
        }],
        backgroundImageUrl = "https://source.unsplash.com/random/1200x800/?creative"
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
        }, /*#__PURE__*/React.createElement(EditableImg, {
          propKey: `backgroundImageUrl`,
          className: "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20",
          src: backgroundImageUrl,
          alt: backgroundImageUrl
        }), /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl lg:mx-0"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "text-4xl font-bold tracking-tight text-white sm:text-6xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `title`
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "mt-6 text-lg leading-8 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `description`
        }, description))), /*#__PURE__*/React.createElement("div", {
          className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        }, cards.map((card, index) => /*#__PURE__*/React.createElement("div", {
          key: card.name,
          className: "flex gap-x-4 rounded-xl bg-white/5 backdrop-blur-xl p-6 ring-1 ring-inset ring-white/10"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `cards_${index}_icon`,
          icon: card.icon,
          iconLibrary: "FontAwesome",
          className: "text-lg text-indigo-400"
        }), /*#__PURE__*/React.createElement("div", {
          className: "text-base leading-7"
        }, /*#__PURE__*/React.createElement("h3", {
          className: "font-semibold text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `cards_${index}_name`
        }, card.name)), /*#__PURE__*/React.createElement("p", {
          className: "mt-2 text-gray-300"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `cards_${index}_description`
        }, card.description))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "ZT_m5dvePP8ZmvqqmWoga"
      }, /*#__PURE__*/React.createElement(Header_04, {
        "title": "Get in Touch with TRUCK TRADE LIMITED",
        "description": "We're here to assist you with any inquiries. Reach out to us today.",
        "cards": [{
          "name": "Email Us",
          "description": "Send us an email at info@caregis.com",
          "icon": "fa-solid fa-envelope"
        }, {
          "name": "Call Us",
          "description": "Give us a call at +852 1234 5678",
          "icon": "fa-solid fa-phone"
        }, {
          "name": "Visit Us",
          "description": "Find us at our Hong Kong office",
          "icon": "fa-solid fa-map-marker-alt"
        }],
        "backgroundImageUrl": "https://images.unsplash.com/photo-1664575599736-c5197c684128?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3N8fHx8fHwxNzE1Njg1ODky&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200",
        key: "ZT_m5dvePP8ZmvqqmWoga"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Contact_05({
        greeting = `Say hello to Our Design Studio`,
        mainTitle = `Interested in collaborating?`,
        workingHours = `Monday-Friday, 9:00 am to 6:00 pm`,
        workingHoursDetails = `Our team is available for your queries.`,
        email = `connect@designstudio.com`,
        title = `Send us a message`,
        socialLinks = [{
          name: `Instagram`,
          url: `https://instagram.com`
        }, {
          name: `Medium`,
          url: `https://medium.com`
        }, {
          name: `Facebook`,
          url: `https://facebook.com`
        }, {
          name: `Behance`,
          url: `https://behance.net`
        }, {
          name: `LinkedIn`,
          url: `https://linkedin.com`
        }, {
          name: `Dribbble`,
          url: `https://dribbble.com`
        }]
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 bg-gradient-to-b from-gray-900 to-gray-600 sm:py-16 lg:py-20 xl:py-24"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto px-4 max-w-7xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "grid items-end max-w-5xl grid-cols-1 mx-auto md:grid-cols-2 gap-y-10 gap-x-48"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "DESC text-base font-semibold text-white/60"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "greeting"
        }, greeting)), /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY mt-6 text-4xl font-semibold text-white md:text-5xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "mainTitle"
        }, mainTitle)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mt-10 text-base font-normal  text-white/90 md:mt-40"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "workingHours"
        }, workingHours), /*#__PURE__*/React.createElement("span", {
          className: "block text-white/60"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "workingHoursDetails"
        }, workingHoursDetails)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-5"
        }, /*#__PURE__*/React.createElement("p", {
          className: "DESC text-xs font-semibold tracking-widest text-white/60 uppercase"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "TEXT-LINK text-base font-normal"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "hover:underline text-white/90",
          href: `mailto:${email}`,
          title: email
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "email"
        }, email)))), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 md:mt-24"
        }, /*#__PURE__*/React.createElement("p", {
          className: "DESC text-xs font-semibold tracking-widest text-white/60 uppercase"
        }, "Follow Us"), /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-2 mt-5 gap-y-4 gap-x-8"
        }, socialLinks.map((link, index) => /*#__PURE__*/React.createElement("p", {
          key: index,
          className: "TEXT-LINK text-base font-normal"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "hover:underline text-white/90",
          href: link.url,
          title: link.name
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `socialLinks_${index}_name`
        }, link.name))))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "ZPdjx5CLV2mRrxPNs1zBa"
      }, /*#__PURE__*/React.createElement(Contact_05, {
        "greeting": "Connect with TRUCK TRADE LIMITED",
        "mainTitle": "Have Questions? We're Here to Help!",
        "workingHours": "Monday-Friday, 9:00 am to 6:00 pm",
        "workingHoursDetails": "Our team is available to assist you during these hours.",
        "email": "info@caregis.com",
        "title": "Send us a message",
        "socialLinks": [{
          "name": "LinkedIn",
          "url": "https://linkedin.com/company/caregis-trading-hk-limited"
        }, {
          "name": "Twitter",
          "url": "https://twitter.com/caregis_trading"
        }, {
          "name": "Facebook",
          "url": "https://facebook.com/caregis.trading.hk"
        }],
        key: "ZPdjx5CLV2mRrxPNs1zBa"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function FAQ_03({
        title = `Design Studio FAQs`,
        faqs = [{
          question: `01. What services does the Design Studio offer?`,
          answer: `Our studio specializes in branding, web design, and UX/UI design, providing unique and innovative solutions for businesses looking to stand out.`
        }, {
          question: `02. How can I start a project with the Design Studio?`,
          answer: `To start a project, simply contact us through our website form or email, and we'll schedule a consultation to discuss your needs and vision.`
        }, {
          question: `03. What is the typical timeline for a design project?`,
          answer: `Project timelines vary depending on the scope and complexity but generally range from a few weeks to several months. We prioritize clear communication and deadlines.`
        }]
      }) {
        return /*#__PURE__*/React.createElement("section", {
          className: "py-10 bg-slate-50 dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-4 mx-auto max-w-7xl py-10 flex flex-col gap-20"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-4xl font-semibold text-center text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title))), /*#__PURE__*/React.createElement("div", {
          className: "max-w-5xl mx-auto flex flex-col gap-14"
        }, faqs.map((faq, index) => /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "border-b border-black/10 dark:border-white/10"
        }, /*#__PURE__*/React.createElement("p", {
          className: "TITLE-SECONDARY text-2xl font-semibold text-slate-900 dark:text-white/90"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `faqs_${index}_question`
        }, faq.question)), /*#__PURE__*/React.createElement("p", {
          className: "DESC my-8 text-base font-normal text-slate-600 dark:text-white/70"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `faqs_${index}_answer`
        }, faq.answer))))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "NgO3qY22umu01q1hRE5oZ"
      }, /*#__PURE__*/React.createElement(FAQ_03, {
        "title": "Frequently Asked Questions",
        "faqs": [{
          "question": "01. What services does TRUCK TRADE LIMITED offer?",
          "answer": "We specialize in international trading, providing a wide range of products and services to meet your business needs."
        }, {
          "question": "02. How can I get in touch with your team?",
          "answer": "You can contact us via email at info@caregis.com or call us at +852 1234 5678."
        }, {
          "question": "03. Where is your office located?",
          "answer": "Our office is located in Hong Kong. Visit our 'Contact Us' page for more details."
        }],
        key: "NgO3qY22umu01q1hRE5oZ"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Map_02({
        locationName = `New York Studio`,
        title = `Explore Our Creative Space`,
        description = `Venture into the heart of our design studio located in New York and discover where innovative ideas take shape.`,
        locationIcon = "fa-solid fa-location-dot"
      }) {
        const encodedLocation = encodeURIComponent(locationName);
        return /*#__PURE__*/React.createElement("div", {
          className: "w-full bg-white dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement("div", {
          className: "max-w-7xl mx-auto py-20 px-4 relative"
        }, /*#__PURE__*/React.createElement("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col justify-center p-6 rounded-lg"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white mb-4"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-base font-normal text-slate-700 dark:text-white/70 mb-4"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description)), /*#__PURE__*/React.createElement("div", {
          className: "flex items-center text-sky-600 dark:text-sky-200"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "locationIcon",
          icon: locationIcon,
          iconLibrary: "FontAwesome",
          className: "text-lg text-sky-600 dark:text-sky-200 mr-2"
        }), /*#__PURE__*/React.createElement(EditableText, {
          propKey: "locationName"
        }, locationName))), /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative overflow-hidden rounded-2xl h-80 shadow"
        }, /*#__PURE__*/React.createElement("iframe", {
          className: "absolute top-0 left-0 w-full h-full",
          src: `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodedLocation}&ie=UTF8&t=&z=14&iwloc=B&output=embed`,
          style: {
            filter: 'grayscale(1) contrast(1.1)',
            opacity: 0.6
          },
          allowFullScreen: true,
          loading: "lazy",
          title: `${locationName}`
        }))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "G1w-Ct0E2gD3HxvfNzv63"
      }, /*#__PURE__*/React.createElement(Map_02, {
        "locationName": "TRUCK TRADE LIMITED Office",
        "title": "Our Office Location",
        "description": "Visit us at our Hong Kong office for any in-person inquiries.",
        "locationIcon": "fa-solid fa-map-marker-alt",
        key: "G1w-Ct0E2gD3HxvfNzv63"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function CallToAction_11({
        title = `Elevate Your Design Workflow`,
        description = `Join our community and enhance your design process with our cutting-edge tools and resources. Sign up now to get started!`,
        buttonTextAttr = `text=Get Started&link=/`,
        learnMoreTextAttr = `text=Learn More&link=/`,
        learnMoreIcon = 'fa-solid fa-arrow-right'
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "relative isolate overflow-hidden bg-sky-500"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-6 py-16 sm:px-6 sm:py-20 lg:px-8"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto max-w-2xl text-center"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "title"
        }, title)), /*#__PURE__*/React.createElement("p", {
          className: "DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "description"
        }, description)), /*#__PURE__*/React.createElement("div", {
          className: "mt-10 flex items-center justify-center gap-x-6"
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-PRIMARY inline-flex items-center justify-center text-slate-800 bg-white font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-white/80 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "buttonTextAttr"
        }, buttonTextAttr)), /*#__PURE__*/React.createElement(EditableButton, {
          className: "BTN-SECONDARY text-sm flex items-center group gap-1 font-semibold leading-6 text-white"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "learnMoreTextAttr"
        }, learnMoreTextAttr), /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: "learnMoreIcon",
          icon: learnMoreIcon,
          className: "group-hover:translate-x-1 transition-all duration-300"
        }))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "b46RiUDJJMyBZVsK-fUDk"
      }, /*#__PURE__*/React.createElement(CallToAction_11, {
        "title": "Get Started with TRUCK TRADE LIMITED",
        "description": "Join us and take your business to the next level. Contact us today!",
        "buttonTextAttr": "text=Contact Us&link=/contact-us",
        "learnMoreTextAttr": "text=Learn More&link=/business-introduction",
        "learnMoreIcon": "fa-solid fa-arrow-right",
        key: "b46RiUDJJMyBZVsK-fUDk"
      }));
      list.push(node);
    } catch (error) {}
    try {
      function Footer_05({
        links = [{
          href: `#`,
          title: `About Us`,
          propKey: `links_0_title`
        }, {
          href: `#`,
          title: `Our Services`,
          propKey: `links_1_title`
        }, {
          href: `#`,
          title: `Portfolio`,
          propKey: `links_2_title`
        }, {
          href: `#`,
          title: `Support`,
          propKey: `links_3_title`
        }, {
          href: `#`,
          title: `Contact`,
          propKey: `links_4_title`
        }],
        socialMedia = [{
          href: `#`,
          icon: `fa-brands fa-twitter`,
          propKey: `socialMedia_twitter`
        }, {
          href: `#`,
          icon: `fa-brands fa-facebook-f`,
          propKey: `socialMedia_facebook`
        }, {
          href: `#`,
          icon: `fa-brands fa-instagram`,
          propKey: `socialMedia_instagram`
        }, {
          href: `#`,
          icon: `fa-brands fa-github`,
          propKey: `socialMedia_github`
        }],
        copyrightText = `© 2023 Design Studio. All Rights Reserved.`
      }) {
        return /*#__PURE__*/React.createElement("footer", {
          className: "py-10 bg-white dark:bg-slate-800"
        }, /*#__PURE__*/React.createElement(AnimateInView, {
          type: "rise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "px-4 mx-auto max-w-7xl py-10 flex flex-col items-center gap-16"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "w-full grid grid-cols-2 text-center  gap-6 md:grid-cols-5"
        }, links.map((link, index) => /*#__PURE__*/React.createElement("li", {
          key: link.propKey,
          href: link.href
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "TEXT-LINK inline-flex text-lg font-medium text-slate-900 dark:text-slate-50 hover:text-sky-400 focus:text-sky-500 dark:hover:text-sky-400 dark:focus:text-sky-500"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: `links_${index}_title`
        }, link.title))))), /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col gap-6"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "flex items-center justify-center gap-6"
        }, socialMedia.map((social, index) => /*#__PURE__*/React.createElement("li", {
          key: social.icon,
          href: social.href
        }, /*#__PURE__*/React.createElement(EditableButton, {
          className: "inline-flex items-center justify-center w-10 h-10 text-slate-900 transition-all duration-200 rounded-full hover:bg-sky-400 hover:text-slate-50 focus:outline-none focus:bg-slate-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:hover:bg-sky-400 dark:focus:bg-sky-500 dark:text-slate-50"
        }, /*#__PURE__*/React.createElement(EditableIcon, {
          propKey: `socialMedia_${index}_icon`,
          icon: social.icon,
          iconLibrary: "FontAwesome",
          className: "text-xl"
        }))))), /*#__PURE__*/React.createElement("p", {
          className: "DESC text-base font-normal text-center text-slate-600 dark:text-white/80"
        }, /*#__PURE__*/React.createElement(EditableText, {
          propKey: "copyrightText"
        }, copyrightText))))));
      }
      const node = /*#__PURE__*/React.createElement(ErrorBoundary, {
        key: "2hCktVtukNMBHY7mCCHli"
      }, /*#__PURE__*/React.createElement(Footer_05, {
        "links": [{
          "href": "/business-introduction",
          "title": "Business Introduction",
          "propKey": "links_0_title"
        }, {
          "href": "/team-introduction",
          "title": "Team Introduction",
          "propKey": "links_1_title"
        }, {
          "href": "/contact-us",
          "title": "Contact Us",
          "propKey": "links_2_title"
        }],
        "socialMedia": [{
          "href": "https://twitter.com/caregis_trading",
          "icon": "fa-brands fa-twitter",
          "propKey": "socialMedia_twitter"
        }, {
          "href": "https://facebook.com/caregis.trading.hk",
          "icon": "fa-brands fa-facebook-f",
          "propKey": "socialMedia_facebook"
        }, {
          "href": "https://linkedin.com/company/caregis-trading-hk-limited",
          "icon": "fa-brands fa-linkedin",
          "propKey": "socialMedia_linkedin"
        }],
        "copyrightText": "© 2024 TRUCK TRADE LIMITED. All Rights Reserved.",
        key: "2hCktVtukNMBHY7mCCHli"
      }));
      list.push(node);
    } catch (error) {}
    routerList.push({
      path: "contact-us",
      element: /*#__PURE__*/React.createElement(Layout, null, list)
    });
  }
  try {
    function Footer_02({
      navigationItems = [{
        titleAttr: 'text=About Us&link=/'
      }, {
        titleAttr: 'text=Our Services&link=/'
      }, {
        titleAttr: 'text=Projects&link=/'
      }, {
        titleAttr: 'text=Careers&link=/'
      }],
      socialMediaItems = [{
        icon: 'fa-brands fa-twitter',
        href: '#'
      }, {
        icon: 'fa-brands fa-facebook',
        href: '#'
      }, {
        icon: 'fa-brands fa-instagram',
        href: '#'
      }, {
        icon: 'fa-brands fa-github',
        href: '#'
      }],
      copyrightText = '© Design Studio 2023, All Rights Reserved'
    }) {
      return /*#__PURE__*/React.createElement("section", {
        className: "bg-slate-50 dark:bg-slate-800 px-6 py-20 md:px-8"
      }, /*#__PURE__*/React.createElement(AnimateInView, {
        type: "rise"
      }, /*#__PURE__*/React.createElement("div", {
        className: " mx-auto max-w-7xl flex flex-col gap-20"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-center gap-8 md:justify-between md:flex-row"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "flex items-center gap-8"
      }, navigationItems.map((item, index) => /*#__PURE__*/React.createElement("li", {
        key: item.title,
        href: item.href
      }, /*#__PURE__*/React.createElement(EditableButton, {
        className: "TEXT-LINK font-semibold text-slate-900 dark:text-slate-50  hover:text-sky-400  dark:hover:text-sky-400 focus:text-sky-500 dark:focus:text-sky-500"
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: `navigationItems_${index}_titleAttr`
      }, item.titleAttr))))), /*#__PURE__*/React.createElement("ul", {
        className: "flex items-center gap-8 "
      }, socialMediaItems.map((item, index) => /*#__PURE__*/React.createElement("li", {
        key: item.icon,
        href: item.href
      }, /*#__PURE__*/React.createElement(EditableButton, {
        className: "TEXT-LINK text-slate-900 dark:text-slate-50 hover:text-sky-400 dark:hover:text-sky-400  dark:focus:text-slate-500"
      }, /*#__PURE__*/React.createElement(EditableIcon, {
        propKey: `socialMediaItems_${index}_icon`,
        icon: item.icon,
        iconLibrary: "FontAwesome",
        className: "text-lg"
      })))))), /*#__PURE__*/React.createElement("p", {
        className: "w-full text-sm text-center text-slate-600 lg:mt-0 dark:text-slate-400"
      }, /*#__PURE__*/React.createElement(EditableText, {
        propKey: "copyrightText"
      }, copyrightText)))));
    }
    Footer = /*#__PURE__*/React.createElement(ErrorBoundary, {
      key: "XvalhLBv4J4ohMyflGGRY"
    }, /*#__PURE__*/React.createElement(Footer_02, {
      "navigationItems": [{
        "titleAttr": "text=Business Introduction&link=business-introduction"
      }, {
        "titleAttr": "text=Team Introduction&link=team-introduction"
      }, {
        "titleAttr": "text=Contact Us&link=contact-us"
      }],
      "socialMediaItems": [{
        "icon": "fa-brands fa-twitter",
        "href": "https://twitter.com/caregis"
      }, {
        "icon": "fa-brands fa-facebook",
        "href": "https://facebook.com/caregis"
      }, {
        "icon": "fa-brands fa-instagram",
        "href": "https://instagram.com/caregis"
      }, {
        "icon": "fa-brands fa-linkedin",
        "href": "https://linkedin.com/company/caregis"
      }],
      "copyrightText": "© TRUCK TRADE LIMITED 2023, All Rights Reserved",
      key: "XvalhLBv4J4ohMyflGGRY"
    }));
  } catch (error) {}
  if (defaultRouter && defaultRouter !== "/") {
    routerList.unshift({
      path: '/',
      element: /*#__PURE__*/React.createElement(Navigate, {
        to: defaultRouter,
        replace: true
      })
    });
  }
  const router = createBrowserRouter(routerList);
  createRoot(document.getElementById('root')).render( /*#__PURE__*/React.createElement(RouterProvider, {
    router: router
  }));
}
render();