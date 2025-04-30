<?php
header('Content-Type: application/json');

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate & extract fields
$fields = ['reference', 'cardNumber', 'cardName', 'month', 'year', 'cvv', 'amount'];
$missing = array_filter($fields, fn($field) => empty($data[$field]));

if ($missing) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields", "missing" => array_values($missing)]);
    exit;
}

// For demonstration, just return the data
echo json_encode([
    "status" => "success",
    "message" => "Payment processed successfully (simulated).",
    "submittedData" => $data
]);
?>
