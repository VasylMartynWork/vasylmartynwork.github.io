---
title: Повернення значення та оператор return
---

Метод може повертати значення будь-якого результату. Методи з типом void не повертають жодного значення. Вони просто виконують деякі дії.

Але методи можуть повертати деяке значення. Для цього застосовується оператор return, після якого йде значення, що повертається:

	return значення, що повертається;

Наприклад, визначимо метод, який повертає значення типу string:

	string GetMessage()
	{
	     return "Hello";
	}

Метод GetMessage має тип string, отже він повинен повернути рядок. Тому в тілі методу використовується оператор return, після якого вказаний рядок, що повертається.

При цьому методи, які як тип, що повертається, мають будь-який тип, крім void, обов'язково повинні використовувати оператор return для повернення значення. Наприклад, таке визначення методу некоректне:

	string GetMessage()
	{
	     Console.WriteLine("Hello");
	}

Також між типом методу, що повертається, і значенням, що повертається після оператора return повинна бути відповідність. Наприклад, в наступному випадку тип, що повертається - string, але метод повертає число (тип int), тому таке визначення методу некоректно:

	string GetMessage()
	{
	     return 3; // Помилка! Метод повинен повертати рядок, а не число
	}

Результати методів, які повертають значення, ми можемо присвоїти змінним або використовувати іншим чином у програмі:

	string GetMessage()
	{
	     return "Hello";
	}
 
	string message = GetMessage(); // Отримуємо результат методу в змінну message
	Console.WriteLine(message); // Hello

Метод GetMessage() повертає значення типу string. Тому ми можемо надати це значення будь-якій змінній типу string: string message = GetMessage();

Або навіть передати значення параметру іншого методу:

	string GetMessage()
	{
	     return "Hello";
	}
	void PrintMessage(string message)
	{
	     Console.WriteLine(message);
	}
	PrintMessage(GetMessage());

У виклику PrintMessage(GetMessage()) спочатку викликається метод GetMessage() і його результат передається параметру message методу PrintMessage

Після оператора return можна також вказувати складні вирази або виклики інших методів, які повертають певний результат. Наприклад, визначимо метод, який повертає суму чисел:

	int Sum(int x, int y)
	{
	     return x + y;
	}
	 
	int result = Sum (10, 15); // 25
	Console.WriteLine(result); // 25
	 
	Console.WriteLine(Sum(5, 6)); // 11

Метод Sum() має тип int, отже він повинен повернути значення типу int - ціле число. Тому в тілі методу використовується оператор return, після якого вказано число, що повертається (у даному випадку результат суми змінних x і y).

## Скорочена версія методів із результатом

Також ми можемо скорочувати методи, що повертають значення:

	string GetMessage()
	{
	     return "hello";
	}
	
аналогічний наступному методу:

	string GetMessage() => "hello";

А метод

	int Sum(int x, int y)
	{
	     return x + y;
	}

аналогічний наступному методу:

	int Sum(int x, int y) => x + y;

## Вихід із методу

Оператор return як повертає значення, так і здійснює вихід із методу. Тому він має визначатися після решти інструкцій. Наприклад:

	string GetHello()
	{
	     return "Hello";
	     Console.WriteLine("After return");
	}

З погляду синтаксису даний метод коректний, проте його інструкція Console.WriteLine("After return") не має сенсу - вона ніколи не виконається, так як до її виконання оператор return поверне значення і здійснить вихід із методу.

Однак ми можемо використовувати оператор return і в методах з типом void. У цьому випадку після оператора return не ставиться ніякого значення, що повертається (адже метод нічого не повертає). Типова ситуація - залежно від визначених умов зробити вихід із методу:

	void PrintPerson(string name, int age)
	{
	     if(age > 120 || age < 1)
	     {
	         Console.WriteLine("Неприпустимий вік");
	         return;
	     }
	     Console.WriteLine($"Ім'я: {name} Вік: {age}");
	}
	 
	PrintPerson("Tom", 37); // Ім'я: Tom Вік: 37
	PrintPerson("Dunkan", 1234); // Неприпустимий вік

Тут метод PrintPerson() як параметри приймає ім'я та вік користувача. Однак у методі спочатку ми перевіряємо, чи вік відповідає деякому діапазону (менше 120 і більше 0). Якщо вік знаходиться поза цим діапазоном, то виводимо повідомлення про неприпустимий вік і за допомогою оператора return виходимо з методу. Після цього метод закінчує свою роботу.

Однак якщо вік коректний, виводимо інформацію про користувача на консоль. Консольний вивід:

	Ім'я: Tom Вік: 37
	Неприпустимий вік