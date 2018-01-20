var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2645',
  'X-Auth-Token': '504b4bec79b7c144e4b99b4e37dc47ed'
};

//Funkcja umożliwiająca dodawanie nagłówków bez konieczności umieszczania ich w każdym zapytaniu osobno
$.ajaxSetup({
	headers: myHeaders
});

//Funckcja odpytująca serwer o zasób tablicy
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns); //Funkcja tworzaca kolumny --> skąd wiadomo, że response.columns kryje w sobie jakieś informacje? Po pierwsze, mamy dokumentację, a poza tym zawsze możemy skorzystać z narzędzi developerskich i sprawdzić, jak to wygląda w network
    }
});
//Funcka tworząca kolumny i dodająca je do tablicy
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards); //Funkcja tworząca karty
    });
}
//Funkcja tworząca karty i dodająca jes do kolumny
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}