/*
// scripts.js
//Instrukcja, która sprawi, że nasz kod zacznie się wykonować dopiero po załadowania całego drzewa DOM
$(function() {

	//Funkcja randomString() generuje id, które składa się z ciągu 10 losowo wybranych znaków
    function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
	}

	//Klasa Column
	function Column(name) {
    var self = this; 

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    	//Funkcja createColumn ()
	    function createColumn() {
	    	// tworzenie elementów, z których będzie składała się kolumna
	    	var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');

			// podpinanie odpowiednich zdarzeń
			$columnDelete.click(function() {
	        self.removeColumn();
			});
			
	    	$columnAddCard.click(function() {

	    		var value = prompt("Enter the name of the card");

			        self.addCard(new Card(value));
					});

	    	// konstruowanie kolumny
			$column.append($columnTitle)
	        .append($columnDelete)
	        .append($columnAddCard)
	        .append($columnCardList);

			// zwrócenie kolumny
			return $column;
    	}
  	}
  	//Metody dla klasy Column
  	//Metoda addCard()
  	Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
    //Metoda removeColumn
    removeColumn: function() {
      this.$element.remove();
    }
	};
	// Funkcja tworząca klasę Card
	function Card(description) {
	var self = this;

	    this.id = randomString();
	    this.description = description;
	    this.$element = createCard();

	    function createCard() {
	    	// tworzenie elementów, z których będzie składała się karta
		    var $card = $('<li>').addClass('card');
		    var $cardDescription = $('<p>').addClass('card-description').text(self.description);
		    var $cardDelete = $('<button>').addClass('btn-delete').text('x');

		    // podpinanie odpowiednich zdarzeń pod stworzone elementy
		    $cardDelete.click(function(){
		           		self.removeCard();
		    });

		    // konstruowanie karty i jej zwrócenie
		    $card.append($cardDelete)
		    		.append($cardDescription);

		    	return $card;
	    }
	}
	// Metoda dla klasy Card
	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	}
	//Obiekt tablicy, nasłuchujący zdarzeń
	var board = {
    name: 'Kanban Board',
	    addColumn: function(column) {
	      this.$element.append(column.$element);
	      initSortable();
	    },
    	$element: $('#board .column-container')
	};
	//Funkcja przenoszenia kart z jednego miejsca do innego (np. do innej kolumny albo do innej pozycji w tej samej kolumnie)
		function initSortable() {
	    $('.column-card-list').sortable({
	      connectWith: '.column-card-list',
	      placeholder: 'card-placeholder'
	    }).disableSelection(); //Metoda wyłączenia możliwości zaznaczania tekstu na kartach, które przeciągamy
	  }

	//Podpięcie na element zdarzenia klinięcia, obsługującego wrzucania nowegj kolumny do tablicy
	$('.create-column')
	  .click(function(){
		var name = prompt('Enter a column name');
		//Instrukcja blokjąca dodawanie kolumny pomimo wybory przycisku "anuluj"
		if (name > 0) {

			var column = new Column(name);
		    	board.addColumn(column);
		}
	  });
	// Tworzenie kolumn
	var todoColumn = new Column('To do');
	var doingColumn = new Column('Doing');
	var doneColumn = new Column('Done');

	// Dodawanie kolumn do tablicy
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// Tworzenie kart
	var card1 = new Card('New task');
	var card2 = new Card('Create kanban boards');

	// Dodawanie kart do kolumn
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
})
*/
