<?php

$errors = [];
$data = [];

if (empty($_POST['inputName'])) {
    $errors['inputName'] = 'Name is required.';
}

if (empty($_POST['inputEmail'])) {
    $errors['inputEmail'] = 'Email is required.';
}

if (empty($_POST['inputMessage'])) {
    $errors['inputMessage'] = 'Message cannot be blank.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);