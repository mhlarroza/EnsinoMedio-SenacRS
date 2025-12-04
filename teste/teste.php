<?php
echo "My first PHP script!";
?>

<?php
$txt = "PHP";
echo "I love $txt!";
?>

<!DOCTYPE html>
<html>
<body>

<h1> My first PHP page </h1>

<?php
echo "Hello World! <br>";
?>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World! <br>";
echo "Hello World! <br>";
EcHo "Hello World! <br>";
?>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
// echo "My house is " . $COLOR . "<br>";
// echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>

<?php
// comentario
# comentario
/* comentario */
?>

<?php
$x=5;
$y="John";

echo "My name is $y and my favorite number is $x. <br>"
?>

<?php
$txt = "W3Schools.com";
echo "I love $txt! <br>";
?>

<?php
$x = 5;
$y = 4;
echo $x + $y;
echo "<br>";
?>

<?php
$x = 5;
var_dump($x);
echo "<br>";
?>

<?php
$x = $y = $z = "Fruit";
?>

<?php
$x = 5;

function myTest() {
    echo "<p> Variable x inside function is: $x</p>";
}

myTest();
echo "<p> Variable x outside function is: $x</p>";
?>

<?php
function myTest2() {
    $x = 5;
    echo "<p> Variable x inside function is: $x</p>";
}

myTest2();
echo "<p> Variable x outside function is: $x</p>";
?>

<?php
$x = 5;
$y = 10;

function myTest4() {
    global $x, $y;
    $y = $x + $y;
}

myTest4();
echo $y;
echo "<br>";
?>

<?php
$x = 5;
$y = 10;

function myTest5() {
    $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest5();
echo $y;
?>

<?php
function myTest6() {
    static $x = 0;
    echo $x;
    $x++;
}

echo "<br>";
myTest6();
echo "<br>";
myTest6();
echo "<br>";
myTest6();
echo "<br>";
?>

<?php
echo "Hello <br>";
echo ("Hello");
?>

<?php
$txt1 = "Learn PHP";

echo "<h2>$txt1</h2>";
?>

<?php
echo strlen("Hello world!");
echo "<br>";
echo str_word_count("Hello world!");
echo "<br>";
echo strpos("Hello world!", "world");
echo "<br>";
?>

<?php
echo "<br>";
$x = "Hello World!";
echo strtoupper($x);
echo "<br>";
?>

<?php
$x = "Hello World!";
$y = explode(" ", $x);

print_r($y);
?>

<?php
echo "<br>";
$x = "Hello";
$y = "World";
$z = $x . $y;
echo $z;
echo "<br>";

// ou

$a = "Hello";
$b = "World";
$c = "$a $b";
echo $c;
?>

<?php
echo "<br>";
$x = "Hello World!";
echo substr($x, 6, 5);
?>

<?php
echo "<br>";
$x = "We are so-called \"Vikings\" from the north.";
echo $x;
?>

<?php
echo "<br>";
$a = 5; //int
$b = 5.34; //float
$c = "25"; //string

var_dump($a);
var_dump($b);
var_dump($c);

echo "<br>";
$x = 5985;
var_dump(is_int($x));

$y = 59.85;
var_dump(is_int($x));

echo "<br>";
$z = 10.365;
var_dump(is_float($z));

echo "<br>";
$w = 1.9e411;
var_dump(is_infinite($w));

$q = 1000;
var_dump(is_finite($q));

echo "<br>";
$r = acos(8);
var_dump($r);

echo "<br>";
$t = 5985;
var_dump(is_numeric($t));

$u = "5985";
var_dump(is_numeric($u));

$p = "59.85" + 100;
var_dump(is_numeric($p));

$v = "Hello";
var_dump(is_numeric($v));

echo "<br>";
$s = 23465.768;
$int_cast = (int)$s;
echo $int_cast;

echo "<br>";

$m = "23465.768";
$int_cast = (int)$m;
echo $int_cast;
?>

<?php
echo "<br>";
$a = 5;
$a = (string) $a;
var_dump($a);

echo "<br>";
$b = 5.35;
$b = (int) $b; // mesma coisa pra float e bool
var_dump($b);

echo "<br>";
$c = "Hello";
$c = (array) $c;
var_dump($c);
?>

<?php
echo "<br>";
class Car {
    public $color;
    public $model;
    public function __construct($color, $model) {
        $this ->color = $color;
        $this ->model = $model;
    }
    public function message() {
        return "My car is a " . $this ->color . " " . $this->model . "!";
    }
}

$myCar = new Car("red", "Volvo");

$myCar = (array) $myCar;
var_dump($myCar);
?>

<?php
echo "<br>";
echo(pi());

echo "<br>";
echo(sqrt(64));
?>

<?php
echo "<br>";
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;

echo "<br>";
const MYCAR = "Volvo";
echo MYCAR;

echo "<br>";
define("cars", [
    "Alfa Romeo",
    "BMW",
    "Toyota"
]);
echo cars[0];

echo "<br>";
function myTest01() {
    echo GREETING;
}
myTest01();
echo "<br>";
?>

<?php
$favcolor = "red";

switch ($favcolor) {
    case "red":
        echo "Your favorite color is red!";
        break;
    case "blue":
        echo "Your favorite color is blue!";
        break;
    case "green":
        echo "Your favorite color is green!";
        break;
    default:
    echo "Your favorite color is neither red, blue, nor green!";
}
echo "<br>";
?>

<?php
$i = 1;
while ($i < 6) {
    echo $i;
    $i++;
}
echo "<br>";
?>

<?php
$i =1;
while ($i < 6) {
    if ($i == 3) break;
    echo $i;
    $i++;
}
echo "<br>";
?>

<?php
$i = 0;
while ($i <6) {
    $i++;
    if ($i == 3) continue;
    echo $i;
}
echo "<br>";
?>

<?php
$i = 1;
while ($i < 6):
    echo $i;
    $i++;
endwhile;
echo "<br>";
?>

<?php
$i = 1;

do {
    if ($i == 3) break;
    echo $i;
    $i++;
} while ($i < 6);
echo "<br>";
?>

<?php
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
}
echo "<br>";
?>

<?php
for ($x = 0; $x <= 10; $x++) {
    if ($x == 3) break;
    echo "The number is: $x <br>";
}
echo "<br>";
?>

<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
    echo "$x <br>";
}
echo "<br>";
?>

<?php
$members = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach ($members as $x => $y) {
    echo "$x : $y <br>";
}
echo "<br>";
?>

<?php
class Car2 {
    public $color;
    public $model;
    public function __construct($color, $model) {
        $this->color = $color;
        $this->model = $model;
    }
}

$myCar = new Car ("red", "Volvo");

foreach ($myCar as $x => $y) {
    echo "$x: $y <br>";
}
?>

<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
    if ($x == "blue") $x = "pink";
}

var_dump($colors);
echo "<br>";
?>

<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as &$x) {
    if ($x == "blue") $x = "pink";
}

var_dump($colors);
echo "<br>";
?>

<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) :
    echo "$x <br>";
endforeach;
?>