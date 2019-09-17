function CalculateSortingElem(a, elem) {


    var B
    if (a == "NI") {

        if (elem.getAttribute("data-order") == "asc")
            B = Math.pow(10, 11)
        else
            B = 1 / Math.pow(10, 10)

    } else if (a == "NF") {

        if (elem.getAttribute("data-order") == "asc")
            B = Math.pow(10, 10)
        else
            B = 1 / Math.pow(10, 11)
    } else if (isNaN(a)) {
        if (elem.getAttribute("data-order") == "asc")
            B = Math.pow(10, 11)
        else
            B = 1 / Math.pow(10, 10)
    } else
        B = a

    return B
}


function Sortest(e, elem, By, isAlpha) {

    if (elem.parentElement.nodeName == "TH")
        elem = elem.parentElement

    var K;

    if (elem.getAttribute("data-order") == "asc") {

        elem.setAttribute("data-order", "desc")
        K = 1
    } else {
        elem.setAttribute("data-order", "asc")
        K = 0
    }


    e.sort(
        function (c, d) {

            if (K == 1) {

                var b = JSON.parse(JSON.stringify(c))
                var a = JSON.parse(JSON.stringify(d))
            } else if (K == 0) {

                var a = JSON.parse(JSON.stringify(c))
                var b = JSON.parse(JSON.stringify(d))

            }
            var Ans;
            if (isAlpha == true) {
                Ans = a[By].localeCompare(b[By]);
            } else if (isAlpha == "Date") {
                var dateA = new Date(a[By]),
                    dateB = new Date(b[By]);
                Ans = dateA - dateB;
            } else {

                if (isNaN(a[By])) {
                    var A = CalculateSortingElem(parseFloat(a[By].split(" ")[0]), elem);


                } else {
                    var A = CalculateSortingElem(parseFloat(a[By]), elem);


                }

                if (isNaN(b[By])) {
                    var B = CalculateSortingElem(parseFloat(b[By].split(" ")[0]), elem);


                } else {
                    var B = CalculateSortingElem(parseFloat(b[By]), elem);


                }


                Ans = A - B
            }
            return Ans
        }
    )



}

function SortBy(e, elem, By, isAlpha) {

    Sortest(e, elem, By, isAlpha)




}


//You just put onclick of TH element =SortBy(MyArray,this,"MyProperty",true||undefined||"Date")

// it will automatically sort and change mode from ASC to DESC in the next sorting


