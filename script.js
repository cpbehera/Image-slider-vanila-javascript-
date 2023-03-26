var imageArr = [];
      imageArr[0] = "./Image/1.jpg";
      imageArr[1] = "./Image/2.jpg";
      imageArr[2] = "./Image/3.jpg";
      i = 0;

      let image = document.getElementById("img-slider");

      setInterval("nxtImg()",3000);

      function nxtImg() {
        if (i < imageArr.length - 1) {
          i++;
        } else {
          i = 0;
        }
        image.src = imageArr[i];
      }
      function prevImg() {
        if (i > 0) {
          i--;
        } else {
          i = imageArr.length-1;
        }
        image.src = imageArr[i];
      }