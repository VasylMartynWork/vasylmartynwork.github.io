import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as p}from"./app-CYOwO63N.js";const o={},n=p(`<p>Операції присвоєння встановлюють значення. В операціях присвоєння беруть участь два операнди, причому лівий операнд може представляти тільки модифікований іменований вираз, наприклад, змінну.</p><p>Як і в багатьох інших мовах програмування, в C# є базова операція присвоєння =, яка присвоює значення правого операнда лівому операнду:</p><pre><code>int number = 23;
</code></pre><p>Тут змінній number присвоюється число 23. Змінна number представляє лівий операнд, якому присвоюється значення правого операнда, тобто 23.</p><p>Також можна виконувати множинне присвоєння відразу кількох змінним одночасно:</p><pre><code>int a, b, c;
a = b = c = 34;
</code></pre><p>Варто зазначити, що операції присвоєння мають низький пріоритет. І спочатку обчислюватиметься значення правого операнда, а тільки потім буде присвоєння цього значення лівому операнду. Наприклад:</p><pre><code>int a, b, c;
a = b = c = 34*2/4; // 17
</code></pre><p>Спочатку обчислюватиметься вираз 34*2/4, потім отримане значення буде присвоєно змінним.</p><p>Крім базової операції присвоєння C# є ще ряд операцій:</p><ul><li><p>+=: привласнення після складання. Надає лівому операнду суму лівого та правого операндів: вираз A += B рівнозначний виразу A = A + B</p></li><li><p>-=: привласнення після віднімання. Надає лівому операнду різницю лівого і правого операндів: A -= B еквівалентно A = A - B</p></li><li><p>*=: привласнення після множення. Надає лівому операнду добуток лівого та правого операндів: A *= B еквівалентно A = A * B</p></li><li><p>/=: привласнення після поділу. Надає лівому операнду частку лівого та правого операндів: A /= B еквівалентно A = A / B</p></li><li><p>%=: привласнення після ділення за модулем. Надає лівому операнду залишок від цілого ділення лівого операнда на правий: A %= B еквівалентно A = A % B</p></li></ul><p>Застосування операцій присвоєння:</p><pre><code>int a = 10;
a + = 10; // 20
a -= 4; // 16
a * = 2; // 32
a / = 8; // 4
</code></pre><p>Операції присвоєння є правоасоціативними, тобто виконуються справа наліво. Наприклад:</p><pre><code>int a = 8;
int b = 6;
int c = a + = b - = 5; // 9
</code></pre><p>В даному випадку виконання виразу йтиме таким чином:</p><ol><li>b -= 5 (6-5=1)</li><li>a += (b-=5) (8+1 = 9)</li><li>c = (a + = (b-=5)) (c = 9)</li></ol>`,17),c=[n];function r(a,l){return t(),i("div",null,c)}const s=e(o,[["render",r],["__file","topic7.html.vue"]]),A=JSON.parse('{"path":"/theory/theory2/topic7.html","title":"Операції присвоєння","lang":"en-US","frontmatter":{"title":"Операції присвоєння"},"headers":[],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":1.02,"words":306},"filePathRelative":"theory/theory2/topic7.md","localizedDate":"April 8, 2024"}');export{s as comp,A as data};
