<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/test', function(){
    return response()->json([
        'user' => [
            'first_name' => 'Narendra',
            'last_name'  => 'Maurya'
        ]
    ]);
});

/*

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@signup');
  
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

*/

Route::group(['middleware' => 'auth:api'], function() {
    Route::resource('products', 'ProductsController');
});