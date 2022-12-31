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
            "https://2448361416.tapecontent.net/radosgw/7X9kKY8gG6hAgbg/gwU0zxxqtpqP-C_Hh5d_AMFRBjevAL67cav5DquCR-wOy8I78fTh8XujOS4LfTKcVGnpd0QN0eBml6dtK8MOzhb0MJF6OcIxixmgDQn7xpmHVXF6sowBx_I2XaIkpBKh_dQ6njPlOkVaaST9oI2HvAoGTrjaGgSoz9i7S6taVL2I6OzptoIKEgzlWXrvLHutEEszQJEQDpF90nnrga_HJ7UuiCz0rmQ4nprIRhY_DKf4iz9matmRw3AEjCsFDMJnIbeDU54z4BRu9ZLfZO3pInGYdqhQozkhbfLtmvJeJLmGHtavSY5TkkKCO9c/One%2BPiece%2BFilm%2BRed%2B-%2BVOSTFR.mp4?stream=1",
          label: "720p"
        },
        {
          file:
            "https://m103.syncusercontent.com/mfs-60:74f830b6798561e212b29389fa3727ec=============================/p/2.mp4?allowdd=0&datakey=QUR/XZHCA0iIjnS/SG3XtO5Dg2zOKgWMD63p+nKILx+r7zjOPDHSKk4jewQLVn0lvJH+EGjx2Yx67vp9Wz9LuzK3isLjz8A3O33Iti70SR/Q2zgrCFM9vPrBWtXh4dZMPc7RbXJT4PWVL8nXGSpUmof2fz+03ZBQtsslttwBXgTt/cmQCwrLXSScdKeejGYqx7oZP15t/03sj3U8vRGNJC7e57JJcB4n2yCazDKz77mvS5XyMsZzK1iNDoOMUtpbseXRpBumTftcE1IvnB8EoKrgdWDMakhYS1n44+BqJ3caplvSkzUgrq237LWuLwZtgddefGA4s7+Co7hVzGp4/g&engine=ln-2.3.7.3&errurl=Ak3APrkajIY0pI4tQIdNPcmEoU53sVibSQ5qC3ljRGiFGWGURkyEEDlwsEiQEUn+8/zRE4PnpjZlmDDaKzKblmw11dilUqCMBUye3r1MF1SyGNUazlUSMHnbYDeRlcyqK+cDvcMtxUwyhSIBgw3nYbl7e8sEdPngIpVwcNp05WkbtNCR3vmkwCVxJamXTpCL/dtQFU/5vkoMv7L9BmNSwil8ROzurMi/0D9JqinQaDPamwTL/tAYTnmm6ce0QHSpA44+bGlC5D87YI2tfoAY+8fiPRtc4rEW/8gikMEIPUd/AN8l9Uo3uEhfG8QZm7izNbm/c7XA31o47TOm1Juisg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iMi5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnMi5tcDQ7&ipaddress=1458994159&linkcachekey=1039cc5e0&linkoid=1542710012&mode=101&sharelink_id=8007941330012&timestamp=1672514588488&uagent=1d9728cd21b3c3ecf5078376d4b371f2c858e9ed&signature=ff0fc22a19676408d6308ca60d2a045739355a6d&cachekey=60:74f830b6798561e212b29389fa3727ec=============================",
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
          file: "https://cdn.jwplayer.com/strips/iYfADWO1-120.vtt",
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
