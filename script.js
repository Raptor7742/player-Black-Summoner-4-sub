const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Black Summoner - épisode 4 VOSTFR",
      description: "Vous regardez",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30c52b8f481041c3e629bbf67c90811e.jpe",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m205.syncusercontent.com/mfs-60:b87b5cae99bd53cec8428b5fe32d085c=============================/p/Black%20Summoner%204.mp4?allowdd=0&datakey=rzvZjVGGcHpfgcWTv+tnqh7lnMb6/sVyomGTTQU4MrATAnTn8qLaGoPkxFor/BVY6C+3tA+3vTcqeFet9nBT3dP7xtsifK8Vkjad/xHNW7wP1FEE1OAjJezxUNL8mc96i4rqme5og3LzqI1Tmc7f3ZmOXwsPyZPirzeqQbSHunfTec0UqFRwXE18XQhX7vHJ4r6tSI/42//AtwTabd6K+8tE0lH2UsZt3pB3ocP3Ps9zXrHmEZ1VPeISiLMZZ8IAjTTXasJeDpDyC4aeOBCjmy6CVdwjUZZRXP51XiGUvwATpiNnwx0rc/2bcdfIMQmtfZGwqCsakGL9b+pjp2ndTg&engine=ln-2.3.7.3&errurl=h8HY2lObED7TsJdreGQME79tAG34OG82bgTssaPF+2Lc/dM6FX+4wjDCEp8QMAmISo6iUww+OIZ6eSWA926SAYweK5reEzyZyRL7cX8zI5ktrO2VxYUJ3DBynnQFmU0pn4jOqVVpgVCzLrBSS0rByuvLG2Mgymv3c9/bo36OKWzOJlMAwUC+iBFcHvokptA92gZfM+7FgboMd3ib0LHBuVnzyn2gcPI3AY1uL0aR6Vy1pQ6b68LAN5aMWN0YW9C2Kg429mEIBL+daunUgHhPaOTFYzorJ4hrJsBT0Ok1zLUJg3iBAQS4fSWJYRIchmq0djrjDlbIdrX51M8pVv+HNA==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQmxhY2slMjBTdW1tb25lciUyMDQubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ0JsYWNrJTIwU3VtbW9uZXIlMjA0Lm1wNDs&ipaddress=1458994159&linkcachekey=36f9d23c0&linkoid=1546180013&mode=101&sharelink_id=8020804040013&timestamp=1672576774196&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=71b532ec7d27f246baa0f3b291f2e3a42fb63d71&cachekey=60:b87b5cae99bd53cec8428b5fe32d085c=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
