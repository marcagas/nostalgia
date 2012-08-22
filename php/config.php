<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/* LIST OF HTTP STATUS */
/* Request is Ok - fetch or get is good */
define('HTTP_OK', 200);
/* Created - post or successfully created */
define('HTTP_CREATED', 201);
/* General Bad Request - fail request or missing arguments */
define('HTTP_BAD_REQUEST', 400);
/* Forbidden */
define('HTTP_FORBIDDEN', 403);
/* Not Found - record/resource not found */
define('HTTP_NOT_FOUND', 404);
/* Precondition Failed - fail in condition, invalid post arg format, fail in validation */
define('HTTP_FAIL_PRECON', 412);

define('DB_CONN_ERROR','DB Connect Error');
define('DB_SELECT_ERROR','DB Select Error');
define('DB_INSERT_ERROR', 'DB Insert Error');
define('DB_UPDATE_ERROR', 'DB Update Error');
define('DB_DELETE_ERROR', 'DB Delete Error');

/* LOG CODE */
define('ERROR_LOG', 1);
define('INFO_LOG', 2);

?>
