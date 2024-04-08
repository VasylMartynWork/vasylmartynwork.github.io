---
title: Змінні та константи
---

Для зберігання даних у програмі використовуються змінні. Змінна являє саме іменовану частину пам'яті, в якій зберігається значення певного типу. Змінна має тип, ім'я та значення. Тип визначає, якого роду інформацію може зберігати змінна.

Перед використанням будь-яку змінну слід визначити. Синтаксис визначення змінної виглядає так:

	тип ім'я_змінної;

Спочатку йде тип змінної, потім її ім'я. Іменем змінної може виступати будь-яка довільна назва, яка задовольняє наступним вимогам:

- Ім'я може містити будь-які цифри, букви та символ підкреслення, при цьому перший символ в імені має бути буквою або символом підкреслення;

- В імені не повинно бути знаків пунктуації та пропусків;

- Ім'я не може бути ключовим словом мови C#. Таких слів не так багато, і під час роботи у Visual Studio середовище розробки підсвічує ключові слова синім кольором.

Хоча ім'я зміною може бути будь-яким, але слід давати змінним описові імена, які будуть говорити про їхнє призначення.

Наприклад, визначимо найпростішу змінну:

	string name;

У цьому випадку визначено змінну name, яка має тип string. Тобто змінна представляє рядок. Оскільки визначення змінної є інструкцією, то після нього ставиться крапка з комою.

При цьому слід враховувати, що C# є регістрозалежною мовою, тому наступні два визначення змінних будуть представляти дві різні змінні:

	string name;
	string Name;

Після визначення змінної можна надати деяке значення:

	string name;
	name = "Tom";

Оскільки змінна name представляє тип string, тобто рядок, ми можемо присвоїти їй рядок в подвійних лапках. Причому змінній можна присвоїти лише те значення, яке відповідає її типу.

Надалі за допомогою імені змінної ми зможемо звертатися до тієї області пам'яті, де зберігається її значення.

Також ми можемо відразу при визначенні присвоїти змінній значення. Цей прийом називається ініціалізацією:

	string name = "Tom";

Відмінною рисою змінних є те, що у програмі можна багаторазово змінювати їх значення. Наприклад, створимо невелику програму, в якій визначимо змінну, змінимо її значення та виведемо його на консоль:

	string name = "Tom";  
  
	Console.WriteLine(name);    // Tom
  
	name = "Bob";       
	Console.WriteLine(name);    // Bob

Консольний вивід програми:

	Tom
	Bob

## Константи
Відмінною особливістю змінних є те, що ми можемо змінити їхнє значення в процесі роботи програми. Але, крім того, у C# є константи. Константа має бути обов'язково ініціалізована при визначенні, і після визначення значення константи не може бути змінено.

Константи призначені для опису таких значень, які не повинні змінюватись у програмі. Для визначення констант використовується ключове слово const, яке вказується перед типом константи:

	const string NAME = "Tom"; // Визначаємо константу

Так, у даному випадку визначено константу NAME, яка зберігає рядок "Tom". Нерідко для назви констант використовується верхній регістр, але це не більше ніж умовність.

При використанні констант слід пам'ятати, що оголосити ми їх можемо лише один раз і що на момент компіляції вони повинні бути визначені. Так, у наступному випадку ми отримаємо помилку, тому що константі не надано початкове значення:

	const string NAME; //! Помилка - константа NAME не ініціалізована

Крім того, ми її не зможемо змінити у процесі роботи програми:

	const string NAME = "Tom"; // Визначаємо константу
	NAME = "Bob"; // !Помилка - константі не можна змінити значення

Таким чином, якщо нам треба зберігати у програмі деякі дані, але їх не слід змінити, вони визначаються у вигляді констант. Якщо їх можна змінювати, всі вони визначаються у вигляді змінних.