<?php
// Database connection settings
$servername = "localhost"; // Your database server
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "quiz_website"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch scores from the cinema table
$sql = "SELECT id, name, email, score FROM cinema"; // Adjust the table name and fields as necessary
$result = $conn->query($sql);

// Check if there are results
if ($result && $result->num_rows > 0) {
    // Output data of each row
    echo '<table>';
    echo '<tr><th>ID</th><th>Name</th><th>Email</th><th>Score</th><th>Actions</th></tr>'; // Table headers

    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . htmlspecialchars($row['id']) . '</td>';
        echo '<td>' . htmlspecialchars($row['name']) . '</td>';
        echo '<td>' . htmlspecialchars($row['email']) . '</td>';
        echo '<td>' . htmlspecialchars($row['score']) . '</td>';
        echo '<td>';
        echo '<a href="edit_score.php?id=' . htmlspecialchars($row['id']) . '">Edit</a> | ';
        echo '<a href="delete_score.php?id=' . htmlspecialchars($row['id']) . '" onclick="return confirm(\'Are you sure?\');">Delete</a>';
        echo '</td>';
        echo '</tr>'; // Close row
    }
    echo '</table>'; // Close table
} else {
    echo '<p>No scores found.</p>'; // Message if no scores
}

// Close the connection
$conn->close();
?>
