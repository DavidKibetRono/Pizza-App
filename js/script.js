//bussiness logic
function small(selectedValue) {

    if (selectedValue == 500) {
        $("#small1").show(), $("#small2").show(), $("#small3").show(), $("#small4").show()

        $("#medium1").hide(), $("#medium2").hide(), $("#medium3").hide(), $("#medium4").hide()

        $("#large1").hide(), $("#large2").hide(), $("#large3").hide(), $("#large4").hide()

    } else if (selectedValue == 800) {

        $("#small1").hide()
        $("#small2").hide(), $("#small3").hide(), $("#small4").hide()

        $("#medium1").show(), $("#medium2").show(), $("#medium3").show(), $("#medium4").show()

        $("#large1").hide(), $("#large2").hide(), $("#large3").hide(), $("#large4").hide()

    } else if (selectedValue == 1200) {

        $("#small1").hide(), $("#small2").hide(), $("#small3").hide(), $("#small4").hide()

        $("#medium1").hide(), $("#medium2").hide(), $("#medium3").hide(), $("#medium4").hide()

        $("#large1").show(), $("#large2").show(), $("#large3").show(), $("#large4").show()
    }

}
// ----------------------------------PizzaSize------------------------

function PizzaName(name) {

    this.myPizzaName = name;

}

PizzaName.prototype.pizzaTotal = function() {

    return this.myPizzaName;

}


// ----------------------------------CrustType--------------------------

function CrustType(name) {

    this.TypeOfCrust = name;

}

CrustType.prototype.crustName = function() {

    return this.TypeOfCrust

}

   // ----------------------------------ToppingName--------------------------

function Topping(name) {

    this.ToppingName = name;
}

Topping.prototype.toppingName = function() {

    return this.ToppingName;

} 


//user interface Logic
$(document).ready(function() {
    $("#menu").on("click", function(e) {
        e.preventDefault()
        $("#menuRow").slideDown("slow");
        $(".slidingImages").css("opacity", "0.1");
        $("body").css("background-color", "#262E3F");

    })
    $(document).on("click", "#aboutLink", function() {
        $("#menuRow").hide("slow");
        $(".slidingImages").css("opacity", "1.0");
    })

    $(document).on("click", "#contactLink", function() {
        $("#menuRow").hide("slow");
        $(".slidingImages").css("opacity", "1.0");
    })

    $(document).on("click", "#orderLink", function() {
        $("#menuRow").hide("slow");
        $(".slidingImages").css("opacity", "1.0");
    })

    $(document).on("click", "#btn", function() {

        var pizzaSizeValue = parseInt($("#pizzaSize option:selected").val());
        var pizzaSizeName = $("#pizzaSize option:selected").text();

        if ($("#pizzaSize ")[0].selectedIndex <= 0) {

            alert("You must select the pizza size");

            return false;

        }

        var pizzaCrustValue = parseInt($("#crustTypeInput option:selected").val());
        var pizzaCrustName = $("#crustTypeInput option:selected").text();


        if ($("#crustTypeInput ")[0].selectedIndex <= 0) {

            alert("You must select the type of crust");

            return false;

        }


        var toppingsValue = parseInt($("#toppingInput option:selected").val());


        var toppingsName = $("#toppingInput option:selected").text();


        if ($("#toppingInput ")[0].selectedIndex <= 0) {

            alert("You must select the type of topping");

            return false;
        }

        var pizzaNumber = parseInt($("#pizzaNumber").val());

        if (!pizzaNumber) {
            alert("You must select the number of pizza.");
            return false;
        } else if (pizzaNumber <= 0) {
            alert("Number of Pizzas cannot be less 0 or less.")
        }

        var price = (pizzaSizeValue + pizzaCrustValue + toppingsValue) * pizzaNumber;

        // objects
        var size = new PizzaName(pizzaSizeName)
        var crust = new CrustType(pizzaCrustName, pizzaCrustValue)
        var topping = new Topping(toppingsName)

        $("#checkouts").html("<h3>" + "Pizza Size: " + size.pizzaTotal() + "<br>" + "Crust Type: " + crust.crustName() + "<br>" + "Topping Name: " + topping.toppingName() + "<br>" + "Number of pizzas: " + pizzaNumber + "<br>" + "Total Price = " + "<b>" + "kshs." + price + "</b>" + "<br>" + "<br>" + "<button type='button' class='btn btn-success btn-lg' id='btnDelivery'> Delivery</button>" + " <button type='button' class='btn btn-success btn-lg' id='btnPickUp'> Pick Up </button>" + "</h3>")

        //clear input fields upon submission
        $("#pizzaSize").get(0).selectedIndex = 0;
        $("#crustTypeInput").get(0).selectedIndex = 0;
        $("#toppingInput").get(0).selectedIndex = 0;
        $("#pizzaNumber").val("")

    })

})

   



