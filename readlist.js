document.getElementById("test1").innerHTML = readingList.map(
  (user) =>
    `<div class="readlists-main-container">
      <div class="readlists-date">${user.date}</div>
      <div class="readlists-desc">
        <p>
          ${user.desc}
        </p>
      </div>
      <div class="readlists-pdf">[pdf]</div>
    </div>
    <hr class="readlist-break" />`
);

var readingList = [
  {
    date: "4/26/2016",
    desc: "Ciregan, Dan, Ueli Meier, and Jürgen Schmidhuber. Multi-ColumnDeep Neural Networks for Image Classification. IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2012.",
  },
];
