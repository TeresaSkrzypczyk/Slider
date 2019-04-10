# Slider

This is a simple slider by JavaScript.

To make a slider I used list that contains images. List has a distinctive features such as:

- there are no styles,
- it has a width and height suitable for displaying a single image,
- all images have the same width and height,
- all images without one are hidden.

First of all, I created the variables:

- the button <next>,
- the button <prev>,
- all elements of list (saved to an array).

To element number 0 I added class visible, so that after entering the page the first image is visible.

Then I added event on the button <next> responding to the click. This function take away class visible from current image, increase the value by one and add class visible next image.

The next step it was the same event on the button <prev>, but in the other direction. 

In the end I created possibility to make this process continuously. 

# Slider

Zadaniem było stworzenie prostego slidera przy użyciu JavaScript.

Do zrobienia slidera zazwyczaj używa się odpowiednio ostylowanej listy, w której znajdują się obrazki. Lista spełnia następujące zależności:

- Nie ma żadnych styli,
- Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka,
- Wszystkie obrazki mają tę samą szerokość i wysokość,
- Wszystkie obrazki poza jednym są niewidoczne.

W pierwszej kolejności do zmiennych zostały zapisane:

- Guzik <next>,
- Guzik <prev>,
- Wszystkie elementy listy (zapisane do tablicy).

Do zerowego elementu listy została dodana klasa visible, dzięki czemu po wejściu na stronę pierwszy obrazek jest widoczny.

Następnie na guzik <next> został ustawiony nasłuch (event) reagujący na kliknięcie. W evencie odpowiadającym za pokazanie następnego obrazka zabierana jest obecnie widocznemu obrazkowi klasę visible.
Zwiększana jest wartość zmiennej o jeden i kolejnemu obrazkowi dodawana jest kalsa visible . 

Kolejnym krokiem było ustawienie nasłuchu na guzik <prev> i dokonanie analogicznych czynności. 

Na samym końcu została dopisana możliwość powrotu ciągłego wyświetlania obrazków nawet po wielokrotnym użyciu guzików <prev> bądź <next>.

