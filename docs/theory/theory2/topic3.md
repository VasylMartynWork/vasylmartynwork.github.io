---
title: Літерали
---

Літерали представляють незмінні значення (іноді ще називають константами). Літерали можна передавати змінним як значення. Літерали бувають логічними, цілими, речовими, символьними і рядковими. І окремий літерал є ключовим словом null.

## Логічні літерали
Є дві логічні константи - true (істина) і false (брехня):

	Console.WriteLine(true);
	Console.WriteLine(false);

## Цілочисленні літерали
Цілочисленні літерали представляють позитивні та негативні цілі числа, наприклад, 1, 2, 3, 4, -7, -109. Цілочисленні літерали можуть бути виражені в десятковій, шістнадцятковій та двійковій формі.

З цілими числами в десятковій формі все має бути зрозумілим, тому що вони використовуються в повсякденному житті:

	Console.WriteLine(-11);
	Console.WriteLine(5);
	Console.WriteLine(505);

Числа у двійковій формі передуються символами 0b, після яких йде набір з нулів та одиниць:

	Console.WriteLine(0b11); // 3
	Console.WriteLine(0b1011); // 11
	Console.WriteLine(0b100001); // 33

Для запису числа у шістнадцятковій формі застосовуються символи 0x, після яких йде набір символів від 0 до 9 і від A до F, які власне представляють число:

	Console.WriteLine(0x0A); // 10
	Console.WriteLine(0xFF); // 255
	Console.WriteLine(0xA1); // 161

## Речові літерали
Речові літерали є дробовими числами. Цей тип літералів має дві форми. Перша форма - речові числа з фіксованою комою, при якій дробова частина відокремлюється від цілої частини крапкою. Наприклад:

	3.14
	100.001
	-0.38

Також речові літерали можуть визначатися в експоненційній формі MEp, де M - мантиса, E - експонента, яка фактично означає "*10^" (помножити на десять в ступені), а p - порядок. Наприклад:

	Console.WriteLine(3.2e3); // по суті дорівнює 3.2*10^3 = 3200
	Console.WriteLine(1.2E-1); // одно 1.2 * 10^-1 = 0.12

## Символьні літерали
Символьні літерали є одиночними символами. Символи розміщуються у одинарних лапках.

Символьні літерали бувають кількох видів. Насамперед це звичайні символи:

	'2'
	'A'
	'T'

Також ми можемо вивести їх на консоль за допомогою Console.WriteLine:

	Console.WriteLine('2');
	Console.WriteLine('A');
	Console.WriteLine('T');

Спеціальну групу представляють керуючі послідовності. Керуюча послідовність - це символ, перед яким ставиться слеш. І ця послідовність інтерпретується певним чином. Найчастіше використовувані послідовності:

	'\n' - перехід на новий рядок

	'\t' - табуляція

	'\\' - слеш

І якщо компілятор зустріне в тексті послідовність \t, то він сприйматиме цю послідовність не як слеш і букву t, а як табуляцію - тобто довгий відступ.

Також символи можуть визначатися у вигляді шістнадцяткових кодів, також вкладених в одинарні лапки.

Ще один спосіб визначення символів представляє використання шістнадцяткових кодів ASCII. Для цього в одинарних лапках вказуються символи x, після яких йде шістнадцятковий код символу з таблиці ASCII.

Наприклад, літерал "x78" представляє символ "x":

	Console.WriteLine('x78'); // x
	Console.WriteLine('x5A'); // Z

І останній спосіб визначення символьних літералів - це застосування кодів з таблиці символів Unicode. Для цього в одинарних лапках вказуються символи '\u', після яких йде шістнадцятковий код Unicode. Наприклад, код '\u0411' представляє кириличний символ 'Б':


	Console.WriteLine('\u0420'); // Р
	Console.WriteLine('\u0421'); // З

## Рядкові літерали
Рядкові літерали представляють рядки. Рядки полягають у подвійні лапки:

	Console.WriteLine("hello");
	Console.WriteLine("Фива");
	Console.WriteLine("hello word");

Якщо всередині рядка необхідно вивести подвійну лапку, то така внутрішня лапка буде стояти після  зворотного слешу:

	Console.WriteLine("Компанія \"Роги і копита\"");

Також у рядках можна використовувати керуючі послідовності. Наприклад, послідовність '\n' здійснює перехід на новий рядок:

	Console.WriteLine("Привіт \nсвіт");

При виведенні на консоль слово "світ" буде перенесено на новий рядок:

	Привіт
	світ

## null
null представляє посилання, яке не вказує на жодний об'єкт. Тобто, по суті, відсутність значення.