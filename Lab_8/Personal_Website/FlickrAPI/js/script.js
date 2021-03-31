function searchImg(){
    var itemRow;
    var count = 0;
    var search = document.getElementById("searchTxt").value;
    var number = parseInt(document.getElementById("number").value);
    var ele = document.getElementById("fill");

    var api_key = 'c36122e8b35ed34830ad949a9908ad69';

    $(document).ready(function() {
        var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&tags='+search+'&per+page='+number+'&format=json&nojsoncallback=1&extras=url_q';
        $.ajax({
            url:url,
            dataType:'json'
        })
            .then(function(data) {
                console.log(data)
                for(var i = 0; i < number; i++) {
                    if(count == 0) {
                        itemRow = document.createElement("div");
                        itemRow.setAttribute('class', 'row');
                    }

                    var columns = document.createElement("div");
                    columns.setAttribute('class','col-sm-3');

                    var card = document.createElement("div");
                    card.setAttribute('class', 'card');

                    var cbody = document.createElement("div");
                    cbody.setAttribute('class', 'card-body');

                    var img = document.createElement("img");
                    img.setAttribute('class', 'card-img-top');
                    img.setAttribute('src', data.photos.photo[i].url_q);

                    var title = document.createTextNode(data.photos.photo[i].title);

                    card.appendChild(img);
                    cbody.appendChild(title);
                    card.appendChild(cbody);
                    columns.appendChild(card);
                    itemRow.appendChild(columns);

                    count++;
                    if(count == 4){
                        ele.appendChild(itemRow);
                        ele.appendChild(document.createElement("br"));
                        count = 0;
                    }
                }
            })
    })
}
