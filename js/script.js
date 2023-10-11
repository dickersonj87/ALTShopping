$(document).ready(function() {
    function updateSubtotalAndTotal(row) {
      var quantity = parseInt(row.find('.quantity').val()) || 0;
      var price = parseFloat(row.find('.price').val()) || 0;
      var subtotal = quantity * price;
      row.find('.subtotal').text('$' + subtotal.toFixed(2));
  
      updateTotal();
    }
  
    $('.quantity, .price').on('input', function() {
      updateSubtotalAndTotal($(this).closest('tr'));
    });
  
    $('#cart').on('click', '.delete', function() {
      $(this).closest('tr').remove();
      updateTotal();
  });
  
    $('#add-item').on('click', function() {
      var newRow = '<tr>' +
        '<td><input type="text" class="item-name" value="New Item"></td>' +
        '<td><input type="number" class="price" value="10.00"></td>' +
        '<td><input type="number" class="quantity" value="0"></td>' +
        '<td class="subtotal">$0.00</td>' +
        '<td><button class="delete">Delete</button></td>' +
        '</tr>';
      $('#cart tbody').append(newRow);
  
      var newRowIndex = $('#cart tbody tr').length - 1;
      var newRowInputs = $('#cart tbody tr:eq(' + newRowIndex + ')').find('.quantity, .price');
      newRowInputs.on('input', function() {
        updateSubtotalAndTotal($(this).closest('tr'));
      });
    });
  
    function updateTotal() {
      var total = 0;
      $('.subtotal').each(function() {
        total += parseFloat($(this).text().substring(1)); 
      });
      $('#total').text('$' + total.toFixed(2));
    }
  

    updateTotal();
  });
  