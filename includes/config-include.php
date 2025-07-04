<?php
// 1. Set default environment to 'prod'
$env = 'prod';

// 2. If running on localhost OR URL contains '/test-live', switch to 'dev'
if (
    $_SERVER['HTTP_HOST'] === 'localhost' ||
    strpos($_SERVER['REQUEST_URI'], '/test-live') !== false
) {
    $env = 'dev';
}

// 3. Store the environment in a variable
putenv("APP_ENV=$env");

// 4. Load the config file for the current environment
$env = getenv('APP_ENV') ?: 'prod';
$configPath = __DIR__ . "/../config/config.$env.php";

if (!file_exists($configPath)) {
    die("Configuration file for environment '$env' not found.");
}

$config = require $configPath;

$GLOBALS['config'] = $config;

// 5. Optional: Turn off error reporting in production
if (!$config['debug']) {
    ini_set('display_errors', 0);
    error_reporting(0);
}
