<?php
require_once 'core/init.php';

$user = new User();

if (!$user->isLoggedIn()) {
	Redirect::to('index.php');
}

$request = new Request();

require_once 'header.php';
require_once 'navbar.php';
?>

  <div class="container">
    <table>
      <thead>
      <tr>
        <th>Имя</th>
        <th>Email</th>
        <th>Телефон</th>
      </tr>
      </thead>

      <tbody>
      <?php

      $results = $request->showRequests()->results();
      foreach ($results as $result) {
        echo '
        <tr>
          <td>' . $result->name . '</td>
          <td>' . $result->email . '</td>
          <td>' . $result->telephone . '</td>
        </tr>
        ';
      }
      ?>

      </tbody>
    </table>

  </div>
<?php
require_once 'footer.php';