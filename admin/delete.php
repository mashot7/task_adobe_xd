<?php
require_once 'core/init.php';

$user = new User();

if (!$user->isLoggedIn()) {
 Redirect::to('/');
 die();
}

if (Input::exist('get')) {
  $request = new Request();
  $name = $request->getName(Input::get('id'))->first()->name;
  $request->delete(Input::get('id'));
  Session::flash('delete', 'Request of ' . $name . ' removed.');
  Redirect::to('admin/index.php');
}
