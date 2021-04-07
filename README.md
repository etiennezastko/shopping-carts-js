# Initiation au Javascript

## Manipuler le DOM

Pour récupérer en Javascript un élément HTML, il faut déclarer en HTML où se trouve le script :
```<script src="main.js"></script>```

Ensuite, dans le Javascript, on utilise l'objet ```document``` suivi d'un méthode, comme par exemple ```getElementById("[nom de l'Id]")```

## Afficher des informations dans la console

On utilise ```console.log()```, on lui passe en paramètre l'information à afficher, par exemple une information de type *string*, c'est-à-dire une chaîne de caractères encadrée par des guillemets de type ```'```(*simple quote*) ou ```"```(*double quote*), ou le nom d'une variable afin d'afficher son contenu.

> Pour passer des paramètres à une fonction, on les écrit dans les parenthèses qui suivent le nom de la fonction. On peut séparer plusieurs paramètres par des virgules.

## Les variables

Trois façons de déclarer des variables :
- var + nom d'une variable
- const + nom d'une variable
- let + nom d'une variable

> [Article expliquant la différence entre les 3 types de variables](https://medium.com/@vincent.bocquet/var-let-const-en-js-quelles-diff%C3%A9rences-b0f14caa2049#:~:text=L%27instruction%20const%20%3A,d%C3%A9clar%C3%A9%20avec%20une%20valeur%20initiale.&text=La%20bonne%20d%C3%A9claration%20est%20donc%20%3A&text=La%20port%C3%A9e%20de%20const%20est,bloc%2C%20comme%20la%20d%C3%A9claration%20let.)

## L'opérateur d'affectation « = »

En Javascript, comme en PHP d'ailleurs, le symbole « = » ne veut pas dire le mot égal en français. C'est un **opérateur d'affectation**. Il sert à affecter une valeur à une variable. 

L'égalité en Javacript se vérifie par un « == » ou un « === ».

Dans l'exemple : ```const counter=document.getElementById('counter');```, on nomme une variable ```counter``` et on lui affecte le contenu de la balise en HTML qui a l'id ```counter```. Procéder ainsi permet de créer un raccourci et nous évitera simplement de retaper ```document.getElementById('counter');``` à chaque fois, il suffira d'écrire le mot ```counter```.

> [La documentation sur les opérateurs en Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#op%c3%a9rateurs_arithm%c3%a9tiques)

## Les instructions

Une instruction se termine par ```;``` : c'est une action que le script va réaliser.

Par exemple, on peut utiliser des opérateurs d'incrémentation et de décrémentation, comme  ```++``` et ```--```, sur une valeur ou le nom d'une variable contenant une valeur comme instruction.

## Les conditions

Pour vérifier quelque chose avant de produire un effet, on écrit ```if([la condition à vérifier]){[l'instruction si la condition est vérifiée]}```.

Si une condition n'est pas vérifiée, on programme avec le mot ```else{[instruction alternative]}``` l'effet à produire dans tous les autres cas.

Lorsqu'on a plusieurs conditions à vérifier dans un ordre chronologique, on écrit ```if(){} else if(){} else{}```. On peut mettre autant de ```else if``` que l'on veut entre le ```if``` et le ```else```, si la première condition n'est pas vérifiée, le script teste la seconde, puis la troisième, etc. Puis s'arrête lorsque l'une des conditions est vérifiée pour effectuer son instruction.

##  Ecouter un évènement

Pour écouter un évènement, on utilise la méthode ```addEventListener()``` qui prend deux paramètres. 

Les paramètres en question sont l'évènement écouté, par exemple ```'click'```, suivi d'une fonction qui va contenir des insctructions. On peut écrire directement la fonction anonyme directement dans l'écouteur d'évènement (pour une utilisation uniquement liée à cette évènement), ou bien l'appeler par son nom et écrire cette fonction ailleurs dans le script (pour l'utiliser dans divers cas).

L'écoute d'évènement fonctionne un peu comme une condition, si l'évènement se produit, alors la fonction s'exécute (donc les instructions de la fonction s'appliquent).

## Les fonctions

Pour déclarer une fonction, on écrit

 ```function([optionnel : des paramètres]){[a minima une instruction, souvent des conditions à vérifier pour éxécuter des instructions]}```
 
 Entre le mot ```function``` et les ```()```, on peut donner un nom à la fonction. Sinon, on parle de fonction anonyme.

