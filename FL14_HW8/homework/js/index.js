const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");


const todos = [
    {
        text: "Buy milk",
        done: false
    },
    {
        text: "Play with dog",
        done: true
    }
];

/*
$add.on("click" , function() {
  if(!$input.val()) {return false;}

  $list.append("<li class='item'> <span class='item-text'>" + $input.val() + "</span><button class='item-remove'>Remove</button> </li>");

  $input.val("");

  $(".item-remove").on("click", function() {
    let $parent = $(this).parent();
  })

})
*/

$(document).ready(function () {
    var count = 0;
    $add.click(function () {
        var inputval = $input.val();
        if (inputval != '') {
            count++;
            $list.append('<li class="item"><span class="item-text">' + inputval + '</span><button class="item-remove">Remove</button></li>');
        }
        $input.val("");
    })

    $(document).on('click', '.item-remove', function () {
        $(this).parent().remove();
    })
}) 

