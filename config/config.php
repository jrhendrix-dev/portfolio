<?php
$env = getenv('APP_ENV') ?: 'dev';

$configFile = __DIR__ . "/config.$env.php";

if (!file_exists($configFile)) {
    throw new Exception("Config file for environment '$env' not found.");
}

return require $configFile;
