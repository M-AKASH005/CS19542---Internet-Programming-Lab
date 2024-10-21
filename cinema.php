<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";  // Default password for XAMPP
$dbname = "quiz_website";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the input data
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data was received correctly
if (!$data) {
    die("Error: Unable to decode the JSON data.");
}

// Extract data
$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$score = $data['score'] ?? null;

// Validate that none of the values are null
if (!$name || !$email || $score === null) {
    die("Error: Name, email, or score missing.");
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO cinema (name, email, score) VALUES (?, ?, ?)");

// Check if the prepare was successful
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

// Bind parameters and check for errors
if (!$stmt->bind_param("ssi", $name, $email, $score)) {
    die("Binding parameters failed: " . $stmt->error);
}

// Execute the query and check if successful
if ($stmt->execute()) {
    echo "Score saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
