//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCwzO6Q-8T66hNtSGtlfc-3ngsVTc7jQAk",
      authDomain: "kwiter-ae038.firebaseapp.com",
      projectId: "kwiter-ae038",
      storageBucket: "kwiter-ae038.appspot.com",
      messagingSenderId: "437612404959",
      appId: "1:437612404959:web:dc33a49d7e938c8b3c096a",
      databaseURL: "https://kwiter-ae038-default-rtdb.firebaseio.com/",
      measurementId: "G-VNXQ9ZW228",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username")
roomname=localStorage.getItem("room_name")
function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      })

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names)
                  row="<div class='room_name'id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
                  document.getElementById("output").innerHTML=row


                  //End code
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("rooom_name")
      window.location="index.html"
}