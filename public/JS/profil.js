//fetch user INfo
//to do style user info

fetch("/user")
  .then((response) => response.json())
  .then((user) => {
    document.getElementById("user-info").innerHTML = `
                    <h2>User Information</h2>
                    <p>first name: ${user.firstName}</p>
                    <p>last name: ${user.lastName}</p>
                    <p>Email: ${user.email}</p>
                    <!-- Weitere Informationen je nach Bedarf -->
                `;
    console.log(document.getElementById("user-info").innerHTML);
  })
  .catch((error) =>
    console.error("Fehler beim Abrufen der Benutzerinfo:", error)
  );
