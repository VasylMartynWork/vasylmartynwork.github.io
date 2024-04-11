import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as i}from"./app-CYOwO63N.js";const o={},p=i(`<p>В C# використовується більшість операцій, які застосовуються і в інших мовах програмування. Операції представляють певні дії над операндами – учасниками операції. Операндом може виступати як змінна так і будь-яке значення (наприклад, число). Операції бувають унарними (виконуються над одним операндом), бінарними – над двома операндами та тернарними – виконуються над трьома операндами. Розглянемо всі види операцій.</p><p>Бінарні арифметичні операції:</p><ul><li><p>+<br> Операція додавання двох чисел:</p><pre><code>  int x = 10;
  int z = x + 12; // 22
</code></pre></li><li><p>-<br> Операція віднімання двох чисел:</p><pre><code>  int x = 10;
  int z = x – 6; // 4
</code></pre></li><li><p>*<br> Операція множення двох чисел:</p><pre><code>  int x = 10;
  int z = x * 5; // 50
</code></pre></li><li><p>/<br> Операція поділу двох чисел:</p><pre><code>  int x = 10;
  int z = x/5; // 2
   
  double a = 10;
  double b = 3;
  double c = a/b; // 3.33333333
</code></pre></li></ul><p>При розподілі варто враховувати, що якщо обидва операнда представляють цілі числа, то результат буде округлятися до цілого числа:</p><pre><code>double z = 10/4; //Результат дорівнює 2
</code></pre><p>Незважаючи на те, що результат операції в результаті поміщається в змінну типу double, яка дозволяє зберегти дробову частину, але в самій операції беруть участь два літерали, які за замовчуванням розглядаються як об&#39;єкти int, тобто цілі числа, і результат теж буде цілий.</p><p>Для виходу з цієї ситуації необхідно визначати літерали або змінні, що беруть участь в операції саме як типи double або float:</p><pre><code>double z = 10.0/4.0; //Результат дорівнює 2.5
</code></pre><ul><li><p>%<br> Операція отримання залишку від цілісного поділу двох чисел:</p><pre><code>  double x = 10.0;
  double z = x%4.0; //Результат дорівнює 2
</code></pre></li></ul><p>Також є ряд унарних операцій, у яких бере участь один операнд:</p><ul><li><p>++<br> Операція інкременту<br> Інкремент буває префіксним: ++x - спочатку значення змінної x збільшується на 1, а потім її значення повертається як результат операції.<br> І також існує постфіксний інкремент: x++ - спочатку значення змінної x повертається як результат операції, а потім до нього додається 1.</p><pre><code>  int x1 = 5;
  int z1 = ++x1; // z1 = 6; x1=6
  Console.WriteLine($&quot;{x1} - {z1}&quot;);
   
  int x2 = 5;
  int z2 = x2++; // z2 = 5; x2=6
  Console.WriteLine($&quot;{x2} - {z2}&quot;);
</code></pre></li><li><p>--<br> Операція декременту чи зменшення значення на одиницю. Також існує префіксна форма декременту (--x) та постфіксна (x--).</p><pre><code>  int x1 = 5;
  int z1 = -x1; // z1 = 4; x1=4
  Console.WriteLine($&quot;{x1} - {z1}&quot;);
   
  int x2 = 5;
  int z2 = x2--; // z2 = 5; x2=4
  Console.WriteLine($&quot;{x2} - {z2}&quot;);
</code></pre></li></ul><p>При виконанні відразу кількох арифметичних операцій слід враховувати порядок виконання. Пріоритет операцій від найвищого до нижчого:</p><ol><li><p>Інкремент, декремент</p></li><li><p>Множення, ділення, отримання залишку</p></li><li><p>Додавання, віднімання</p></li></ol><p>Для зміни порядку проходження операцій застосовуються дужки.</p><p>Розглянемо набір операцій:</p><pre><code>int a = 3;
int b = 5;
int c = 40;
int d = c--b*a; // a = 3 b = 5 c = 39 d = 25
Console.WriteLine($&quot;a={a} b={b} c={c} d={d}&quot;);
</code></pre><p>Тут ми маємо справу з трьома операціями: декремент, віднімання та множення. Спочатку виконується декремент змінної c, потім множення b * a, і в кінці віднімання. Тобто фактично набір операцій виглядав так:</p><pre><code>int d = (c--)-(b * a);
</code></pre><p>Але за допомогою дужок ми могли б змінити порядок операцій, наприклад, так:</p><pre><code>int a = 3;
int b = 5;
int c = 40;
int d = (c-(--b))*a; // a = 3 b = 4 c = 40 d = 108
Console.WriteLine($&quot;a={a} b={b} c={c} d={d}&quot;);
</code></pre><h2 id="асоціативність-операторів" tabindex="-1"><a class="header-anchor" href="#асоціативність-операторів"><span>Асоціативність операторів</span></a></h2><p>Як вище було зазначено, операції множення та розподілу мають один і той же пріоритет, але який тоді результат буде у виразі:</p><pre><code>int x = 10/5*2;
</code></pre><p>Чи варто нам трактувати цей вираз як (10/5)*2 чи як 10/(5*2)? Адже, залежно від трактування, ми отримаємо різні результати.</p><p>Коли операції мають той самий пріоритет, порядок обчислення визначається асоціативністю операторів. Залежно від асоціативності є два типи операторів:</p><ul><li><p>Лівоасоціативні оператори, які виконуються зліва направо</p></li><li><p>Правоасоціативні оператори, які виконуються справа наліво</p></li></ul><p>Усі арифметичні оператори є лівоасоціативними, тобто виконуються зліва направо. Тому вираз 10/5*2 необхідно трактувати як (10/5)*2, тобто результатом буде 4.</p>`,27),l=[p];function r(c,d){return n(),t("div",null,l)}const x=e(o,[["render",r],["__file","topic6.html.vue"]]),b=JSON.parse('{"path":"/theory/theory2/topic6.html","title":"Арифметичні операції","lang":"en-US","frontmatter":{"title":"Арифметичні операції"},"headers":[{"level":2,"title":"Асоціативність операторів","slug":"асоціативність-операторів","link":"#асоціативність-операторів","children":[]}],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":2.03,"words":608},"filePathRelative":"theory/theory2/topic6.md","localizedDate":"April 8, 2024"}');export{x as comp,b as data};
