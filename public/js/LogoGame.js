
//storing images in an array with their correct names
var ImagesList = [{image: "http://localhost:8080/task2/public/images/1a.png", name: "at&t"},
                  {image: "http://localhost:8080/task2/public/images/1b.jpg", name: "bmw"},
                  {image: "http://localhost:8080/task2/public/images/1d.jpg", name: "dell"},
                  {image: "http://localhost:8080/task2/public/images/1n.jpg", name: "nike"},
                  {image: "http://localhost:8080/task2/public/images/1p.jpg", name: "playstation"},
                  {image: "http://localhost:8080/task2/public/images/1s.jpg", name: "samsung"},
                  {image: "http://localhost:8080/task2/public/images/1u.jpg", name: "uber"}];
//setting the first image
var counter = 0;
document.getElementById("Image").src = ImagesList[0].image;
document.getElementById("Image").useMap = ImagesList[0].name;


function check()
{
    //gaining the input
    var Score = parseInt(document.getElementById("ScoreCount").innerHTML);
    var UserAns = (document.getElementById("user-try").value).toLowerCase();;
    var CorrectAns = document.getElementById("Image").useMap
    if (UserAns == CorrectAns) //checking input
    {
      document.getElementById("user-try").style.color = "green";
      Score += 5;
      counter++;
      if (counter > 6) //checking to re-loop in image list
      {
        counter = 0;
      }
      //setting the next image in image list
      document.getElementById("Image").src = ImagesList[counter].image;
      document.getElementById("Image").useMap = ImagesList[counter].name;
    }
    else
    {
      document.getElementById("user-try").style.color = "red";
      Score -= 2;
    }

    //modifying score
    document.getElementById("ScoreCount").innerHTML = Score;
    if (document.getElementById("ScoreCount").innerHTML <= 0)
    {
      document.getElementById("ScoreCount").innerHTML = "0";
    }
}
