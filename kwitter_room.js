const firebaseConfig = {
      apiKey: "AIzaSyAEUNRHfS0li3IowS6oXXRuEm1UYW1x_NY",
      authDomain: "kwitter-fee04.firebaseapp.com",
      databaseURL: "https://kwitter-fee04-default-rtdb.firebaseio.com",
      projectId: "kwitter-fee04",
      storageBucket: "kwitter-fee04.appspot.com",
      messagingSenderId: "571085188344",
      appId: "1:571085188344:web:ca369ac5ff579048c09f0d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome " + user_name + ":)";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name" + "-" + Room_names);

                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}

getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: " adding a room name "
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}